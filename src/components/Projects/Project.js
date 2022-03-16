import React from 'react'
import './project.css'
const Project = () => {
  return (
    <section className="project pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="project-box">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="project-content">
                                    <h3 className="title">Start your project with appie.</h3>
                                    <p>We will email you only about this product.</p>
                                    <form action="#">
                                        <div className="input-box mt-30">
                                            <input type="text" placeholder="Your email" />
                                            <button>Sumbit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="project-thumb">
                            <img src="assets/images/project-thumb.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project
