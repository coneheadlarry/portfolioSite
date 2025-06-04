import React from 'react';
import '../css/LandingPage.css';
import 'animate.css';
import wavingHand from '../../imgs/waving-hand-svgrepo-com.svg';

function LandingPage() {
  return (
    <div className="landing-page">
      <main className="main-section">
        <div className="hello-world animate__animated animate__bounceInDown">
          <h1>
            Hello <br />
            world
          </h1>
          <h1 className='explimation'>!!</h1>
          <div className="wave-icon">
          <img src={wavingHand} alt="Waving Hand" className='wave'/>
        </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;