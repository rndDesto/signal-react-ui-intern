import  { useEffect, useState } from 'react';
import SignalCallout from '../../Components/Agil/Callout/signalCallout';
import SignalBody from '../../Components/Agil/Body/SignalBody';
import { SignalIcon } from '../../Components/Agil/icon/SignalIcon';
import SignalCard from '../../Components/Agil/Card/SignalCard';

const Home = () => {
 
  const [color, setColor] = useState('');
  const [calloutOpen, setCalloutOpen] = useState(true);
  const [Open, setOpen] = useState(true);
  const [background, setBackground] = useState('');
  const [fontColor, setFontColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderSize, setBorderSize] = useState('');
  const [rounded, setRounded] = useState('');
  const [variant, setVarinat] = useState('');
  const [space, setSpace] = useState('');
  const [shadow, setShadow] = useState('');
  
  const handleChangeOpen = (event:any) => {
    const selectedValue  = event.target.value === 'true';
    setOpen(selectedValue);
  };

  const handleChangeColor = (event: { target: { value: string; }; }) => {
    const selectedValue = event.target.value;
    setColor(selectedValue);
  };

  // const handleChangeOpen = (event: { target: { value: boolean; }; }) => {
  //   const selectedValue = event.target.value;
  //   setOpen(selectedValue);
  // }

  // Card
  const handleChangeBackground = (event: { target: { value: string; }; }) => {
    const selectedValue = event.target.value;
    setBackground(selectedValue);
  };
  const handleChangeFontColor = (event: { target: { value: string; }; }) => {
    const selectedValue = event.target.value;
    setFontColor(selectedValue);
  };
  const handleChangeBorderColor =  (event: { target: { value: string; }; }) =>  {
    const selectedValue = event.target.value;
    setBorderColor(selectedValue);
  };
  const handleChangeBorderSize = (event: { target: { value: string; }; }) =>  {
    const selectedValue = event.target.value;
    setBorderSize(selectedValue);
  };
  const handleChangeRounded = (event: { target: { value: string; }; }) =>  {
    const selectedValue = event.target.value;
    setRounded(selectedValue);
  };
  const handleChangeVariant = (event: { target: { value: string; }; }) =>  {
    const selectedValue = event.target.value;
    setVarinat(selectedValue);
  };
  const handleChangeSpace= (event: { target: { value: string; }; }) => {
    const selectedValue = event.target.value;
    setSpace(selectedValue);
  };
  const handleChangeShadow =  (event: { target: { value: string; }; }) =>  {
    const selectedValue = event.target.value;
    setShadow(selectedValue);
  };

  
useEffect(
  ()=>{
  console.log("Open ", background);

  },[]
)


  const handleCloseCallout = () => {
    setCalloutOpen(!calloutOpen);
  };

  return (
    <>
    <p className="text-3xl font-bold"> Callout</p>
      <div className="border-solid border border-gray-200 mb-5 bg-gray-50 p-4 rounded-sm">
        <SignalCallout color={color} openCallout={calloutOpen} onClose={Open && handleCloseCallout}>
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
        <div className="flex-1 ">backgroundColor</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select className="p-3" onChange={handleChangeColor}>
          <option >info</option>
          <option >valid</option>
          <option >warning</option>
          <option >error</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">backgroundColor</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select className="p-3" value={Open.toString()} onChange={handleChangeOpen}>
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>
      </div>

    <h1 className="text-3xl font-bold">Card</h1>

    <div className="border-solid border border-gray-200 mb-5 bg-gray-50  py-3 rounded-sm">
    <SignalCard background={background}  fontColor={fontColor} borderColor={borderColor} borderSize={borderSize} rounded={rounded} variant={variant} space={space} shadow={shadow}>
      <div className="h-20"> SignalCard</div>
    </SignalCard>
    </div>

    <div className="flex space-x-4 mx-5 mb-3">
        <div className="flex-1">Name</div>
        <div className="flex-1">Type</div>
        <div className="flex-1">Value</div>
      </div>

      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">backgroundColor</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select className="p-3" onChange={handleChangeBackground}>
          <option >white</option>
          <option >info-1</option>
          <option >valid-1</option>
          <option >warning-1</option>
          <option >error-1</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[white] mx-5">
        <div className="flex-1 ">fontColor</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeFontColor}>
          <option >black</option>
          <option >info-5</option>
          <option >valid-5</option>
          <option >warning-5</option>
          <option >error-5</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">borderColor</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeBorderColor}>
          <option >white</option>
          <option >info-5</option>
          <option >valid-5</option>
          <option >warning-5</option>
          <option >error-5</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[white] mx-5">
        <div className="flex-1 ">borderSize</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeBorderSize}>
          <option ></option>
          <option >1</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
          <option >5</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">rounded</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeRounded}>
          <option ></option>
          <option >1</option>
          <option >2</option>
          <option >3</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[white] mx-5">
        <div className="flex-1 ">variant</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeVariant}>
          <option >1</option>
          <option >2</option>
          </select>
        </div>
      </div>

      
      <div className="flex space-x-4 bg-[#F6F3F3] mx-5">
        <div className="flex-1 ">space</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeSpace}>
          <option >0</option>
          <option >1</option>
          <option >2</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 bg-[white] mx-5">
        <div className="flex-1 ">shadow</div>
        <div className="flex-1 ">string</div>
        <div className="flex-1 ">
        <select  className="p-3" onChange={handleChangeShadow}>
          <option >1</option>
          <option >2</option>
          </select>
        </div>
      </div>

     
    </>
  );
};

export default Home ;
