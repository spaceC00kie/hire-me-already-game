import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { ApplyWithin } from "../applyWithin/ApplyWithin"
import { CMail } from "../cMail/CMail"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[96em] grow justify-evenly gap-14">
        <ApplyWithin />
        <CMail />
      </div>
    </div>
  )
}
