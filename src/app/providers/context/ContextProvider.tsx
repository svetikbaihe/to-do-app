import React, { createContext, PropsWithChildren, useReducer } from 'react';
import { Modal, State, Todo } from '@state/store/types';
import type { ContextProps } from './types';
import { reducer } from '@state/store/reducer';
import { actions } from '@state/store';

export const Context = createContext<ContextProps>({
  deleteTodo: () => {},
  clearCompleted: () => {},
  toggleCheckTodo: () => {},
  toggleTheme: () => {},
  openModal: () => {},
  closeModal: () => {},
  addTodo: () => {},
  changeActiveTab: () => {},

  state: {
    isDarkTheme: false,
    toDoList: [],
    isAll: true,
    isActive: false,
    isCompleted: false,
    modal: {
      type: null,
      modalProps: null
    }
  }
})

const ContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const initialState: State = {
    isDarkTheme: false,
    toDoList: [],
    isAll: true,
    isActive: false,
    isCompleted: false,
    modal: {
      type: null,
      modalProps: null
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const deleteTodo = (id: Pick<Todo, 'id'>) => {
    dispatch(actions.deleteTodoAction(id))
  }

  const clearCompleted = () => {
    dispatch(actions.clearCompletedAction())
  }

  const toggleCheckTodo = (id: Pick<Todo, 'id'>) => {
    dispatch(actions.toggleCheckTodoAction(id))
  }

  const toggleTheme = () => {
    dispatch(actions.toggleThemeAction())
  }

  const openModal = (modalType: Modal) => {
    dispatch(actions.openModalAction(modalType))
  }

  const closeModal = () => {
    dispatch(actions.closeModalAction())
  }

  const addTodo = (text: Pick<Todo, 'text'>) => {
    dispatch(actions.addTodoAction(text))
  }

  const changeActiveTab = (key: string) => {
    dispatch(actions.changeActiveTabAction(key))
  }

  const store = {
    state,

    deleteTodo,
    clearCompleted,
    toggleCheckTodo,
    toggleTheme,
    openModal,
    closeModal,
    addTodo,
    changeActiveTab
  }

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export default ContextProvider;