import React from 'react';
import ReactDOM from 'react-dom/client';
import { publicRoutes } from './Route';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />;
                    })}
                    
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
);


