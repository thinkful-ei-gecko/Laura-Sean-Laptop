import React from 'react';
import ReactDOM from 'react-dom';
import DisplayStore from './DisplayStore';
import App from './App';

export default function Customize(){
   // console.log(props);
    
    return (<form className="main__form">
            <h2>Customize your laptop</h2>
            <DisplayStore />
            </form>)
}