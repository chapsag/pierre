import { Container, Box, Button, HStack, Text } from '@chakra-ui/react'
import { BsArrowDown, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import { RiLinkedinLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import router from 'next/router'
import Network from '../components/animation/network'
import { Contact, ContactOnMobile } from '../components/contact'

const Page = () => {
  const handleClick = () => {
    router.push('/me')
  }

  return (
    <Container centerContent>
      <Box width={'100vw'} height={'100vh'} align={'center'}>
        <Box
          width={'100%'}
          height={'50%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Network />
        </Box>
        <Box width={'100%'} marginBottom={5} position={'relative'} zIndex={3}>
          <Text fontSize={['2xl', '4xl', '6xl', '6xl']}>
            Hi, I am Pierre-Emmanuel
          </Text>
        </Box>
        <HStack
          width={'40%'}
          zIndex={3}
          position={'relative'}
          display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Contact
            text="Curriculum Vitea"
            href="https://pear-avatar-310.notion.site/Pierre-Emmanuel-Goffi-df46b43694cc4df7bf72c70ab54e3119/"
          />
          <Contact
            text="Linkedin"
            href="https://www.linkedin.com/in/pierre-emmanuel-goffi/"
          />
          <Contact text="Github" href="https://github.com/chapsag/" />
        </HStack>
        <HStack
          width={'40%'}
          zIndex={3}
          position={'relative'}
          display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <ContactOnMobile
            icon={<BsReverseLayoutTextWindowReverse size={20} />}
            href="https://pear-avatar-310.notion.site/Pierre-Emmanuel-Goffi-df46b43694cc4df7bf72c70ab54e3119/"
          />
          <ContactOnMobile
            icon={<RiLinkedinLine size={20} />}
            href="https://www.linkedin.com/in/pierre-emmanuel-goffi/"
          />
          <ContactOnMobile
            icon={<IoLogoGithub size={20} />}
            href="https://github.com/chapsag/"
          />
        </HStack>
        <Box
          marginTop={['25%', '0', '0', '0']}
          width={'100%'}
          height={'30%'}
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
            <Button variant={'ghost'} onClick={handleClick}>
              <BsArrowDown size={26} />
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
