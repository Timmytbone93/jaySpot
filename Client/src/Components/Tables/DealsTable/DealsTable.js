import React, { Component } from 'react'
import  './CSS/Table.css'


class DealsTable extends Component{

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
                        <th>Edit/Delete Button</th>                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>



            </div>
        );
    }
/*
    generateRows = () => {
        var id = 0;
        const rows = this.props.rowData.map(obj => {
            id++;
            const data = <tr key={id}>{this.props.headers.map(x => {
                id++;
                return <td key={id}>{obj[x.accessor]}</td>
            })}</tr>;

            return data;
        });
        return rows;

    }*/
}


export default DealsTable