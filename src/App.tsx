import { motion } from "framer-motion"
import { Header } from "./components/header/Header"
import { MainContent } from "./components/body/MainContent"
import { Auth } from "./containers/Auth"

export const App: React.FC = () => {
  const { auth } = Auth.useContainer()
  return (
    <motion.div
      id="app"
      layoutScroll
      className="scrollbar flex h-screen flex-col overflow-y-scroll"
    >
      <Header />
      <MainContent />
    </motion.div>
  )
}
