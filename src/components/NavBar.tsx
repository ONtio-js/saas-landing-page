import { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
	<>
		<div className='flex justify-between items-center w-full   pb-4 sticky top-0 z-10 backdrop-blur-sm'>
			<div className='flex items-center gap-10'>
				<Logo />
				<div className='hidden md:flex items-center gap-4'>
					<Link
						className='text-gray-500 font-medium text-lg'
						to='/'
					>
						Home
					</Link>
					<Link
						className='text-gray-500 font-medium text-lg'
						to='/about'
					>
						About
					</Link>
					<Link
						className='text-gray-500 font-medium text-lg'
						to='/contact'
					>
						Leave feedback
					</Link>
				</div>
			</div>
			<div className='md:flex hidden items-center gap-4 bg-blue-950 text-white px-8 py-3 rounded-full font-medium text-lg'>
				<Link to='/login'>Join waitlist</Link>
			</div>
			<div className='md:hidden flex flex-col items-end  gap-1.5' onClick={() => setIsOpen(true)}>
				<span className='h-[2.5px] w-5 bg-gray-500 rounded-full'></span>
				<span className='h-[2.5px] w-6 bg-gray-500 rounded-full'></span>
				<span className='h-[2.5px] w-4 bg-gray-500 rounded-full'></span>
			</div>
		</div>
		<MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
	</>
  );
}

export default NavBar