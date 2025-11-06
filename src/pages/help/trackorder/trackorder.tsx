
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { Locate } from 'lucide-react'
const TrackOrder = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
<div className='space-y-4 max-w-2xl place-items-center'>
<h1 className='font-semibold uppercase text-2xl'>Track Your Order</h1>
<p>Please Enter your details to track your order</p>
<Input placeholder='Order Number/Conginment Number'/>
<Input placeholder='Phone Number'/>
<Button className='font-bold text-xl uppercase w-full'><Locate/>Track Order</Button>
</div>
    </div>
  )
}

export default TrackOrder