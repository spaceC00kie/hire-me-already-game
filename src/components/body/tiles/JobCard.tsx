import { useState } from "react"
import { Job } from "../../../interfaces/Job"
import { EmailQueue } from "../../applyWithin/EmailQueue"

interface Props {
  job: Job
}

export const JobCard: React.FC<Props> = ({ job }) => {
  // change to useLocalStorage??
  const [haveApplied, setHaveApplied] = useState(false)

  const handleApply = () => {
    EmailQueue.push(job)
    setHaveApplied(true)
  }

  return (
    <div className="min-h-28 flex w-3/4 rounded-md border text-white">
      <div className="grid w-1/12 place-content-center">{job.icon}</div>
      <div className="flex w-8/12 flex-col py-2">
        <div className="px-3 text-xl">{job.title}</div>
        <div className="px-3">{job.company}</div>
        <div className="px-3">{job.location}</div>
        <div className="px-3 text-sm">{job.benefits}</div>
        <div className="px-3 text-sm text-stone-300">{job.tag}</div>
      </div>
      <div className="flex w-3/12 items-end justify-end px-3 py-3 ">
        <button
          className="grid h-10 w-20 place-content-center rounded-md border px-1"
          onClick={handleApply}
          disabled={haveApplied}
        >
          {haveApplied ? "Applied" : "Apply!"}
        </button>
      </div>
    </div>
  )
}
