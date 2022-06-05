import React, { Component } from 'react'
import './nav.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className='header' >
          <div style={{display:'flex' , justifyContent:'space-between'}}>
              <img className='house' src="./assents/images/housing.png" alt="" />
              <h1 className='houzing' style={{color:'white'}}>Houzing</h1>
          </div>
          <div  style={{display:'flex' , textAlign:'center' , justifyContent:'space-around'}}>
              <h3 className='h_3'>Home</h3>
              <h3 className='h_3'>Properties</h3>
              <h3 className='h_3'>Contacts</h3>
          </div>
             <div>
                 <button className='login'>Login</button>
             </div>
      </div>
    )
  }
}
