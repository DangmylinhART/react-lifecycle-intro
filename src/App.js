import React, { Component } from 'react'
import Todo from './components/todo/Todo'

export class App extends Component {
    state = {
        isAuth: false,
        email: '',
        password: '',
        isEmail: true
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            // // check if the input is an email
            // if (!event.target.email.includes('@')) {
            //     this.setState({ isEmail: false})   
            //     console.log('not an email')
            // } 
            // this.setState({ isEmail: true })
            // console.log('is an email')
            for (let i = 0; i < this.state.email.length; i++) {
                if (this.state.email.includes('@')) {
console.log('please enter valid email format')
} else {
    console.log('correct email format')

                }
            }
        })
    }

    handleOneSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

    }
    render() {
        const { isAuth } = this.state
        let showTodoComponent = isAuth
            ? <Todo />
            : (
                <> {this.state.isEmail
                    ? <p></p>
                    : <p>"Your email is not valid"</p>
                }
                    <form onSubmit={this.handleOneSubmit}>
                        {" "}
                        <input
                            type="text"
                            name="email"
                            placeholder="enter email"
                            onChange={this.handleOnChange}
                            value={this.state.email}
                        /><br />{" "}

                        <input
                            type="text"
                            name="password"
                            placeholder="enter password"
                            onChange={this.handleOnChange}
                            value={this.state.password}
                        /><br />{" "}
                        <button>Sign Up</button>
                    </form>
                </>
            )

        return (
            <div style={{ textAlign: "center", marginTop: 20 }}>
                {showTodoComponent}
            </div>
        )
    }
}

export default App

