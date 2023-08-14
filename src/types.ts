export type Post = {
  id: string
  content: string
  image?: string
  likes: number
  profile: User
  // comments: number
}


export type User = {
  id: string
  name: string
  position: string
  image?: string
  bgImage?: string
  about?: string
  experience?: Experience[]
}

export type Experience = {
  id: string
  title: string
  companyName: string
  companyImage?: string
}