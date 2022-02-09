import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

interface sectionProps {
  children: React.ReactNode
  delay?: number
}

type TransitionProps = {}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition'
  }
})

const Section = ({ children, delay = 0 }: sectionProps) => {
  const transition: TransitionProps = { duration: 0.8, delay }
  return (
    <StyledDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      mb={6}
      transition={transition}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
