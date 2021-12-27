import { Container, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/landing'
import NoSsr from '../components/utils/no-ssr'
import Wave from '../components/wave'

const Welcome = () => {
  return (
    <Container style={{ height: '100vh', maxWidth: '100vw' }}>
      <NoSsr>
        <Wave />
      </NoSsr>
    </Container>
  )
}

export default Welcome
