import React, {useState} from 'react'

export default function Form(props){
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || "",
        bountyAmmt: props.bountyAmmt || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        // onClick={()=>setEditToggle(prevToggle => !prevToggle)}
    }


    return(
        <form onSubmit= {handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name">
            </input>

            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name">
            </input>

            <input 
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange} 
                placeholder="Living? true/false">
            </input>

            <input 
                type="text" 
                name="bountyAmmt" 
                value={inputs.bountyAmmt} 
                onChange={handleChange} 
                placeholder="Bounty Ammount">
            </input>

            <input 
                type="text" 
                name="type" 
                value={inputs.side} 
                onChange={handleChange} 
                placeholder="Type: Sith/Jedi">
            </input>
            <button >{props.btnText}</button>

        </form>
    )
    
}