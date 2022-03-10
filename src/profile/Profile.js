import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    
    <div className='cprofile'>

      {props.children}
        <h1>Hi there !</h1>
        <p >{props.fullname}</p>
        <p >{props.bio}</p> 
        <p>{props.profession}</p>
        <br />
        
        <button onClick={props.handleName}> Click Me </button>
    </div>

  )
}



Profile.defaultProps={
    fullname:"here",
    bio:"here is my bio",
    profession:"here is my profession",
    children:"here is my img",
}

Profile.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element,
    handleName:PropTypes.func 
    }

export default Profile