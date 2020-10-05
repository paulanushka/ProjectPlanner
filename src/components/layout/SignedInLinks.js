import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../store/actions/authActions'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const SignedInLinks = (props) => {
  console.log("anushka11",props);

  useEffect(()=>{
    //window.location.reload(true);
  });
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  console.log("cat",dispatch);
  return {
    signOut: () => dispatch(signOut()),
    
  }
}
const mapStateToProps = (state) => {
  console.log("dog2",state);
  return{
    initials:sessionStorage.getItem("newId")
   // newId:
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)