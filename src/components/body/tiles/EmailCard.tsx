import { BiTrash } from "react-icons/bi"

interface Props {}

export const EmailCard: React.FC<Props> = ({}) => {
  return (
    <div className="flex h-52 w-full rounded-md border py-2">
      <div className="flex flex-col text-white">
        <div className="flex justify-between">
          <div className="px-3 py-2 text-2xl">Rejected!</div>
          <button className="flex justify-end rounded-md p-3 hover:border">
            <BiTrash size={18} />
          </button>
        </div>
        <div className="px-3 pb-1">Greetings Faceless Candidate,</div>
        <div className="px-3">
          You've been rejected for (job title for which you just applied).
        </div>
        <div className="px-3">
          We hired someone else. Or we were kidding about hiring anyone to begin
          with. Sorry. Best of luck!
        </div>
        <div className="px-3 pt-2">Sincerely,</div>
        <div className="px-3">A. Robot (please don't write back)</div>
      </div>
    </div>
  )
}
