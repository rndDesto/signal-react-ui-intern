import { useState } from "react"
import SignalBreadcrumb from "../../Components/Zikri/Breadcrumb/SignalBreadcrumb"
import SignalButton from "../../Components/Zikri/Button/Signal-Button"
import SignalCallout from "../../Components/Agil/Callout/signalCallout"
import SignalCard from "../../Components/Agil/Card/SignalCard"
import SignalChips from "../../Components/Nadhifa/Chips/Chips"
import SignalBody from "../../Components/Agil/Body/SignalBody"
import SignalSnackBar from "../../Components/Nadhifa/SnackBar/signalSnackBar"



const MiniApp = () => {
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

      const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Button', href: '/button' },
        { name: 'Tab', href: '/tab' },
        { name: 'Typography', href: '/typography' },
        { name: 'Education', href: '/education' },
        { name: 'Address', href: '/address' }
      ]

      const initialFilter = [
        {
          name: "Crime",
          isSelected: false,
        },
        {
          name: "Science Fiction",
          isSelected: false,
        },
        {
          name: "Drama",
          isSelected: false,
        },
      ];


      const [calloutOpen] = useState(true);
      const [movieData, setMovieData] = useState(movieList.movies);
      const [snackBarVisible, setSnackBarVisible] = useState(false);

      const [filter, setFilter] = useState(initialFilter);

      const handleChipfilter = (itemFilter: any, indexFilter: number) => {
        setFilter((prevState) =>
          prevState.map((itemFilter, i) => ({
            ...itemFilter,
            isSelected: i === indexFilter,
          }))
        );
      };
      
      



  // Buat state untuk menyimpan status disabled untuk setiap film
  const [buttonDisabledState, setButtonDisabledState] = useState(() =>
  movieList.movies.map(() => true)
);


const handleChipClick = (movieIndex, jadwalIndex) => {
  setMovieData((prevMovies) =>
    prevMovies.map((movie, i) => {
      if (i === movieIndex) {
        const updatedJadwalTayang = movie.jadwal_tayang.map((jadwal, idx) => ({
          ...jadwal,
          isSelected: idx === jadwalIndex,
        }));

        // Periksa apakah setidaknya satu jadwal yang dipilih
        const isAtLeastOneSelected = updatedJadwalTayang.some((jadwal) => jadwal.isSelected);

        // Update state hanya untuk film tertentu
        setButtonDisabledState((prev) =>
          prev.map((prevItem, prevIndex) =>
            prevIndex === movieIndex ? !isAtLeastOneSelected : prevItem
          )
        );

        return {
          ...movie,
          jadwal_tayang: updatedJadwalTayang,
        };
      } else {
        // Unselect all schedules for other movies
        return {
          ...movie,
          jadwal_tayang: movie.jadwal_tayang.map((jadwal) => ({
            ...jadwal,
            isSelected: false,
          })),
        };
      }
    })
  );
};

  
  
  const handleButtonClick = () => {
    setSnackBarVisible(true);
  };
  

  return (
    <div>
      <div className="py-1">
      <SignalCallout color="info" openCallout={calloutOpen} >
          <div className="flex flex-col flex-1 ml-2">
          <SignalBody weight="regular" size="2">
            Nama Pengguna : {movieList.nama}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Umur : {movieList.umur}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Alamat : {movieList.alamat}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Email : {movieList.email}
          </SignalBody>
          <SignalBody weight="regular" size="2">
            Nomor_telepon : {movieList.nomor_telepon}
          </SignalBody>
          </div>
        </SignalCallout>
      </div>

      <div className="py-1">
        <SignalBreadcrumb items={breadcrumbItems} ></SignalBreadcrumb>
      </div>

      <div className="flex flex-auto py-1">
      {filter.map((itemFilter, indexFilter) => (
       <SignalChips
        key={indexFilter}
        data={itemFilter}
        onClick={() => handleChipfilter(itemFilter, indexFilter)}
         img=""
        />
        ))}
      </div>

      <div className="border border-gray-300 max-w-[1000px] m-auto p-5 rounded-md mb-5">
      <div className="flex flex-wrap ">
      {movieData.map((movie, movieIndex) => (
          <div key={movieIndex} className="w-1/2 lg:w-1/3 p-2 card-product">
            <div className="shadow-sm border border-gray-300 p-5 rounded-xl">
            <SignalCard>
              <div className="flex flex-col">
                <img src={movie.imgSrc} alt={movie.title} className="" />
                <div className="flex flex-col">
                  <SignalBody>{movie.title}</SignalBody>
                  <SignalBody>{movie.genre}</SignalBody>
                  <SignalBody>{movie.rating}</SignalBody>
                  <SignalBody> Harga : {movie.harga_tiket}</SignalBody>
                  <SignalBody> Lokasi Teater : {movie.lokasi_teater}</SignalBody>
                  <SignalBody>Jadwal :</SignalBody>
                <div className="flex flex-wrap">
                  {movie.jadwal_tayang.map((jadwal, jadwalIndex) => (
                  <SignalChips
                    key={jadwalIndex}
                    data={jadwal}
                    onClick={() => handleChipClick(movieIndex, jadwalIndex)}
                    img=""
                  />
                    ))}
                  </div>
                </div>
                <SignalButton variant="1" color="info" size="medium" full={true}  disable={buttonDisabledState[movieIndex]} onClick={handleButtonClick}  namaButton="Pesan"  ></SignalButton>
              </div>
            </SignalCard>
            </div>
          </div>
        ))}
       </div>
     </div>
     {snackBarVisible && (
        <SignalSnackBar sticky="false"  position="bottomEnd">
          <div className="flex justify-between m-2">
            <div className="grow">selamat anda telah memesan tiket</div>
            <div className="grow-0" onClick={() => setSnackBarVisible(false)}>Retry</div>
          </div>
        </SignalSnackBar>
      )}
  </div>
  )
}

export default MiniApp