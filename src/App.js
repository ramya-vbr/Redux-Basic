import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import { GET_USERS } from './services/actions';

const App = () => {
  const dispatch = useDispatch();
  // const[user,setUser]= useState("");

  useEffect (() =>{
    dispatch({type:GET_USERS});
  },[]) 

  const sampledata = useSelector((state) =>state.users);
  console.log("sampledata",sampledata);

  return(
    <div>
      {sampledata?.map((item,index) => {
        return(
  <li>{item.name}</li>
        )
      })
    }
      </div>
  )
}
export default App;