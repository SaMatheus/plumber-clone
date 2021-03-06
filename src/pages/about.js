// STYLES
import styles from '../styles/pages/About.module.css'

// DATA
import pointsData from '../data/pointsData'

// HOOKS
import { useContext, useEffect } from 'react';

// CONTEXT
import { UrlContext } from '../context/UrlContext';

// COMPONENT
import Header from '../components/Header'
import RouteDescription from '../components/RouteDescription'
import CommercialService from '../components/CommercialService'
import Team from '../components/Team'
import Wrapper from '../components/Wrapper'

const About = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])
  
  return (
    <div>
     <Header />
     <RouteDescription>
      <h1>About Us</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book
      </p>
     </RouteDescription>
     <section className={styles.pointsCompanyContainer}>
       <div className={styles.text}>
         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
         </p>
         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic 
         </p>
         <p>
          typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more 
          recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
         </p>
       </div>
       <div className={styles.grid}>
        {pointsData.map(service => {
          return (
            <div className={styles.pointService}>
              <img src="/icons/about/2-pointscompany/point_icon.svg" alt=""/>
              <div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          )
        })}
       </div>
     </section>
     <CommercialService />
     <Team />
     <Wrapper />
    </div>
  )
}

export default About
