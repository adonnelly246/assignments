import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BountyCard from './BountyCard.js'
import Form from './Form.js'

export default function App(){
    const [bounties, setBounties] = useState([])
    
    //GET
    function getBounties(){
        axios.get('/bounties',)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    //POST
    function addBounty(newBounty){
        axios.post(`/bounties`, newBounty)
            .then(res=> {
                setBounties(prev =>[...prev, newBounty])
            })
            .catch(err => console.log(err))
    }

    //DELETE
    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
            .then(res =>{
                setBounties(prev=> prev.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))

    }

    //PUT
    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res=>{
                setBounties(prev => prev.map(bounty => bounty._id !== bountyId ? bounty : res.data))
                console.log(updates)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{ 
       getBounties()
    }, [])

    return(
        <div>
            <Form 
                submit= {addBounty}
                btnText ="Add New Bounty"
            />
            <div>
                {
                bounties.map(bounty=> 
                <BountyCard
                 {...bounty} 
                 key={bounty._id} 
                 deleteBounty= {deleteBounty}
                 editBounty ={editBounty}
                 />)
                
                }
            </div>
        </div>
    )

}