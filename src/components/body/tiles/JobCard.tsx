interface Props {}

export const JobCard: React.FC<Props> = ({}) => {
  return (
    <div className="flex h-24 w-3/4 rounded-md border">
      <div className="flex flex-col w-1/2">
        <div className="px-3 text-lg">Job title</div>
        <div className="px-3">Company</div>
        <div className="px-3">Location</div>
        <div className="px-3 text-sm">This is an ad</div>
      </div>
      <div className="grid place-content-center w-1/2">
        <button
          className="grid h-10 w-20 place-content-center rounded-md border"
          onClick={() => {}}
        >
          Apply!
        </button>
      </div>
    </div>
  )
}
