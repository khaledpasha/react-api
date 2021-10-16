import axios from 'axios'
import React, { Component } from 'react'
import "./Fetch.css"

export default class Fetch extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            filteredUsers:[],
            detail:{},
        }
       
        console.log("constructor")
    }
    async componentDidMount(){
        let response = await axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
        console.log("response",response.data)
        this.setState({users:response.data})
         this.setState({filteredUsers:this.state.users})

    }
    handleChange=(e)=>{
        console.log(e.target.value)
        let filteredData = this.state.users.filter(item=>{
            return item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({filteredUsers:filteredData})
    }
    selectRow(item){
        this.setState({detail:item})
        console.log("item", item)
        // onclick bac
    }
    render() {
        console.log("render")
        return (
            <div>
            <p> 
            <i class="fas fa-search"></i>
                <input  className="inputColor" onChange={this.handleChange}/></p>
             <table className="head" >
             
             <tr>
            <th class="column1">Id</th>
            <th class="column2">FirstName</th>
            <th class="column3">LastName</th>
            <th class="column4">Email</th>
            <th class="column5">Phone</th>
             </tr>
                        
             </table>
             {this.state.filteredUsers.map(item=>{
            //    console.log("item",item);
                
                return <table className="info">
                    <tr class="data-row"key={item} activeClassName="active" onClick={()=>{this.selectRow(item)}}>
                                <td class="column1" >{item.id}</td>
                                <td class="column2">{item.firstName}</td>
                                <td class="column3">{item.lastName}</td>
                                <td class="column4">{item.email}</td>
                                <td class="column5">{item.phone}</td>
                            </tr>
                    
                   
                </table>
                 
             })}   
                <div id="info-wrapper">
             <h1>Details</h1>
             <p>Click on a table item to get detailed information</p> 
            <div id="info-content" >
         <div > <p>User selected:  {this.state.detail.firstName}  {this.state.detail.lastName}</p></div>
         <div >
             <b>Description: </b>

             <textarea cols="50" rows="5" readonly 
             value={this.state.detail?.description}>
             </textarea>
         </div>
         <div><b>Address:</b> { this.state.detail?.address?.streetAddress }</div>
         <div><b>City:</b> { this.state.detail?.address?.city }</div>
         <div><b>State:</b> { this.state.detail?.address?.state }</div>
         <div><b>Zip:</b> { this.state.detail?.address?.zip }</div>
        </div>
        </div>
            </div>
            
        )
    }
}
