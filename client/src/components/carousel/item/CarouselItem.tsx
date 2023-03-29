import './CarouselItem.scss'

interface props{
    radius:string
    item:{
        id:number
        title:string
    }
}

const CarouselItem = ({radius , item}:props) => {
  return (
    <div  className='carousel-item-container'>
        <img className='carousel-item-image' style={{borderRadius:`${radius}`}} src='./assets/sample.png' alt='singer'/>
        <span className='carouse-info'>{item.title}</span>
    </div>
  )
}

export default CarouselItem