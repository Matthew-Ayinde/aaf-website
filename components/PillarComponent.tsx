import React from 'react'
import Image from 'next/image'
import SubscribeComp from './shared/SubscribeComp'

const PillarComponent = () => {
  return (
    <>
      <div className='w-full h- mb-6'>
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
            <p className='font-normal text-[18px]'>With a focus on quality delivery, we are driving meaningful change by harnessing the power of dignity 
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

      {/* <div className=''>

        <div className='mt-10 flex flex-col lg:flex-row px-24 bg-green-400'>
          <div className="w-1/2 bg-blue-400">
            <p className='font-bold text-5xl mb-6'>Health</p>

            <p className='font-normal text-[20px] mb-4'>Maternal and Neonatal Health Support Programme (MNHSP)</p>
            <div className='font-thin text-[16px] mb-6'>
              By providing easy access to healthcare, we aim to implement initiatives that significantly decrease maternal mortality rates, improve access to prenatal healthcare, and enhance Neonatal  Care through our support programmes.
            </div>

            <p className='font-normal text-[20px] mb-4'>Water, Sanitation and Hygiene (WASH)</p>
            <div className='font-thin text-[16px]'>
              We aim to provide and ensure access to clean water, sanitation, and hygiene facilities, by promoting and educating communities on hygiene practices through WASH interventions, which would foster behavioral change and sustainable hygiene habits.
            </div>





          </div>


          <div className="w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod omnis dicta harum facilis dolorem a ea, rem sapiente minima soluta totam, incidunt at laborum, ipsum adipisci natus. Nostrum numquam libero nihil omnis. Aperiam maiores eaque similique est. Eligendi fuga reiciendis maxime, tempora doloribus distinctio, earum nihil aut tempore rem ipsam.</div>
        </div>

      </div> */}

      <SubscribeComp />

      
    </>
  )
}

export default PillarComponent