import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Homelist = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [iddelete, setIddelete] = useState();

    useEffect(() => {
        fetch('/api/blog')
            .then(Response => Response.json())
            .then((okdata) => {
                setData(okdata)
                setLoading(false);
            })
    }, [])
    useEffect(() => {
        if (iddelete) {
            alert(`Xóa bài viết có id : ${iddelete}`);
            fetch(`/api/blog/delete/${iddelete}`, {
                method: 'DELETE',
            })
                .then((Response) => console.log(Response))
        }

    }, [iddelete])


    if (loading) {
        return <img src='https://cdn.dribbble.com/users/1118376/screenshots/2741708/dog-walk-cycle.gif' className='img-responsive center-block d-block mx-auto' />
    }
    return (
        <div>
            {
                data.map((data) => (
                    <div key={data.id}>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <img src={data.image1} className="img-thumbnail rounded float-left img-fluid" alt="" width="250px" height="150px"></img>
                            <img src={data.image2} className="img-thumbnail rounded float-left img-fluid" alt="" width="250px" height="150px"></img>
                            <img src={data.image3} className="img-thumbnail rounded float-left img-fluid" alt="" width="250px" height="150px"></img>
                        </div>
                        <div className="mr-5" style={{ padding: "5px", marginRight: '5px' }}>
                            <h2 className="row">{data.title}</h2>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-warning m-3 p-3 " to={`edit/${data.id}`}>Sửa</Link>
                                <button className="btn btn-danger m-3 p-3" onClick={(e) => setIddelete(data.id)}>Xóa</button>
                            </div>
                            <p>{data.content1}</p>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div >

    )
}
