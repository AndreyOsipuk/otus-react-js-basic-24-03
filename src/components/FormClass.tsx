import { Component } from 'react'

type Props = Record<string, never>

type State = {
  value: string
}

export class FormClass extends Component<Props, State> {
  state = {
    value: 'Hello'
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: ev.target.value})
  }

  render() {
      return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} value={this.state.value} />
      <button>Submit</button>
    </form>
  }
}