import React from 'react';
import InputComponent from '../../Components/common/InputComponent'
import { FormErrors } from '../../Components/common/FormErrors'
import { connect } from 'react-redux'
import { loginUser } from '../../Actions/userActions'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: { email: "", password: "" },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^((?=.{6,})(?=.*[0-9]))/);
                fieldValidationErrors.password = passwordValid ? '' : ' must be at least 6 characters and contain at least 1 number';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
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
                <h1>Login</h1>
                <form>

                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <span className="userInput">
                        <InputComponent id="email" label="Email Address"
                            type="text" isRequired="true" placeHolder="john.smith@email.com"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </span>
                    <span className="userInput">
                        <InputComponent id="password" label="Password"
                            type="text" isRequired="true" placeHolder="******"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </span>
                    <button type="submit" className="btn btn-primary"
                        disabled={!this.state.formValid}>Login</button>

                    <button onClick={() => {
                        this.props.login();
                        this.props.history.push("/");
                    }}>Login</button>




                </form>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(loginUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);