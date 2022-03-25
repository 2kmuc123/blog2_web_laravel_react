import React from 'react'
import './Contact.scss'

export const Contact = () => {
    return (
        <div className="container Contact">
            <div className="row">
                <div className="col">


                    <div className="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="row">

                <div className="col-lg-6 contact_col">
                    <div className="contact_contents">
                        <h1>Liên Hệ</h1>
                        <p>Có nhiều cách để liên hệ với chúng tôi. Bạn có thể gọi cho chung tôi qua số điện thoại, email ... hãy chọn cách phù hợp với bạn nhất</p>
                        <div>
                            <p>0845721868</p>
                            <p>muc.tvh.2201@gmail.com</p>
                        </div>
                        <div>
                            <p>mm</p>
                        </div>
                        <div>
                            <p>Thứ 2 - 6 : 07h30 - 18h30</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>


                    <div className="follow_us_contents">
                        <h1>Follow Us</h1>
                        <ul className="social d-flex flex-row">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>

                <div className="col-lg-6 get_in_touch_col">
                    <div className="get_in_touch_contents">
                        <h1>Gửi lời nhắn</h1>
                        <p>Fill out the form below to recieve a free and confidential.</p>
                        <form action="post">
                            <div>
                                <input id="input_name" className="form_input input_name input_ph" type="text" name="name" placeholder="Name" required="required" data-error="Name is required." />
                                <input id="input_email" className="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required." />
                                <input id="input_website" className="form_input input_website input_ph" type="url" name="name" placeholder="Website" required="required" data-error="Name is required." />
                                <textarea id="input_message" className="input_ph input_message" name="message" placeholder="Message" rows="3" required data-error="Please, write us a message."></textarea>
                            </div>
                            <div>
                                <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">send message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}
