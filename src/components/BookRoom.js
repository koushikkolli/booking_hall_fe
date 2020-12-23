
import React, {useState} from "react"
import roomBooking from "../apis/roomBooking"

const BookRoom = ({ rooms })=>{
    const [customerName, setCustomerName] = useState("")
    const [roomId, setRoomId] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [compareDate, setCompareDate] = useState("d-none")
    const [compareCurrentDate, setCompareCurrentDate] = useState("d-none")
    const [success, setSuccess] = useState("d-none")
    const [failure, setFailure] = useState("d-none")

    const onFromDateChange = (event)=>{
        setFrom(event.target.value)
    }

    const onToDateChange = (event)=>{
        setTo(event.target.value)
    }

    const onFormSubmit = (event)=>{
        event.preventDefault()
        if (Date.now() > Date.parse(from)){
            setCompareCurrentDate("")
            setCompareDate("d-none")
        }
        else if (Date.parse(from) > Date.parse(to)){
            setCompareDate("")
            setCompareCurrentDate("d-none")
        }
        else{
            setCompareCurrentDate("d-none")
            setCompareDate("d-none")
            event.preventDefault()
            postRequest()
            
        }
        

    }

    const postRequest = async()=>{
        const returnObject = {
            customerName: customerName,
            roomId: roomId,
            from: Date.parse(from),
            to : Date.parse(to)
        }
        try{
            const response = await roomBooking.post("/book-room", returnObject)
            if (response.status === 200){
                setCustomerName("")
                setRoomId("")
                setFrom("")
                setTo("")
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

    const renderOptions = rooms.map( room =>{
        return(
            <option key={room._id} value={room._id}>{ room.hallName }</option>
        )
    })
    return(
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-sm-12 col-md-4"></div>  
                <div className="col-sm-12 col-md-4">
                <div className="text-center">
                        <h3>Book Room</h3>
                    </div>
                    <form onSubmit={(e)=>onFormSubmit(e)}>
                        <div className="form-group">
                            <label>Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Customer name" 
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Select Hall</label>
                            <select className="form-control" value={roomId} onChange={(e)=>setRoomId(e.target.value)} required>
                                <option value="">--Select hall--</option>
                                {renderOptions}
                            </select>
                        </div>   
                        <div className="form-group">
                            <label>From</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={from}
                                onChange={(e)=>onFromDateChange(e)}
                                required
                            />
                            <small className={compareCurrentDate} style={{color:"red"}}>*From cannot be in the past</small>
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={to}
                                onChange={(e)=>onToDateChange(e)}
                                required
                            />
                            <small className={compareDate} style={{color:"red"}}>*To date has to be greater than From</small>
                        </div>                   
                        <div className="d-flex justify-content-center">
                            <button  className="btn btn-dark btn-block">Book</button>
                        </div>

                    </form>
                    <div className={success}>
                    <div className="alert alert-success alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Booking done successfully</div>
                    </div>
                    
                    </div>
                    <div className={failure}>
                    <div className="alert alert-danger alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Error occured while booking</div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRoom