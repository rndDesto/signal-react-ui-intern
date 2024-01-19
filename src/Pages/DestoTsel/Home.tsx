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
        "harga": "Rp 900.000 / Orang"
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
        "harga": "Rp 1.200.000 / Orang"
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
        "harga": "Rp 850.000 / Orang"
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
        "harga": "Rp 1.500.000 / Orang"
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
        "harga": "Rp 800.000 / Orang"
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
        "harga": "Rp 1.700.000 / Orang"
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
        "harga": "Rp 750.000 / Orang"
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
        "harga": "Rp 1.900.000 / Orang"
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
        "harga": "Rp 700.000 / Orang"
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
        "harga": "Rp 1.800.000 / Orang"
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
          "12:00",
          "15:00",
          "18:00"
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
          "13:00",
          "16:00",
          "19:00"
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
          "14:00",
          "17:00",
          "20:00"
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
      // Dan seterusnya untuk film-film lainnya...
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
        <div key={index} className='border border-gray-300 max-w-[768px] m-auto p-5 rounded-md mb-5'>
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
                  <div key={jadwalIndex} className='border px-2 rounded-s-md'>{jadwal}</div>
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
      <div className='border border-gray-300 max-w-[768px] m-auto p-5 rounded-md mb-5'>
          <div key={index} className='flex justify-between gap-5 items-center'>
             <div>
              <img src={flight.logo} />
            </div>
            <div className='grow'>
              <div>{flight.nomor_penerbangan}</div>
              <div>{flight.kelas}</div>
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


      <div className='border mt-5 border-gray-300 max-w-[768px] m-auto p-5 rounded-md'>
        <div className="flex gap-3">
          {movieList.movies.map((movie, index) => (
            <div
              key={index}
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
                    {movie.jadwal_tayang.map((jadwal, idx) => (
                      <div key={idx} className='border px-2 rounded-s-md'>{jadwal}</div>
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
          <p>data tidak ditemukan</p>
          <SignalButton namaButton="oke, mengerti" warna="info" />
        </Label>
    </div>
  )
}

export default Home