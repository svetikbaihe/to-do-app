import { Action, ACTION_TYPES, State } from "./types"
import { v4 as uuid } from 'uuid'

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CHECK_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map(todo =>
          todo.id === action.payload.id ? { ...todo, isChecked: !todo.isChecked } : todo
        ),
      }
    case ACTION_TYPES.CLEAR_COMPLETED:
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => !todo.isChecked),
      }
    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => todo.id !== action.payload.id),
      }
    case ACTION_TYPES.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme 
      }
    case ACTION_TYPES.OPEN_MODAL:
      return {
        ...state,
        modal: {
          type: action.payload.type,
          modalProps: action.payload.modalProps,
        },
      }
    case ACTION_TYPES.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          type: null,
          modalProps: null,
        },
      }
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          {
            id: uuid(),
            text: action.payload.text,
            isChecked: false
          }
        ]
      }
    case ACTION_TYPES.CHANGE_ACTIVE_TAB:
      return {
        ...state,
        isAll: action.payload === 'isAll',
        isActive: action.payload === 'isActive',
        isCompleted: action.payload === 'isCompleted',
      }
    default:
      return state
  }
}
