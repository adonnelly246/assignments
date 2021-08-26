import React, {useState} from 'react'
import Form from './Form.js'
import App from './App.js'

export default function BountyCard(props){
    const {firstName, lastName, living, bountyAmmt, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div className= "bounty-card">
          {!editToggle ?

            <>
              <h2>{firstName} {lastName}</h2> 
              <p>Alive: {living.toString()}</p>
              <p>Bounty Ammount: ${bountyAmmt}</p>
              <p>Type: {type}</p>
              <button onClick={()=>props.deleteBounty(_id)}>Delete</button>
              <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Edit</button> 
            </>            
          :
          <>
            <Form 
              firstName = {firstName}
              lastName = {lastName}
              living = {living.toString()}
              bountyAmmt = {bountyAmmt}
              type = {type}
              _id ={_id}
              btnText = "Submit Edit"
              submit ={props.editBounty}
            />
            <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
          </>
          }
        </div>
    )

}