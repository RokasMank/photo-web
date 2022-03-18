 import React, { useEffect, useState } from "react";
import {IImage, ISlidesProps, IState, PhotosType} from '../Interfaces/Interfaces'



export default function Slides (props : ISlidesProps) {


const {state, type} = props;
let items :string[] = [] ;


if (type ===PhotosType.auto){
  items = state.itemsAuto
}
if (type ===PhotosType.portrait){
  items = state.itemsPeople
}
if (type ===PhotosType.holidays){
  items = state.itemsHolidays
}

  const lightbox = document.createElement('div');
   useEffect(()=>{
  
  lightbox.id = 'lightbox'
  document.body.appendChild(lightbox)
  lightboxFunc(lightbox)  
 }, [])

 

   const lightboxFunc = (lightbox) =>{ 

     const images : any = document.querySelectorAll('img.image')
    
    let counter : number = 0
     const closeButton = document.createElement('button');
          closeButton.id = 'closeButton'
          closeButton.textContent = 'X'
     if (images !== null){
     images.forEach(image => {
       counter = counter + 1;
      
       image.addEventListener('click', e => {
         lightbox.classList.add('active')
         const img = document.createElement('img')
        
        
         img.src = image.src
      
          while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
         lightbox.appendChild(closeButton);
         lightbox.appendChild(img)
         
         closeButton.addEventListener('click', e =>{
           if (e.target === e.currentTarget){
         lightbox.classList.remove('active')
       
             const el = document.getElementById('closeButton');
           el?.remove();
     
       
         return
           }

        })
    
       })
     })
    
    }
 //   lightbox.appendChild(closeButton)
     lightbox.addEventListener('click', e => {
       if (e.target !== e.currentTarget)
        return
    
        lightbox.classList.remove('active')
         const el = document.getElementById('closeButton')
         el?.remove();
        
       
     })
    
    }
  return (



<div className="slidesWrapper">


<div className='imageList'>
{items.map(((item :string)=>(
   
        <img src= {item} className= "image"  onClick={()=>lightboxFunc(lightbox)}  />
    
       
)))}


</div> 
</div>
              
        );
 }
      

