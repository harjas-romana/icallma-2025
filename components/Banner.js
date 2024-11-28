import React from "react";
import { Title,Title2, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
      <section className='banner' style={{ background: 'white' }}>
        <div className='container'>
          <div>
            <Title2 title='Join Us at the Leading Conference on Large Language Models!' /> <br />
            <TitleLogo style={{ fontSize: '12px' }} title='Explore Innovations, Applications, and Ethical Considerations in LLMs!' />
          </div>
          <div>
            <button className='button-primary2'>Register Now</button>
          </div>
        </div>
      </section>
  );
}

export default Banner;
