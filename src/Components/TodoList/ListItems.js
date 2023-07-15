import React, { Component } from 'react';

class ListItems extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.items.map(item=>{
                    return <li key={item.id}>{item.content}</li>
                })}
            </ul>
        )
    }
}
export default ListItems;