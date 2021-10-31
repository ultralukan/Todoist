import React from "react"
import List from "./List"


class Todoist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            values: [],
            todo: '',
        }
    }
    handleAddToDo = () => {
        const item = {
            text: this.state.todo,
            id:Date.now()
        }
        this.setState((prvState) => ({
            values: [...prvState.values, item],
            todo: ''
        }))
    }
    handleChange = (e) =>{
        this.setState({
            todo: e.target.value,        
        })
    }
    handleRemove = (item) =>{
        this.setState({
            values: this.state.values.filter(el => el !== item)
        })
    }
    render(){
        return(
            <div className='text-center'>
                <h1 className='ml-2 fs-1'>TodoList</h1>
                <form>
                    <label className='pr-2 ml-2'>What to do:</label>
                    <input className='pr-3 mr-2' type='text' onChange={this.handleChange} value={this.state.todo}/>
                    <input className='btn btn-primary' type='button' onClick={this.handleAddToDo} value='Add'/>
                </form>
                <List items={this.state.values} removeToDo={this.handleRemove}/>
            </div>
        )   
    }
}
export default Todoist