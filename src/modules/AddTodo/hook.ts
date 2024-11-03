import { Context } from "@app/providers/context/ContextProvider"
import { useContext } from "react"

const useContainer = () => {
  const context = useContext(Context)

  const handleAddTodoModal = () => {
    context.openModal({ type: "ADD_TODO_MODAL", modalProps: null })
  }

  return {
    handleAddTodoModal
  }
}

export default useContainer
