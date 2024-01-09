import { useState } from 'react'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Nadhifa/Button/Button'
import { Images } from '../../Components/Nadhifa/Images/Images'
import Label from '../../Components/Nadhifa/Label/Label'

const Home = () => {
  const [warna, setWarna] = useState('')
  return (
    <div>
        <h1>Home Nadhifa</h1>
        <p onClick={()=>setWarna('primary')}>warna merah</p>
        <p onClick={()=>setWarna('secondary')}>warna kuning</p>
        <p onClick={()=>setWarna('tritary')}>warna hijau</p>
        <Button />
        
        <Label rounded="2" bg={warna}>
          <Images w="30" height="30" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <p>data tidak ditemukan</p>
          <SignalButton onClick={()=>setWarna('tritary')}namaButton="oke, mengerti" warna="info" />
        </Label>
    </div>
  )
}

export default Home