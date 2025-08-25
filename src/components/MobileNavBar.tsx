import Logo from './Logo'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
interface MobileNavBarProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const MobileNavBar = ({isOpen,setIsOpen}: MobileNavBarProps) => {
  return (
    <div className={`fixed top-0 right-0 w-full h-full bg-white/10 backdrop-blur-sm z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    onClick={() => setIsOpen(false)}>
        <motion.div initial={{
            x:100
        }}
        whileInView={{
            x:0
        }}
        transition={{
            duration:0.3,
            ease:'easeInOut',
            type:'spring',
            stiffness:200,
            delay:0.1,
            damping:10,
           
        }}
        className='flex flex-col  gap-5 items-start w-2/3 h-full bg-white/80 p-10 absolute top-0 right-0'>
            
            <Logo />
            <div className='flex flex-col items-start gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Leave feedback</Link>
            </div>
        </motion.div>
    </div>
  )
}

export default MobileNavBar