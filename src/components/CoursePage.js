import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import '../styles/home-style.css';

const CoursePage = ({ courses }) => {
    const { id } = useParams();
    const course = courses[parseInt(id, 10) - 1];
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    if (!course) {
        return <div>Course not found</div>;
    }

    const handleBuyClick = () => {
        if (isAuthenticated) {
            console.log(`Buying course: ${course.title}`);
        } else {
            loginWithRedirect();
        }
    };

    return (
        <div className="course-page-container">
            <Link to="/">Go back to homepage</Link>
            <h2>{course.title}</h2>
            <img src={course.imageSrc} alt={course.title} />
            <p>{course.description}</p>
            <p className="instructor-info">Instructor: {course.instructor}</p>
            <p className="price-info">Price: ${course.price}</p>
            <button onClick={handleBuyClick}>Buy Now</button>
        </div>
    );
};

export default withAuthenticationRequired(CoursePage);
