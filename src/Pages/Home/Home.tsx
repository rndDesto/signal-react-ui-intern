import SignalButton from "../../Components/Button/Button"

const Home = () => {
  return (
    <div>
      <h1>Pesanan anda</h1>
      {/* <img src="https://api.duniagames.co.id/api/product/upload/image/20832643771638334759.jpg" /> */}
      <p>small</p>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="small" full="false" disable="false"/>
      <SignalButton namaButton="signal button" variant="1" color="secondary" size="small" full="false" disable="true"/>
      <SignalButton namaButton="signal button" variant="1" color="error" size="small" full="true" disable="false"/>
      <SignalButton namaButton="signal button" variant="2" color="primary" size="small" full="true" disable="true"/>
      <p>medium</p>
      <SignalButton namaButton="signal button" variant="2" color="warning" size="medium" full="false" disable="true"/>
      <SignalButton namaButton="signal button" variant="2" color="info" size="medium" full="false" disable="true"/>
      <SignalButton namaButton="signal button" variant="1" color="valid" size="medium" full="true" disable="false"/>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="medium" full="true" disable="true"/>
      <p>large</p>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="large" full="false" disable="false"/>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="large" full="false" disable="true"/>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="large" full="true" disable="false"/>
      <SignalButton namaButton="signal button" variant="1" color="primary" size="large" full="true" disable="true"/>

    </div>
  )
}

export default Home