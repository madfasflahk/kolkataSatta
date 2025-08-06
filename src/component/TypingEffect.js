import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
  return (
    <>
     

      <ReactTypingEffect className='orathem'
        text={["Site will shutdown 6/07/2025 ➜ 7980689304"]}
        displayTextRenderer={(text, i) => {
          return (
            <div className='margin-auto '>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: 'red'}}
                  >{char}</span>
                );
              })}
            </div>
          );
        }}        
      />
    </>
  );
};

export default TypingEffect;