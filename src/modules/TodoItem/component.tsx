import type React from "react"
import cn from "classnames"
import type { Todo } from "@state/store/types"
import { Button, ConfigProvider, Flex, Typography } from "antd"
import IconCross from "@assets/icons/icon-cross.svg?react"
import IconCheck from "@assets/icons/icon-check.svg?react"
import useContainer from "./hook"
import { themeBtnLight } from "@theme/theme"
import styles from "./styles.module.scss"

const { Text } = Typography

const TodoItem: React.FC<Todo> = ({ id, text, isChecked }) => {
  const { isDark, handleDeleteTask, handleToggleCheckTask } = useContainer()

  return (
    <Flex
      align="center"
      justify="space-between"
      gap="0.625rem"
      className={cn(styles.todoItemWrapper, "handle", {
        [styles.todoItemWrapperDark]: isDark,
      })}
    >
      <Button
        onClick={handleToggleCheckTask({ id })}
        shape="circle"
        size="small"
        icon={isChecked && <IconCheck />}
        className={cn({
          [styles.btnCheck]: isChecked,
          [styles.btnCheckNotCheck]: !isChecked,
        })}
      />
      <Text
        className={cn(styles.taskText, {
          [styles.taskTextChecked]: isChecked,
          [styles.taskTextDark]: isDark,
        })}
        onClick={handleToggleCheckTask({ id })}
      >
        {text}
      </Text>
      <ConfigProvider theme={themeBtnLight}>
        <Button
          icon={<IconCross />}
          onClick={handleDeleteTask({ id })}
          className={cn(styles.btnCross, {
            [styles.btnCrossDark]: isDark,
          })}
        />
      </ConfigProvider>
    </Flex>
  )
}

export default TodoItem
