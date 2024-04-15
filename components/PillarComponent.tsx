import React from 'react'
import Image from 'next/image'
import SubscribeComp from './shared/SubscribeComp'
import PillarImageComponent from './PillarImageComponent'

const PillarComponent = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-full hidden sm:block'>
          <Image 
            src={'/frame001.png'}
            alt=''
            width={1440}
            height={720}
            objectFit='cover'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <div className='font-bold text-[56px] mb-2'>AAF Pillars</div>
            <p className='font-normal text-[18px] text-custom-gray'>With a focus on quality delivery, we are driving meaningful change by harnessing the power of dignity 
              and service to transform lives and create a more inclusive and equitable society</p>
          </div>
        </div>

        <div className='w-full sm:hidden'>
          <Image 
            src={'/pillar2.png'}
            alt=''
            width={395}
            height={400}
            objectFit='cover'
          />
          <div className='absolute top-6 mt-20 text-center text-white'>
            <div className='font-bold text-2xl mb-2'>AAF Pillars</div>
            <p className='font-normal text-sm px-9 text-custom-gray'>With a focus on quality delivery, we are driving meaningful change by harnessing the power of <br /> dignity <br /> 
              and service to transform lives and create a more inclusive and equitable society</p>
          </div>
        </div>


      </div>

      <PillarImageComponent />

      <div className='lg:mt-64'>
        <SubscribeComp />
      </div>

      
    </>
  )
}

export default PillarComponent