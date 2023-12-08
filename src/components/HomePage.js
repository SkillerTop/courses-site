import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-style.css';
import { popularCourses, newCourses } from './coursesData';
const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the website for selling courses!</h1>
                <p>Improve your knowledge with our training courses.</p>
            </header>

            <section>
                <h2>Popular courses</h2>
                <div className="courses-container">
                    {popularCourses.map((course, index) => (
                        <div key={index} className="course">
                            <img src={course.imageSrc} alt={course.title} />
                            <Link to={`/purchase/${index + 1}`} className="course-link">
                                <h3>{course.title}</h3></Link>
                            <p>{course.description}</p>
                            <p>Instructor: {course.instructor}</p>
                            <p>Price: ${course.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>New courses</h2>
                <div className="courses-container">
                    {newCourses.map((course, index) => (
                        <div key={index} className="course">
                            <img src={course.imageSrc} alt={course.title} />
                            <Link to={`/purchase/new/${index + 1}`} className="course-link">
                                <h3>{course.title}</h3></Link>
                            <p>{course.description}</p>
                            <p>Instructor: {course.instructor}</p>
                            <p>Price: ${course.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>How it works</h2>
                <p>
                    Find out how you can access our courses and improve your skills.
                    Discover the seamless process of accessing our courses and enhancing your skills:

                    Explore Courses: Browse through our diverse selection of courses covering various subjects and skill levels.

                    Choose Your Path: Select the courses that align with your learning goals and interests.

                    Sign Up: Create an account to unlock a personalized learning experience and track your progress.

                    Learn at Your Pace: Dive into our well-structured lessons at your own pace, with the flexibility to revisit content.

                    Practice and Apply: Reinforce your learning through practical exercises and real-world applications.

                    Engage with Community: Connect with fellow learners, share insights, and participate in discussions to enhance your understanding.

                    Start your learning journey today and witness the positive impact on your knowledge and expertise.
                </p>
            </section>

            <section>
                <h2>Why should you choose our courses?</h2>
                <p>
                    We offer you high-quality courses from leading industry experts.
                    At our courses, we prioritize your learning journey. Here's why choosing us is the right decision:

                    Expert Instructors: Learn from industry professionals and experienced instructors dedicated to your success.

                    Comprehensive Content: Access courses that cover a wide range of topics, ensuring a holistic learning experience.

                    Practical Skills: Gain hands-on, practical skills that you can apply in real-world scenarios.

                    Flexible Learning: Our courses offer flexibility, allowing you to learn at your own pace and on your schedule.

                    Supportive Community: Join a community of learners, fostering collaboration and knowledge-sharing.

                    Choose us for a rewarding educational experience and take the next step in advancing your skills and career.
                </p>
            </section>
        </div>
    );
};

export default HomePage;