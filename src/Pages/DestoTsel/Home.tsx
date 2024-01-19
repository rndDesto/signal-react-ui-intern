import { useState } from 'react'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Desto/Button/Button'
import { Images } from '../../Components/Desto/Images/Images'
import Label from '../../Components/Desto/Label/Label'

const Home = () => {
  const [warna, setWarna] = useState('')
  const tiketKereta = {
    trainName: 'Argo Parahyangan',
    class: 'Eksekutif',
    price: 1500000,
    from: 'Bandung',
    to: 'Jakarta',
    date: '2021-08-12',
    time: '08:00',
    duration: '2h 30m',
    pessangerName: 'Desto',
    carriage:[
      {
      train:'1',
      seats:[
        {
          seat: 'A1',
          available: true,
          isSelect: false
        },
        {
          seat: 'B1',
          available: true,
          isSelect: false
        },
        {
          seat: 'C1',
          available: true,
          isSelect: false
        },
        {
          seat: 'A2',
          available: true,
          isSelect: false
        },
        {
          seat: 'B2',
          available: true,
          isSelect: false
        },
        {
          seat: 'C2',
          available: true,
          isSelect: false
        },
        {
          seat: 'A3',
          available: true,
          isSelect: false
        },
        {
          seat: 'B3',
          available: true,
          isSelect: false
        },
        {
          seat: 'C3',
          available: true,
          isSelect: false
        }
      ]
    }

    ]
  }

  const maskapai = {
    from: 'Jakarta',
    to: 'Sorong',
    pessangerName: 'Desto',
    pessangerEmail: 'desto@mantul.com',
    pessangerPhone: '081192830987',
    airline: {
      GA:[
        {
          flightNumber: 'GA-123',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '08:00',
          arrivalTime: '10:00',
          duration: '2h 30m',
          class: 'Ekonomi',
          price: 1500000,
          available: true,
          isSelect: false
        },
        {
          flightNumber: 'GA-543',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '12:00',
          arrivalTime: '13:00',
          duration: '1h 30m',
          class: 'Ekonomi',
          price: 2000000,
          available: true,
          isSelect: false
        },
        {
          flightNumber: 'GA-554',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '08:00',
          arrivalTime: '09:00',
          duration: '1h 0m',
          class: 'Ekonomi',
          price: 1250000,
          available: true,
          isSelect: false
        }
      ],
      LG:[
        {
          flightNumber: 'LG-645',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '08:00',
          arrivalTime: '10:00',
          duration: '2h 30m',
          class: 'Ekonomi',
          price: 1500000,
          available: true,
          isSelect: false
        },
        {
          flightNumber: 'LG-543',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '12:00',
          arrivalTime: '13:00',
          duration: '1h 30m',
          class: 'Ekonomi',
          price: 2000000,
          available: true,
          isSelect: false
        },
        {
          flightNumber: 'LG-554',
          departure: '2021-08-12',
          arrival: '2021-08-12',
          departureTime: '08:00',
          arrivalTime: '09:00',
          duration: '1h 0m',
          class: 'Ekonomi',
          price: 1250000,
          available: true,
          isSelect: false
        }
      ]
    }
  }

  return (
    <div>
      <div className='ali border border-gray-300 max-w-[768px] m-auto p-5 rounded-md mb-5'>
      <div className='flex gap-2 items-center'>
        <div>
          <div>dr Mantul Djaja</div>
          <div>Poli: Anak</div>
        </div>
        <div className='grow'>
          <p className='text-center mb-5 text-xl'>Jadwal</p>
          <div className='flex gap-2 flex-wrap justify-evenly'>
            <div className='border px-2 rounded-s-md'>08:00</div>
            <div className='border px-2 rounded-s-md'>08:00</div>
            <div className='border px-2 rounded-s-md'>08:00</div>
            <div className='border px-2 rounded-s-md'>08:00</div>
            
          </div>
        </div>
        <div>
          <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
        </div>
      </div>
      </div>


      <div className='border border-gray-300 max-w-[768px] m-auto p-5 rounded-md'>
        <div className='flex justify-between gap-5 items-center'>
          <div className='grow'>
            <div>GA-123</div>
            <div>Ekonomi</div>
          </div>
          <div className='flex'>
            <div>
              <div>Berangkat</div>
              <div>08:00</div>
            </div>
            <div className='ml-2'>
              <div>Tiba</div>
              <div>10:00</div>
            </div>
          </div>
          <div>
            <div className='text-xl text-orange-400 font-bold mb-5'>Rp 900.000 / Orang</div>
            <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
          </div>
        </div>
      </div>

      <div className='border mt-5 border-gray-300 max-w-[768px] m-auto p-5 rounded-md'>
        <div className='flex gap-3'>
          <div className='w-1/3 border border-gray-300 p-5 rounded-md'>
            <img></img>
            <div>Mission Imposible</div>
            <div className='mb-2'>2021</div>
            <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
          </div>

          <div className='w-1/3 border border-gray-300 p-5 rounded-md'>
            <img></img>
            <div>Mission Imposible</div>
            <div className='mb-2'>2021</div>
            <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
          </div>

          <div className='w-1/3 border border-gray-300 p-5 rounded-md'>
            <img></img>
            <div>Mission Imposible</div>
            <div className='mb-2'>2021</div>
            <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
          </div>

        </div>
      </div>

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