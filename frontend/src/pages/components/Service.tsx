import { useMediaQuery } from 'react-responsive';

export default function Service({ title, description, image_src, index }: { title: string; description: string; image_src: string, index: number }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        isMobile ? (
            <div className="service">
            <img src={image_src} alt={title}  className='service-image'/>
            <div className="service-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
        ) : (
            <div className="service">
            {index % 2 === 0 ? <img src={image_src} alt={title}  className='service-image'/> : null}
            <div className="service-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {index % 2 !== 0 ? <img src={image_src} alt={title} className='service-image'/> : null}
        </div>
        )
        
    )
}
