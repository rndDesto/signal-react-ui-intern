import { useState } from 'react'
import SignalButton from '../../Components/Button/Button'
import Button from '../../Components/Desto/Button/Button'
import { Images } from '../../Components/Desto/Images/Images'
import Label from '../../Components/Desto/Label/Label'

const Home = () => {
  const [warna, setWarna] = useState('')
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

  const movieList = {
    "nama": "Desto",
    "umur": 28,
    "alamat": "Jl. Contoh No. 123",
    "email": "desto@example.com",
    "nomor_telepon": "081234567890",
    "movies": [
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Mission Impossible",
        "genre": "Action",
        "jadwal_tayang": [
          {"name": "12:00", "isSelected": true},
          {"name": "15:00", "isSelected": false},
          {"name": "18:00", "isSelected": true}
        ],
        "durasi": "140 menit",
        "sinopsis": "Seorang agen rahasia harus menggagalkan rencana jahat yang mengancam dunia.",
        "tanggal_rilis": "22 Juli 1996",
        "sutradara": "Brian De Palma",
        "aktor_utama": ["Tom Cruise", "Jon Voight", "Emmanuelle Béart"],
        "rating": "7.1/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Paramount Pictures",
        "nomor_tiket": "T12345",
        "lokasi_teater": "Teater XYZ",
        "harga_tiket": "Rp 100.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Inception",
        "genre": "Science Fiction",
        "jadwal_tayang": [
          {"name": "13:00", "isSelected": false},
          {"name": "16:00", "isSelected": true},
          {"name": "19:00", "isSelected": true}
        ],
        "durasi": "148 menit",
        "sinopsis": "Seorang pencuri pikiran harus melakukan misi yang penuh intrik dalam mimpi orang lain.",
        "tanggal_rilis": "16 Juli 2010",
        "sutradara": "Christopher Nolan",
        "aktor_utama": ["Leonardo DiCaprio", "Elliot Page", "Joseph Gordon-Levitt"],
        "rating": "8.8/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Warner Bros. Pictures",
        "nomor_tiket": "T12346",
        "lokasi_teater": "Teater ABC",
        "harga_tiket": "Rp 120.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "jadwal_tayang": [
          {"name": "14:00", "isSelected": true},
          {"name": "17:00", "isSelected": false},
          {"name": "20:00", "isSelected": true}
        ],
        "durasi": "142 menit",
        "sinopsis": "Seorang pria salah dituduh dan dihukum penjara seumur hidup, mencari keadilan dan persahabatan di penjara Shawshank.",
        "tanggal_rilis": "14 Oktober 1994",
        "sutradara": "Frank Darabont",
        "aktor_utama": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "rating": "9.3/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Columbia Pictures",
        "nomor_tiket": "T12347",
        "lokasi_teater": "Teater XYZ",
        "harga_tiket": "Rp 110.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "The Dark Knight",
        "genre": "Action",
        "jadwal_tayang": [
          {"name": "15:30", "isSelected": true},
          {"name": "18:30", "isSelected": false},
          {"name": "21:30", "isSelected": true}
        ],
        "durasi": "152 menit",
        "sinopsis": "Batman harus menghadapi ancaman baru di Gotham City, Joker, seorang penjahat psikopat yang ingin menciptakan kekacauan. Pertempuran antara kegelapan dan kejahatan mencapai puncaknya dalam film ini.",
        "tanggal_rilis": "18 Juli 2008",
        "sutradara": "Christopher Nolan",
        "aktor_utama": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "rating": "9.0/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Warner Bros. Pictures",
        "nomor_tiket": "T12349",
        "lokasi_teater": "Teater XYZ",
        "harga_tiket": "Rp 125.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Pulp Fiction",
        "genre": "Crime",
        "jadwal_tayang": [
          {"name": "14:30", "isSelected": true},
          {"name": "17:30", "isSelected": false},
          {"name": "20:30", "isSelected": true}
        ],
        "durasi": "154 menit",
        "sinopsis": "Film ini mengisahkan sejumlah cerita yang terjalin bersama, termasuk seorang gangster, seorang petinju, dan seorang penipu. Mereka terlibat dalam situasi yang semakin rumit dan berbahaya.",
        "tanggal_rilis": "14 Oktober 1994",
        "sutradara": "Quentin Tarantino",
        "aktor_utama": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
        "rating": "8.9/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Miramax Films",
        "nomor_tiket": "T12350",
        "lokasi_teater": "Teater LMN",
        "harga_tiket": "Rp 115.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "The Godfather",
        "genre": "Crime",
        "jadwal_tayang": [
          {"name": "15:00", "isSelected": true},
          {"name": "18:00", "isSelected": false},
          {"name": "21:00", "isSelected": true}
        ],
        "durasi": "175 menit",
        "sinopsis": "Film ini mengisahkan keluarga mafia Italia yang terlibat dalam kehidupan kriminal di Amerika Serikat. Sang Pemimpin keluarga, Don Vito Corleone, berusaha menjaga kekuasaan dan menjalani hidup keluarga yang kompleks.",
        "tanggal_rilis": "24 Maret 1972",
        "sutradara": "Francis Ford Coppola",
        "aktor_utama": ["Marlon Brando", "Al Pacino", "James Caan"],
        "rating": "9.2/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Paramount Pictures",
        "nomor_tiket": "T12351",
        "lokasi_teater": "Teater XYZ",
        "harga_tiket": "Rp 130.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Avatar",
        "genre": "Science Fiction",
        "jadwal_tayang": [
          {"name": "14:00", "isSelected": true},
          {"name": "17:00", "isSelected": false},
          {"name": "20:00", "isSelected": true}
        ],
        "durasi": "162 menit",
        "sinopsis": "Film ini mengisahkan petualangan seorang marinir yang terlibat dalam eksplorasi planet Pandora yang penuh dengan keajaiban alam dan makhluk asing. Dia harus memilih antara kewajibannya dan cinta yang tak terduga.",
        "tanggal_rilis": "18 Desember 2009",
        "sutradara": "James Cameron",
        "aktor_utama": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        "rating": "7.8/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "20th Century Fox",
        "nomor_tiket": "T12352",
        "lokasi_teater": "Teater ABC",
        "harga_tiket": "Rp 125.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Forrest Gump",
        "genre": "Drama",
        "jadwal_tayang": [
          {"name": "15:30", "isSelected": true},
          {"name": "18:30", "isSelected": false},
          {"name": "21:30", "isSelected": true}
        ],
        "durasi": "142 menit",
        "sinopsis": "Film ini mengisahkan tentang kehidupan seorang pria sederhana bernama Forrest Gump, yang tanpa disadarinya terlibat dalam berbagai peristiwa penting dalam sejarah Amerika Serikat.",
        "tanggal_rilis": "6 Juli 1994",
        "sutradara": "Robert Zemeckis",
        "aktor_utama": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "rating": "8.8/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Paramount Pictures",
        "nomor_tiket": "T12353",
        "lokasi_teater": "Teater XYZ",
        "harga_tiket": "Rp 120.000"
      },
      {
        "imgSrc": "https://placehold.co/200x200",
        "title": "Interstellar",
        "genre": "Science Fiction",
        "jadwal_tayang": [
          {"name": "14:00", "isSelected": true},
          {"name": "17:00", "isSelected": false},
          {"name": "20:00", "isSelected": true}
        ],
        "durasi": "169 menit",
        "sinopsis": "Film ini mengisahkan perjalanan sekelompok astronaut ke luar angkasa untuk menemukan planet baru yang dapat menjadi tempat tinggal manusia, karena bumi menghadapi krisis ekologi yang serius.",
        "tanggal_rilis": "7 November 2014",
        "sutradara": "Christopher Nolan",
        "aktor_utama": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "rating": "8.6/10 (IMDb)",
        "bahasa": "Inggris",
        "negara_asal": "Amerika Serikat",
        "studio_produksi": "Warner Bros. Pictures",
        "nomor_tiket": "T12354",
        "lokasi_teater": "Teater ABC",
        "harga_tiket": "Rp 125.000"
      }
    ]
  }
  


  return (
    <div>
      <div className='bg-green-200 p-2 border border-green-700'>
        <p>desto</p>
        <p>08166253344</p>
      </div>

      <p>Rs/dokter/poli</p>

      <p>Ekonomi Bisnis</p>



      {dataPasien.listDokter.map((dokter, index) => (
        <div key={index} className='border border-gray-300 max-w-[1200px] m-auto p-5 rounded-md mb-5'>
          <div className='flex gap-2 items-center'>
            <div>
              <div>
                <img src={dokter.photo} />
              </div>
              <div>{dokter.nama}</div>
              <div>Poli: {dokter.poli}</div>
            </div>
            <div className='grow'>
              <p className='text-center text-lg font-bold'>{dokter.rumah_sakit}</p>
              <p className='text-center text-sm mb-5'>Jadwal Praktek</p>
              <div className='flex gap-2 flex-wrap justify-evenly'>
                {dokter.jadwal.map((jadwal, jadwalIndex) => (
                  <div key={jadwalIndex} className='border px-2 rounded-s-md'>{jadwal.name}</div>
                ))}
              </div>
            </div>
            <div>
              <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
            </div>
          </div>
        </div>
      ))}


    {maskapai.flights.map((flight, index) => (
      <div className='border border-gray-300 max-w-[1200px] m-auto p-5 rounded-md mb-5'>
          <div key={index} className='flex justify-between gap-5 items-center'>
             <div>
              <img src={flight.logo} />
            </div>
            <div className='grow'>
              <div>{flight.nomor_penerbangan}</div>
              <div>{flight.kelas}</div>
              <div className="flex gap-1 flex-wrap">
                {flight.bagasi.map((bags, idx) => (
                  <div key={idx} className='border px-2 rounded-s-md'>{bags.name}</div>
                ))}
              </div>
            </div>
            <div className='flex'>
              <div>
                <div>{flight.waktu_keberangkatan.status}</div>
                <div>{flight.waktu_keberangkatan.jam}</div>
              </div>
              <div className='ml-2'>
                <div>{flight.waktu_kedatangan.status}</div>
                <div>{flight.waktu_kedatangan.jam}</div>
              </div>
            </div>
            <div>
              <div className='text-xl font-bold mb-5'>{flight.harga}</div>
              <button className='bg-blue-500 text-white rounded-md p-3 w-full'>Pesan</button>
            </div>
          </div>
      </div>
    ))}


      <div className='border mt-5 border-gray-300 max-w-[1200px] m-auto p-5 rounded-md'>
        <div className="flex gap-3">
          {movieList?.movies.map((movie, indexMovie) => (
            <div
              key={indexMovie}
              className="w-1/3 border border-gray-300 p-5 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={movie.imgSrc} alt={movie.title} className="w-48 h-48 mx-auto mb-3" />
              <div className="text-xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap" title={movie.title}>
                {movie.title}
              </div>
              <div className="mb-2">Genre: {movie.genre}</div>
              <div className="mb-2">Rating: {movie.rating}</div>
              <div className="mb-2">
                  <div>Jadwal:</div>
                    <div className="flex gap-1 flex-wrap">
                    {movie.jadwal_tayang.map((jadwal, indexJam) => (
                      <div key={indexJam} className='border px-2 rounded-s-md'>{jadwal.name} - {jadwal.isSelected ? 'mantuljaya':'kerenjaya'}</div>
                    ))}
                    </div>
                  </div>
              <button className="bg-blue-500 text-white rounded-md p-3 w-full hover:bg-blue-600 transition duration-300">
                Pesan
              </button>
            </div>
          ))}
        </div>
      </div>

        <h1 className="bg-red-500 p-10 text-4xl">Home Desto</h1>
        <p onClick={()=>setWarna('primary')}>warna merah</p>
        <p onClick={()=>setWarna('secondary')}>warna kuning</p>
        <p onClick={()=>setWarna('tritary')}>warna hijau</p>
        <Button />
        
        <Label rounded="2" bg={warna}>
          <Images w="30" height="30" src="https://cdn-icons-png.flaticon.com/128/665/665049.png" />
          <p>data tidak ditemukan </p>
          <SignalButton namaButton="oke, mengerti" warna="info" />
        </Label>
    </div>
  )
}
export default Home