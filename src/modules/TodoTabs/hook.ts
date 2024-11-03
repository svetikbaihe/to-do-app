import { Context } from "@app/providers/context/ContextProvider"
import { useContext } from "react"

const useContainer = () => {
  const context = useContext(Context)

  const isDark = context.state.isDarkTheme

  const handleActiveTab = (key: string) => {
    context.changeActiveTab(key)
  }

  return {
    isDark,

    handleActiveTab,
  }
}

export default useContainer
