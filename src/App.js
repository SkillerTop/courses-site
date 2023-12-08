import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import { popularCourses, newCourses } from './components/buyCoursesData';
import { Auth0Provider } from '@auth0/auth0-react';
import config from './auth-config.json';

function App() {
    return (
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}
            redirectUri={config.redirectUri}
        >
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/purchase/:id" element={<CoursePage courses={popularCourses} />} />
                        <Route path="/purchase/new/:id" element={<CoursePage courses={newCourses} />} />
                        <Route path="/" element={<HomePage popularCourses={popularCourses} newCourses={newCourses} />} />
                    </Routes>
                </div>
            </Router>
        </Auth0Provider>
    );
}

export default App;;