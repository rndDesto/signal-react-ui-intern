import SignalBody from "../../Components/Agil/Body/SignalBody"
import SignalCallout from "../../Components/Agil/Callout/signalCallout"
import { useState } from "react"
import SignalBreadcrumb from "../../Components/Zikri/Breadcrumb/SignalBreadcrumb"
import SignalButton from "../../Components/Zikri/Button/Signal-Button"
import SignalChips from "../../Components/Nadhifa/Chips/Chips"
import SignalCard from "../../Components/Agil/Card/SignalCard"

const MiniApp = () => {

    const maskapai = {
        from: 'Jakarta',
        to: 'Bali',
        pessangerName: 'Desto',
        pessangerEmail: 'desto@mantul.com',
        pessangerPhone: '081192830987',
        flights: [
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "GA",
            "nomor_penerbangan": "GA-123",
            "kelas": "Ekonomi",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "08:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "10:00"
            },
            "harga": "Rp 900.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ],
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "GA",
            "nomor_penerbangan": "GA-124",
            "kelas": "Bisnis",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "09:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "11:00"
            },
            "harga": "Rp 1.200.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "LG",
            "nomor_penerbangan": "LG-001",
            "kelas": "Ekonomi",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "10:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "12:00"
            },
            "harga": "Rp 850.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "AA",
            "nomor_penerbangan": "AA-456",
            "kelas": "Bisnis",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "11:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "13:00"
            },
            "harga": "Rp 1.500.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "LG",
            "nomor_penerbangan": "LG-002",
            "kelas": "Ekonomi",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "12:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "14:00"
            },
            "harga": "Rp 800.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "AA",
            "nomor_penerbangan": "AA-457",
            "kelas": "Bisnis",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "13:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "15:00"
            },
            "harga": "Rp 1.700.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "GA",
            "nomor_penerbangan": "GA-125",
            "kelas": "Ekonomi",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "14:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "16:00"
            },
            "harga": "Rp 750.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "LG",
            "nomor_penerbangan": "LG-003",
            "kelas": "Bisnis",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "15:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "17:00"
            },
            "harga": "Rp 1.900.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "GA",
            "nomor_penerbangan": "GA-126",
            "kelas": "Ekonomi",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "16:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "18:00"
            },
            "harga": "Rp 700.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          },
          {
            "logo": "https://placehold.co/80x80",
            "maskapai": "AA",
            "nomor_penerbangan": "AA-458",
            "kelas": "Bisnis",
            "waktu_keberangkatan": {
              "status": "Berangkat",
              "jam": "17:00"
            },
            "waktu_kedatangan": {
              "status": "Tiba",
              "jam": "19:00"
            },
            "harga": "Rp 1.800.000 / Orang",
            "bagasi": [
              {
                "name": "70kg",
                "isDisable": false
              },
              {
                "name": "100kg",
                "isDisable": false
              },
              {
                "name": "150kg",
                "isDisable": true
              }
            ]
          }
        ]
      }

  const [calloutOpen] = useState(true); //untuk callout
  const breadcrumbItems = [
    { name: 'Home', href: '/zikri' },
    { name: 'Button', href: '/button' },
    { name: 'Tab', href: '/tab' },
    { name: 'Typography', href: '/typography' }
  ]

  
  const [beratData, setBeratData] = useState(maskapai.flights);
  const handleChipClick = (beratIndex, bagasiIndex) => {
    setBeratData((prevBerat) =>
      prevBerat.map((maskapai,i) => {
        if (i === beratIndex) {
          return{
            ...maskapai,
            bagasi: maskapai.bagasi.map((bagasi, idx) => ({
              ...bagasi,
              isSelected: idx === bagasiIndex,
            })),
          };
        }
        return maskapai
    }))
  } 

  const mantul= maskapai.flights
  console.log(maskapai)
  console.log('mantul=',mantul)
  console.log('perbandingan=',maskapai.flights===mantul)




  return (
    <>
    <div>
       <SignalCallout color='error' openCallout={calloutOpen} >
          <div className="flex flex-col flex-1 ml-2">
          <SignalBody weight="regular" size="2">
            From: {maskapai.from}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            To: {maskapai.to}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Name: {maskapai.pessangerName}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Email: {maskapai.pessangerEmail}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Phone: {maskapai.pessangerPhone}
          </SignalBody>
          </div>
        </SignalCallout>
    </div>
    <div>
      <SignalBreadcrumb items={breadcrumbItems}/>
    </div>
    
      {beratData.map((flight, beratIndex) => (
    <div className='border border-gray-300 max-w-[1200px] m-auto p-5 rounded-md mb-5'>

      <SignalCard>
          <div key={beratIndex} className='flex justify-between gap-5 items-center'>
             <div>
              <img src={flight.logo} />
            </div>
            <div className='grow'>
              <SignalBody>{flight.nomor_penerbangan}</SignalBody>
              <SignalBody>{flight.kelas}</SignalBody>
              <div>
                <div className="flex gap-1 flex-wrap">
                  {flight.bagasi.map((bagasi,bagasiIndex ) => (
                    <SignalChips
                      key={bagasiIndex}
                      data={bagasi}
                      onClick={() => handleChipClick(beratIndex,bagasiIndex)} 
                      img=''
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex grow' >
              <div>
                <SignalBody>{flight.waktu_keberangkatan.status}</SignalBody>
                <SignalBody>{flight.waktu_keberangkatan.jam}</SignalBody>
              </div>
              <div className='ml-4'>
                <SignalBody>{flight.waktu_kedatangan.status}</SignalBody>
                <SignalBody>{flight.waktu_kedatangan.jam}</SignalBody>
              </div>
            </div>
            <div>
              <div className='text-end'>
              <SignalBody>{flight.harga}</SignalBody>
              </div>
              <SignalButton variant={1} color={'primary'} size={'small'} full={true} disable={false} namaButton="Pesan" />
            </div>
          </div>
      </SignalCard>
      </div>
    ))}
    
    </>
  ) 
}

export default MiniApp