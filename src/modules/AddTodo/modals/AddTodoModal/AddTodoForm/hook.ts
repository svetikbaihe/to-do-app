import { Context } from "@app/providers/context/ContextProvider"
import { FormValues } from "./types"
import { useContext } from "react"

const useContainer = () => {
  const context = useContext(Context)

  const initialValues: FormValues = {
    task: "",
  }

  const onSubmit = (values: FormValues) => {
    context.addTodo({text: values.task})
    context.closeModal()
  }

  return {
    initialValues,

    onSubmit,
  }
}

export default useContainer
