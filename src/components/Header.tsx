
import NavBar from './NavBar'
import Hero from './Hero'

const Header = () => {
  return (
    <div className='min-h-screen flex flex-col relative'>
        <div className='bg-blue-500/40 w-[1500px] h-[1500px] rounded-full absolute -top-[500px] left-[700px] -z-10 blur-3xl'></div>
      <NavBar />
      <Hero />
    </div>
  )
}

export default Header