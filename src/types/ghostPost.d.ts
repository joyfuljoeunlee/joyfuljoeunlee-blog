declare type GhostPost = {
  ghostPost: {
    id: string
    title: string
    excerpt: string
    published_at_pretty: string
    html: any
  }
}

declare type AllGhostPost = {
  allGhostPost: {
    edges: {
      node: {
        id: string
        title: string
        slug: string
        excerpt: string
        published_at_pretty: string
        tags: {
          id: string
          name: string
        }[]
      }
    }[]
  }
}
