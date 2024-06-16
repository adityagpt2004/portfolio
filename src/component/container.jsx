import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import Form from './form';

const firebaseConfig = {
    apiKey: "AIzaSyAUj7-E4Sa52x1SCmJGeSvmtL5UTAYKLKs",
    authDomain: "survey-e5350.firebaseapp.com",
    databaseURL: "https://survey-e5350-default-rtdb.firebaseio.com",
    projectId: "survey-e5350",
    storageBucket: "survey-e5350.appspot.com",
    messagingSenderId: "1058910038624",
    appId: "1:1058910038624:web:65b70e48119942655cb105",
    measurementId: "G-SDLX6Z04TC"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            area: ""
        }
    }
    // reference database
     submit = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const area = event.target.area.value;
        this.setState({name,email,area},()=>{console.log(this.state)})

        const database = firebase.database();
        database.ref('survey').set({
          name: this.state.name,
          email: this.state.email,
          question: this.state.question
        })
        event.preventDefault();
     }
    
    render() {
        return (
            <div>
                <Form submit={this.submit}/>
            </div>
        )
    }
}

export default Container
