import { Action, ACTION_TYPES, Modal, Todo } from "./types";

export const deleteTodoAction = (id: Pick<Todo, 'id'>): Action => ({
  type: ACTION_TYPES.DELETE_TODO,
  payload: id,
})

export const clearCompletedAction = (): Action => ({
  type: ACTION_TYPES.CLEAR_COMPLETED,
  payload: undefined,
})

export const toggleCheckTodoAction = (id: Pick<Todo, 'id'>): Action => ({
  type: ACTION_TYPES.TOGGLE_CHECK_TODO,
  payload: id,
})

export const toggleThemeAction = (): Action => ({
  type: ACTION_TYPES.TOGGLE_THEME,
  payload: undefined,
})

export const openModalAction = (modalType: Modal): Action => ({
  type: ACTION_TYPES.OPEN_MODAL,
  payload: modalType,
})

export const closeModalAction = (): Action => ({
  type: ACTION_TYPES.CLOSE_MODAL,
  payload: undefined,
})

export const addTodoAction = (text: Pick<Todo, 'text'>): Action => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: text,
})

export const changeActiveTabAction = (key: string): Action => ({
  type: ACTION_TYPES.CHANGE_ACTIVE_TAB,
  payload: key,
})