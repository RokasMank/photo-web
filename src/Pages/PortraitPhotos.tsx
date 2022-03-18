import React, { useContext, useState } from "react";
import PT from "prop-types";
import ReactDOM from "react-dom";
// import Slides from "../Components/Slides";
import { IImage, ISlidesProps, IState, PhotosType } from "../Interfaces/Interfaces";
import { Store } from "../Store/Store";
const Slides = React.lazy<any>(()=> import('../Components/Slides'))


export default function PortraitPhotosPage() {
  const {state, dispatch}   = useContext(Store)  
  const type = PhotosType.portrait
  const props :ISlidesProps = {state, type}
  
  return (
    <React.Suspense fallback = {<div>loading...</div>}  >

      <div className="galleryPhotosContainer">
<h2 className="simpleHeader">Portretai</h2>
     <hr className="headerHR"/>
  <Slides {...props}/>

  </div>
  </React.Suspense>
  );
}


