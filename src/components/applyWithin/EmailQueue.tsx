import { Job } from "../../interfaces/Job"

const emailQueue: Array<Job> = []

const subscribers: (() => void)[] = []

export const addEmail = (job: Job) => {
  emailQueue.push(job)
  subscribers.forEach((callback) => callback())
}

export const subscribeToEmailQueue = (callback: () => void) => {
  subscribers.push(callback)

  return () => {
    const index = subscribers.indexOf(callback)
    if (index !== -1) subscribers.splice(index, 1)
  }
}

export default emailQueue
