import '../static/PictureCard.css'

export default function PictureCard({img}:{img:string}) {
  return (
    <div className='imageContainer'>
        <img src={img} alt='loaded-picture' className='image'/>
    </div>
  )
}
