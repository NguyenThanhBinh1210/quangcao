import footerImg from '~/assets/images/footer_bg_d-T6N6PTSE.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })
  return (
    <div className='relative h-[667px]'>
      <img className='h-full w-full object-cover' src={footerImg} alt='' />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className='absolute w-full h-full top-0 left-0 px-4'>
        <div className='max-w-[500px] md:max-w-[900px] mx-auto md:py-[76px] mt-20  grid gap-3 md:gap-8 md:grid-cols-2'>
          <div className='text-white'>
            <p className='text-[28px] pb-2 w-max mx-auto md:mr-auto md:ml-0 uppercase md:normal-case md:text-7xl border-b border-white  font-bold'>
              Contact Us
            </p>
            <p className='mt-2 md:text-lg text-center md:text-start'>
              Expertise in various platform features allows users to have smooth operating experience across different
              platforms
            </p>
          </div>
          <div className='text-white'>
            <p className='md:text-lg text-center md:text-start'>
              Please fill in the information and we will contact you as soon as possible.
            </p>
            <div className='mt-4'>
              <p className='text mb-2'>What is your brand name?</p>
              <input
                placeholder='(Option)'
                type='text'
                className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
              />
              <p className='text mb-2'>Remarks</p>
              <input
                placeholder='(Option)'
                type='text'
                className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
              />
              <p className='text mb-2'>Contact Email</p>
              <input
                placeholder='E-mail'
                type='text'
                className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
              />
              <button className='mt-6 transition-all hover:bg-red-600 hover:border-red-600 w-full border rounded-full border-white py-2.5 p text-lg'>
                Complete
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
