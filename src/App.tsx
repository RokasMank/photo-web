import {Fragment, useState} from 'react';

import firebase from "./BACKEND/firebase";

//import Cart from './CartStore/CartStore';
import { useContext, useEffect } from "react"
import { getImages} from "./Actions/Actions"

import { Store } from "./Store/Store"
import './Styles.css'
//Styles
import { makeStyles } from '@material-ui/core/styles';
import Drawer from './Drawer'
import DrawerMedia from './DrawerMedia'
//Types
import { PhotosType } from './Interfaces/Interfaces';
import React from 'react';

export type CartItemType = {
  id:number;
  title:string;
  category:string;
  description:string;
  image:string;
  price:number;
  amount:number;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    // margin: '5px'
   

  }
});

const Slides = React.lazy<any>(()=> import('./Components/Slides'))


function App(props:any) {

const classes = useStyles();
const typeAuto = PhotosType.auto;
const typePortrait = PhotosType.portrait;
const typeHolidays = PhotosType.holidays;

   const {state, dispatch} = useContext(Store);
   const storageRef = firebase.storage().ref('images/auto')

  useEffect(()=>{
    state.itemsAuto.length === 0  && getImages(dispatch, typeAuto ) && getImages(dispatch, typePortrait ) && getImages(dispatch, typeHolidays )
  })
 

 
 return (
  <div style= {{ backgroundImage: "url("  + window.location.origin +"/bac.png" + ")",
  minWidth: '100%',
    minHeight: '100vh',
    padding:'0px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    boxSizing:"border-box",
    margin:"0"
     }}>
<div className = {classes.container}>
  <Fragment >

        
       <Drawer/> 
       <DrawerMedia/>
       
 


    
   
     {props.children}
  </Fragment>
  </div>
  </div>
 );
}

export default App;