import { useLocation } from 'react-router-dom'
import AddressIcon from '../../../../icons/AddressIcon'
import ContactIcon from '../../../../icons/ContactIcon'
import DateIcon from '../../../../icons/DateIcon'
import { pallet } from '../../../../layout/pallet'
import './Event.scss'

const Event = () => {
    const {state} = useLocation()
    const {address,picUrl,time,title , contact} = state
  return (
    <section className='each-event-container'>
        <div className='each-event-image-container'>
            <img className='each-event-image-img' src={picUrl} alt='my singer' />
        </div>
        <div className='each-event-info-container'>
            <div className='each-event-info-box'>
                <h1 className='each-event-info-box-title'>{title}</h1>
                <div className='each-event-info-box-text'>
                    <div className='each-event-info-box-text-icon'>
                        <DateIcon width={24} height={24} color={pallet.purple.purple8}/>
                        <span className='each-event-info-box-text-icon-text'>Time : </span>
                        <span className='each-event-info-box-text-icon-text'>{time}</span>
                    </div>
                </div>
                <div className='each-event-info-box-text'>
                    <div className='each-event-info-box-text-icon'>
                        <AddressIcon width={24} height={24} color={pallet.purple.purple8}/>
                        <span className='each-event-info-box-text-icon-text'>Address : </span>
                        <span className='each-event-info-box-text-icon-text'>{address}</span>
                    </div>
                </div>
                <div className='each-event-info-box-text'>
                    <div className='each-event-info-box-text-icon'>
                        <ContactIcon width={24} height={24} color={pallet.purple.purple8}/>
                        <span className='each-event-info-box-text-icon-text'>Contact : </span>
                        <span className='each-event-info-box-text-icon-text'>{contact}</span>
                    </div>
                </div>
            </div>
            <button className='each-event-info-btn'>Buy Ticket</button>
        </div>
    </section>
  )
}

export default Event
