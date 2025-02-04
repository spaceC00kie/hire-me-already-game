export interface Job {
    id: number
    icon: React.ReactNode
    title: string
    company: string
    location: string
    waitTime: number
    benefits?: string
    tag?: string
  }