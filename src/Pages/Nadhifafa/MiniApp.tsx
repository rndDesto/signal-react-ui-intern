import { useState } from 'react';
import SignalChips from '../../Components/Nadhifa/Chips/Chips';
import SignalSnackBar from '../../Components/Nadhifa/SnackBar/signalSnackBar';
import SignalButton from '../../Components/Zikri/Button/Signal-Button'
import SignalBreadcrumb from '../../Components/Zikri/Breadcrumb/SignalBreadcrumb'
import SignalCallout from '../../Components/Agil/Callout/signalCallout';
import SignalCard from '../../Components/Agil/Card/SignalCard';

const MiniApp = () => {
    const dataPasien = {
        namaPasien: 'Desto',
        nik:'9423748821738',
        telp:'081233223344',
        listDokter:[
          {
            "nama": "dr. John Doe",
            "poli": "Anak",
            "rumah_sakit": "Rumah Sakit ABC",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "08:00", "isDisabled": true},
              {"name": "10:00", "isDisabled": false},
              {"name": "12:00", "isDisabled": true},
              {"name": "13:00", "isDisabled": false}
            ]
          },
          {
            "nama": "dr. Jane Smith",
            "poli": "Anak",
            "rumah_sakit": "Rumah Sakit XYZ",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "12:00", "isDisabled": false},
              {"name": "14:00", "isDisabled": true},
              {"name": "20:00", "isDisabled": true},
              {"name": "20:00", "isDisabled": false}
            ]
          },
          {
            "nama": "dr. David Wilson",
            "poli": "Anak",
            "rumah_sakit": "Rumah Sakit ABC",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "08:00", "isDisabled": true},
              {"name": "09:00", "isDisabled": true},
              {"name": "10:00", "isDisabled": false},
              {"name": "11:00", "isDisabled": true}
            ]
          },
          {
            "nama": "dr. Sarah Lee",
            "poli": "Gigi",
            "rumah_sakit": "Rumah Sakit DEF",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "09:00", "isDisabled": false},
              {"name": "13:00", "isDisabled": true},
              {"name": "14:00", "isDisabled": false},
              {"name": "20:00", "isDisabled": true}
            ]
          },
          {
            "nama": "dr. Michael Brown",
            "poli": "Gigi",
            "rumah_sakit": "Rumah Sakit XYZ",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "10:00", "isDisabled": true},
              {"name": "11:00", "isDisabled": true},
              {"name": "12:00", "isDisabled": false},
              {"name": "13:00", "isDisabled": false}
            ]
          },
          {
            "nama": "dr. Emily Johnson",
            "poli": "Mata",
            "rumah_sakit": "Rumah Sakit PQR",
            "photo": "https://placehold.co/160x200",
            "jadwal": [
              {"name": "08:00", "isDisabled": false},
              {"name": "15:00", "isDisabled": true},
              {"name": "20:00", "isDisabled": false}
            ]
          }
          
        ]
      }
      //Callout
      const [calloutOpen, setCalloutOpen] = useState(true);
      const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Button', href: '/button' },
        { name: 'Tab', href: '/tab' },
        { name: 'Typography', href: '/typography' },
        { name: 'Education', href: '/education' },
        { name: 'Address', href: '/address' }
      ]
      //Chips
      const [data, setData] = useState(dataPasien.listDokter);
      const handleChipClick = (jadwalIndex: number) => {
        setData((prevState) =>
          prevState.map((jadwal, i) => ({
            ...jadwal,
            isDisabled: i === jadwalIndex,
          }))
        );
      };
      const jaya=dataPasien.listDokter
      console.log(dataPasien)
      console.log('jaya=',jaya)
      console.log('perbandingan',dataPasien.listDokter===jaya)

      // const [position, setPosition] = useState('')
      // const [color, setColor] = useState('');
    
  return (
    <>
    {/* <SignalSnackBar position={position}>
            <div className="flex justify-between m-2">
              <div className="grow">can't show this page</div>
              <div className="grow-0">Retry</div>
            </div>
          </SignalSnackBar>   */}
        
    {/* <div>Nama Pasien = {dataPasien.namaPasien}</div> */}
    {calloutOpen && (
        <SignalCallout color="info"  openCallout={calloutOpen}>
          <div>
            <h3>Nama :{dataPasien.namaPasien}</h3>
            <p>NIK: {dataPasien.nik}</p>
            <p>Telepon: {dataPasien.telp}</p>
          </div>
        </SignalCallout>
      )}
      <div className="space-x-4 p-3 ">
      <SignalBreadcrumb items={breadcrumbItems}/>
      </div>

      <SignalCard>
        {dataPasien.listDokter.map((dokter, index) => (
          <div className="">
          <div key={index} className="border-solid border border-gray-200 mb-5 bg-white-50 mx-12 rounded-sm w-auto">
              {/* left */}
              <div className="flex">
              <div className="">
                <img src={dokter.photo} alt={dokter.nama} className=" py-5  mx-7 rounded-sm" />
                
                  <div className= " mx-7 text-left font-normal text-gray-800 ">
                    <p>{dokter.nama}</p>
                    <p>Poli: {dokter.poli}</p>
                  </div>   
              </div> 
              
                {/* center */}
            <div className="py-16 pl-52">
              <div className="text-center font-bold">
                <p>{dokter.rumah_sakit}</p>
              </div>     
              <div className="flex">
                {dokter.jadwal.map((jadwal, jadwalIndex) => (
                  <div className="px-10 py-4">
                  <SignalChips
                    key={jadwalIndex}
                    data={jadwal}
                    onClick={() => handleChipClick(jadwalIndex)} 
                    img ='' 
                    />
                  </div>
                    ))}
                  
              </div> 
            </div>
            
              {/* right */}
              <div className="ml-auto my-24">
                <SignalButton namaButton="Pesan" >bsbjabjb</SignalButton>
              </div>
            </div> 
            </div>
          </div>    
          ))}
        </SignalCard>
    
    
    </>
  )
}

export default MiniApp
      
          