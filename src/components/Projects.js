import React from "react";
import DragonStack from "./projectCards/DragonStack";
import MusicMaster from "./projectCards/MusicMaster";
import PictureSearch from "./projectCards/PictureSearch";
import Countdown from "./projectCards/Countdown";
import Animation from "./projectCards/Animation";

const Projects = () => {
  return (
    <div className="ui three doubling stackable cards">
      <MusicMaster />
      <PictureSearch />
      <Animation />
      <DragonStack />
      <Countdown />
    </div>
  );
};

export default Projects;

// <div class="ui three doubling stackable cards"><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/patrick.png">
//       </div>
//       <div class="content">
//         <a class="header">Patrick</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/cassie.png">
//       </div>
//       <div class="content">
//         <a class="header">Cassie</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/lena.png">
//       </div>
//       <div class="content">
//         <a class="header">Lena</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div></div>
