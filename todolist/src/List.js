import React from "react";

class List extends React.Component{
    constructor(props){
        super(props)
        // this.removeToDo = this.removeToDo.bind(this)
    };
    // removeToDo(item){
    //     this.props.removeToDo(props.items.item)
    // }
    render(){
        const items = this.props.items
        return(
            <ul>
            {items.map(item=>(
                <div d-flex>
                   <li class="list-group-item list-group-item-warning justify-content-center d-inline-flex mb-2" key={item.id}>
                    <span className='pt-1 pr-2'>{item.text}</span>
                    <input className='btn btn-danger' type='button' value='Delete' onClick={() => {this.props.removeToDo(item)}}/>
                </li>                 
                </div>
                ))} 
            </ul>
        )
    }
}

export default List