import React from "react";

class About extends React.Component {
  static async getInitialProps(ctx) {
    console.log('get initial props', ctx)
    return {}
  }

  constructor(props) {
    console.log('constructor')
    super(props)
    console.log(props)
  }

  componentDidMount() {
    console.log("did mount")
  }

  render() {
    return <a>About</a>
  }
}

export default About