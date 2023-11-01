import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Home.css";
import bg_img from "../Images/bg2.jpg";
import CardHandler from "./CardHandler";
import img from '../Images/image1.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <header className="container">
        <img src={bg_img} className="bg_img" />
        
        <nav>
    <div className="navbar">
      <div className="logo"><img src={img} className="logo" /></div>
      <ul className="menu">
        <li><Link exact to="/" className="navbar1">Home</Link></li>
        <li><Link to="/aboutus" className="link">About Us</Link></li>
        <li><Link to="/solutions" className="link">Category</Link></li>
        <li><Link to="/contact" className="link">Contact Us</Link></li>
        
      </ul>
    </div>
  </nav>
  



        <div className="container_content">
          <h2>Ready for the Future</h2>
          <p>
            Wisdom Tree Analytics is a dynamic and forward-thinking data
            analytics company that has made its mark in the field of data-driven
            insights and business intelligence. With a commitment to harnessing
            the power of data to drive strategic decision-making, Wisdom Tree
            Analytics offers innovative solutions and services to help
            businesses thrive in the ever-evolving digital landscape.{" "}
          </p>
        </div>
        <div className="shadow"></div>
      </header>

    
      <section className="section1">
      <div className="section1_div1">
        <h2>Digital Transformation and Strategy</h2>
        </div>
        <div className="section1_div2">
        <p>
        Digital transformation is a comprehensive process that leverages cutting-edge technology and innovative strategies to revolutionize the way businesses operate.
          <br />
          It's not just about adopting new tools or digital platforms; it's a fundamental shift in an organization's culture and operations.
          <br />
          A well-crafted digital transformation strategy is the compass that guides this journey. It begins with a clear understanding of an organization's goals and a deep analysis of its current state. By identifying areas that can benefit from digitization, businesses can streamline operations, enhance customer experiences, and drive growth. 
          <br />
          Furthermore, a robust digital transformation strategy ensures alignment with long-term objectives and adaptability to the ever-evolving technological landscape. It encourages continuous learning and fosters a culture of innovation, enabling companies to thrive in an increasingly digital world.
          <br />
          In today's fast-paced business environment, a thoughtful digital transformation strategy is not a luxury but a necessity for staying competitive and relevant.
        </p>
        </div>
      </section>

      <section className="section2">
      <CardHandler />
      </section>

      <div className="aboutus">
      <h2>About Us</h2>
      <p>Wisdom Tree Analytics stands as a pioneering force in the realm of data analytics, offering a comprehensive suite of services to help businesses thrive in today's data-centric landscape. With a seasoned team of data scientists and analysts, the company possesses an exceptional ability to distill complex data into actionable insights. Wisdom Tree Analytics takes pride in its commitment to aiding organizations from various sectors in making well-informed decisions and achieving a competitive advantage.<br />

      As a trusted partner in data transformation, Wisdom Tree Analytics brings together cutting-edge technology and industry expertise to unlock the potential of data. Their solutions span from data collection and cleansing to advanced predictive modeling and machine learning, ensuring clients can harness the full power of their information assets. With a strong track record of success and a dedication to excellence, Wisdom Tree Analytics is the go-to choice for those seeking to turn raw data into a strategic asset that drives growth and innovation.</p>
      </div>

      <div className="aboutus">
      <h2>Our Vision</h2>
      <p>We serve individuals to fly high and prosper in the new era of digitization. We do this by ramping up digital solutions for web, mobile, tablets and build brands’ prestigious status. We at IT Idol Technologies always keeping ourselves up to date with the latest trends and technologies which will help our customers to gain huge success.</p>
      </div>

      <div className="aboutus">
      <h2>Our Approach</h2>
      <p>We are a Team of Dedicated Professionals focused on providing Quality & Value Based Information Technology Solutions of Application Development for Apps Targeting Various Platforms in use by wide masses. variety of Consumer Devices In today`s day & age of consumer oriented mass market, Digital Services are forming the literal Back-Bone ( one that quite seriously affects your Bank balance) of the plethora of business operations of for any Business &/ Entity, be it either they are an already established, reputed business presence or just a fresh set of graduates (or undergraduates:-) seeking to just set a foot in an already very competitive and “Bursting at the Seams” market.</p>
      </div>

      <div className="aboutus">
      <h2>Our Process</h2>
      <p>Success for You is what drives us to stay updated with all relevant Information Technologies which would enable us to set & maintain a strong foothold in the area of operation for your esteemed endeavor. As it’s our Professional Policy to determine our very own success with the direct success of our clients. Being a Professional Application Developer (Apps targeting a multitude of platforms, like web ios, android & also the ubiquitous Desktop). we do offer a wide range of information technology services towards ensuring that you (our client) do have to rely on bits ‘n pieces sort of implemented product but can just focus on getting what you are looking for.</p>
      </div>



      <footer className="footer-main bg-dark" id="Contact">
      <div className="container">
        <div className="row address-main">
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-icon">
                <img src="Img/footer-icon-01.png" alt="" />
              </div>
              <div className="add-content">
                <h5>Address</h5>
                <p> Sun City Chandil
                Plot 1245/A
                Pincode:- 832401
                Jharkhand, India </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-icon">
                <img src="Img/footer-icon-02.png" alt="" />
              </div>
              <div className="add-content">
                <h5>Phone</h5>
                <p>  +(91) 7979061286 </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-icon">
                <img src="Img/footer-icon-03.png" alt="" />
              </div>
              <div className="add-content">
                <h5>Email</h5>
                <p> <a href="mailto:contact@wisdomtreeanalytics.com" style={{textecoration:"none"}}>contact@wisdomtreeanalytics.com</a> </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    
    <footer className="bg-dark text-center text-white">
    
    <div className="container p-4 pb-0">
      <section className="mb-4">

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a>
    
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter"></i></a>
    
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a>
    
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>
    
      </section>
      
    </div>

    
    
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    Wisdom Tree Analytics © 2023 All Rights Reserved.
    </div>

    </footer>
    </footer>

    </Fragment>
  );
};

export default Home;
