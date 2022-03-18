

function Price() {
    

    return(
        <div className="simplePage">
      
                
          
       
             <h2 className="simpleHeader">Kainoraštis</h2>
             <hr className="headerHR"/>
        <div className="priceListWrapper">
     <div className="priceListGrid">
     
     <div  className="priceListCard">

<div className="priceCardWrapper">
<img className="priceCardLogo" src ={window.location.origin + "/peopleLogo.png"} />
</div>
<hr className="headerHR"/>

<div className="priceCardWrapper">
  <div className="priceListTextBox">
  Valanda asmeninei, šeimų, porų fotosesijai <div className="boldTextLarge"> 20€ </div>
      </div>   
      </div>
  </div >

  <div  className="priceListCard">

<div className="priceCardWrapper">
<img className="priceCardLogo" src ={window.location.origin + "/partyLogo.png"} />
</div>
<hr className="headerHR"/>

<div className="priceCardWrapper">
  <div className="priceListTextBox">
  Valanda švenčių, renginių fotosesijai <div className="boldTextLarge"> 30€ </div>
      </div>   
      </div>
  </div >

      <div  className="priceListCard">

    <div className="priceCardWrapper">
    <img className="priceCardLogo" src ={window.location.origin + "/carLogo.png"} />
    </div>
    <hr className="headerHR"/>

    <div className="priceCardWrapper">
      <div className="priceListTextBox">
      Valanda automobilio fotosesijai <div className="boldTextLarge"> 20€ </div>
          </div>   
          </div>
      </div >
        </div>
        
        </div>
            <div className="pricePageWarning">Fotosesijomis užsiimu Kauno/Raseinių apylinkėse. Į kitas vietoves atvykstu už papildomą kainą, kuri padengia kuro išlaidas.</div>
       

        </div>

    )
}

export default Price;
