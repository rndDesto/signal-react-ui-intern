import SignalButton from "../../Components/Button/Button"

const Home = () => {
  return (
    <div>
      <h1>Pesanan anda</h1>
      <img src="https://api.duniagames.co.id/api/product/upload/image/20832643771638334759.jpg" />
      <SignalButton namaButton="Pesan Barang" warna="primary" size="large" variant="1"/>
      <SignalButton namaButton="Kembali" warna="secondary" size="large"  variant="2"/>
      <SignalButton namaButton="Pesan Lagi" warna="primary" size="medium"  variant="2"/>
    </div>
  )
}

export default Home