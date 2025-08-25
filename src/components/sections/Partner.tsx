import { partner1, partner2, partner3, image1, sub1, sub2, image2, sub3, image3 } from '../../assets'
import CardHolder from '../CardHolder';
import {motion} from 'framer-motion'
const Partner = () => {
  return (
		<section className='flex flex-col items-center justify-center md:mt-10 mt-5 gap-y-10 w-full '>
			<div className='flex items-center justify-center md:gap-x-30 gap-x-8 relative md:mt-20 mt-10'>
				<motion.div
					initial={{
						x: 50,
						y: -20,
					}}
					whileInView={{
						x: 0,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						ease: 'easeIn',
						stiffness: 100,
						damping: 10,
						delay: 0.1,
					}}
					className='flex items-center justify-center max-w-md md:w-[200px] w-[100px] md:h-[200px] h-[100px] md:-rotate-25 -rotate-20 bg-white/80 rounded-2xl p-2'
				>
					<img
						src={partner1}
						alt='partner'
						className='w-full h-full object-cover rounded-2xl'
					/>
				</motion.div>
				<motion.div
					initial={{
						x: -50,
						y: 20,
					}}
					whileInView={{
						x: 0,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						ease: 'easeIn',
						stiffness: 100,
						damping: 10,
						delay: 0.2,
					}}
					className='flex items-center justify-center max-w-md md:w-[200px] w-[100px] md:h-[200px] h-[100px] md:-mt-30 -mt-20  bg-white/80 rounded-2xl p-2'
				>
					<img
						src={partner2}
						alt='partner'
						className='w-full h-full object-cover rounded-2xl'
					/>
				</motion.div>
				<motion.div
					initial={{
						x: -20,
						y: 50,
					}}
					whileInView={{
						x: 0,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						ease: 'easeIn',
						stiffness: 100,
						damping: 10,
						delay: 0.3,
					}}
					className='flex items-center justify-center max-w-md md:w-[200px] w-[100px] md:h-[200px] h-[100px] md:rotate-25 rotate-20 bg-white/80 rounded-2xl p-2'
				>
					<img
						src={partner3}
						alt='partner'
						className='w-full h-full object-cover rounded-2xl'
					/>
				</motion.div>
			</div>
			<div className='md:max-w-3xl max-w-md mt-10 px-10'>
				<h2 className='md:text-5xl text-xl text-center font-medium'>
					Join Over 5 Million People Taking Control of Their
					Subscriptions
				</h2>
				<p className='text-center md:text-lg text-gray-500 mt-5 max-w-[400px] mx-auto'>
					For years, Traca has helped users avoid surprise charges and
					manage their finances better, saving millions in unwanted
					subscriptions and fees.
				</p>
				<div className='flex items-center justify-center gap-x-10 my-5 max-w-[800px] mx-auto '>
					<h1 className='md:text-5xl font-semibold text-gray-500'>
						SoNata
					</h1>
					<h1 className='md:text-5xl font-semibold text-gray-500'>
						Azentra
					</h1>
					<h1 className='md:text-5xl font-semibold text-gray-500'>
						DRaave
					</h1>
					<h1 className='md:text-5xl font-semibold text-gray-500'>
						Ntara
					</h1>
				</div>
				<p className='text-center md:text-lg text-sm text-gray-500 mt-5 max-w-[800px] mx-auto'>
					We’ve helped forward-thinking companies streamline their
					user billing experiences, reduce churn, and unlock clearer
					subscription analytics.{' '}
					<span className='font-medium text-blue-700'>Traca’s</span>{' '}
					tools have been used by global teams and individuals to
					deliver transparency and retention at scale.
				</p>
			</div>
			<div className='w-full'>
				<CardHolder
					variant='right'
					className='mt-10'
					image={image1}
					subsidiayImage={sub1}
					title='Keep Track of Your Everyday Spending'
					description='See where your money goes, spot trends in your spending, and get notified when something changes. That way you’re always one step ahead.'
					buttonText='Learn More'
				/>
				<CardHolder
					variant='left'
					className='mt-10'
					image={image2}
					subsidiayImage={sub2}
					title="Know What You're Paying For- And What You Don't Need"
					description='Traca helps you uncover every recurring charge and manage it from a single dashboard. Cancel what you no longer use, track what matters, and take back financial control.'
					buttonText='Learn More'
				/>
				<CardHolder
					variant='right'
					className='mt-10'
					image={image3}
					subsidiayImage={sub3}
					title="Know What You're Paying For- And What You Don't Need"
					description='Traca helps you uncover every recurring charge and manage it from a single dashboard. Cancel what you no longer use, track what matters, and take back financial control.'
					buttonText='Learn More'
				/>
			</div>
		</section>
  );
}

export default Partner