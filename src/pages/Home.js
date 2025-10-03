import "../App.css";
import React from "react";

function contactLink(href, imgSrc, text) {
  return (
    <a
      href={href}
      style={{
        fontSize: "0.8em",
        display: "flex",
        flexWrap: "nowrap",
        marginRight: "15px",
        height: "30px",
      }}
    >
      <img
        src={imgSrc}
        style={{
          width: "20px",
          height: "20px",
          display: "flex",
          marginRight: "5px",
        }}
        alt={text}
      />
      <p style={{ flexWrap: "nowrap" }}>{text}</p>
    </a>
  );
}

function Home() {
  return (
    <div className="MainContent">
      <h1>Lavanya Bharani</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // or "space-between", "space-around"
          height: "50px",
        }}
      >
        {contactLink(
          "mailto:lbharani99@gmail.com",
          "email.avif",
          "lbharani99@gmail.com"
        )}

        {contactLink(
          "https://www.linkedin.com/in/lavanya-bharani",
          "linkedin.png",
          "LinkedIn"
        )}

        {contactLink("https://github.com/laviosa9", "github.png", "Github")}
      </div>
      <p>
        My name is Lavanya and I'm an engineer, baker, and plant-mom. I've just
        graduated with my Master's in Data Science and am looking for my next
        adventure in tech! This is a space for me to share projects,
        accomplishments, and hobbies with the world.
      </p>
    </div>
  );
}

export default Home;
