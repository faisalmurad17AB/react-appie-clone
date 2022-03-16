import React from 'react'
import './team.css'
import teamCards from './Teamcards'
const Team = () => {
  return (
    <section className="team-area pt-90 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="appie-section-title text-center">
                        <h3 className="appie-title">Meet our Team Members</h3>
                        <p>Different layouts and styles for team sections.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {teamCards.map(team=>(

                <div className="col-lg-3 col-md-6">
                    <div className="team-item mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                        <div className="thumb">
                            <img src={team.img} alt="" />
                        </div>
                        <div className="content text-center">
                            <h5 className="title">{team.title}</h5>
                            <span>{team.founder}</span>
                        </div>
                    </div>
                </div>
                ))}
               
                <div className="col-lg-12">
                    <div className="team-btn text-center mt-50">
                        <a className="main-btn" href="#"> View all Members <i className="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
