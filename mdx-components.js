import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'
import GoBack from './components/go-back'

const themeComponents = getThemeComponents()

const LEVEL_COLORS = {
  Easy:      { text: '#15803d', bg: '#dcfce7', border: '#bbf7d0' },
  Medium:    { text: '#a16207', bg: '#fef9c3', border: '#fef08a' },
  Difficult: { text: '#b91c1c', bg: '#fee2e2', border: '#fecaca' },
}

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    wrapper({ children, metadata }) {
      const { title, tags, description, level } = metadata
      const levelStyle = level ? LEVEL_COLORS[level] : null

      return (
        <>
          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            {levelStyle && (
              <span
                style={{
                  padding: '3px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: levelStyle.text,
                  background: levelStyle.bg,
                  border: `1px solid ${levelStyle.border}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {level}
              </span>
            )}
          </div>

          {/* Back button */}
          <div style={{ marginBottom: '1.5rem' }}>
            <GoBack />
          </div>

          {/* Description box */}
          {description && (
            <div
              style={{
                background: 'var(--nx-colors-gray-100, #f1f5f9)',
                border: '1px solid var(--nx-colors-gray-200, #e2e8f0)',
                borderLeft: `4px solid ${levelStyle?.text ?? '#6366f1'}`,
                borderRadius: '6px',
                padding: '0.875rem 1.125rem',
                marginBottom: '2rem',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>{description}</p>
            </div>
          )}

          {/* MDX body (Requirements etc.) */}
          {children}

          {/* Tags */}
          {tags?.length > 0 && (
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    background: 'var(--nx-colors-gray-100, #f1f5f9)',
                    border: '1px solid var(--nx-colors-gray-200, #e2e8f0)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )
    },
    ...components
  }
}
