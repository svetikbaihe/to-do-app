import type React from "react"
import type { InputTextProps } from "./types"
import { Form, Input } from "antd"
import useContainer from "./hook"

const InputText: React.FC<InputTextProps> = ({ placeholder, name }) => {
  const { value, error, touched, handleChange, handleBlur } = useContainer(name)

  return (
    <>
      <Form.Item
        hasFeedback
        name={name}
        initialValue={value}
        validateStatus={touched && error ? "error" : undefined}
        help={touched && error ? error : null}
      >
        <Input
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      </Form.Item>
    </>
  )
}

export default InputText
