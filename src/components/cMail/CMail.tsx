import { BiEnvelope } from "react-icons/bi"
import { EmailCard } from "../body/tiles/EmailCard"
import { useEffect, useState } from "react"
import { Job } from "../../interfaces/Job"
import EmailQueue, { subscribeToEmailQueue } from "../applyWithin/EmailQueue"
import { useLocalStorage } from "../../hooks/useLocalStorage"

interface Props {}

export const CMail: React.FC<Props> = ({}) => {
  // const [emailList, setEmailList] = useLocalStorage<Job[]>("emailList", [])
  const [emailList, setEmailList] = useState<Job[]>([])

  // not popping emails off queue, just setting email list to same
  // not using waitTimes from jobs

  useEffect(() => {
    const updateEmailListRandomly = () => {
      setTimeout(() => {
        setEmailList([...EmailQueue])
        // lengthen window to 0 - 10 after done developing?
        // or use waitTime?
      }, Math.random() * 4000)
    }
    const unsubscribe = subscribeToEmailQueue(updateEmailListRandomly)
    return () => unsubscribe()
  }, [])

  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex w-full justify-center">
        <BiEnvelope size={52} color="white" />
      </div>
      {emailList.length > 0 ? (
        <div className="flex w-full flex-col items-center gap-2">
          {emailList.map((job) => (
            <EmailCard key={job.id} job={job} emailList={emailList} />
          ))}
        </div>
      ) : (
        <div className="text-white">
          Start searching, then click "Apply". What are you afraid of?
        </div>
      )}
    </div>
  )
}
