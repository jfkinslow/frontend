import React, { Component } from 'react';

class NewUserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            email: '',
            gender: '',
            phone: '',
            picture: '', // Must be valid URL for now
            location: '',
            interests: [],
            catchPhrase: ''
        }
    }

    handleAddUser = () => {}
    handleTextChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleAddUser}>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='birthday'
                    placeholder='birthday'
                    value={this.state.birthday}
                    onChange={this.handleTextChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={this.state.email}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='gender'
                    placeholder='Gender'
                    value={this.state.gender}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    value={this.state.phone}
                    onChange={this.handleTextChange}
                />
                <input
                    type='url'
                    name='picture'
                    placeholder='Url of Profile Picture'
                    value={this.state.picture}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='catchPhrase'
                    placeholder='Catch Phrase!'
                    value={this.state.catchPhrase}
                    onChange={this.handleTextChange}
                />
                <input
                    type='text'
                    name='location'
                    placeholder='Location'
                    value={this.state.location}
                    onChange={this.handleTextChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default NewUserForm;