import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/posts'
})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
})
