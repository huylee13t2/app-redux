import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.value.trim()){
            return
        }
        this.props.dispatch(addTodo(this.state.value))
        this.setState({ value : '' })
    }

    handleChange = (value) => {
        this.setState({ value : value })
    }

    render() {
        return (
            <div>
                <form onSubmit={ (e) => this.handleSubmit(e) } >
                    <input type="text" placeholder="Enter todo" value={ this.state.value } onChange={ (e) => this.handleChange(e.target.value) } />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

// let AddTodo = ({ dispatch }) => {
//     let input = ''

//     return (
//         <div>
//             <form onSubmit={e => {
//                 e.preventDefault()
//                 if (!input.value.trim()) {
//                     return
//                 }
//                 dispatch(addTodo(input.value))
//                 input.value = ''
//             }} >
//                 <input type="text" placeholder="Enter todo" ref={node => input = node} />
//                 <button>Add</button>
//             </form>
//         </div>
//     )
// }

AddTodo = connect()(AddTodo)

export default AddTodo