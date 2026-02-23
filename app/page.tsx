import { PostCard } from 'nextra-theme-blog'
import { getPageMap } from 'nextra/page-map'
import { MdxFile } from 'nextra'

const LEVELS = ['Easy', 'Medium', 'Difficult'] as const
type Level = (typeof LEVELS)[number]

const LEVEL_COLORS: Record<Level, { text: string; bg: string; border: string }> = {
  Easy:      { text: '#15803d', bg: '#dcfce7', border: '#bbf7d0' },
  Medium:    { text: '#a16207', bg: '#fef9c3', border: '#fef08a' },
  Difficult: { text: '#b91c1c', bg: '#fee2e2', border: '#fecaca' },
}

export default async function Home() {
  const pageMap = await getPageMap('/posts')

  const posts = (pageMap as MdxFile[])
    .filter((item): item is MdxFile => 'route' in item && !!item.frontMatter?.date)
    .sort(
      (a, b) =>
        new Date(b.frontMatter!.date).getTime() - new Date(a.frontMatter!.date).getTime()
    )

  const grouped = LEVELS.reduce(
    (acc, level) => {
      acc[level] = posts.filter((p) => p.frontMatter?.level === level)
      return acc
    },
    {} as Record<Level, MdxFile[]>
  )

  return (
    <div className="x:container x:px-4 x:py-8">
      {LEVELS.map((level) =>
        grouped[level].length > 0 ? (
          <section key={level} style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <h2 style={{ margin: 0, fontWeight: 700, fontSize: '1.25rem', color: LEVEL_COLORS[level].text }}>
                {level}
              </h2>
              <span
                style={{
                  padding: '2px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: LEVEL_COLORS[level].text,
                  background: LEVEL_COLORS[level].bg,
                  border: `1px solid ${LEVEL_COLORS[level].border}`,
                }}
              >
                {grouped[level].length} questions
              </span>
            </div>
            {grouped[level].map((post) => (
              <PostCard key={post.route} post={post} />
            ))}
          </section>
        ) : null
      )}
    </div>
  )
}
