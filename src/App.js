import React, { Component} from "react";
import "./css/App.css";
import HelloWorld from "./components/sayHello/sayHello"
 
class App extends Component{
  users = require('./fakedata/persons.json');
  
  render(){
    console.log(this.users)
    return(
      <>
      {
        this.users.users.map(function(user, index) {
          return  <HelloWorld   props= {user} key={user.id}/>;
        })
      }
      </>
    );
  }
}

export default App;