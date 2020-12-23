
import React from "react"



const Rooms = ({ rooms })=>{
    const renderTableRows = rooms.map( (room, index) =>{
        return(
            <tr key={room._id}>
                <th scope="row">{ index + 1 }</th>
                <td>{ room.hallName }</td>
                <td>{ room.noOfRooms }</td>
                <td>{ room.price }</td>
                <td>{ room.city }</td>
            </tr>
        )
    })
    return(
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col-sm-12 col-md-2"></div>
                <div className="col-sm-12 col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Hall Name</th>
                            <th scope="col">Rooms Avaiable</th>
                            <th scope="col">Price per hour in Rupees</th>
                            <th scope="col">City</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderTableRows}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
}

export default Rooms