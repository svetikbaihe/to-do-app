import { Context } from "@app/providers/context/ContextProvider"
import { useCallback, useContext } from "react"

const useContainer = () => {
  const context = useContext(Context)

  const isDark = context.state.isDarkTheme
  const isAll = context.state.isAll
  const isActive = context.state.isActive
  const isCompleted = context.state.isCompleted

  const allTasks = context.state.toDoList
  const activeTasks = context.state.toDoList.filter(todo => !todo.isChecked)
  const completedTasks = context.state.toDoList.filter(todo => todo.isChecked)

  const allTasksAmount = allTasks.length
  const activeTasksAmount = activeTasks.length
  const completedTaskAmount = completedTasks.length

  const isEmpty =
    (allTasksAmount === 0 && isAll) ||
    (activeTasksAmount === 0 && isActive) ||
    (completedTaskAmount === 0 && isCompleted)

  const handleClearCompleted = () => {
    context.clearCompleted()
  }

  const handleToggle = useCallback(() => {
    context.toggleTheme()
  }, [])

  const getTasks = () => {
    if (isAll) {
      return allTasks
    }
    if (isActive) {
      return activeTasks
    }
    if (isCompleted) {
      return completedTasks
    }
  }

  return {
    isDark,
    tasks: getTasks(),
    isEmpty,
    activeTasksAmount,

    handleToggle,
    handleClearCompleted,
  }
}

export default useContainer
