import React, { Component } from 'react'
import './CSS/AddDeal.css'
import '../AddBar/CSS/AddBar.css'
import axios from "axios";

class DealsTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            dealName:'',
            itemName:'',
            Quantity:'',
            Price:''
        }
    }

    render(){
        return(
            <div className="tableContainer">
                <table id="dashboardTable">
                    <thead>
                    <tr>
                        <th>Deal Name</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Submit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input name="dealName" value={this.state.dealName} onChange={this.onChangeHandler}/></td>
                        <td><input name="itemName" value={this.state.itemName} onChange={this.onChangeHandler}/></td>
                        <td><input name="quantity" value={this.state.quantity} onChange={this.onChangeHandler}/></td>
                        <td><input name="price" value={this.state.price} onChange={this.onChangeHandler}/></td>
                        <td><button type="Submit">Submit</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    };

    addDeal = (event) => {
        event.preventDefault();
        axios.post('/api/Deal/Add', {
            "dealName": this.state.barOwnerID,
            "itemName": this.state.barName,
            "Quantity":this.state.barPhone,
            "price":this.state.street
        }, function (response) {
            console.log(response);
        });
    }
}
export default DealsTable