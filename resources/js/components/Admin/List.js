import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const List = () => {
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
            <br /><br /><br />
            <h1 className='text-center'>BLOG CỦA ANH HỢP ĐANG ĐƯỢC ĐIỀU CHẾ !!!</h1><br /><br />
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Name</th>
                        <th scope="col">Content1</th>
                        <th scope="col">image1</th>
                        <th scope="col">sửa</th>
                        <th scope="col">xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.catagory}</td>
                                <td>{data.name}</td>
                                <td>{data.content1}</td>
                                <td><img src={data.image1} width='90px' /></td>
                                <td><Link className="btn btn-warning" to={`edit/${data.id}`}>Sửa</Link></td>
                                <td><button className="btn btn-danger" onClick={(e) => setIddelete(data.id)}> Xóa</button></td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>

        </div >
    )
}
