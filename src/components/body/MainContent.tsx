import "../../index.scss"
import { Auth } from "../../containers/Auth"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[96em] grow flex-col justify-evenly gap-3 px-3">
        <div className="flex h-full gap-2">
          <div className="flex w-56 flex-col gap-1">
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
            <div className="flex h-24 w-full flex-col rounded-md border">
              <div className="px-1 text-lg">Job title</div>
              <div className="px-1">Company</div>
              <div className="px-1">Location</div>
              <div className="px-1 text-sm">This is an ad</div>
            </div>
          </div>
          <div className="flex w-full flex-col border rounded-md">
            <div className="flex w-full place-content-center">Job title</div>
            <div className="flex w-full border p-2">
              Silly Description -- yada yada ya... cool stuff, good bonus, work
              from home...
            </div>
            <div className="flex w-full justify-end px-4">
              <button
                className="grid h-10 w-20 place-content-center rounded-md border"
                onClick={() => {}}
              >
                Apply!
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-40 border border-yellow-400">
          <div>email icon</div>
        </div>
      </div>
    </div>
  )
}
