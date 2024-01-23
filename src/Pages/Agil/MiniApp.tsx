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
              {"name": "12:00", "isSelected": false},
              {"name": "15:00", "isSelected": false},
              {"name": "18:00", "isSelected": false}
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
              {"name": "16:00", "isSelected": false},
              {"name": "19:00", "isSelected": false}
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
              {"name": "14:00", "isSelected": false},
              {"name": "17:00", "isSelected": false},
              {"name": "20:00", "isSelected": false}
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


      const [calloutOpen] = useState(true);
      const [movieData, setMovieData] = useState(movieList.movies);
      const [snackBarVisible, setSnackBarVisible] = useState(false);




  // Buat state untuk menyimpan status disabled untuk setiap film
  const [buttonDisabledState, setButtonDisabledState] = useState(
    movieList.movies.map(() => true)
  );

  const handleChipClick = (movieIndex:any, jadwalIndex:any) => {
    setMovieData((prevMovies) =>
      prevMovies.map((movie, i) => {
        if (i === movieIndex) {
          const updatedJadwalTayang = movie.jadwal_tayang.map((jadwal, idx) => ({
            ...jadwal,
            isSelected: idx === jadwalIndex,
          }));

          // Update state hanya untuk film tertentu
          setButtonDisabledState((prev) =>
            prev.map((prevItem, prevIndex) =>
              prevIndex === movieIndex ? !updatedJadwalTayang[jadwalIndex].isSelected : prevItem
            )
          );

          return {
            ...movie,
            jadwal_tayang: updatedJadwalTayang,
          };
        }
        return movie;
      })
    );
  };
  console.log(SignalButton);
  
  const handleButtonClick = () => {
    setSnackBarVisible(true);
  };
  

  return (
    <div>
      <div >
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

      <div>
        <SignalBreadcrumb items={breadcrumbItems} ></SignalBreadcrumb>
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
                  <SignalBody>Jadwal :</SignalBody>
                  <div className="flex space-x-2">
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
        <SignalSnackBar sticky="false">
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