import React, {Component, useState} from "react"
import axios from 'axios'
const {Provider, Consumer} = React.createContext()


// function Component (){
//     const [newSearchArray, setNewSearchArray] = useState([])
//     const [SavedhArray, setSavedArray] = useState([])

// }

class ContextProvider extends Component{
    state={
        newSearchArray: [{
            serialNumber: "",
            trademark: "",
            goodsServicesCode: "",
            description: "",
            statusCode: "",
            status: "",
            statusDesc: "",
            ownerAndAddress: "",
            filingDate: "",
            registrationDate: ""
        }],
        
       savedArray: []
       
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }
   
    SaveSearch = (event) =>{
        event.preventDefault()
        const newSave = {
            name: this.state.name,
            owner: this.state.owner,
            serialNum: this.state.serialNum,
            expiration: this.state.expiration,
            description: this.state.description
        }

        this.setState(prevState => {
            return {
               newSearchArray: [{
                serialNumber: "",
                trademark: "",
                goodsServicesCode: "",
                description: "",
                statusCode: "",
                status: "",
                statusDesc: "",
                ownerAndAddress: "",
                filingDate: "",
                registrationDate: ""
               }],
                   
                savedArray: [newSave, ...prevState.savedArray]
            }
        })
    }

    NewSearch = (query)=>{
     axios.get()//`https://markerapi.com/api/v2/trademarks/trademark/`+{query}+`/status/all/start/1/username/adonnelly246/password/tLhRXZCcYJ`)
        .then(res =>{
          this.setState({newSearchArray: [res.obj]})
        })
        .catch(error => console.log(error))
    }
    
   componentDidMount=()=> {
        //tLhRXZCcYJ
        axios.get(`https://markerapi.com/api/v2/trademarks/`)
          .then(result => {
              this.setState({

                serialNumber: result.serialNumber,
                trademark: result.trademark,
                goodsServicesCode: result.goodsServicesCode,
                description: result.description,
                statusCode: result.statusCode,
                status: result.status,
                statusDesc: result.statusDesc,
                ownerAndAddress: result.ownerAndAddress,
                filingDate: result.filingDate,
                registrationDate: result.registrationDate,
                
              });
            })

            .catch(err => console.log(err))
            }
          
      

    render() {
        return (
            <Provider value={{  
               newSearchArray: this.state.newSearchArray,
                savedArray: this.state.savedArray,
                handlechange: this.handleChange,
                SaveSearch:this.SaveSearch,
                NewSearch:this.componentDidMount
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}

