import { ModalAction } from "@modules/RootModal/types"

export enum ACTION_TYPES {
  DELETE_TODO = 'DELETE_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  TOGGLE_CHECK_TODO = 'TOGGLE_CHECK_TODO',
  TOGGLE_THEME = 'TOGGLE_THEME',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  ADD_TODO = 'ADD_TODO',
  CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'
}

export interface Todo {
  id: string,
  text: string,
  isChecked: boolean,
}

export interface Modal {
  type: ModalAction['type'] | null
  modalProps: ModalAction['modalProps'] | null
}

export interface State {
  isDarkTheme: Boolean
  toDoList: Todo[]
  isAll: Boolean
  isActive: Boolean
  isCompleted: Boolean
  modal: Modal
}

export interface ActionItem<T, P> {
  type: T
  payload: P
}

export type Action = 
| ActionItem<ACTION_TYPES.TOGGLE_CHECK_TODO, Pick<Todo, 'id'>>
| ActionItem<ACTION_TYPES.CLEAR_COMPLETED, undefined>
| ActionItem<ACTION_TYPES.DELETE_TODO, Pick<Todo, 'id'>>
| ActionItem<ACTION_TYPES.TOGGLE_THEME, undefined>
| ActionItem<ACTION_TYPES.OPEN_MODAL, Modal>
| ActionItem<ACTION_TYPES.CLOSE_MODAL, undefined>
| ActionItem<ACTION_TYPES.ADD_TODO, Pick<Todo, 'text'>>
| ActionItem<ACTION_TYPES.CHANGE_ACTIVE_TAB, string>