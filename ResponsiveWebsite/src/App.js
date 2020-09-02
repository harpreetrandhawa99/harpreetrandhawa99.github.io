import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header" id="home">
        <div className="container5">
          <div id="box">
            <img src="https://i.imgur.com/JpeUHd0.jpg" alt="Me" id="cover" />
          </div>
        </div>
        <br></br>
        {/* <h1 className="App-title"> Harpreet Randhawa</h1>
        <h3> Programmer</h3> */}
        <div className="titlebox">
          <h1 className="App-title"> Harpreet Randhawa</h1>
          <p className="languages">
            {" "}
            ---------------------------------------------------------
          </p>
          <pre className="languages">Java C SQL HTML CSS Javascript React</pre>
        </div>
      </header>
    );
  }
}

const AboutMe = () => {
  return (
    <div className="App-header-aboutme" id="aboutme">
      <img
        src="https://i.imgur.com/aPXktjh.jpg"
        alt="friends"
        className="aboutmepictures"
      />
      <img
        src="https://i.imgur.com/RBjENph.jpg"
        alt="hike"
        className="aboutmepictures"
      />

      <img
        src="https://i.imgur.com/AUEUz3Z.jpg"
        alt="bench"
        className="aboutmepictures"
      />
      <img
        src="https://i.imgur.com/FUXcBIv.jpg"
        alt="cat"
        className="aboutmepictures"
      />
      <div className="aboutmecontainer">
        <br />

        <h4>
          <h1 className="aboutmedash">About me!</h1>
        </h4>
        <p className="aboutmedash">
          {" "}
          ---------------------------------------------------------
        </p>
        <p className="welcome">
          {" "}
          Hello and welcome to my website! My name is Harpreet Randhawa and I am
          majoring in Computer Science at Rutgers University. I've always been
          interested in technology ever since I was a child and once I learned
          that software, technology, games and etc. were able to be accomplished
          due to coding, that really got me interested in this field. In my free
          time I love spending time with my friends and going hiking once in
          awhile to enjoy the beauty of nature. I started lifting weights
          torwards the end of High School and fell in love with it ever since.
          Also here's a bonus of my cat named Mow!{" "}
        </p>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="App-header-resume" id="resume">
      <img
        src="https://i.imgur.com/exTHtqj.jpg"
        alt="resume"
        className="resume"
      />
    </div>
  );
};

const Comments = () => {
  return (
    <div className="App-header-comments" id="comments">
      <h1 className="commentstitle"> Summer Internship Comments </h1>
      <p className="commentstitle">
        {" "}
        -------------------------------------------------------------------------------------
      </p>
      <p className="comments">
        "Harpreet has an excellent work ethic. He is curious about Bessemer's
        business, eager to learn about various enterprise technologies and
        completes the tasks assigned to him on time. He works well with my team
        as well as other colleague across the firm. The group project gave him
        the opportunity to collaborate with other interns & their managers and
        organize their project deliverables. His attitude is always positive &
        cheerful. He is on track to complete work on some of our real Bessemer
        business workflows used in Production."{" "}
      </p>
      <br />
      <p className="comments">
        "Within 8 short weeks, Harpreet was able to absorb a lot of key
        enterprise IT concepts, web development, architecture, security, etc.
        and apply them to rebuild a Bessemer business workflow that will be used
        in Production by the FOS team. The remote work arrangement was a
        challenge but he was able to overcome it and work & collaborate
        effectively with the team. Harpreet - I speak on behalf of all my
        colleagues, you were a pleasure to work with. Good luck with college and
        best wishes for your future! Stay in touch"
      </p>
      <br />
      <p className="comments">
        "For someone with no experience in K2, he was able to learn the basics
        quickly and put them into practice by taking advantage of tutorials and
        videos. I was impressed that he was not afraid to ask questions in a
        timely manner."
      </p>
      <br />
      <p className="comments">
        "Very ambitious and excited to get in the field."{" "}
      </p>
      <br />
      <p className="comments">
        "Tendency to rush through a technical demo/wallkthrough - Understandable
        due to "youthful enthusiasm". Just slow down a little and you'll be
        fine!"
      </p>
      <p className="comments">"Harpreet was a pleasure to work with"</p>
      <br />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="App-header-contact" id="contact">
      <h1 className="commentstitle"> Contact Information </h1>
      <p className="commentstitle">
        {" "}
        -------------------------------------------------------------------------------------
      </p>

      <div>
        <p className="logotext">
          {" "}
          <img
            src="https://image.flaticon.com/icons/png/512/8/8807.png"
            alt="emaillogo"
            className="logo"
          />
        </p>
        <p className="logotext">harpreetsrandhawa99@gmail.com </p>
      </div>

      <div>
        <p className="linkedinlinkk">
          {" "}
          <a
            href="https://www.linkedin.com/in/harpreet-randhawa-965695159/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
              alt="linkedinlogo"
              className="logo"
            />
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/harpreet-randhawa-965695159/"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <p className="linkedinlinkk">
            https://www.linkedin.com/in/harpreet-randhawa-965695159/
          </p>
        </a>
      </div>

      <div>
        <p className="logotext">
          {" "}
          <img
            src="https://i.pinimg.com/originals/b5/d7/19/b5d7198734ee5174b581630628ecfdd6.png"
            alt="phonelogo"
            className="logo"
          />
        </p>
        <p className="logotext">848-228-6014 </p>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <AboutMe />
        <Resume />
        <Comments />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
