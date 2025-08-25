import Button from './Button'
import {motion} from 'framer-motion'
const CardDescription = ({title,description,buttonText}: {title: string,description: string,buttonText: string}) => {
  return (
    <motion.div initial={{
      opacity:0.4
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:0.4,
      delay:0.1,
      ease:'backInOut'
    }} className='md:max-w-md w-full  '>
        <h2 className='text-2xl  font-medium'>
            {title}
        </h2>
        <p className='text-gray-500 mt-5'>
            {description}
        </p>
        <Button text={buttonText} className='mt-5 text-gray-700 rounded-full px-10 py-3 ' variant='outline' />
    </motion.div>
  )
}

export default CardDescription