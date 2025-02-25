import { createContainer } from "unstated-next"
import { useState } from "react"
import { Job } from "../interfaces/Job"

const useEmailQueue = () => {
  const [emailQueue, setEmailQueue] = useState<Job[]>([])

  return {
    emailQueue,
    setEmailQueue,
  }
}

export const EmailQueue = createContainer(useEmailQueue)
