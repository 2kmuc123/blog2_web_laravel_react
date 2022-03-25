import React from 'react'


export const Footer = () => {
    return (
        <div className="container-fluid mt-5 bg-success col-10">

            <br /><br />
            <div className="mx-5">
                <div className="row mb-4 ">
                    <div className="col-md-4 col-sm-11 col-xs-11">
                        <div className="footer-text pull-left">
                            <div className="d-flex">
                                <h1 className="font-weight-bold mr-2 px-3" style={{ color: '#16151a', backgroundColor: 'green' }}> MUC </h1>
                                <h1 style={{ color: 'green' }}>Devs</h1>
                            </div>
                            <p className="card-text">application web blog laravel - react_js 2022</p>
                            <div className="social mt-2 mb-3"> <i className="fa fa-facebook-official fa-lg"></i> <i className="fa fa-instagram fa-lg"></i> <i className="fa fa-twitter fa-lg"></i> <i className="fa fa-linkedin-square fa-lg"></i> <i className="fa fa-facebook"></i> </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Industries</h5>
                        <ul className="card-text">
                            <li>Finance</li>
                            <li>Public Sector</li>
                            <li>Smart Office</li>
                            <li>Retail</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Company</h5>
                        <ul className="card-text">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                </div>
                <div className="divider mb-4"> </div>
                <div className="row" style={{ fontsize: '10px' }}>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-left">
                            <p ><i className="fa fa-copyright"></i> 2022 MUC</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
