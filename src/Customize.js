import React from 'react';
import DisplayStore from './DisplayStore';
import './Customize.css';


export default function Customize(props){
   // console.log(props);
    
    return (<form className="main__form">
            <h2>Customize your laptop</h2>
            <DisplayStore selected={props.selected} features={props.features} updateFeature={props.updateFeature} />
            </form>)

}