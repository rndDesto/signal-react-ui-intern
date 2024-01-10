import { useState } from 'react'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Desto/Button/Button'
import { Images } from '../../Components/Desto/Images/Images'
import Label from '../../Components/Desto/Label/Label'

const Home = () => {
  const [warna, setWarna] = useState('')
  return (
    <div >
        <h1 className="bg-red-500 p-10 text-4xl">Home Desto</h1>
        <p onClick={()=>setWarna('primary')}>warna merah</p>
        <p onClick={()=>setWarna('secondary')}>warna kuning</p>
        <p onClick={()=>setWarna('tritary')}>warna hijau</p>
        <Button />
        
        <Label rounded="2" bg={warna}>
          <Images w="30" height="30" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <p>data tidak ditemukan</p>
          <SignalButton namaButton="oke, mengerti" warna="info" />
        </Label>
    </div>
  )
}

export default Home