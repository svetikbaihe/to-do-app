import type React from "react"
import cn from "classnames"
import { Flex } from "antd"
import useContainer from "./hook"
import TodoHeader from "./TodoHeader"
import styles from "./styles.module.scss"
import TodoTabs from "@modules/TodoTabs"
import AddTodo from "@modules/AddTodo"
import TodoBody from "./TodoBody"
import { TABLET_QUERY } from "@constants/app"
import { useMediaQuery } from "react-responsive"
import EmptyState from "@components/EmptyState"

const TodoListWrapper: React.FC = () => {
  const { isDark, isEmpty } = useContainer()

  const isTablet = useMediaQuery({ query: TABLET_QUERY })
  return (
    <Flex
      align="center"
      vertical
      gap={"1rem"}
      className={cn(styles.todoListWrapper, {
        [styles.todoListWrapperBgLight]: !isDark,
        [styles.todoListWrapperBgLightImg]: !isDark,
        [styles.todoListWrapperBgDark]: isDark,
        [styles.todoListWrapperBgDarkImg]: isDark,
      })}
    >
      <TodoHeader />
      <AddTodo />
      { isEmpty && <EmptyState text="No tasks"/>}
      <TodoBody />
      {!isTablet && <TodoTabs />}
      <p className={styles.reoderList}>Drag and drop to reorder list</p>
    </Flex>
  )
}

export default TodoListWrapper
