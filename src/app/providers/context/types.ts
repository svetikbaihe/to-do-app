import { Modal, State, Todo } from "@state/store/types"

export interface ContextProps {
  deleteTodo: (id: Pick<Todo, 'id'>) => void
  clearCompleted: VoidFunction
  toggleCheckTodo: (id: Pick<Todo, 'id'>) => void
  toggleTheme: VoidFunction
  openModal: (modalType: Modal) => void
  closeModal: VoidFunction
  addTodo: (text: Pick<Todo, 'text'>) => void
  changeActiveTab: (key: string) => void
  
  state: State
}