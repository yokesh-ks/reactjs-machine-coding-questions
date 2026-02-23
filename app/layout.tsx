import { Layout } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { ReactNode } from 'react'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'React.js Machine Coding Questions',
  description: 'A collection of React.js machine coding questions and solutions',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        {/* Hero — outside Layout so it stretches full viewport width */}
        <div
          style={{
            width: '100vw',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.62)',
            }}
          />
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              color: '#ffffff',
              fontSize: '2.25rem',
              fontWeight: 800,
              margin: 0,
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}
          >
            React.js Machine Coding Questions
          </h1>
        </div>

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
