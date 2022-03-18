
//Actions

//import { handleStoreAddToCart } from '../Actions/Actions';

//Components
//import Slides from '../Components/Slides';
//Styles

import { useContext } from 'react';
import { Store } from '../Store/Store';
import { useEffect } from 'react';
//Types
export type CartItemType = {
  id:number;
  title:string;
  category:string;
  description:string;
  image:string;
  price:number;
  amount:number;
}


function MainPage() {

  const {state, dispatch} = useContext(Store)
    // useEffect(()=>{
    //    state.items.length === 0 && getStoreProducts(dispatch) 
    //  })
 
 
    return(
      <div className='mainPage'>
        <div>

        <h2 className="mainPageHeader">Fotografijos puslapis</h2>
        </div>
        <hr className="headerHR"/>
        <div className = "row">
        <div className = "column">
      <div className="mainPageContainer">
       
      
      <img className="mainPageImage" src  ={window.location.origin + "/mainPageImage.jpg"}/>
      </div>
      </div>

        <div className = "column">
        <div>
        
        <div className="mainPageTextBox">
        <h2>Apie mane</h2>
       Sveiki, esu Justas, studijuoju KTU universitete, multimedijos technologijas. Laisvalaikiu užsiimu fotografija.
        Šiuo hobiu jau užsiimu trejus metus per kuriuos daug ko išmokau. Dažniausiai užsiimu asmeninių, porų ir šeimos fotografijom šiek tiek rečiau
        automobilių bei švenčių bei įvairių renginių. </div>
       
        <div className="mainPageTextBox">
        <h2>Kontaktai</h2>
        <div>
      <span > <strong>Email: </strong>  justas.mazintas@gmail.com </span>
      </div>
      <div>
      <span >  <strong>Tel. nr: </strong> 865831531  </span>
      </div>
      <br/>
        Fotosesijomis užsiimu Kauno/Raseinių apylinkėse. Į kitas vietoves atvykstu už papildomą kainą, kuri padengia kuro išlaidas.

        
        </div>
        </div>
        </div>
       
      </div>
       </div>
            
    )
}

export default MainPage;
