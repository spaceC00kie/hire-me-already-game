export interface Job {
    id: number
    icon: React.ReactNode
    title: string
    company: string
    location: string
    benefits?: string
    tag?: string
  }