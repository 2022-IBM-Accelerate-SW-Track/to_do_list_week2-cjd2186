import React, { Component } from 'react';

import "./About.css";
import chris_prof_pic from "../assets/chris_prof_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src = {chris_prof_pic}
              alt = "Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title"> Christopher Demirjian</div>
            <div className="brief_description">
              Christopher grew up in Westchester New York and currently studies computer science at Columbia University in New York City.
            </div>
            <div className="brief_description">
              Christopher loves animals, and has two dogs!
            </div>
          </div>
        </div>
      </div>
    )
  }
}