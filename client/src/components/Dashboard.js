import React, { Component } from 'react';
import axios from "axios";
import {FETCH_USER} from "../actions/types";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <a href="#" onClick={createSurvey}>Loging With Google</a>
            </div>
        )
    }
}

async function createSurvey(event) {
    event.preventDefault();
    try {
        await axios.post('/api/surveys', {});
    } catch(err) {
        alert(err.response.data.message);
    }
}

export default Dashboard;