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
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(newItem){
        this.setState(state => ({items: [...state.items,  newItem]}))
    }
    removeItem(itemId){
        this.setState(state => ({items: this.state.items.filter(item=> item.id !== itemId)}))
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
                <ListItems items={this.state.items} removeItem={this.removeItem} />
                <AddItemForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default TodoList;