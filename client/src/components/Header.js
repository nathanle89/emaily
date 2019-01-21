import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Loging With Google</a></li>
                );
            default:
                return [
                    <li id="payment-button" key="payment-button"><Payments /></li>,
                    <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li id="logout-button" key="logout-button"><a href='/api/logout'>Logout</a></li>
                ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo left">
                        Emaily
                    </Link>

                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);