import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  task: Yup.string().min(2, 'Too short!').required('Required field')
})