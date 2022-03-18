
import { Link } from "@reach/router"

function Gallery() {
 
   
 
    return(
    
           <div className="simplePage">
          
            <h2 className="simpleHeader">Galerija</h2>
            <hr className="headerHR"/>
            <div className="galleryPageContainer">
             <Link to = 'AutoPhotos' className='linkCategory'>
                <div className="galleryCategory">
                     <h4 className = "galleryImageName" >Automobiliai</h4>
                          <img className = "galleryImage" src ={window.location.origin + "/autos.jpg"}/>
               </div>
            </Link>
            <Link to = 'PortraitPhotos' className='linkCategory'>
            <div className="galleryCategory">
            <h4 className = "galleryImageName">Portretai</h4>
              <img className="galleryImage" src ={window.location.origin + "/people.jpg"}/>
            </div>
            </Link>

            <Link to = 'OtherPhotosPage' className='linkCategory'>
            <div className="galleryCategory">
              <h4 className = "galleryImageName">Kita</h4>
              <img className="galleryImage" src ={window.location.origin + "/other.jpg"}/>
            </div>
          </Link>
            </div>

            </div>
          

    
            
    )
}

export default Gallery;