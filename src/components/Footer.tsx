import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
		<footer className=' py-20 pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-10'>
					<div className='flex items-start gap-2 md:w-1/4 w-full flex-col'>
						<Logo />
						<p className='text-gray-500 text-lg font-semibold'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Hic nulla nobis architecto voluptate sunt.
							Optio temporibus totam quos consequuntur unde
							quibusdam ut consectetur vero eos quidem, ratione
							nisi! Qui, at,
						</p>
					</div>
					<div className='flex flex-col items-start gap-2 md:w-1/4 w-full'>
						<h3 className='text-gray-700 text-lg font-semibold'>
							Company
						</h3>
						<Link to='/'>Home</Link>
						<Link to='/'>About</Link>
						<Link to='/'>Contact</Link>
					</div>
					<div className='flex items-start gap-2 flex-col md:w-1/4 w-full'>
						<h3 className='text-gray-700 text-lg font-semibold'>
							Products
						</h3>
						<div className='flex flex-col  gap-2 text-gray-500'>
							<Link to='/'>Traca</Link>
							<Link to='/'>Traca Pro</Link>
							<Link to='/'>Traca Business</Link>
							<Link to='/'>Traca Enterprise</Link>
						</div>
					</div>
					<div className='flex items-start gap-2 flex-col md:w-1/4 w-full '>
						<h3 className='text-gray-700 text-lg font-semibold'>
							Resources
						</h3>
						<div className='flex flex-col  gap-2 text-gray-500'>
							<Link to='/'>Blog</Link>
							<Link to='/'>FAQ</Link>
							<Link to='/'>Contact</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='container mx-auto pt-20'>
				<p className='text-center text-gray-500'>
					&copy; {new Date().getFullYear()} Traca. All rights
					reserved.
				</p>
			</div>
		</footer>
  );
}

export default Footer