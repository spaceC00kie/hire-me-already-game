import { BiEnvelope } from "react-icons/bi"
import { EmailCard } from "../body/tiles/EmailCard"
import { useState } from "react"

interface Props {}

export const CMail: React.FC<Props> = ({}) => {
  const [emails, setEmails] = useState([])

  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex w-full justify-center">
        <BiEnvelope size={52} color="white" />
      </div>
      {emails && <EmailCard />}
      {!emails && (
        <div className="text-white">Click apply. What are you afraid of?</div>
      )}
    </div>
  )
}
