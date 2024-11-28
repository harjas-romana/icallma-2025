import React from 'react';
import { tracks_data } from '../assets/data/dummydata';

const Tracks = () => {
  return (
    <div style={{ padding: '7px', maxWidth: '1800', margin: 'auto', color:'black', background:'white'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', background:'white'}}>Tracks</h1>
      {tracks_data.map((item) => (
        <div key={item.id} style={{ marginBottom: '30px', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', color:'black', background:'white' }}>
          <h2 style={{color:"#005b99"}}>{item.track}</h2>
          <div style={{ background:'white',display: 'flex', alignItems: 'center' }}>
            <img 
              src={item.cover} 
              alt={item.track} 
              style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                marginRight: '15px' 
              }} 
            />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', background: 'white' }}>
  {item.desc.map((point, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
  ))}
</ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracks;