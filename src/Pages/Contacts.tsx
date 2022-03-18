
  import firebase from "../BACKEND/firebase";
  import React, {useEffect, useState} from "react";
 import {imageStorage} from '../BACKEND/firebase';
 
 
 function Contacts() {
     
 // const[files, setFiles] = useState<string[]>([]);
 //     const storageRef = firebase.storage().ref('images/auto')
 //     useEffect(() => {
 //         const fetchImages = async () => {
     
 //         let result = await storageRef.listAll();
       
           
 //             let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
             
 //             return Promise.all(urlPromises);
     
 //         }
         
 //         const loadImages = async () => {
 //             const urls = await fetchImages();
 //             setFiles(urls);
 //         }
 //         loadImages();
 //         }, []);
 //         console.log(files)
 //     const [names, setNames] = useState<string[]>([]);
   
 //      const ref = firebase.firestore().collection('test');
 //     function getNames(){
 //         ref.onSnapshot((querySnapshot)=>{
 //             const items : string[] = [];
 //             if (querySnapshot){
 //             querySnapshot.forEach((doc) =>{
 //                const it : any = doc.data();
 //                let item = it as string 
 //                items.push(item)
                
 //             })
                     
 //             setNames(items)
 
 //         }
 
 //         })
 //     }
 
 //     useEffect(()=>{
 //         getNames();
 //     },
 // []);
 
    
 //     return(
 //         <div>
 
 // <h2>Apie manaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae</h2>
 
 
 //         <div>
 //             {names.map((item:any)=>(
 //                 <div key = {0}>
 //                 <h3>Name : {item.name}</h3>
 //                 </div>
 //             ))}
 //         </div>
 //         {files.map(((item :string)=>(
 //      <section className="slides">
       
 //        <img src= {item} className= "img"  />
     
 //        </section>
   
 //     )))}
     
 //      </div>
             
 //     )
 
     return(
         <div className="simplePage">
           
             <h2 className="simpleHeader">Kontaktai</h2>
             <hr className="headerHR"/>
             <div className="priceListWrapper">
                 <div className = "priceList">
                  

                 </div>
                 </div>
             </div>
 
     )
 }
 
 export default Contacts;
 