import { testimonials } from '../../constant';
import Star from '../icons/Star';
import Testimony from '../Testimony';

const Testimonials = () => {
	return (
		<section>
			<div className='container mx-auto bg-orange-50/50 rounded-2xl md:px-20 px-5 py-10 flex flex-col md:flex-row  items-center justify-between gap-10 overflow-hidden'>
				<div className='space-y-4 md:w-1/2 w-full'>
					<h2 className='md:text-4xl text-xl font-semibold '>
						Real Stories, Real Results
					</h2>
					<p className='text-gray-500 max-w-sm text-lg'>
						We've been helping people everywhere stay on top of
						their spending. Here is what some have to say.
					</p>
					<div className='flex items-center  gap-2'>
						{Array.from({ length: 5 }).map((_, index) => (
							<Star key={index} />
						))}
					</div>
				</div>

				<div className='md:w-2/3 w-full h-80 relative overflow-hidden'>
					<div className='absolute inset-0 grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-4'>
						{testimonials.map((testimony, index) => (
							<div
								key={testimony.id}
								className='animate-scroll-up'
								style={{
									animationDelay: `${index * 1.5}s`,
									animationDuration: '8s',
									animationIterationCount: 'infinite',
									animationTimingFunction: 'ease-in-out',
								}}
							>
								<Testimony
									{...testimony}
									text={testimony.text}
								/>
							</div>
						))}
						{testimonials.map((testimony, index) => (
							<div
								key={`duplicate-${testimony.id}`}
								className='animate-scroll-up'
								style={{
									animationDelay: `${
										(index + testimonials.length + 3) * 10
									}s`,
									animationDuration: '10s',
									animationIterationCount: 'infinite',
									animationTimingFunction: 'ease-in-out',
								}}
							>
								<Testimony
									{...testimony}
									text={testimony.text}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
