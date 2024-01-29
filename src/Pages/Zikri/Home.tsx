import { useState } from 'react'
import SignalButton from '../../Components/Zikri/Button/Signal-Button'
import SignalBreadcrumb from '../../Components/Zikri/Breadcrumb/SignalBreadcrumb'





const Home = () => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [variant, setVariant] = useState('')
  const [full, setFull] = useState('')
  const [disable, setDisable] = useState('')
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Button', href: '/button' },
    { name: 'Tab', href: '/tab' },
    { name: 'Typography', href: '/typography' },
    { name: 'Education', href: '/education' },
    { name: 'Address', href: '/address' }
  ]
  
  
   return (
    <>
    <div className="space-x-4 p-3 ">
      <SignalBreadcrumb items={breadcrumbItems}/>
    </div>
    <div className='class="border-b-2 border-gray-100 mb-4 p-2 font-bold text-4xl'>
      <h2>Button</h2>
    </div>
    <div className="border-2 py-2 border-gray-200">
      <SignalButton variant={variant} color={color} size={size} full={full} disable={disable} namaButton="signal button" >bwjhbcjbwj</SignalButton>
    </div>
    <div className="flex space-x-4" >
      <div className="flex-1">Name</div>
      <div className="flex-1">Type</div>
      <div className="flex-1">Value</div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">Color</div>
      <div className="flex-1">String</div>
      <div className ="flex-1 ">
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setColor('primary') }>primary</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setColor('secondary')}>secondary</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setColor('valid')}>valid</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setColor('info')}>info</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setColor('warning')}>warning</div>
      </div>
    </div>
    <div className="flex space-x-4">
      <div className="flex-1">size</div>
      <div className="flex-1">String</div>
      <div className="flex-1">
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setSize('small')}>small</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setSize('medium')}>medium</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setSize('large')}>large</div>
      </div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">full</div>
      <div className="flex-1">boolean</div>
      <div className="flex-1">
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setFull('true')}>true</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setFull('false')}>false</div>
      </div>
    </div>
    <div className="flex space-x-4">
      <div className="flex-1">disable</div>
      <div className="flex-1">boolean</div>
      <div className="flex-1">
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setDisable('true')}>true</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setDisable('false')}>false</div>
      </div>
    </div>
    <div className="flex bg-gray-100 space-x-4">
      <div className="flex-1">variant</div>
      <div className="flex-1">string</div>
      <div className="flex-1">
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setVariant('1')}>1</div>
        <div className="cursor-pointer active:font-bold focus:font-bold" onClick={()=>setVariant('2')}>2</div>
      </div>
    </div>
    
    </>
 )
}

export default Home