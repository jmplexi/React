import React from 'react';
import InputComponent from '../../Components/common/InputComponent'
import { FormErrors } from '../../Components/common/FormErrors'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            formErrors: { email: "", password: "", firstName: "", lastName: "", confirmPassword: "" },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            firstNameValid: false,
            lastNameValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^((?=.{6,})(?=.*[0-9]))/);
                fieldValidationErrors.password = passwordValid ? '' : ' must be at least 6 characters and contain at least 1 number';
                break;
            case 'confirmPassword':
                confirmPasswordValid = !value.localeCompare(this.state.password);
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' must match password';
                break;
            case 'firstName':
                firstNameValid = value.match(/^((?=.{1,}))/);
                fieldValidationErrors.firstName = firstNameValid ? '' : ' can not be blank';
                break;
            case 'lastName':
                lastNameValid = value.match(/^((?=.{1,}))/);
                fieldValidationErrors.lastName = lastNameValid ? '' : ' can not be blank';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.firstNameValid && this.state.lastNameValid && this.state.confirmPasswordValid });
    }

    handleChange(evt) {
        console.log(evt.target.name);
        console.log(evt.target.value);
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ ...this.state, [name]: value }, () => { this.validateField(name, value); });
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form>

                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <span className="userInput">
                        <InputComponent id="firstName" label="First Name"
                            type="text" isRequired="true" placeHolder="John"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </span>
                    <span className="userInput">
                        <InputComponent id="lastName" label="Last Name"
                            type="text" isRequired="true" placeHolder="Smith"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </span>
                    <span className="userInput">
                        <InputComponent id="email" label="Email"
                            type="email" isRequired="true" placeHolder="jsmith@gmail.com"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </span>
                    <span className="userInput">
                        <InputComponent id="password" label="Password"
                            type="password" isRequired="true" placeHolder="******"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </span>
                    <span className="userInput">
                        <InputComponent id="confirmPassword" label="Confirm Password"
                            type="password" isRequired="true" placeHolder="******"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                    </span>

                    <button type="submit" className="btn btn-primary"
                        disabled={!this.state.formValid}>Login</button>
                </form>
            </div>
        );
    }
}
export default Register; 