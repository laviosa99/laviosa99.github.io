import '../App.css';
import React from 'react'; 

function Home() {
  return (
    <div className="MainContent">
      <h1>Lavanya Bharani</h1>
      <div 
        style={{ 
          display: "inline-flex", 
          justifyContent: "center",  // or "space-between", "space-around"
          gap: "10px",              // optional spacing between links
          marginBottom: "20px",      // optional spacing below
          flexWrap: "nowrap"
        }}
>
      {/* Email */}
      <a
        href="mailto:lbharani99@gmail.com"
        style={{ fontSize: "0.8em", display: "inline-flex" }}
      >
        <img 
          src="email.avif"  
          style={{ width: "1em", height: "1em", display: "flex", marginRight: "7px" }} 
          alt="email"
        />
        lbharani99@gmail.com 
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/lavanya-bharani"
        style={{ fontSize: "0.8em", display: "inline-flex", marginLeft: "10px" }}
      >
        <img 
          src="linkedin.png"  
          style={{ width: "0.9em", height: "0.9em", display: "inline-flex", marginRight: "7px" }} 
          alt="linkedin"
        />
        linkedin.com/in/lavanya-bharani 
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/laviosa99"
        style={{ fontSize: "0.8em", display: "inline-flex", marginLeft: "10px" }}
      >
        <img 
          src="github.png"  
          style={{ width: "0.9em", height: "0.9em", display: "inline", marginRight: "7px" }} 
          alt="github"
        />
        github.com/laviosa99
      </a>
      </div>
      <p>
        My name is Lavanya and I'm an engineer, baker, and plant-mom. I've just graduated with my Master's in Data Science and am looking for my next adventure in tech! This is a space for me to share projects, accomplishments, and hobbies with the world.
      </p>

      
    </div>
  );
}

export default Home;
