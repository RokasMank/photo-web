import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Badge, 
  
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "@reach/router";
import './Styles.css'
const useStyles = makeStyles({
  drawer: {
      // width: "50vw",
   
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
     display:'none'
    }
  }

});

const DrawerMedia = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();
  
  return (

    <div className ="menuDrawerMedia">

    <MUIDrawer  className={classes.drawer} open ={drawerOpen}  onClose={()=>setDrawerOpen(false)}>
     
    <button className='menuButton' onClick ={()=> setDrawerOpen(false)} >
     
     <img src ={window.location.origin + "/menuIcon.png"} height="40px" width="40px"/>
    </button>
      <div className='links' >
     
  <li>
     <Link className='link' to = '/' onClick ={()=> setDrawerOpen(false)}>Pradinis</Link>
   
     </li>
     <li>
   <Link className='link' to = 'Gallery'  onClick ={()=> setDrawerOpen(false)}>Galerija</Link>
   </li>
   <li>
   <Link className='link' to = 'Price' onClick ={()=> setDrawerOpen(false)}>Kainoraštis</Link>
   </li>
  
   
  
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

    <button className='menuButton' onClick ={()=> setDrawerOpen(true)} >
     
       <img src ={window.location.origin + "/menuIcon.png"} height="40px" width="40px"/>
      </button>

      
</div>
    
  );
 
};

export default DrawerMedia;
