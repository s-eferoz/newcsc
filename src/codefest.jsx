import React from 'react';
import { Link } from 'react-router-dom';

const CodefestPage = () => {
  return (
    <div>
      <header>
        <h1>Spooktastic Codefest</h1>
      </header>

      <section id="about">
        <h2>About Codefest</h2>
        <p>
          Spooktastic CodeFest is an exciting Tech ExPo style event hosted by the{' '}
          <Link to="/about">CS Council</Link>, aimed at providing older elementary school and middle school students with an exploratory view of STEM topics. The event features a diverse selection of booths, tables, and speakers, offering a panoramic experience of the world of technology. We invite you to join us at{' '}
          <a href="ehs.lwsd.org">Eastlake High School</a> from 5 to 8 PM on October 26 for a night of fun and learning!
        </p>
      </section>

      <section id="activities">
        <h2>Activities</h2>
        <p>Winterfest offers a range of engaging activities, including</p>
        <ul>
          <li>In-person booths and exhibits</li>
          <li>Jane Street Estimathon</li>
          <li>CS Trivia Bowl </li>
          <li>Two Guest Speakers</li>
        </ul>
        <p>Join us to experience the wonders of science and technology!</p>
      </section>

      <section id="schedule">
        <h2>Schedule</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Language Models Workshop</th>
              <th>Introduction to Python Workshop </th>
              <th>Web Scraping Workshop</th>
              <th>Guest Speaker</th>
              <th>CS Trivia</th>
              <th>Estimathon</th>
              <th>CS Fair Booths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Location</td>
              <td>C109</td>
              <td>C112</td>
              <td>C117</td>
              <td>Commons</td>
              <td>Commons</td>
              <td>Commons</td>
              <td>Main Gym</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>5:15-6; 7:15-8</td>
              <td>5:15-6; 7:15-8</td>
              <td>5:15-6; 7:15-8</td>
              <td>5:15-6; 7:15-8</td>
              <td>6:05-6:35</td>
              <td>6:40-7:15</td>
              <td>5-8:30</td>
            </tr>
          </tbody>
        </table>
        For directions, please find one of the volunteers posted around the school on October 26!
      </section>

      <section id="signup">
        <h2>Sign Up Here</h2>
        <img src="/static/images/Codefest Flyer.jpg" width="25%" alt="Codefest Flyer" />
        <br />
        <a href="https://forms.gle/2x77qA669dwNCavw6">Sign up here!</a>
      </section>

      <section id="sponsors">
        <h2> Our supporters and sponsors</h2>
        <div className=".panel-section">
          <div className="panel">
            <img src="/static/images/janestreet.jpg" alt="Jane Street" />
            <p>Jane Street</p>
          </div>
        </div>
        <div className=".panel-section">
          <div className="panel">
            <img src="/static/images/lwsd.jpg" alt="LWSD and Eastlake High School" />
            <p>LWSD and Eastlake High School</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodefestPage;
