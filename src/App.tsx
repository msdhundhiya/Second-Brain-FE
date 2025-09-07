import './App.css'
import { Plus } from './assets/icons/plus'
import { Share } from './assets/icons/share'
import { Button } from './components/Buttons'
import { Card } from './components/Card'

function App() {

  return (
    <>
      <Button variant='secondary' text={"Share Brain"} size = "lg" icononleft={<Share size='lg' />}/>
      <Button variant='primary' text={"Add Content"} size = "lg" icononleft={<Plus size='lg' />}/>
      <div className='flex'>
      <div>
      <Card title="My-video" type='tweet' link='https://twitter.com/WhaleInsider/status/1964185726309810652'/>
      </div>
      <div>
         <Card title="My-video" type='youtube' link='https://youtu.be/3RYzZ4FCWqI?si=wXhaTU9Cy8ts1pGP'/>
      </div >
      </div>
    </>
  )
}

export default App
