import ImageHolder from './ImageHolder'
import CardDescription from './CardDescription'

const CardHolder = ({variant,className,image,subsidiayImage,title,description,buttonText}: {variant: 'left' | 'right',className: string,image: string,subsidiayImage: string,title: string,description: string,buttonText: string}) => {
  return (
		<div

			className={`flex items-center justify-between gap-y-10 w-full gap-x-10 md:px-20 ${className} ${
				variant === 'left' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'
			}`}
		>
			<ImageHolder
				image={image}
				subsidiayImage={subsidiayImage}
                variant={variant}
			/>
			<CardDescription
				title={title}
				description={description}
				buttonText={buttonText}
			/>
		</div>
  );
}

export default CardHolder