import { FC, useState } from 'react'

type Props = {
  message: string
}

export const Form: FC<Props> = (props) => {
  const [value, setValue] = useState(props.message)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={value} />
    <button>Submit</button>
  </form>
}