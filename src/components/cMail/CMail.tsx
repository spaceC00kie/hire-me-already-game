import { BiEnvelope } from "react-icons/bi"
import { EmailCard } from "../body/tiles/EmailCard"
import { useEffect, useState } from "react"
import { Job } from "../../interfaces/Job"
import { EmailQueue } from "../applyWithin/EmailQueue"
import { useLocalStorage } from "../../hooks/useLocalStorage"

interface Props {}

export const CMail: React.FC<Props> = ({}) => {
  // const [emailList, setEmailList] = useLocalStorage<Job[]>("emailList", [])
  const [emailList, setEmailList] = useState<Job[]>([])

  // implement wait time for jobs being popped off email queue onto list
  // currently being done with CheckEmail button, but that doesn't use waitTime

  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex w-full justify-center">
        <BiEnvelope size={52} color="white" />
      </div>
      <div className="flex w-full justify-center">
        {emailList.length < 1 && (
          <button
            className="w-2/3 rounded-md border border-white text-white"
            onClick={() => setEmailList(EmailQueue)}
          >
            Check email?
          </button>
        )}
      </div>
      {emailList.length > 0 ? (
        <div className="flex w-full flex-col items-center gap-2">
          {emailList.map((job) => (
            <EmailCard key={job.id} job={job} emailList={emailList} />
          ))}
        </div>
      ) : (
        <div className="text-white">
          Go ahead. Click apply. What are you afraid of?
        </div>
      )}
    </div>
  )
}
