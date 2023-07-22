import React, { Component } from 'react';

class ListItems extends Component{
    constructor(props){
        super(props);
        this.state = {content: ""}
    }
    handleEdit(item){
        return(
            <input value={item} name='content' />
        )
    }
    render(){
        return(
            <ul>
                {this.props.items.map(item=>{
                    return <li key={item.id}>{item.content}    
                     <button className='todo-card-delete-btn' onClick={()=> this.props.removeItem(item.id)}>X</button>
                    </li>
                })}
            </ul>
        )
    }
}
export default ListItems;