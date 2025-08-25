
import Star from './icons/Star';
interface TestimonyProps {
    name: string;
    image: string;
    text: string;
    rating: number;
}
const Testimony = ({name, image, text, rating}: TestimonyProps) => {
  return (
		<div className='bg-white rounded-2xl p-5 space-y-5 border border-blue-200'>
			<p className='text-gray-500'>{text}</p>
			
			<div className='flex items-center justify-between gap-2'>
				<div className='flex items-center gap-2'>
					<img
						src={image}
						alt={name}
						className='w-10 h-10 rounded-full'
					/>
					<h3 className='text-lg font-bold'>{name}</h3>
				</div>
				<div className="flex items-center gap-2">
					{Array.from({length: rating}).map((_, index) => (
						<Star key={index} />
					))}
				</div>
			</div>
		</div>
  );
};

export default Testimony;