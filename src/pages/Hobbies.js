import '../App.css';
import React from 'react'; 

function Hobbies() {
  return (
    <div className="MainContent">
      <h1>Hobbies</h1>
      <p>
        In my free time, I enjoy baking, hiking, and traveling. Here are some photos from my adventures and some of my favorite baked goods I've made!
      </p>

      <h2>Baking Creations</h2>
      <p>
        I love baking bread, cakes, and pastries. I try to post my creations on Instagram, follow me at <a href="https://www.instagram.com/themidnightbreadery/">@themidnightbreadery</a>!
      </p>
      <img src="instashot.png" alt="The Midnight Breadery Instagram" style={{ width: '500px', margin: '10px' }} />
      <p>
        Most recently, I made a wedding cake for a friend. As a casual home baker, this was a rewarding challenge to take on. It's a three-tiered cake with handmade fondant flowers. 
      </p>
      <img src="weddingcake.jpg" alt="Wedding Cake" style={{ width: '500px', margin: '10px' }} />

      <h2>Recent Travels</h2>
      <div className="column">
        <img src="gorge1.jpg" alt="Hiking 1" style={{ width: '300px', margin: '10px' }} />
        <img src="cliff.jpg" alt="Hiking 2" style={{ width: '300px', margin: '10px' }} />
      </div>
      <div className="column">
        <img src="headlight.jpg" alt="Travel 1" style={{ width: '300px', margin: '10px' }} />
        <img src="shroom3.jpg" alt="Travel 2" style={{ width: '300px', margin: '10px' }} />
      </div>

      
    </div>
  );
}

export default Hobbies;