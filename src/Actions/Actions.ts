import firebase from "firebase";
import { exitCode } from "process";
import { IState, PhotosType, ActionType } from "../Interfaces/Interfaces";

export const fetchImages = async (type: PhotosType) => {
  
  const storageRef = firebase.storage().ref('images' + '/' + type)

  let result = await storageRef.listAll();

    
      let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
      
      return Promise.all(urlPromises);

  }

export const getImages = async(dispatch:any, type: PhotosType ):Promise<string[]> =>{
  const cars = PhotosType.auto;
  const people = PhotosType.portrait;
  const fest = PhotosType.holidays;
  
  const addCars = ActionType.addAuto;
  const addPeople = ActionType.addPortrait;
  const addFest = ActionType.addHoliday;
 const urls = await fetchImages(type);
        
   if (type === cars){
    return dispatch({
      type: addCars,
      payload: urls
    })
  }
  if (type === fest){
    return dispatch({
      type:addFest,
      payload: urls
    })
  } else  if (type === people){
    return dispatch({
      type:addPeople,
      payload: urls
    })
  }
  else 
 throw exitCode
}










   
//    export const handleStoreAddToCart = (state: IState, dispatch:any, clickedItem: CartItemType) => {
 
//     const isItemInCart  = state.cartItems.find(item=> item.id === clickedItem.id);
//     if (isItemInCart){
     
//       const tempCartItems = state.cartItems.map(item=> item.id === clickedItem.id  ?{...item, amount:item.amount+1} : item);
//       console.log(tempCartItems)
     
//       let dispatchObj = {
//         type: 'UPDATE_CART',
//         payload: tempCartItems
      
//       }
//       return dispatch(dispatchObj);
//     }
//     else{
//       let dispatchObj = {
//         type: 'ADD_TOCART',
//         payload:  {...clickedItem, amount:1}
        
//     }
    
//     return dispatch(dispatchObj);
    
//   }

// };
// export const handleRemoveFromCart = (state: IState, dispatch:any, clickedItem: CartItemType) => {
//   const isItemInCart  = state.cartItems.find(item=> item.id === clickedItem.id);
// if (isItemInCart){
//   state.cartItems.forEach(item => {
//     if (item.id === clickedItem.id)
//     {
//       if (clickedItem.amount === 1){
//   const cartItems = state.cartItems.filter(item=> item.id!== clickedItem.id);
//   let dispatchObj = {
//     type: 'REMOVE_CART',
//     payload: cartItems
  
//   }
//   return dispatch(dispatchObj);
//       }
//       else {
//         const cartItems = state.cartItems.map(item=> item.id=== clickedItem.id ?{...item, amount:item.amount-1} : item);
//         let dispatchObj = {
//           type: 'REMOVE_CART',
//           payload: cartItems
        
//         }
//         return dispatch(dispatchObj);
//       }
//     }
//   });
// }

// };
// export const getTotalItems = (items: CartItemType[]) => 
//   items.reduce((ack:number, item)=>ack+item.amount, 0);

  