import { AnimatePresence, motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'

const Picture = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          borderColor="witheAlpha.800"
          src="/pierre-emmanuel.webp"
          alt="profile photo"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Picture
