import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About CS Council</h1>
      </header>
      <section id="about-us">
        CS Council, a club at <a href="ehs.lwsd.org">Eastlake High School</a>, is the premier STEM outreach program in LWSD, focusing on CS-related activities and events for middle and elementary schoolers in the school district club. We consist of a dedicated group of CSHS members working together as a close-knit team to plan and execute events. Our projects impact hundreds of LWSD students annually.
      </section>
      <section id="members">
        <h3>Officers</h3>
        <ul>
          <li>Co-President: Aakarsh Agrawal</li>
          <li>Co-President: Hongning Wang</li>
          <li>Vice President: Prisha Shah</li>
        </ul>
        <h3>Advisors</h3>
        <ul>
          <li>Ms. Eilene Klaka</li>
        </ul>
        <h3>Members</h3>
        <ul>
          <li>Corey Zhang</li>
          <li>Rithvik Rathinasabapathy</li>
          <li>Adithya Saby</li>
          <li>Sahil Tanpure</li>
          <li>Isha Sudhir</li>
          <li>Pranav Tripathi</li>
          <li>Tanya Nair</li>
          <li>Eshan Feroz</li>
          <li>Sara Sunil</li>
          <li>Gowtham Senthilkumar</li>
          <li>Medha Singitham</li>
          <li>Eva Tang</li>
          <li>Alec Varotto</li>
          <li>Justin Brown</li>
          <li>Harshit Agrawal</li>
          <li>Anya Mahesh</li>
          <li>Neha Rao</li>
          <li>Winston Luo</li>
          <li>Lan Nhi Nguyen</li>
          <li>Shanaya Shah</li>
          <li>Ruohan Huang</li>
        </ul>
      </section>
      <Link to="/codefest">Go to Codefest</Link>
    </div>
  );
};

export default AboutPage;
