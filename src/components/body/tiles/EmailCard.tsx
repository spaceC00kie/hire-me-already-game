import { BiTrash } from "react-icons/bi"
import { Job } from "../../../interfaces/Job"
import { useState } from "react"

interface Props {
  job: Job
  emailList: Job[]
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}

export const EmailCard: React.FC<Props> = ({
  job,
  emailList,
  score,
  setScore,
}) => {
  const [trashed, setTrashed] = useState(false)
  const handleTrashed = () => {
    // instead of setting to true, remove from emailList
    setTrashed(true)
    setScore(score + 1)
  }

  const deletedEmailStyle = "border-stone-400 text-stone-400"

  return (
    <div
      className={`min-h-52 flex w-full rounded-md border py-2 text-white ${
        trashed ? deletedEmailStyle : ""
      }`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="px-3 py-2 text-2xl">Rejected!</div>
          <button
            className="flex justify-end rounded-md p-3 hover:border"
            onClick={handleTrashed}
            disabled={trashed}
          >
            <BiTrash size={18} />
          </button>
        </div>
        <div className="px-3 pb-1">Greetings Faceless Candidate,</div>
        <div className="px-3 py-1">
          You've been rejected for {job.company}'s {job.title} role.
        </div>
        <div className="px-3 py-1">
          We hired someone else. Or we were kidding about hiring anyone to begin
          with. Sorry. Best of luck!
        </div>
        <div className="px-3 pt-2">Sincerely,</div>
        <div className="px-3">A. Robot (please don't write back)</div>
      </div>
    </div>
  )
}
