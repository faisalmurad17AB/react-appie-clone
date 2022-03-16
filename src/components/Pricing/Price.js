import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import './price.css'
import priceCards from './PriceCards'

const Price = () => {
  return (
    <section className="price-area pt-90 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <h3 className="appie-title">Choose your plan</h3>
                        <p>Different layouts and styles for team sections.</p>
                    </div>
                    <ul className="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className="month active"><a href="#">Monthly</a></li>
                        <li>
                            <label className="switch on">
                                <span className="slider round"></span>
                            </label>
                        </li>
                        <li className="year"><a href="#year">Annualy</a></li>
                    </ul>
                </div>
            </div>
            <div className="tabed-content">
                <div id="year">
                    <div className="row justify-content-center">
                        {priceCards.map(price=>(

                        <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                            <div className="pricing-one__single">
                                <div className="pricig-heading">
                                    <h6>{price.title}</h6>
                                    <div className="price-range"><span>{price.priceTag}</span> <span>{price.num}</span>
                                        <p>{price.limit}</p>
                                    </div>
                                    <p>{price.desc}</p>
                                </div>
                                <div className="pricig-body">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheck} className='icon'/> {price.valid}</li>
                                        <li><FontAwesomeIcon icon={faCheck} className='icon'/> {price.storage}</li>
                                    </ul>
                                    <div className="pricing-btn mt-35 ml-30">
                                        <a className="main-btn" href="#">Choose plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Price
