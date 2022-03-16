import React from 'react'
import './home.css'
import thumb1 from '../images/hero-thumb-1.png'
import thumb2 from '../images/hero-thumb-2.png'
const Home = () => {
    return (
        <section className="home-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hoem-content">
                            <span>Welcome To Web Page</span>
                            <h1 className="appie-title">Manage it all, in this all new system.</h1>
                            <p>Hanky panky lavatory up the duff jolly good cack brolly is chinwag zonked happy days sloshed.</p>
                            <ul>
                                <li><a className="animated_btn animated_btn-ios" href="#"> Download for iOS</a></li>
                                <li><a className="item-2 animated_btn2" href="#">Download for Android</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="home-thumb">
                            <div className="thumb">
                                <img src={thumb1} alt="" />
                            </div>
                            <div className="thumb-2">
                                <img src={thumb2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
