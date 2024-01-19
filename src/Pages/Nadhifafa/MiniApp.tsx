
const MiniApp = () => {
    const dataPasien = {
        namaPasien: 'Desto',
        nik:'9423748821738',
        telp:'081233223344',
        listDokter:[
          {
            "nama": "dr. John Doe",
            "poli": "Anak",
            "jadwal": ["08:00", "10:00", "12:00", "13:00"],
            "rumah_sakit": "Rumah Sakit ABC",
            "photo": "https://placehold.co/160x200"
          },
          {
            "nama": "dr. Jane Smith",
            "poli": "Anak",
            "jadwal": ["12:00", "14:00", "20:00", "20:00"],
            "rumah_sakit": "Rumah Sakit XYZ",
            "photo": "https://placehold.co/160x200"
          },
          {
            "nama": "dr. David Wilson",
            "poli": "Anak",
            "jadwal": ["08:00", "09:00", "10:00", "11:00"],
            "rumah_sakit": "Rumah Sakit ABC",
            "photo": "https://placehold.co/160x200"
          },
          {
            "nama": "dr. Sarah Lee",
            "poli": "Gigi",
            "jadwal": ["09:00", "13:00", "14:00", "20:00"],
            "rumah_sakit": "Rumah Sakit DEF",
            "photo": "https://placehold.co/160x200"
          },
          {
            "nama": "dr. Michael Brown",
            "poli": "Gigi",
            "jadwal": ["10:00", "11:00", "12:00", "13:00"],
            "rumah_sakit": "Rumah Sakit XYZ",
            "photo": "https://placehold.co/160x200"
          },
          {
            "nama": "dr. Emily Johnson",
            "poli": "Mata",
            "jadwal": ["08:00", "15:00", "20:00"],
            "rumah_sakit": "Rumah Sakit PQR",
            "photo": "https://placehold.co/160x200"
          }
        ]
      }
    
  return (
    <div>Nama Pasien = {dataPasien.namaPasien}</div>
  )
}

export default MiniApp