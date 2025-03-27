import { GiHandcuffs } from "react-icons/gi"
import { JobCard } from "../body/tiles/JobCard"
import { jobQueue } from "./JobQueue"
import { Job } from "../../interfaces/Job"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useState } from "react"

interface Props {}

export const ApplyWithin: React.FC<Props> = ({}) => {
  // const [jobsList, setJobsList] = useLocalStorage<Job[]>("jobsList", [])
  const [jobsList, setJobsList] = useState<Job[]>([])

  // const [hasSearchBegun, setHasSearchBegun] = useLocalStorage(
  //   "hasSearchBegun",
  //   false,
  // )
  const [hasSearchBegun, setHasSearchBegun] = useState(false)

  const popJobsForToday = () => {
    const jobsForToday: Job[] = []
    const howManyJobsToSlice = jobQueue.length < 10 ? jobQueue.length : 10
    const jobs: Job[] = jobQueue.slice(0, howManyJobsToSlice)
    if (jobs) jobsForToday.push(...jobs)
    setJobsList(jobsForToday)
    setHasSearchBegun(true)
  }

  return (
    <div className="flex h-full w-1/2 flex-col gap-2">
      <div className="flex w-full justify-center">
        <GiHandcuffs size={52} color="white" />
      </div>
      <div className="flex w-full justify-center">
        {!hasSearchBegun && (
          <button
            className="w-2/3 rounded-md border border-white text-white"
            onClick={popJobsForToday}
          >
            Begin job search
          </button>
        )}
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        {hasSearchBegun &&
          jobsList.map((job) => <JobCard job={job} key={job.id} />)}
      </div>
    </div>
  )
}
