import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './components/Login';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';

function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <RoutesPrivate path="/" exact component={Landing} />
                <Route path="/lista-postos" component={TeacherList} />
                <Route path="/cadastrar-postos" component={TeacherForm} />
                <Route path="/login" component={Login} />
            </StoreProvider>
        </BrowserRouter>
    );
}

export default Routes;