import { useState } from 'react'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Agil/Button/Button'
import { Images } from '../../Components/Agil/Images/Images'
import Label from '../../Components/Agil/Label/Label'

const Home = () => {

  const [warna, setWarna,] = useState('')

  const [rounded, setRounded] = useState('')

  return (
    <div>
        <h1>Home Agil</h1>
        <p onClick={()=>setWarna('primary')}>warna merah</p>
        <p onClick={()=>setWarna('secondary')}>warna kuning</p>
        <p onClick={()=>setWarna('tritary')}>warna hijau</p>
        <Button />


        <Label bg={warna} rounded={rounded}>
          <Images w="30" height="30" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <p>data tidak ditemukan</p>
          <SignalButton onClick={()=>setRounded('1')} namaButton="1" warna="info" />
          <SignalButton onClick={()=>setRounded('2')} namaButton="2" warna="info" />
        </Label>
    </div>
  )
}

export default Home