import React, { Component } from 'react'
import ListItems from './ListItems';
import AddItemForm from './AddItem';
import { v4 as uuid } from 'uuid';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {items: [
            {content: "Complete 15km", id: uuid()},
            {content: "Mandela Day fun run", id: uuid()}
        ]}
        this.addItem = this.addItem.bind(this);
    }
    addItem(newItem){
        this.setState(state => ({items: [...state.items,  newItem]}))
    }
    renderItems(){
        return(
            <ul>
                {this.state.items.map(item=>{
                    return <li key={item.id}>{item.content}</li>
                })}
            </ul>
        )
    }
    render(){
        return(
            <div>
                <h1>TODO LIST</h1>
                {this.renderItems()}
                <AddItemForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default TodoList;