import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './blog.scss'

export const Blog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/blog')
            .then(Response => Response.json())
            .then((okdata) => {
                setData(okdata)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <img src='https://cdn.dribbble.com/users/1118376/screenshots/2741708/dog-walk-cycle.gif' className='img-responsive center-block d-block mx-auto' />
    }
    return (
        <div>
            <section className="blog-posts grid-system blogscss py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    {
                                        data.map((data) => (
                                            <div className="col-lg-6" key={data.id}>
                                                <div className="blog-post">
                                                    <div className="blog-thumb">
                                                        <Link to={`${data.id}`}><img className='img-fluid img-thumbnail ' src={data.image1} alt="" /></Link>
                                                    </div>
                                                    <div className="down-content">
                                                        <span>{data.category}</span>
                                                        <Link to={`${data.id}`}><h4>{data.title}</h4></Link>
                                                        <ul className="post-info">
                                                            <li><a href="#">{data.name}</a></li>
                                                            <li><a href="#">{data.create_at}</a></li>
                                                            <li><a href="#">12 Comments</a></li>
                                                        </ul>
                                                        <p>{data.content1}</p>
                                                        <div className="post-options">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <ul className="post-tags">
                                                                        <li><i className="fa fa-tags"></i></li>
                                                                        <li><a href="#">Best Templates</a>,</li>
                                                                        <li><a href="#">TemplateMo</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                    <div className="col-lg-12">
                                        <ul className="page-numbers">
                                            <li><a href="#">1</a></li>
                                            <li className="active"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="sidebar-item search">
                                            <form id="search_form" name="gs" method="GET" action="#">
                                                <input type="text" name="q" className="searchText" placeholder="type to search..." />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sidebar-item recent-posts">
                                            <div className="sidebar-heading">
                                                <h2>Recent Posts</h2>
                                            </div>
                                            <div className="content">
                                                <ul>
                                                    <li><a href="post-details.html">
                                                        <h5>{data[0] && data[0].title}</h5>
                                                        <span>{data[0] && data[0].create_at}</span>
                                                    </a></li>
                                                    <li><a href="post-details.html">
                                                        <h5>{data[1] && data[1].title}</h5>
                                                        <span>{data[1] && data[1].create_at}</span>
                                                    </a></li>
                                                    <li><a href="post-details.html">
                                                        <h5>{data[2] && data[2].title}</h5>
                                                        <span>{data[2] && data[2].create_at}</span>
                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sidebar-item categories">
                                            <div className="sidebar-heading">
                                                <h2>Categories</h2>
                                            </div>
                                            <div className="content">
                                                <ul>
                                                    <li><a href="#">{data[0] && data[0].catagory}</a></li>
                                                    <li><a href="#">{data[1] && data[1].catagory}</a></li>
                                                    <li><a href="#">{data[2] && data[2].catagory}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sidebar-item tags">
                                            <div className="sidebar-heading">
                                                <h2>Tag Clouds</h2>
                                            </div>
                                            <div className="content">
                                                <ul>
                                                    <li><a href="#">MUC</a></li>
                                                    <li><a href="#">KIKI</a></li>
                                                    <li><a href="#">OKOK</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
