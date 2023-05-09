import React, { Component } from 'react'
import Profile from './Profile'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>User Profiles</h1>
        <Profile username="Mevlut" color="red"/>
        <Profile username="Janae" color="blue"/>

      </div>
    )
  }
}
