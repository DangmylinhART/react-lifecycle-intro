// command: rafcp
//<React.Fragment></React.Fragment> = <> </> to wrap more than one html tag
import React from 'react'
import { arrayOf, shape, number, string } from 'prop-types'
import "./TodoView.css"

const TodoView = ({
    todoList,
    handleDeleteTodo,
    handleEditTodo,
    handleOnChange,
    editValue
}) => {
    console.log(todoList)

    const handleDeleteButton = (id) => {
        console.log('ID:', id)
        handleDeleteTodo(id)
    }

    return (

        <ul style={{ listStyle: "none" }}>
            {todoList.map(({ id, todo, editToggle }) => {

                return (
                    <>
                        <li key={id} style={{ margin: 20 }}>
                            {/* {todo}{" "} */}
                            {editToggle
                                ? (
                                    <input
                                        onChange={(event) => handleOnChange(event)}
                                        type='text'
                                        placeholder={todo}
                                        value={editValue}
                                        name='editValue'>
                                    </input>
                                )
                                : (<span>{todo}</span>)
                            }
                            {editToggle
                                ? (
                                    <span className="edit-button todo-button-shared-style">update</span>
                                )
                                : (
                                    <span onClick={() => handleEditTodo(id)}
                                        className="edit-button todo-button-shared-style">Edit</span>
                                )
                            }

                            <span
                                className="delete-button todo-button-shared-style"
                                onClick={() => handleDeleteButton(id)}>Delete</span>
                        </li>
                    </>
                );
            })}
        </ul>

    )
}

TodoView.propTypes = {
    todoList: arrayOf(
        shape({
            id: string.isRequired,
            todo: string.isRequired,
        })
    )
}

export default TodoView
