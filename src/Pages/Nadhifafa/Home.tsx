import React, { useEffect, useState } from 'react';
import SignalChips from '../../Components/Nadhifa/Chips/Chips';
import SignalSnackBar from '../../Components/Nadhifa/SnackBar/signalSnackBar';

const Home = () => {


  const luping = [
    {
      name: " Ke Telkom",
      isSelected: false,
      isDisabled: false,
      imageUrl:" "
    },
    {
      name: "Ke Operator lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356780.png",
      isDisabled: false,
    },
    {
      name: "Ke Contariner lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356780.png",
      isDisabled: true,
    },
  ];
  const [data, setData] = useState(luping);
  const handleChipClick = (index:number) => {
    setData((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isSelected: i === index,
      }))
    );
  };

  const [color, setColor] = useState('')
  const [sticky, setSticky] = useState('mantul')
  const [position, setPosition] = useState('')

  
  
  return (
  <>
    <div className='border-b-2 border-gray-100 mb-4 p-2 font-bold text-4xl '>
      <h2>Chips</h2>
<<<<<<< Updated upstream

    </div>
    <div className="flex space-x-2">
=======
    </div>
    <div className="">
>>>>>>> Stashed changes
      {data.map((item, index) => (
        <SignalChips
          data={item}
          onClick={() => handleChipClick(index)} 
          img={item.imageUrl}
        />
      ))}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    

    
    <div className="border-3 border-gray-300">
    <div className='class="border-b-2 border-gray-100 mb-0 p-0 font-bold text-2xl '>
          <h2>SnackBar</h2>
      </div>
      <div className="border-solid border border-gray-200 mb-5 bg-gray-50 py-4 px-5 rounded-sm">
      <div>
      <SignalSnackBar sticky={sticky}  color={color} position={position}>
      <div className="flex justify-between m-2">
        <div className="grow">can't showed this page</div>
        <div className="grow-0">Retry</div>
      </div>
      </SignalSnackBar>  
      </div>
    </div>
<<<<<<< Updated upstream
=======

    
    <div className="border-3 border-gray-300">
    <div className='class="border-b-2 border-gray-100 mb-0 p-0 font-bold text-2xl '>
          <h2>SnackBar</h2>
      </div>
      <div className="border-solid border border-gray-200 mb-5 bg-gray-50 py-4 px-5 rounded-sm">
      <div>
      <SignalSnackBar sticky={sticky}  color={color} position={position}>
      <div className="flex justify-between m-2">
        <div className="grow">can't showed this page</div>
        <div className="grow-0">Retry</div>
      </div>
      </SignalSnackBar>  
      </div>
    </div>
>>>>>>> Stashed changes
    </div>
    
    
          <div className="flex space-x-4 mx-5 mb-5">
            <div className="flex-1">Name</div>
            <div className="flex-1">Type</div>
            <div className="flex-1">Value</div>
          </div>
          <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
              <div className="flex-1 ">color</div>
              <div className="flex-1 ">string</div>
              <div className="flex-1 ">
                <div className="cursor-default">
                <div onClick={() => setColor('primary')}>primary</div>
                <div onClick={() => setColor('warning')}>warning</div>
                </div>
              </div>
          </div>
          <div className="flex space-x-4 mx-5 my-3 ">
              <div className="flex-1 ">sticky</div>
              <div className="flex-1 ">boolean</div> 
              <div className="flex-1 ">
                <div className="cursor-default">
                <div onClick={() => setSticky('true')}>true</div>
                <div onClick={() => setSticky('false')}>false</div>
                </div>
              </div>
          </div>
          <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
              <div className="flex-1 ">position</div>
              <div className="flex-1 ">string</div>
              <div className="flex-1 ">
                <div className="cursor-default">
                <div onClick={() => setPosition('topStart')}>top-start</div>
                <div onClick={() => setPosition('topCenter')}>top-center</div>
                <div onClick={() => setPosition('topEnd')}>top-end</div>
                <div onClick={() => setPosition('bottomStart')}>bottom-Start</div>
                <div onClick={() => setPosition('bottomCenter')}>bottom-center</div>
                <div onClick={() => setPosition('bottomEnd')}>bottom-end</div>
                </div>
              </div>
          </div>  
  </>   
  );
};

export default Home;
