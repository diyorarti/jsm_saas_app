import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center'>
        <CompanionCard 
            id="123" 
            name="Brainy Explorer"  
            topic="Neural Network of Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
        />
        <CompanionCard 
            id="456" 
            name="Counsty the number wizard"  
            topic="Derivates & Integrals"
            subject="Maths"
            duration={35}
            color="#e5d0ff"
        />
        <CompanionCard 
            id="120" 
            name="Vocabulary builder"  
            topic="language"
            subject="English"
            duration={25}
            color="#BDE7FF"
        />
      </section>
      <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center'>
        <CompanionList 
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page