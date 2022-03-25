import { stringify } from 'postcss';
import React, { useState, useEffect } from 'react'


export const Add = () => {
    const [form, setForm] = useState({
        title: "",
        catagory: "",
        name: "",
        content1: "",
        content2: "",
        content3: "",
        image1: "",
        image2: "",
        image3: ""
    });
    const [check, setCheck] = useState(false);

    const handleChangle = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    const handleForm = (e) => {
        e.preventDefault();
        if (form.title === "" || form.catagory === "" || form.name === "" || form.content1 === "" ||
            form.content2 === "" || form.content3 === "" || form.image1 === "" || form.image2 === "" || form.image3 === "") {
            alert("Vui lòng Nhập tất cả thông tin !!!! ");
        } else
            setCheck(true);
    }


    useEffect(() => {
        if (check) {
            fetch('/api/blog/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then((Response) => console.log(Response))
                .catch((error) => console.log(error))
            alert("Thêm vào cơ sở dữ liệu !!! Thành công !!!");
            setForm({
                title: "",
                catagory: "",
                name: "",
                content1: "",
                content2: "",
                content3: "",
                image1: "",
                image2: "",
                image3: ""
            })
        }
        setCheck(false)
    }, [check])



    return (
        <div className='form-group'>
            <br />
            <form onSubmit={handleForm}>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" name="title" value={form.title} className="form-control" aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <div className="form-group">
                    <label>Catagory</label>
                    <input type="text" name="catagory" value={form.catagory} className="form-control" aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} className="form-control" aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <div className="form-group mr-5">
                    <label htmlFor="exampleInputPassword1">Content1</label>
                    <textarea className="row" name="content1" value={form.content1} id="" cols="160" rows="10" onChange={handleChangle}></textarea>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content2</label>
                    <textarea className="row" name="content2" id="" value={form.content2} cols="160" rows="10" onChange={handleChangle}></textarea>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content3</label>
                    <textarea className="row" name="content3" id="" cols="160" value={form.content3} rows="10" onChange={handleChangle}></textarea>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">image1</label>
                    <input type="text" name="image1" className="form-control" value={form.image1} aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">image2</label>
                    <input type="text" name="image2" className="form-control" value={form.image2} aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">image3</label>
                    <input type="text" name="image3" className="form-control" value={form.image3} aria-describedby="emailHelp" onChange={handleChangle} />

                </div>
                <br />
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </div>
    )
}
