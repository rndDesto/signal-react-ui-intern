import { useState } from 'react'

import SignalChips from '../../Components/Nadhifa/Chips/Chips'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Nadhifa/Button/Button'
import { Images } from '../../Components/Nadhifa/Images/Images'
import Label from '../../Components/Nadhifa/Label/Label'

const Home = () => {
// const[isClicked, setISClicked] =useState(false);
// const handleClick=()=>{
//   setISClicked(true);

// }
  // const [warna, setWarna,] = useState('')

  // const [rounded, setRounded] = useState('')

const luping = [
  {
    name:'telkom',
    isSelected:false,
    isDisabled:false
  },
  {
    name:'Ke Operator lain',
    isSelected:false,
    imageUrl:"https://cdn-icons-png.flaticon.com/128/2838/2838779.png",
    isDisabled:false
  },
  {
    name:'Ke Contariner lain',
    isSelected:false,
    imageUrl:"icon.png",
    isDisabled:true
  }
]
const [data, setData] = useState(luping);

const handleChipClick = (index) => {
  setData((prevState) =>
    prevState.map((item, i) => ({
      ...item,
      isSelected: i === index,
    }))
  );
};
  return (
    <div>
      <div>
      {data.map((item, index) => (
          <SignalChips key={index} namaChips={item.name} img={item.imageUrl} mantul={item} keywords="keywords" onClick={()=>handleChipClick(index)}/>
      ))}

      <pre>{JSON.stringify(data,null,2)}</pre>
    
    </div>
      {/* <SignalChips namaChips="Telkom" keywords="keywords" />
      <SignalChips namaChips="Ke Operator lain" keywords="keywords" />
      <SignalChips namaChips="Category lainnya" keywords="keywords" />
      <SignalChips onClick={handleClick} namaChips="Category lainnya" keywords="keywords" /> */}

      {/* <signal-chips [keywords]="keywords" (selectedItem)="handleSelectedItem($event)"></signal-chips> */}
      

        {/* <h1>Home Nadhifa</h1>
        <p onClick={()=>setWarna('primary')}>warna merah</p>
        <p onClick={()=>setWarna('secondary')}>warna kuning</p>
        <p onClick={()=>setWarna('tritary')}>warna hijau</p> */}
        {/* <Button />
        <SignalButton onClick={()=>setRounded('1')} namaButton="1" warna="info" />
        <SignalButton onClick={()=>setRounded('2')} namaButton="2" warna="info" />
        <Label bg={warna} rounded={rounded}>
          <Images w="30" height="30" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <p>data tidak ditemukan</p>
          <SignalButton onClick={()=>setRounded('1')} namaButton="1" warna="info" />
          <SignalButton onClick={()=>setRounded('2')} namaButton="2" warna="info" />
        </Label> */}
        {/* <Button/>
        <Chips bg={warna} rounded={rounded}>
          <Images w="10" height="10" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          
          <SignalButton onClick={()=>setRounded('1')} namaButton="Telkom" warna="info" />
        </Chips> */}
        {/* <Button namaButton="Telkom" />
        <Button namaButton="Ke Opartor lain" />
        <Button namaButton="Category lainnya" /> */}
    
        {/* <SignalChips>
      //     <Images w="10" height="10" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
      //     <SignalChips namaChips="Telkom" />
      //     <SignalChips namaChips="Ke Operator Lain" />
      //     <SignalChips namaChips="Category lainnya" />
      //     {/* <SignalButton onClick={()=>setRounded('2')} namaButton="2" warna="info" /> */}
      {/* </SignalChips> */} 
              
    </div>
  )
}

export default Home