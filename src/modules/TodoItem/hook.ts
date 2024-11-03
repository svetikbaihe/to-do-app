import { Context } from "@app/providers/context/ContextProvider";
import { Todo } from "@state/store/types";
import { useContext } from "react";

const useContainer = () => {
  const context = useContext(Context)

  const isDark = context.state.isDarkTheme

  const handleDeleteTask = (id: Pick<Todo, 'id'>) => () => {
    context.deleteTodo(id)
  }

  const handleToggleCheckTask = (id: Pick<Todo, 'id'>) => () => {
    context.toggleCheckTodo(id)
  }


  return {
    isDark,
    
    handleDeleteTask,
    handleToggleCheckTask
  };
};

export default useContainer;