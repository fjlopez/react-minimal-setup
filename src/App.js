import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      who: 'World',
      date: new Date().toString()
    }
  }

  componentDidMount() {
    this.countdown = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  tick() {
    this.setState({
      date: new Date().toString()
    });
  }

  render () {
    return (
      <div class="demo">
        <h1>App component</h1>
        <p>Hello, {this.state.who} at {this.state.date}!</p>
      </div>
    )
  }
}

export default App