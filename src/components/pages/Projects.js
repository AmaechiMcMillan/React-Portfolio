import React from "react";

export default function Projects() {
  return (
    <div>
      <h1> My Projects</h1>
      {/* <p> */}
      {/* <img src="https://via.placeholder.com/200" alt="Your Name" />
        <a href="#">https://github.com/AmaechiMcMillan/FamilyTree</a>
        <img src="https://via.placeholder.com/200" alt="Your Name" />
        <a href="#">https://github.com/AmaechiMcMillan/MoviesRUs</a>
        <img src="https://via.placeholder.com/200" alt="Your Name" /> */}
      {/* </p> */}
      {/* <img
        src="https://via.placeholder.com/200"
        class="card-img-top"
        alt="Amaechi McMillan"
      /> */}
      <div class="card-body card w-25">
        <h5 class="card-title">Family Tree</h5>
        <p class="card-text">
          This is an app that helps you keep track of your family members.
        </p>
        <a
          href="https://github.com/AmaechiMcMillan/FamilyTree"
          class="btn btn-primary"
        >
          FamilyTree
        </a>
      </div>
      <div class="card-body card w-25">
        <h5 class="card-title">MoviesRUs</h5>
        <p class="card-text">
          This app was made to be able to search your favorite movie quickly.
        </p>
        <a
          href="https://github.com/AmaechiMcMillan/MoviesRUs"
          class="btn btn-primary"
        >
          MoviesRUs
        </a>
      </div>
      <div class="card-body card w-25">
        <h5 class="card-title">TravelX</h5>
        <p class="card-text">
          This app allows you to quickly and efficiently schedule a trip via
          flight, hotel and activities in you local area.
        </p>
        <a
          href="https://github.com/AmaechiMcMillan/TravelX"
          class="btn btn-primary"
        >
          TravelX
        </a>
      </div>
    </div>
  );
}
