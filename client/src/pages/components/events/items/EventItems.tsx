
import { Link, useNavigate } from 'react-router-dom'
import './EventItems.scss'

const EventItems = ({event}:any) => {
  const {address,picUrl,time,title} = event
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate('/events/123723198797182',{state:{
      ...event
    }})
  }
  return (
    <span className='event-item-container' onClick={onClickHandler}>
        <img className='event-item-image' src={picUrl} alt={title}/>
        <div className='event-item-info'>
            <span className='event-info-text1'>{title}</span>
            <span className='event-info-text2'>{address}</span>
            <span className='event-info-text2'>{time}</span>
        </div>
    </span>
  )
}

export default EventItems