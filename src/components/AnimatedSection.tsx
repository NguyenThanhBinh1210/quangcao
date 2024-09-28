/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const AnimatedSection = ({ children, threshold = 0.1, duration = 0.5, defoundX = 0, defoundY }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Chỉ kích hoạt hiệu ứng 1 lần
    threshold: threshold // Tỷ lệ phần tử trong viewport trước khi kích hoạt
  })

  return (
    <motion.div
      ref={ref} // Gắn ref để theo dõi khi phần tử vào viewport
      initial={{ opacity: 0, y: defoundY || 50, x: defoundX }} // Trạng thái ban đầu
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}} // Khi vào viewport, hiện phần tử
      transition={{ duration: duration }} // Thời gian chuyển động
    // style={{ marginBottom: '20px' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
