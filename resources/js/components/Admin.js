import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Ad } from './Admin/Ad';
import { Add } from './Admin/Add';
import { Edit } from './Admin/Edit';
import { Home } from './Admin/Home'
import { Homelist } from './Admin/Homelist';
import { List } from './Admin/List';
import { Navbar } from './Admin/Navbar';
import { User } from './Admin/User';

function Admin() {
    return (
        <BrowserRouter>
            <StrictMode>
                <div className="container">
                    <Navbar />
                    <Routes>
                        <Route path='admin' >
                            <Route path='' element={<Ad />} />
                            <Route path='Home' element={<Home />}>
                                <Route path='' element={<Homelist />} />
                                <Route path='Add' element={<Add />} />
                                <Route path='edit/:id' element={<Edit />} />
                            </Route>
                            <Route path='List' element={<List />} />
                            <Route path='List/edit/:id' element={<Edit />} />
                            <Route path='User' element={<User />} />

                        </Route>
                    </Routes>
                </div>
            </StrictMode>
        </BrowserRouter >
    )
}

export default Admin;

if (document.getElementById('Admin')) {
    ReactDOM.render(<Admin />, document.getElementById('Admin'));
}
