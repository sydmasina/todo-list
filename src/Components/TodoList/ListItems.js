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
                    <div className='todo-card-btn-collect'>
                        <button className='todo-card-edit-btn' onClick={()=> this.handleEdit(item.id)}><i class="fa fa-solid fa-pen"></i></button>
                        <button className='todo-card-delete-btn' onClick={()=> this.props.removeItem(item.id)}><i className="fa fa-solid fa-trash"></i></button>
                    </div>
                    </li>
                })}
            </ul>
        )
    }
}
export default ListItems;