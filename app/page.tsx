import React from "react";
import Link from 'next/link'
import contact from "./Contact/page";
const Homepage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="/BudBuddy.png" alt="BudBuddy" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              < Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              < Link href = "/About">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1 className="heroTitle">BudBuddy </h1>
        <p className="heroDescription">
        Our mission is to make Medical Cannabis far more accessible and build a strong connection with other dispensary

        </p>
        <a href="#" className="heroButton">Get Started</a>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="featuresGrid">
          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-automation.svg" />
            </svg>
            <h3>Automation</h3>
            <p>Automate repetitive tasks and free up your team to focus on strategic work.</p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-efficiency.svg" />
            </svg>
            <h3>Efficiency</h3>
            <p>Improve efficiency and reduce costs with our AI-powered solutions.</p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-insights.svg" />
            </svg>
            <h3>Insights</h3>
            <p>Gain actionable insights from your data to make better business decisions.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to get started?</h2>
        <a href="#" className="ctaButton">Sign Up for Free</a>
      </section>
    </div>
 
  );
};
    
export default Homepage;
