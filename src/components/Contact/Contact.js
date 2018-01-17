import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Contact Information of WestSide University:</h1>
        <div className='sub_box'>
          <p><strong>Address:</strong> 123 West 4590 North, Paradise UT</p>
          <p><strong>Number:</strong> 1-800-234-5678</p>
          <p><strong>Email:</strong> contact@wsu.edu</p>
        </div>
      </div>
    )
  }
}