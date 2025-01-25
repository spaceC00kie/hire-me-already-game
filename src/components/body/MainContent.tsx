import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { JobCard } from "./tiles/JobCard"
import { EmailCard } from "./tiles/EmailCard"
import {
  BiAtom,
  BiBot,
  BiChip,
  BiCookie,
  BiEnvelope,
  BiGhost,
  BiMeteor,
  BiMoon,
  BiPlanet,
  BiRocket,
} from "react-icons/bi"
import { useState } from "react"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()
  const [applied, setApplied] = useState<boolean>(false)

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[96em] grow justify-evenly gap-14">
        <div className="flex h-full w-1/2 flex-col gap-2">
          <div className="flex w-full justify-center">
            <BiGhost size={52} color="white" />
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            <JobCard
              icon={<BiPlanet size={32} />}
              benefitsList="Starting at $40/hr"
              setApplied={setApplied}
            />
            <JobCard icon={<BiMoon size={32} />} setApplied={setApplied} />
            <JobCard
              icon={<BiBot size={32} />}
              benefitsList="$89.2K/yr - $149.8K/yr · Medical · 401k"
              setApplied={setApplied}
            />
            <JobCard icon={<BiCookie size={32} />} setApplied={setApplied} />
            <JobCard icon={<BiMeteor size={32} />} setApplied={setApplied} />
            <JobCard icon={<BiRocket size={32} />} setApplied={setApplied} />
            <JobCard
              icon={<BiChip size={32} />}
              benefitsList="$90K/yr - $120K/yr · 401k, Medical, Vision, Dental"
              setApplied={setApplied}
            />
            <JobCard icon={<BiAtom size={32} />} setApplied={setApplied} />
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div className="flex w-full justify-center">
            <BiEnvelope size={52} color="white" />
          </div>
          {applied ? (
            <EmailCard setApplied={setApplied} />
          ) : (
            <div className="text-white">
              Click apply. What are you afraid of?
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
