import { barcode, heroImage, user1, user2, user3 } from '../assets'
import Button from './Button';
import VectorSign from './VeectorSign';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
		<div className='flex flex-col items-center justify-center mt-2 gap-y-10'>
			<div className='flex items-center gap-2 bg-blue-200/20 p-4 rounded-full px-8  w-fit'>
				<div className='flex items-center gap-2 relative w-18'>
					<motion.img
						initial={{
							opacity: 0,
							scale: 0.5,
							x: -30,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: 'easeInOut',
							type: 'spring',
							stiffness: 200,
							damping: 10,
						}}
						src={user1}
						alt='hero'
						className='md:w-8 md:h-8 w-6 h-6 rounded-full object-cover border-2 border-white'
					/>
					<motion.img
						initial={{
							opacity: 0,
							scale: 0.5,
							x: -20,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
							ease: 'easeInOut',
							type: 'spring',
							stiffness: 200,
							damping: 10,
						}}
						src={user2}
						alt='hero'
						className='md:w-8 md:h-8 w-6 h-6 rounded-full object-cover absolute top-0 left-5 border-2 border-white'
					/>
					<motion.img
						initial={{
							opacity: 0,
							scale: 0.5,
							x: -20,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.3,
							ease: 'easeInOut',
							type: 'spring',
							stiffness: 200,
							damping: 10,
						}}
						src={user3}
						alt='hero'
						className='md:w-8 md:h-8 w-6 h-6 rounded-full object-cover absolute top-0 left-10 border-2 border-white'
					/>
				</div>
				<p className='text-gray-500 md:text-base text-xs '>
					Join 1000+ users{' '}
					<span className='hidden md:inline-block'>
						who have already joined the waitlist
					</span>
				</p>
			</div>
			<div className='flex flex-col md:flex-row gap-10 bg-white/80 md:p-16 p-8 pb-0 rounded-2xl backdrop-blur-2xl md:min-h-[600px] '>
				<div className='flex flex-col md:gap-y-4 gap-y-2 md:w-2/3 w-full'>
					<h1 className='md:text-7xl text-3xl font-semibold text-gray-700'>
						Take{' '}
						<motion.span
							className='text-blue-500 inline-block'
							initial={{
								opacity: 0,
								scale: 0.5,
								x: 10,
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								x: 0,
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'easeInOut',
								type: 'spring',
								stiffness: 200,
								damping: 10,
							}}
						>
							Control
						</motion.span>{' '}
						of Your Recurring Costs
					</h1>
					<p className='text-gray-500 md:text-xl text-base max-w-md'>
						Easily discover and manage every ongoing expense across
						subscriptions and bills, no surprises.
					</p>
					<Button
						text='Get Early Access'
						className='w-fit rounded-full px-12 py-4 font-medium mb-4'
						variant='primary'
					/>
					<VectorSign />
					<p className='text-gray-500 md:text-sm text-xs'>
						Over 5k users have joined, don’t get left behind.
					</p>
				</div>
				<div className='relative md:h-[500px] h-[200px] md:w-1/2 w-full '>
					<div className='w-full overflow-hidden md:h-[400px] h-[200px] '>
						<motion.img
							src={heroImage}
							alt='hero'
							className='w-full   md:object-cover'
							initial={{
								opacity: 0,
								scale: 0.5,
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'easeInOut',
							}}
						/>
					</div>
					<motion.div
						initial={{
							opacity: 0,
							x: -20,
							y: -20,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
							ease: 'easeInOut',
							type: 'spring',
							stiffness: 200,
							damping: 10,
						}}
						className=' hidden md:flex absolute -bottom-0 right-0 w-1/2 bg-white p-2 rounded-2xl  flex-col items-center justify-center '
					>
						<img
							src={barcode}
							alt='barcode'
						/>
						<p className='text-gray-500 text-sm'>
							scan to download
						</p>
					</motion.div>
				</div>
			</div>
		</div>
  );
}

export default Hero