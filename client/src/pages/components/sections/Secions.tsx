import { ReactNode } from 'react'
import './Secions.scss'

interface props{
  children:ReactNode
}

const Sections = ({children}:props) => {
  return (
    <section className="section-container">
      {children}
    </section>
  )
}

export default Sections