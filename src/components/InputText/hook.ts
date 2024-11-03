import { useField } from "formik"

const useContainer = (name: string) => {
  const [field, meta ] = useField(name)

  const { value, error, touched } = meta

  const handleBlur = field.onBlur

  const handleChange = field.onChange  

  return {
    value,
    error,
    touched,

    handleChange,
    handleBlur
  }
}

export default useContainer
