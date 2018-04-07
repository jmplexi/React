import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../Actions/userActions';

class Logout extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Logout page...</p>

                <button onClick={() => {
                    this.props.logout();
                    this.props.history.push("/");
                }}>Logout</button>

            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);