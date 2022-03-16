import React from 'react'
import './blog.css'
import blogCard from './BlogCard'

const Blog = () => {
  return (
    <section className="appie-blog-area pt-90 pb-95">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="appie-section-title text-center">
                        <h3 className="appie-title">Latest blog posts</h3>
                        <p>Different layouts and styles for team sections.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {blogCard.map(blog=>(

                <div className="col-lg-4 col-md-6">
                    <div className="blog-item mt-30 wow animated fadeInUp" data-wow-duration="3000ms" data-wow-delay="200ms">
                        <div className="thumb">
                            <img src={blog.img} alt="pic" />
                        </div>
                        <div className="content">
                            <div className="blog-meta">
                                <ul>
                                    <li>{blog.data}</li>
                                    <li><a href="#">{blog.feature}</a></li>
                                </ul>
                            </div>
                            <h3 className="title"><a href="#">{blog.title}</a></h3>
                            <a href="#">{blog.learn} <i className="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Blog
