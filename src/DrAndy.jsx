import React from 'react';
import cartoonBoss from './cartoon_boss.png'; // Make sure the image is in the same folder

function BossDadJoke() {
  return (
    <div className="boss-container">
      <img src={cartoonBoss} alt="Boss in Animal Crossing style" style={{ height: '300px' }} />
      <p>Click here for his latest joke!</p>
    </div>
  );
}

export default BossDadJoke;