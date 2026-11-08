
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2>Estate<span>Pro</span></h2>
        <div>
          <a href="#">Home</a>
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Contact</a>
        </div>
        <button>Login</button>
      </nav>

      <section className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Discover the perfect property for your future.</p>

        <div className="search">
          <input placeholder="Enter city or location" />
          <select>
            <option>Buy</option>
            <option>Rent</option>
          </select>
          <button>Search Properties</button>
        </div>
      </section>

      <section className="properties">
        <h2>Featured Properties</h2>

        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" />
            <h3>Luxury Modern Villa</h3>
            <p>Bangalore, India</p>
            <h3>₹1.5 Crore</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600" />
            <h3>Premium Apartment</h3>
            <p>Mangalore, India</p>
            <h3>₹85 Lakhs</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600" />
            <h3>Beautiful Family House</h3>
            <p>Udupi, India</p>
            <h3>₹65 Lakhs</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

