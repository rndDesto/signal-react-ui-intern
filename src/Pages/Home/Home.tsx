import SignalButton from "../../Components/Button/Button"

const Home = () => {
  return (
    <div>
      <h1>Pesanan anda</h1>
      <img src="https://api.duniagames.co.id/api/product/upload/image/20832643771638334759.jpg" />
      <SignalButton namaButton="Pesan Barang gan" warna="kuning"/>
      <SignalButton namaButton="Kembali" warna="biru"/>
      <SignalButton namaButton="Pesan Lagi" warna="ijo"/>
    </div>
  )
}

export default Home