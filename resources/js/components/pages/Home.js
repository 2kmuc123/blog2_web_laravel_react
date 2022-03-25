import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import './blog.scss'





export const Home = () => {
    const [fdata, setFdata] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [npage, setNpage] = useState(1);
    const [total, setTotal] = useState(1);



    useEffect(() => {
        fetch('/api/blog')
            .then(Response => Response.json())
            .then((okdata) => {
                setFdata(okdata)
                setData(okdata.slice(0, 3));
                setTotal(Math.ceil(okdata.length / 3));
                setLoading(false);

            })
    }, [])

    useEffect(() => {
        let cuoi = npage * 3;
        let dau = cuoi - 3;
        setData(fdata.slice(dau, cuoi))
        window.scrollTo(0, 0)
    }, [npage])



    if (loading) {
        return <img src='https://cdn.dribbble.com/users/1118376/screenshots/2741708/dog-walk-cycle.gif' className='img-responsive center-block d-block mx-auto' />
    }
    return (
        <div className='blogscss'>
            <div className="main-banner header-text">
                <div className="container-fluid">
                    <div className="owl-banner owl-carousel">
                        <div className="item">
                            <img src={data[0] ? data[0].image2 : 'https://cdn.dribbble.com/users/1118376/screenshots/2741708/dog-walk-cycle.gif'} width='100%' alt="" height='600em' />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>{data[0] ? data[0].catagory : ''}</span>
                                    </div>
                                    <Link to={`${data[0] ? data[0].id : 0}`}><h4 >{data[0] ? data[0].title : ''}</h4></Link>
                                    <ul className="post-info">
                                        <li><a href="#">{data[0] ? data[0].name : ''}</a></li>
                                        <li><a href="#">{data[0] ? data[0].created_at : ''}</a></li>
                                        <li><a href="#">12 Comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="blog-posts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="all-blog-posts">
                                    <div className="row">
                                        <div className="col-lg-12">

                                            {
                                                data.map((data) => (
                                                    <div className="blog-post" key={data.id}>
                                                        <div className="blog-thumb">
                                                            <Link to={`${data.id}`}><img src={data.image1} alt="" /></Link>
                                                        </div>
                                                        <div className="down-content">
                                                            <span style={{ color: 'orange' }}>{data.catagory}</span>
                                                            <Link to={`${data.id}`}><h4>{data.title}</h4></Link>
                                                            <ul className="post-info">
                                                                <li><a href="#" style={{ color: 'greenyellow' }}>{data.name}</a></li>
                                                                <li><a href="#" >{data.created_at}</a></li>
                                                                <li><a href="#">12 Comments</a></li>
                                                            </ul>
                                                            <p>{data.content1}</p>
                                                            <div className="post-options">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <ul className="post-tags">
                                                                            <li><i className="fa fa-tags"></i></li>
                                                                            <li><a href="#">MUC</a>,</li>
                                                                            <li><a href="#">KIKI</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <ul className="post-share">
                                                                            <li><i className="fa fa-share-alt"></i></li>
                                                                            <li><a href="#">Facebook</a>,</li>
                                                                            <li><a href="#"> Twitter</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button btn-group d-flex align-items-cente">
                                                <button className='btn btn-outline-success ' disabled={npage <= 1} onClick={() => setNpage(npage - 1)}>&lt;&lt;</button>
                                                <span className='btn btn-success '>{npage}/{total}</span>
                                                <button className='btn btn-outline-success' disabled={npage == total} onClick={() => setNpage(npage + 1)}>&gt;&gt;</button>
                                            </div>
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
                                                    <h2 style={{ color: 'greenyellow' }}>POST Mới</h2>
                                                </div>
                                                <div className="content">
                                                    <ul>
                                                        <li><Link to={`${fdata[0] && fdata[0].id}`}>
                                                            <h5>{fdata[0] && fdata[0].title}</h5>
                                                            <span>{fdata[0] && fdata[0].create_at}</span>
                                                        </Link></li>
                                                        <li><Link to={`${fdata[1] && fdata[1].id}`}>
                                                            <h5>{fdata[1] && fdata[1].title}</h5>
                                                            <span>{fdata[1] && fdata[1].create_at}</span>
                                                        </Link></li>
                                                        <li><Link to={`${fdata[2] && fdata[2].id}`}>
                                                            <h5>{fdata[2] && fdata[2].title}</h5>
                                                            <span>{fdata[2] && fdata[2].create_at}</span>
                                                        </Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="sidebar-item categories">
                                                <div className="sidebar-heading">
                                                    <h2 style={{ color: 'greenyellow' }}>Categories</h2>
                                                </div>
                                                <div className="content">
                                                    <ul>
                                                        <li><Link to={`${fdata[0] && fdata[0].id}`}>{fdata[0] && fdata[0].catagory}</Link></li>
                                                        <li><Link to={`${fdata[1] && fdata[1].id}`}>{fdata[1] && fdata[1].catagory}</Link></li>
                                                        <li><Link to={`${fdata[2] && fdata[2].id}`}>{fdata[2] && fdata[2].catagory}</Link></li>
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
            </div >

        </div >
    )
}
