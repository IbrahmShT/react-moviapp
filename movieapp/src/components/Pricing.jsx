import React, { Fragment, useState} from "react";
import { useContext } from "react";
import {FcCheckmark} from 'react-icons/fc'
import {Container} from './NavBar'
import '../Styles/Pricing.css'
function Pricing() {
  const {toggle} = useContext(Container)
  const [toggleBasic, setToggleBasic] = useState(true)
  const [toggleStandart, setToggleStandart] = useState(true)
  const [togglePremium, setTogglePremium] = useState(true)

  const [basicCost, setBasicCost] = useState("6.99")
  const [standartCost, setstandartCost] = useState("12.99")
  const [premiumCost, setpremiumCost] = useState("19.99")
  return (
    <Fragment>
      <div className={toggle ? 'background-Color-Main' : 'background-Color-secondary'}>
        <div className="Pricing-container">
          
          <div className={toggle ? 'Pricing-option1' : 'light-Theme1'}>
              <h2>Temel Plan</h2>
              <div className="Price">
                <h3>{basicCost}$</h3><h4 id="MonthlyYearly">{toggleBasic ? '/Monthly' : 'Yearly'}</h4>
              </div>  
              <span><FcCheckmark fontSize={25} id="checkmark"/>Reklamsız ve sınırsız dizi ve film keyfi</span>
              <span><FcCheckmark fontSize={25} id="checkmark"/>Desteklenen 1 cihazda izleyin.</span>
              <span><FcCheckmark fontSize={25} id="checkmark"/>HD kalitesi</span>
              <span><FcCheckmark fontSize={25} id="checkmark"/>Desteklenen 1 cihaza içerik indirin</span>
              <span><button id="button1">Satin Al</button></span>
              <div id="darktheme">
                <div className="Pricing-yearly-darktheme" onClick={() => {
                  setToggleBasic(!toggleBasic)
                  if(toggleBasic){
                    setBasicCost("60")
                  }else{
                    setBasicCost("6.99")
                  }
              }}>
              <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                </div>
              </div>
          </div>

                <div className={toggle ? 'Pricing-option2' : 'light-Theme2'}>
                    <h2>Standart Plan</h2>
                    <div className="Price">
                    <h3>{standartCost}$</h3><h4 id="MonthlyYearly">{toggleStandart ? '/Monthly' : 'Yearly'}</h4>
                    </div>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Reklamsız ve sınırsız dizi ve film keyfi</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Aynı anda 2 cihazda izleyin</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Tam HD kalitesi</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Desteklenen 2 cihaza içerik indirin</span>
                    <button id="button2">Satin Al</button>
                    <div id="darktheme">
                    <div className="Pricing-yearly-darktheme" onClick={() => {
                        setToggleStandart(!toggleStandart)
                        if(toggleStandart){
                          setstandartCost("120")
                        }
                        else{
                          setstandartCost("12.99")
                        }
                        }}>
                        <div className={toggleStandart ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                    </div>
                    </div>
                 </div>

                <div className={toggle ? 'Pricing-option3' : 'light-Theme3'}>
                    <h2>Özel Plan</h2>
                    <div className="Price">
                    <h3>{premiumCost}$</h3><h4 id="MonthlyYearly">{togglePremium ? '/Monthly' : 'Yearly'}</h4>
                    </div>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Reklamsız ve sınırsız dizi ve film keyfi</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Aynı anda 4 cihazda izleyin</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Ultra HD kalitesi</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Desteklenen 4 cihaza içerik indirin</span>
                    <button id="button3">Satin Al</button>
                    <div id="darktheme">
                    <div className="Pricing-yearly-darktheme" onClick={() => {
                        setTogglePremium(!togglePremium)
                        if(togglePremium){
                          setpremiumCost("180")
                        }
                        else{
                          setpremiumCost("19.99")
                        }
                        }}>
                        <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                    </div>
                    </div>
                </div>
        </div>
      </div>
    </Fragment>
  )
}





























export default Pricing;
