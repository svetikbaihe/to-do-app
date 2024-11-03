import type React from "react"
import cn from "classnames"
import TodoItem from "@modules/TodoItem"
import useContainer from "../hook"
import { Button, ConfigProvider, Typography } from "antd"
import { themeBtnDark, themeBtnLight } from "@theme/theme"
import { TABLET_QUERY } from "@constants/app"
import { useMediaQuery } from "react-responsive"
import TodoTabs from "@modules/TodoTabs"
import styles from "./styles.module.scss"

const { Text } = Typography

const TodoBody: React.FC = () => {
  const {
    isDark,
    tasks,
    isEmpty,
    activeTasksAmount,
    handleClearCompleted,
  } = useContainer()

  const isTablet = useMediaQuery({ query: TABLET_QUERY })

  return ( 
    <div className={styles.todoBodyWrapper}>
      {tasks?.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
        />
      ))}
      <div
        className={cn(styles.tabsPanel, {
          [styles.tabsPanelDark]: isDark,
          [styles.tabsPanelNotEmptyState]: !isEmpty,
          [styles.tabsPanelEmptyState]: isEmpty,
        })}
      >
        <Text className={styles.tabsPanelTypography}>
          {activeTasksAmount} items left
        </Text>
        {isTablet && <TodoTabs />}
        <ConfigProvider theme={isDark ? themeBtnDark : themeBtnLight}>
          {" "}
          <Button
            className={cn(styles.tabsPanelTypography, {
            [styles.clearCompletedBtnInactive] : isEmpty,
            })}
            onClick={handleClearCompleted}
          >
            Clear Completed
          </Button>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default TodoBody
