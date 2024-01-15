import React, { useEffect, useState } from 'react';
import SignalCallout from '../../Components/Agil/Callout/signalCallout';
import SignalBody from '../../Components/Agil/Body/SignalBody';
import { SignalIcon } from '../../Components/Agil/icon/SignalIcon';
import SignalChips from '../../Components/Agil/Chips/SignalChips';

const Home = () => {
 
  const [color, setColor] = useState('');
  const [calloutOpen, setCalloutOpen] = useState(true);
  const [mantul, setmantul] = useState(true);


 

  const handleCloseCallout = () => {
    setCalloutOpen(!calloutOpen);
  };

  return (
    <>
      <h1 className="Title">Callout</h1>
      <div className="border-solid border border-gray-200 mb-5 bg-gray-50 p-4 rounded-sm">
    
        <SignalCallout color={color} openCallout={calloutOpen} onClose={mantul && handleCloseCallout}>
          <SignalIcon w="50px" h="50px" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <div className="flex flex-col flex-1 ml-2">
          <SignalBody weight="regular" size="2">
            title message
          </SignalBody>
          <SignalBody weight="regular" size="2">
            info message
          </SignalBody>
          <div onClick={handleCloseCallout} className="cursor-pointer text-blue-600 font-semibold">
            Action
            </div>
          </div>
        </SignalCallout>
      </div>

      <div className="flex space-x-4 mx-5 mb-3">
        <div className="flex-1">Name</div>
        <div className="flex-1">Type</div>
        <div className="flex-1">Value</div>
      </div>

      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">Color</div>
        <div className="flex-1 ">String</div>
        <div className="flex-1 ">
          <div onClick={() => setColor('info')}>info</div>
          <div onClick={() => setColor('valid')}>valid</div>
          <div onClick={() => setColor('warning')}>Warning</div>
          <div onClick={() => setColor('error')}>error</div>
        </div>
      </div>

      <div className="flex space-x-4 mx-5 my-3 ">
        <div className="flex-1 ">onClose</div>
        <div className="flex-1 ">function</div>
        <div className="flex-1 ">
          <div onClick={() => setmantul(true)}>true</div>
          <div onClick={() => setmantul(false)}>false</div>
        </div>
      </div>

    
    </>
  );
};

export default Home;
