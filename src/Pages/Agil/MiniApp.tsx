
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
          }
        ]
      }
  return (
    <div>Nama penonton = {movieList.nama}</div>
  )
}

export default MiniApp