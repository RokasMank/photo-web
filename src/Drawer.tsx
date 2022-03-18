import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "@reach/router";
import './Styles.css'
const useStyles = makeStyles({
  drawer: {
    width: "250px",
   
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
     display:'none'
    }
  }

});

const Drawer = () => {
 
  const classes = useStyles();
  
  return (

    <MUIDrawer variant="permanent"  className={classes.drawer}>
      
        <span className = "drawerHeader">  J.Mažintas
            </span>
      <div className='links' >
     
  <li>
     <Link className='link' to = '/'>Pradinis</Link>
   
     </li>
     <li>
   <Link className='link' to = 'Gallery'>Galerija</Link>
   </li>
   <li>
   <Link className='link' to = 'Price'>Kainoraštis</Link>
   </li>
   {/* <li>
   <Link className='link' to = 'Contacts'>Kontaktai</Link>
   </li> */}
 
  
   </div>
   <div className="iconsContainerWrapper">

<div className="iconsContainer">
 <a href="https://www.instagram.com/jumix8/" target="_blank" >
  <img className="icons" src ={window.location.origin + "/igLogo.png"}/>

  </a>

  <a href="https://www.facebook.com/justas.mazintas" target="_blank" >
  <img className="icons" src ={window.location.origin + "/fbLogo(2).png"}/>

  </a>
</div>
</div>
    </MUIDrawer>

    
  );
};

export default Drawer;
