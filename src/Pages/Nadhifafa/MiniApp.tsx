import { useState } from 'react';
import SignalChips from '../../Components/Nadhifa/Chips/Chips';
import SignalSnackBar from '../../Components/Nadhifa/SnackBar/signalSnackBar';
import SignalButton from '../../Components/Zikri/Button/Signal-Button'
import SignalBreadcrumb from '../../Components/Zikri/Breadcrumb/SignalBreadcrumb'
import SignalCallout from '../../Components/Agil/Callout/signalCallout';
import SignalCard from '../../Components/Agil/Card/SignalCard';
import SignalBody from "../../Components/Agil/Body/SignalBody"

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
      
      
      const [Data, setData] = useState(dataPasien.listDokter);
      const [snackBarVisible, setSnackBarVisible] = useState(false);
      const [selectedJadwal, setSelectedJadwal] = useState(null);
      const [selectedDokterIndex, setSelectedDokterIndex] = useState(null);
      const [buttonDisabledState, setButtonDisabledState] = useState(
        dataPasien.listDokter.map((_, index) => index !== selectedDokterIndex)
      );
      const [selectedPoli, setSelectedPoli] = useState<any>(null);
      
      const [calloutOpen] = useState(true);
      const breadcrumbItems = selectedJadwal
      ? [
        { name: 'Home', href: '/' },
        { name: selectedJadwal.nama},
        { name: selectedJadwal.poli },
        { name: selectedJadwal.jadwal },   
      ]
      :[{ name: "Home", href: "/agil" }]

      const handleChipClick = (filterpasienIndex:any, jadwalIndex:any) => {
        setData((prevPasien) =>
          prevPasien.map((pasien, i) => {
            if (i === filterpasienIndex) {
              const updatedJadwaldokter = pasien.jadwal.map((jadwaldokter, idx) => ({
                ...jadwaldokter,
                isSelected: idx === jadwalIndex,
              }));
              
              const selectedJadwalPraktekDetails ={
                nama: pasien.nama,
                poli: pasien.poli,
                jadwal: updatedJadwaldokter [jadwalIndex].name,
              }

              console.log("selectedJadwalPraktekDetails")
              setSelectedJadwal(selectedJadwalPraktekDetails);

              const isAtLeastOneSelected = updatedJadwaldokter.some(
                (jadwaldokter) => jadwaldokter.isSelected
              )
    
              // Update state hanya untuk film tertentu
              setButtonDisabledState((prev) =>
                prev.map((prevItem, prevIndex) =>
                  prevIndex === filterpasienIndex ? !isAtLeastOneSelected : prevItem
                )
              );

              setSelectedDokterIndex(filterpasienIndex)
              return {
                ...pasien,
                jadwal: updatedJadwaldokter,
              };
            }else{
              return {
                ...pasien,
                jadwal:pasien.jadwal.map((jadwaldokter) =>({
                  ...jadwaldokter,
                  isSelected:false,
                })),
              };
            }
          })
        );
        setButtonDisabledState(() =>
        dataPasien.listDokter.map((_, index) => index !== filterpasienIndex)
        );
      };

      const filteredPraktek = selectedPoli
      ? Data.filter((pasien) => pasien.poli === selectedPoli)
      :Data;
      
      // console.log(SignalButton);
      // setSelectedPoli(null)
      
      const handleButtonClick = () => {
        setSnackBarVisible(true);
      };
      


  return (
    <>    
    <div>
        <SignalCallout color="info" openCallout={calloutOpen}>
          <div className="flex flex-col flex-1 ml-2">
            <SignalBody>Nama: {dataPasien.namaPasien}</SignalBody>
            <SignalBody>NIK: {dataPasien.nik}</SignalBody>
            <SignalBody>Telepon: {dataPasien.telp}</SignalBody>
          </div>
        </SignalCallout>
      </div>

      <div className="space-x-4 p-3 ">
        <SignalBreadcrumb items={breadcrumbItems}></SignalBreadcrumb>
      </div>

      <div className="flex flex-auto py-1"> 
      {Array.from(new Set(dataPasien.listDokter.map((pasien) => pasien.poli))).map(
        (poli, index) => (
          <SignalChips
          key={index}
          data={{name:poli}}
          onClick={() => setSelectedPoli(poli)}
          img=""/>
        )
      )}
      </div>

      {filteredPraktek.map((pasien, pasienIndex) => (
        <div key={pasienIndex} className=" border border-gray-300 max-w-[1200px] m-auto p-5 rounded-md mb-5">
          <SignalCard>
          <div className="flex gap-2 items-center">
            <div>
              <div>
                <img src={pasien.photo} alt={pasien.nama} />
              </div>
              <div>
                  <SignalBody>{pasien.nama}</SignalBody>
                  <SignalBody>Poli: {pasien.poli}</SignalBody>
              </div>
            </div>
            <div className="grow">
            <p className='text-center text-lg font-bold'>{pasien.rumah_sakit}</p>
                <p className='text-center text-sm mb-5'>Jadwal Praktek</p>
              <div className="flex gap-2 flex-wrap justify-evenly">
                {pasien.jadwal.map((jadwaldokter, jadwalIndex) => (
                  <SignalChips
                    key={jadwalIndex}
                    data={jadwaldokter}
                    onClick={() => handleChipClick(pasienIndex, jadwalIndex)}
                    img=""
                  />
                ))}
              </div>
            </div>

            <div className="ml-auto my-24 w-[130px]">
              <SignalButton
                variant="1"
                color="info"
                size="large"
                full={true}
                disable={buttonDisabledState[pasienIndex]}
                onClick={handleButtonClick}
                namaButton="Pesan"
              ></SignalButton>
            </div>
          </div>
          </SignalCard> 
        </div>
      ))}
      {snackBarVisible && (
      <SignalSnackBar sticky="false" position="topCenter">
        <div className="flex justify-between m-2">
          <div className="grow">Telah berhasil memesan jadwal kunjungan</div>
          <div className="grow-0" onClick={() => setSnackBarVisible(false)}>
            Ulangi
          </div>
        </div>
      </SignalSnackBar>
      )}
    </>
  );
};

export default MiniApp