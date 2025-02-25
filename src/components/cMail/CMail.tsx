import { BiEnvelope } from "react-icons/bi"
import { EmailCard } from "../body/tiles/EmailCard"
import { useEffect, useState } from "react"
import { Job } from "../../interfaces/Job"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { EmailQueue } from "../../containers/Email"

interface Props {}

export const CMail: React.FC<Props> = ({}) => {
  // const [emailList, setEmailList] = useLocalStorage<Job[]>("emailList", [])
  const [emailList, setEmailList] = useState<Job[]>([])

  const [score, setScore] = useState(0)

  const { emailQueue } = EmailQueue.useContainer()

  // not using waitTimes from jobs. Using 3 second interval for now

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (emailQueue.length > 0) {
        setEmailList((prevList) => [...prevList, emailQueue.pop()!])
      }
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex w-full justify-center text-white">
        <BiEnvelope size={52} color="white" /> Score: {score}
      </div>
      {emailList.length > 0 ? (
        <div className="flex w-full flex-col items-center gap-2">
          {emailList.map((job) => (
            <EmailCard
              key={job.id}
              job={job}
              emailList={emailList}
              score={score}
              setScore={setScore}
            />
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
