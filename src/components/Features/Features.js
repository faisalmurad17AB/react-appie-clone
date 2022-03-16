import React from 'react'
import './features.css'
const Features = () => {
    return (
        <section class="features-area pt-100" id="features">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="features-tabs-btn">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-cog"></i> Settings</a>
                                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-exclamation-triangle"></i> Report</a>
                                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-bell"></i> Saeety Notices</a>
                                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-lock"></i> App Lock</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center " >
                                            <img src="assets/images/features-thumb-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="features-content" >
                                            <span>Custom Reacyions</span>
                                            <h3 class="title">Let the <br /> Conversation flow</h3>
                                            <p>Car boot absolutely bladdered posh burke the wireless mush some dodg.</p>
                                            <a class="animated_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center" >
                                            <img src="assets/images/features-thumb-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="features-content" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <span>Custom Reacyions</span>
                                            <h3 class="title">Let the <br /> Conversation flow</h3>
                                            <p>Car boot absolutely bladdered posh burke the wireless mush some dodg.</p>
                                            <a class="animated_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center" >
                                            <img src="assets/images/features-thumb-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content animated fadeInRight" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <span>Custom Reacyions</span>
                                            <h3 class="title">Let the <br /> Conversation flow</h3>
                                            <p>Car boot absolutely bladdered posh burke the wireless mush some dodg.</p>
                                            <a class="animated_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="appie-features-thumb text-center " >
                                            <img src="assets/images/features-thumb-1.png" alt=""  />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="appie-features-content" data-wow-duration="2000ms" data-wow-delay="600ms">
                                            <span>Custom Reacyions</span>
                                            <h3 class="title">Let the <br /> Conversation flow</h3>
                                            <p>Car boot absolutely bladdered posh burke the wireless mush some dodg.</p>
                                            <a class="animated_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="features-shape-1">
                <img src="assets/images/shape/shape-6.png" alt="" />
            </div>
            <div class="features-shape-2">
                <img src="assets/images/shape/shape-7.png" alt="" />
            </div>
            <div class="features-shape-3">
                <img src="assets/images/shape/shape-8.png" alt="" />
            </div>
        </section>
    )
}

export default Features
