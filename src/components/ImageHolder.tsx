
import {motion} from 'framer-motion'
const ImageHolder = ({image,subsidiayImage,variant}: {image: string,subsidiayImage: string,variant: 'left' | 'right'}) => {
  return (
		<div
			className={`relative md:w-[450px] md:h-[450px] w-[300px] h-[300px] bg-white/80 rounded-2xl p-3`}
		>
			<motion.img
				initial={{
					x: variant === 'left' ? -100 : 100,
					opacity: 0.5,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
					delay: 0.1,
					ease: 'anticipate',
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
				src={image}
				alt='image'
				className='w-full h-full object-cover rounded-2xl'
			/>
			<motion.div
				initial={{
					x: variant === 'left' ? 100 : -100,
					opacity: 0.8,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 0.05,
					ease: 'anticipate',
					type: 'spring',
					damping: 10,
					stiffness: 100,
				}}
				className={`absolute top-[50%] ${
					variant === 'left'
						? 'right-[20%] -translate-x-1/2'
						: 'left-[20%] translate-x-1/2'
				}  -translate-y-1/2  md:w-full w-60 h-40 md:h-2/3  flex items-center justify-center`}
			>
				<img
					src={subsidiayImage}
					alt='subsidiayImage'
					className='w-full h-full  rounded-2xl'
				/>
			</motion.div>
		</div>
  );
}

export default ImageHolder