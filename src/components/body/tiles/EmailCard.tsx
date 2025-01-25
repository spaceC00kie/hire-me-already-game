interface Props {}

export const EmailCard: React.FC<Props> = ({}) => {
  return (
    <div className="flex h-24 w-full rounded-md border">
      <div className="flex flex-col">
        <div className="px-2 text-lg">Rejected!</div>
        <div className="px-2">You've been rejected for (job title for which you just applied)</div>
        <div className="px-2">We hired someone else. Or we were kidding about hiring anyone to begin with. Sorry. Best of luck!</div>
        <div className="px-2 text-sm">Seriously, good luck.</div>
      </div>
    </div>
  )
}
