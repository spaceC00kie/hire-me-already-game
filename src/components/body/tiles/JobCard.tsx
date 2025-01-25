interface Props {
  icon?: React.ReactNode
  benefitsList?: string
  setApplied: React.Dispatch<React.SetStateAction<boolean>>
}

export const JobCard: React.FC<Props> = ({
  icon,
  benefitsList,
  setApplied,
}) => {
  return (
    <div className="flex h-32 w-3/4 rounded-md border text-white">
      <div className="grid w-1/12 place-content-center">{icon}</div>
      <div className="flex w-8/12 flex-col py-2">
        <div className="px-3 text-xl">Job title</div>
        <div className="px-3">Company</div>
        <div className="px-3">Location</div>
        <div className="px-3 text-sm">{benefitsList}</div>
        <div className="px-3 text-sm text-stone-300">This is an ad</div>
      </div>
      <div className="flex w-3/12 items-end justify-end px-3 py-3 ">
        <button
          className="grid h-10 w-20 place-content-center rounded-md border"
          onClick={() => setApplied(true)}
        >
          Apply!
        </button>
      </div>
    </div>
  )
}
