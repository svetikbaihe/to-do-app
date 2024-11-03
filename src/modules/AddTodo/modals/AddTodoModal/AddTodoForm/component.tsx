import type React from "react"
import { Button, Form } from "antd"
import { Formik } from "formik"
import { validationSchema } from "./constants"
import useContainer from "./hook"
import InputText from "@components/InputText"
import styles from "./styles.module.scss"

const AddTodoForm: React.FC = () => {
  const { initialValues, onSubmit } = useContainer()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form onFinish={handleSubmit}>
          <InputText placeholder="Write a task" name="task" />
          <Form.Item className={styles.submitBtnWrapper}>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default AddTodoForm
