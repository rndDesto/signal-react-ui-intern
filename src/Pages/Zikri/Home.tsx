import { useState } from 'react'
import SignalButton from '../../Components/Zikri/Button/Signal-Button'
// import Styles from '../Zikri/style.module.css'



const Home = () => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [variant, setVariant] = useState('')
  const [full, setFull] = useState('')
  const [disable, setDisable] = useState('')

  
   return (
    <>
    <div className='class="border-b-2 border-gray-100 mb-4 p-2 font-bold text-4xl'>
      <h2>Button</h2>
    </div>
    <div className="border-2 border-gray-200">
      <SignalButton variant={variant} color={color} size={size} full={full} disable={disable} namaButton="signal button" />
    </div>
    <div className="flex space-x-4">
      <div className="flex-1">Name</div>
      <div className="flex-1">Type</div>
      <div className="flex-1">Value</div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">Color</div>
      <div className="flex-1">String</div>
      <div className="flex-1">
        <div onClick={()=>setColor('primary') }>primary</div>
        <div onClick={()=>setColor('secondary')}>secondary</div>
        <div onClick={()=>setColor('valid')}>valid</div>
        <div onClick={()=>setColor('info')}>info</div>
        <div onClick={()=>setColor('warning')}>warning</div>
      </div>
    </div>
    <div className="flex space-x-4">
      <div className="flex-1">size</div>
      <div className="flex-1">String</div>
      <div className="flex-1">
        <div onClick={()=>setSize('small')}>small</div>
        <div onClick={()=>setSize('medium')}>medium</div>
        <div onClick={()=>setSize('large')}>large</div>
      </div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">full</div>
      <div className="flex-1">boolean</div>
      <div className="flex-1">
        <div onClick={()=>setFull('true')}>true</div>
        <div onClick={()=>setFull('false')}>false</div>
      </div>
    </div>
    <div className="flex space-x-4">
      <div className="flex-1">disable</div>
      <div className="flex-1">boolean</div>
      <div className="flex-1">
        <div onClick={()=>setDisable('true')}>true</div>
        <div onClick={()=>setDisable('false')}>false</div>
      </div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">variant</div>
      <div className="flex-1">string</div>
      <div className="flex-1">
        <div onClick={()=>setVariant('1')}>1</div>
        <div onClick={()=>setVariant('2')}>2</div>
      </div>
    </div>
    
    </>
 )
}

export default Home