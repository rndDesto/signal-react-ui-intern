import SignalButton from "../../Components/Button/Button"

const Home = () => {
  return (
    <div>
      <h1>Pesanan anda</h1>
      <img src="https://api.duniagames.co.id/api/product/upload/image/20832643771638334759.jpg" />
      <SignalButton namaButton="Pesan Barang" warna="primary" size="small" full="false" disabled="false" variant="2" />
      <SignalButton namaButton="Kembali" warna="warning" size="larger" full="false" disabled="false" variant="2" />
      <SignalButton namaButton="Pesan Lagi" warna="secondary" size="medium" full="false" disabled="false" variant="2" />
      
  
    </div>
  )
}

export default Home