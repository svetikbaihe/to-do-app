import type React from "react"
import { Button } from "antd"
import useContainer from "./hook"
import styles from "./styles.module.scss"

const AddTodo: React.FC = () => {
  const { handleAddTodoModal } = useContainer()
  return (
    <Button onClick={handleAddTodoModal} className={styles.addTodoBtn}>
      Add Task
    </Button>
  )
}

export default AddTodo
