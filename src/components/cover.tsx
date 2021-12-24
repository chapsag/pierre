import { motion } from 'framer-motion'
import { chakra, Container, shouldForwardProp } from '@chakra-ui/react'

type CoverProps = {
  children: React.ReactNode
  delay?: number
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition'
  }
})

const Cover = ({ children, delay = 0 }: CoverProps) => {
  return (
    <Container
      style={{ position: 'relative', width: '100vh', height: '100vw' }}
    >
      <StyledDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        mb={6}
        transition={
          { duration: 0.8, delay } as any /* not the best way to do this */
        }
        style={{ position: 'relative', width: '100vh', height: '100vw' }}
      >
        {children}
      </StyledDiv>
    </Container>
  )
}

export default Cover
