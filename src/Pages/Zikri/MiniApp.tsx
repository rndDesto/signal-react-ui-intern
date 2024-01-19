
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
  return (
    <div>Nama Penumpang: {maskapai.pessangerName}</div>
  )
}

export default MiniApp