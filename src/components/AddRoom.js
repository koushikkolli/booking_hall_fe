
import React, {useState} from "react"
import roomBooking from "../apis/roomBooking"



const AddRoom = ({ onPost })=>{
    const [hallName, setHallName] = useState("")
    const [noOfRooms, setNoOfRooms] = useState("")
    const [price, setPrice] = useState("")
    const [city, setCity] = useState("")
    const [success, setSuccess] = useState("d-none")
    const [failure, setFailure] = useState("d-none")
    const onFormSubmit = async (event)=>{
        event.preventDefault()
        const returnObject = {
            hallName: hallName,
            noOfRooms: noOfRooms,
            price: price,
            city : city
        }
        try{
            const response = await roomBooking.post("/add-hall", returnObject)
            if (response.status === 200){
                onPost()   
                setHallName("")
                setNoOfRooms("")  
                setPrice("")
                setCity("")  
                setSuccess("")         
            }
            else{
               setFailure("") 
               
            }
        }
        catch(err){
            setFailure("") 
            
        }
        
    }
    return(
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4">
                    <div className="text-center">
                        <h3>Add Hall</h3>
                    </div>
                    <form onSubmit={(e)=>onFormSubmit(e)}>
                        
                        <div className="form-group">
                            <label>Hall Name</label>
                            <input
                             type="text" 
                             className="form-control" 
                             placeholder="Name" 
                             value={hallName} 
                             onChange={(e)=>setHallName(e.target.value)}
                             required
                             />
                        </div> 
                        <div className="form-group">
                            <label>Number of Rooms</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            placeholder="No of Rooms"
                            value={noOfRooms} 
                            onChange={(e)=>setNoOfRooms(e.target.value)}
                            required
                            />
                        </div> 
                        <div className="form-group">
                            <label>Price per Hour in Rupees</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Price"
                            value={price} 
                            onChange={(e)=>setPrice(e.target.value)}
                            required
                            />
                        </div> 
                        <div className="form-group">
                            <label>City</label>
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="City" 
                            value={city} 
                            onChange={(e)=>setCity(e.target.value)}
                            required
                            />
                        </div> 
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-dark btn-block">Add</button>
                        </div>

                    </form>
                    <div className={success}>
                    <div className="alert alert-success alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Hall added successfully</div>
                    </div>
                    
                    </div>
                    <div className={failure}>
                    <div className="alert alert-danger alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Error occured while adding</div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoom