import { MODAL_TYPE } from './contstants'

export interface AddTodoProps {}

export interface AddTodoModal {
  type: typeof MODAL_TYPE
  modalProps: AddTodoProps
}
