import React, { Component } from 'react';

class ListItems extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.items.map(item=>{
                    return <li key={item.id}>{item.content}    <button onClick={()=> this.props.removeItem(item.id)}>X</button></li>
                })}
            </ul>
        )
    }
}
export default ListItems;