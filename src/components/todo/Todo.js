import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoView from "./TodoView"

export default class Todo extends Component {
    state = {
        todoList: [
            {
                id: uuidv4(),
                todo: 'Walk The Dog',
                editToggle: false,
            },
            {
                id: uuidv4(),
                todo: 'By Milk',
                editToggle: false,
            },
            {
                id: uuidv4(),
                todo: 'Wash Dishes',
                editToggle: false,
            },

        ],
        todoValue: "",
        editValue: "",
        showErrorMessage: false,
        showNoTodoMessage: false,
        disableEditButton: false,
    }

    handleInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.todoValue.length === 0) {
            this.setState({
                showErrorMessage: true,
            })
            return
        }

        let newTodoObj = {
            id: uuidv4(),
            todo: this.state.todoValue
        }

        // Pak's solution
        let newArray = [...this.state.todoList, newTodoObj]

        this.setState({
            todoList: newArray,
            todoValue: "",
        }, () => {
            if (this.state.todoList.length > 0) {
                this.setState({
                    showNoTodoMessage: false
                })
            }
        })

        // // Miley's solution: not complete

        // if (this.state.todoList === 0) {
        //     this.showErrorMessage = true
        //     this.setState({
        //         showErrorMessage: true
        //     })
        // } else {
        //     let newArray = [...this.state.todoList, newTodoObj]
        //     this.setState({
        //         todoList: newArray,
        //         todoValue: "",
        //         showErrorMessage: true,
        //         showNoTodoMessage: false
        //     })
        // }

    }

    addFunc = () => { }

    handleDeleteTodo = (targetId) => {
        let copyArray = [...this.state.todoList]

        let newArrayWithoutTargetId = copyArray.filter(({ id }) => id !== targetId)

        this.setState({
            todoList: newArrayWithoutTargetId
        }, () => {
            if (this.state.todoList.length === 0) {
                this.setState({
                    showNoTodoMessage: true,
                })
            }
        },
        )

        // Miley's solution:
        // if (newArrayWithoutTargetId.length === 0) {
        //     this.setState({
        //         todoList: newArrayWithoutTargetId,
        //         showNoTodoMessage: true,
        //     })
        // } else {
        //     this.setState({
        //         todoList: newArrayWithoutTargetId,
        //         showNoTodoMessage: false,
        //     })
        // }
    }

    handleEditTodo = (targetId) => {
        let copyArray = [...this.state.todoList]
        let inputDefaultValue

        let updatedTodoArray = copyArray.map((item) => {
            if (item.id === targetId) {
                item.editToggle = true
                inputDefaultValue = item.todo
            }
            return item
        })
        console.log(updatedTodoArray)

        this.setState({
            todoList: updatedTodoArray,
            editValue: inputDefaultValue,
            disableEditButton: true
        },
        )
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleUpdateButton = (targetId) => {
        let copyArray = [...this.state.todoList]

        let updatedTodoArray = copyArray.map((item) => {
            if (item.id === targetId) {
                item.editToggle = false
                item.todo = this.state.editValue
            }
            return item
        })

        this.setState({
            todoList: updatedTodoArray,
            disableEditButton: false,
        },
        )

    }
    render() {
        const { todoList, showErrorMessage, showNoTodoMessage, editValue,  disableEditButton} = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {showErrorMessage
                    ? <div style={{ color: "red", marginTop: 20 }}>Please, Enter Something Todo</div>
                    : null}
                <input
                    onChange={this.handleInputChange}
                    style={{ marginTop: 30 }}
                    type="text"
                    name="todoValue"
                    value={this.state.todoValue} />{""}
                <button onClick={this.handleSubmit}>Add</button>

                {showNoTodoMessage
                    ? (<div style={{ marginTop: 20 }}>Please Add Something To Do</div>)
                    : (<TodoView
                        todoList={todoList}
                        handleDeleteTodo={this.handleDeleteTodo}
                        handleEditTodo={this.handleEditTodo}
                        handleOnChange={this.handleOnChange}
                        editValue={editValue}
                        disableEditButton={disableEditButton}
                        handleUpdateButton={this.handleUpdateButton}
                    />)
                }


            </div>
        )
    }
}

// const TodoView = ({ todoList }) => {
//     return (
//         <ul style ={{listStyle: "none"}}>
//             {todoList.map(({ id, todo }) => {
//                 return <li key={id}>{todo}</li>
//             })}
//         </ul>
// }
//     )