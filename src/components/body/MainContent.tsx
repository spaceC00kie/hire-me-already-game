import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { JobCard } from "./tiles/JobCard"
import { EmailCard } from "./tiles/EmailCard"
import { BiEnvelope, BiGhost } from "react-icons/bi"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[96em] grow justify-evenly gap-14">
        <div className="flex h-full w-1/2 flex-col gap-2 border border-blue-500">
          <div className="flex w-full items-center justify-center">
            <BiGhost size={42} color="white" />
          </div>
          <div className="flex flex-col w-full gap-2 border">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
        <div className="flex w-1/2 flex-col border border-yellow-400">
          <div className="flex w-full items-center justify-center">
            <BiEnvelope size={42} color="white" />
          </div>

          <EmailCard />
        </div>
      </div>
    </div>
  )
}
