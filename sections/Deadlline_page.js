import React from 'react';
import { Title, TitleSm } from "@/components/common/Title";

const DeadlinePage = () => {
  const deadlineDate = new Date('2025-04-01');
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDeadline = deadlineDate.toLocaleDateString('en-US', options);

  return (
    <>
      <section className='deadline bg-top' style={{ background: 'white' }}>
        <div className='container'style={{ background: 'white' }}>
          <div className='heading-title'>
            <TitleSm title='IMPORTANT!!' /> <br />
            <br />
            <Title title={`Deadline: ${formattedDeadline}`} className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Mark your calendars!' />
              <p className='desc-p' style={{ color: 'black' }}>
                This is the final deadline for all submissions. Ensure that you have completed all necessary tasks before this date to avoid any last-minute issues.
              </p>
              
              <div className='grid-3'>
                <div className='box'>
                  <h1 style={{color:"#005b99"}}>6+</h1>
                  <h3>Years of excellence</h3>
                </div>
                <div className='box'>
                  <h1 style={{color:"#005b99"}}>90% +</h1>
                  <h3>Placement Record</h3>
                </div>
                <div className='box'>
                  <h1 style={{color:"#005b99"}}>45% +</h1>
                  <h3>Dream & Super Dream Offers</h3>
                </div>
                <div>
            <button className='button-primary2'>Submit your Paper</button>
          </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='https://images.unsplash.com/photo-1605791767308-46f38113f418?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Deadline Image' className='round' width='100%' height='90%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='https://vitbhopal.ac.in/wp-content/uploads/2024/03/VITB-Background.jpeg' alt='VIT Image' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Get the VIT Edge' />
              <br />
              <p className='misson-p' style={{ fontSize: '17px', fontStyle: 'italic' }}>
              VIT Bhopal University, envisioned with a new global outlook will empower its aspirants to attain excellence through learning. The comprehensive teaching methodology designed by the University, redeﬁnes the approach to learning, educating and building knowledge-based societies in the country. Collaboration with reputed national and international organisations and strategic partnerships with universities around the world are being established, to prepare a globally competent generation of professionals.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default DeadlinePage;