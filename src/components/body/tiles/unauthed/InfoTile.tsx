import { motion } from "framer-motion"
import { BiWalk, BiGhost } from "react-icons/bi"
import { GiBrain } from "react-icons/gi"
import { MdMoneyOffCsred } from "react-icons/md"
import { InfoCard } from "./InfoCard"

interface Props {}

export const InfoTile: React.FC<Props> = () => {
  return (
    <motion.div
      transition={{ duration: 0.28 }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.09,
            when: "beforeChildren",
            type: "tween",
          },
        },
      }}
      className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
      role="group"
      aria-label="Reasons you might like to play my game"
    >
      <InfoCard
        icon={<GiBrain size={36} aria-label="Brain icon" />}
        title="Do you need to be imaginative?"
        description="In real life, a little. But not for this."
        aria-label="Info card 1"
      />
      <InfoCard
        icon={<BiGhost size={36} aria-label="Ghost symbol" />}
        title="Why is the ghost here?"
        description="I just like it. Isn't it cute?"
        aria-label="Info card 2"
      />
      <InfoCard
        icon={
          <MdMoneyOffCsred
            size={36}
            aria-label="Dollar sign with a slash through it"
          />
        }
        title="Is this game free?"
        description="You betcha. I don't need money. That's why applying forever is fine with me."
        aria-label="Info card 3"
      />
    </motion.div>
  )
}
