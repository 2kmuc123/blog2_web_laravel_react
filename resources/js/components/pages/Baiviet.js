import { divide } from 'lodash';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

export const Baiviet = () => {
    let params = useParams();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`/api/blog/${params.id}`)
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
        <div className='m-3 mt-5'>
            <img src={data.image1} width='100%' alt="" height='600em' />
            <div className='mt-5 p-5'>
                <h1 className='h1 text-justify' style={{ fontWeight: 'bold', color: 'green' }} >{data.title}</h1>
                <h5 className="meta-category mt-5" style={{ fontWeight: 'bold', color: 'orange' }}>{data.catagory} | <span style={{ color: 'blue' }}>{data.created_at}</span></h5>
                <div className='mt-5'>
                    <h4 className='text-justify' >{data.content1}</h4>
                    <img className='img-responsive center-block d-block mx-auto m-5' src={data.image2} width='75%' alt="" />
                    <h4 className='text-justify' >{data.content2}</h4>
                    <img className='img-responsive center-block d-block mx-auto m-5' src={data.image3} width='75%' alt="" />
                    <h4 className='text-justify' >{data.content3}</h4>
                    <h3 className="m-5" style={{ fontWeight: 'bold', textAlign: 'right', color: 'green' }}>Theo : {data.name}</h3>
                </div>

            </div>
        </div>

    );
}
