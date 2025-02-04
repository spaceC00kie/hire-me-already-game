import { BiGhost } from "react-icons/bi"
import { JobCard } from "../body/tiles/JobCard"
import { useState } from "react"
import { jobQueue } from "./JobQueue"
import { Job } from "../../interfaces/Job"

interface Props {}

export const ApplyWithin: React.FC<Props> = ({}) => {
  const [applied, setApplied] = useState<boolean>(false)

  const [jobsList, setJobsList] = useState<Job[]>(jobQueue)

  return (
    <div className="flex h-full w-1/2 flex-col gap-2">
      <div className="flex w-full justify-center">
        <BiGhost size={52} color="white" />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        {jobsList.map((job) => (
          <JobCard job={job} setApplied={setApplied} />
        ))}
      </div>
    </div>
  )
}
