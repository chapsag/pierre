import { Container, Box, Slide, Button, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import router from 'next/router'
import { BsArrowDown } from 'react-icons/bs'
import Network from '../components/network'
import { Text } from '@chakra-ui/react'

const Page = () => {
  const { isOpen, onToggle } = useDisclosure()

  const handleSlide = () => {
    onToggle()
    router.push('/me')
  }

  return (
    <Container centerContent>
      <Box width={'100vw'} height={'100vh'} align="center" textColor={'white'}>
        <Box
          width={'100%'}
          height={'50%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Network />
        </Box>
        <Box width={'100%'} height={'25%'} position="relative" zIndex={3}>
          <Text fontSize={['3xl', '5xl', '6xl', '6xl']}>
            Hi, I am Pierre-Emmanuel
          </Text>
        </Box>
        <Box
          width={'100%'}
          height={'25%'}
          display={'flex'}
          alignItems={'end'}
          justifyContent={'center'}
        >
          <motion.div
            animate={{ y: 25 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <Button variant="ghost" onClick={handleSlide} mb={10}>
              <BsArrowDown size={26} />
            </Button>
          </motion.div>
        </Box>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }} />
      </Box>
    </Container>
  )
}

export default Page
