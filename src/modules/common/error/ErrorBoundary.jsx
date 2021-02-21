import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      error: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log('Error: ', error)
    console.log('Info: ', info)
  }

  render() {
    return (
      <>
        { this.state.error &&
          <section>
            <h3> Uh oh! Our systems are down. 😖 </h3>
            <h4> Mission Control will be up and running again as soon as possible. </h4>
          </section>
        }
      </>
    )
  }
}

export default ErrorBoundary