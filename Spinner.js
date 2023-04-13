import React, { Component } from 'react'
import spin from './spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="spin" />
      </div>
    )
  }
}

export default Spinner
