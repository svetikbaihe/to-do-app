import type React from "react"
import { Modal } from "antd"
import useContainer from "./hook"
import AddTodoForm from "./AddTodoForm"
import styles from "./styles.module.scss"

const AddTodoModal: React.FC = () => {
  const { handleCloseModal } = useContainer()

  return (
    <Modal
      open
      onCancel={handleCloseModal}
      cancelButtonProps={{ className: styles.cancelBtn }}
      okButtonProps={{ className: styles.okBtn }}
      classNames={{content: styles.contentContainer}}
    >
      <AddTodoForm />
    </Modal>
  )
}

export default AddTodoModal
