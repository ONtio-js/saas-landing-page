
import { discoverMore, freeFeeatures, premuimFeatures } from "../../constant";
import {motion} from 'framer-motion'
const Feature = () => {
  return (
		<section className=' py-20'>
			<div className='container mx-auto bg-orange-50/50 rounded-2xl md:p-20 p-5'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<h2 className='md:text-4xl text-xl font-bold text-center'>
						Do More with Traca Premium
					</h2>
					<p className='text-gray-500 text-center max-w-2xl'>
						Premium gives you more than just advanced tools. You
						also get priority support and hands on help to cancel
						subscriptions, manage recurring charges, and stay on top
						of your spending, whenever you need it.
					</p>
				</div>
				<motion.div className='flex flex-col md:flex-row items-start justify-between gap-10 mt-10'>
					<motion.div
						initial={{
							x: -100,
						}}
						whileInView={{
							x: 0,
						}}
						transition={{
							duration: 0.2,
							delay: 0.1,
							ease: 'easeIn',
							stiffness: 100,
							damping: 9,
						}}
						className='bg-white rounded-2xl p-5 md:p-10 md:w-1/2 w-full'
					>
						<h2 className='font-semibold text-2xl text-center capitalize'>
							Without premium
						</h2>

						<ul className='space-y-2 mt-10'>
							{freeFeeatures.map((feature) => (
								<motion.li
									initial={{
										x: -20,
										scale: 1.5,
									}}
									whileInView={{
										x: 0,
										scale: 1,
									}}
									transition={{
										duration: 0.2,
										delay: 0.1 * feature.id,
										ease: 'easeIn',
										stiffness: 200,
										damping: 9,
									}}
									key={feature.id}
								>
									<h3 className='font-medium text-lg capitalize'>
										{feature.title}
									</h3>
									<p className='text-gray-600'>
										{feature.descrription}
									</p>
								</motion.li>
							))}
						</ul>
					</motion.div>
					<motion.div
						initial={{
							x: 100,
						}}
						whileInView={{
							x: 0,
						}}
						transition={{
							duration: 0.2,
							delay: 0.1,
							ease: 'easeIn',
							stiffness: 100,
							damping: 9,
						}}
						className='bg-white rounded-2xl md:p-10 p-5 md:w-1/2 w-full'
					>
						<h2 className='font-semibold text-2xl text-center capitalize'>
							With premium
						</h2>
						<p className='text-gray-600  mt-4'>
							You get everything on the free plan, plus these
							additional services:
						</p>
						<ul className='space-y-4 mt-10'>
							{premuimFeatures.map((feature) => (
								<motion.li
									initial={{
										x: 50,
									}}
									whileInView={{
										x: 0,
									}}
									transition={{
										duration: 0.4,
										delay: 0.2 * feature.id,
										ease: 'easeIn',
										stiffness: 200,
										damping: 9,
									}}
									key={feature.id}
									className='flex items-center gap-2'
								>
									<div className='flex items-center gap-3 bg-gray-200/80 rounded-full p-4'>
										{feature.icon}
									</div>
									<div className='flex flex-col gap-2'>
										<h4 className='font-medium text-sm md:text-lg capitalize'>
											{feature.title}
										</h4>
										<p className='text-gray-600 text-sm md:text-base'>
											{feature.description}
										</p>
									</div>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			</div>
			<div className='max-w-5xl mx-auto  md:p-20 p-5 '>
				<h2 className='md:text-4xl text-xl font-bold text-center'>
					Discover more of Traca Premium
				</h2>
				<div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 md:mt-0'>
					{discoverMore.map((feature) => (
						<motion.div
							initial={{
								x: 100,
							}}
							whileInView={{
								x: 0,
							}}
							transition={{
								duration: 0.5,
								delay: 0.1 * feature.id,
								ease: 'easeIn',
								stiffness: 200,
								damping: 9,
							}}
							key={feature.id}
							className='flex flex-col items-start gap-4'
						>
							<div className='flex items-center gap-3 bg-gray-200/80 rounded-full p-4'>
								{feature.icon}
							</div>
							<div className='flex flex-col items-start gap-2'>
								<h3 className='text-xl font-semibold'>
									{feature.title}
								</h3>
								<p className='text-gray-600'>
									{feature.description}
								</p>
								<button className='text-gray-700 border-b-2  font-semibold border-gray-800'>
									Learn more
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
  );
}

export default Feature