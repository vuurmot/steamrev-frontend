import styled from "styled-components";

function About() {

  return (
    <div style={{ fontSize: 30, color: '#b5b9b7' }}>
      <div>
        <p>How is the revenue calculated?</p>
        <p>Using the Boxleiter method we can use the number of review a game has on Steam to estimate the number of owners. From this, we can calculate the gross revenue and by adjusting for discounts, regional pricing, etc. we can get a rough idea of the net revenue.</p>
      </div>
      <div>
        <p>How is the projected revenue calculated?</p>
        <p>A good estimation of projected revenue can be made by taking 1 day = 1 week = 1 month = 1 year revenue. This function calculates the general lifetime revenue of a game.</p>
      </div>
    </div>
  );
}

export default About;
