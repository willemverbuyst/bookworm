import { useForm, SubmitHandler } from 'react-hook-form'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: String
  gender: GenderEnum
  age: number
}

export default function SimpleForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register('firstName', { required: 'first name is required' })}
      />
      {errors.firstName?.type === 'required' && (
        <p role="alert" className="error">
          First name is required
        </p>
      )}
      <label>Gender</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <label>Age</label>
      <input type="number" {...register('age', { min: 18, max: 99 })} />
      {errors.age?.type === 'min' && (
        <p role="alert" className="error">
          Minimum age is 18
        </p>
      )}
      {errors.age?.type === 'max' && (
        <p role="alert" className="error">
          Maximum age is 99
        </p>
      )}
      <button type="submit">submit</button>
    </form>
  )
}
