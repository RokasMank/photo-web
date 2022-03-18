import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Router, RouteComponentProps} from '@reach/router'
import { StoreProvider } from './Store/Store';
//Pages
import MainPage from './Pages/MainPage'
import Gallery from './Pages/Gallery'
import Price from './Pages/Price'
import Contacts from './Pages/Contacts'

import AutoPhotosPage from './Pages/AutoPhotos'
import PortraitPhotosPage from './Pages/PortraitPhotos'
import OtherPhotosPage from './Pages/OtherPhotos'




const RouterPage = (props : {pageComponent: JSX.Element} & RouteComponentProps) =>props.pageComponent

const client = new QueryClient();

ReactDOM.render(
 
 
  <StoreProvider>
   
 <QueryClientProvider client = {client}>

    <Router>
        <App path = '/' >
        <RouterPage  pageComponent ={<MainPage/>} path='/'/> 
        <RouterPage  pageComponent ={<MainPage/>} path='/'/>
        <RouterPage  pageComponent ={<Gallery/>} path='Gallery'/>
        <RouterPage  pageComponent ={<Price/>} path='Price'/>
        <RouterPage  pageComponent ={<Contacts/>} path='Contacts'/>
        <RouterPage  pageComponent ={<AutoPhotosPage/>} path='Gallery/AutoPhotos'/>
        <RouterPage  pageComponent ={<PortraitPhotosPage/>} path='Gallery/PortraitPhotos'/>
        <RouterPage  pageComponent ={<OtherPhotosPage/>} path='Gallery/OtherPhotosPage'/> 
       
        </App>
     </Router>
    </QueryClientProvider>
    
    </StoreProvider>
    
   
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

