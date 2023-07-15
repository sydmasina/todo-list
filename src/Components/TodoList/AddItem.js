import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class AddItemForm extends Component{
    constructor(props){
        super(props)
        this.state = {content: "", id: uuid()}
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value, id: uuid()
        })
    }
    handleAddItem(evt){
        evt.preventDefault();
        this.props.addItem(this.state)
        this.setState({content: "", id: uuid()})
    }
    render(){
        return (
            <form>
                <div>
                    <label htmlFor='content'>Todo Item: </label>
                    <input onChange={this.handleChange} value={this.state.content} name='content' id='content' />
                </div>
                <button onClick={this.handleAddItem}>Add Item</button>
            </form>
        )
    }
}
export default AddItemForm;