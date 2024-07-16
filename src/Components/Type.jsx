import React from 'react';
import Typewriter from 'typewriter-effect';
import './index.css';

function Type() {
  return (
    <div className='type-writer'>
      <Typewriter
        options={{
          strings: ['', 'Web Developer', 'AI art Generator'],
          autoStart: true,
          loop: true,        
          deleteSpeed: 20,
          delay: 100,
          cursor: '|',
          cursorColor: '#000000',
        }
        }
      />
    </div>
  )
}

export default Type
