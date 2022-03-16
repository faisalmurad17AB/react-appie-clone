import React from 'react'
import './traffic.css'
const Traffic = () => {
  return (
    <section className="traffic-area pt-140 pb-180">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="traffic-title">
                        <span>Traffic</span>
                        <h3 className="title">Stage reporting with 50k queries.</h3>
                        <p>He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="traffic-service mb-30">
                                <div className="icon">
                                    <i className="fal fa-check"></i>
                                </div>
                                <h5 className="title">Carefully designed</h5>
                                <p>Mucker plastered bugger all mate morish are.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="traffic-service item-2 mb-30">
                                <div className="icon">
                                    <i className="fal fa-check"></i>
                                </div>
                                <h5 className="title">Choose a App</h5>
                                <p>Mucker plastered bugger all mate morish are.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="traffic-service item-3">
                                <div className="icon">
                                    <i className="fal fa-check"></i>
                                </div>
                                <h5 className="title">Seamless Sync</h5>
                                <p>Mucker plastered bugger all mate morish are.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="traffic-service item-4">
                                <div className="icon">
                                    <i className="fal fa-check"></i>
                                </div>
                                <h5 className="title">User Interactive</h5>
                                <p>Mucker plastered bugger all mate morish are.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="traffic-btn mt-50">
                                <a className="main-btn" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="traffic-thumb ">
            <img src="assets/images/traffic-thumb.png" alt="" />
        </div>
    </section>
  )
}

export default Traffic
