
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
    
  return (
    <div>Nama Pasien = {dataPasien.namaPasien}</div>
  )
}

export default MiniApp