import React from 'react'
import styles from "./style.module.css"
import HeroSection from '@/components/PagesHero/PagesHero'

export default function page() {
  return (
     <main >
<div className={`${styles.background} min-h-[90vh] container mx-auto flex justify-center items-center  py-12 text-white`}>
<div className="content">
    <h1 className=''>PROPAI CRM</h1>
  <p>AI from the Future of Real Estate</p>
</div>

</div>
     </main>
  )
}   
