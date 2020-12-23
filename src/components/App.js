import React, { useState, useEffect } from 'react';
import Header from './Header';
import Route from "./Route"
import BookRoom from "./BookRoom"
import AddRoom from "./AddRoom"
import Rooms from "./Rooms"
import roomBooking from "../apis/roomBooking"



const App = () => {
  const[rooms, setRooms] = useState([])

  const fetchHalls = async()=>{
    try{
        const response = await roomBooking.get("/get-halls")
        setRooms(response.data.data)
    }
    catch(err){
        
    }

 } 
 useEffect(()=>{
  fetchHalls()
 }, [])

  const onPost = ()=>{
    fetchHalls()
  }


  return (
    <div>
      <Header />
      <Route path="/addroom">
        <AddRoom onPost={onPost}/>
      </Route>
      <Route path="/bookroom">
        <BookRoom rooms={rooms} />
      </Route>
      <Route path="/">
        <Rooms  rooms={rooms}  />
      </Route>
    </div>
  );
};

export default App