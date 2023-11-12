
import './App.css';
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Account from "./pages/Account"
import Books from "./pages/Books"
import React from 'react';
import Home from './pages/Home';

document.body.style.background = '#461d7c';

function App() {

    let component
    switch (window.location.pathname){
        case"/":
        component = <Home />
        break
        case "/Account":
        component = <Account />
        break
        case "/Login":
        component = <Login />
        break
        case "/Books":
        component = <Books />
        break
    }
    return (
        <>
        <Navbar />
        <div className = "App">
            {component}
        </div>
        </>

  );
}

export default App;
