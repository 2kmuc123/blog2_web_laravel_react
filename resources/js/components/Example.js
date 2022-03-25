import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from './pages/Navbar'
import { Home } from './pages/Home'
import { Footer } from './pages/Footer';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Error404 } from './pages/error404';
import { Baiviet } from './pages/Baiviet';

function Example() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/*' element={<Error404 />} />
                    <Route path='Home' element={<Home />} />
                    <Route path='Blog' element={<Blog />} />
                    <Route path='Contact' element={<Contact />} />
                    <Route path=':id' element={<Baiviet />} />
                    <Route path='Home/:id' element={<Baiviet />} />
                    <Route path='Blog/:id' element={<Baiviet />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter >

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
