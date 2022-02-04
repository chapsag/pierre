import { Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container centerContent>
      <Box
        width={'100vw'}
        height={'100vh'}
        bg={'#d81600'}
        align="center"
        textColor={'white'}
      >
        FrontPage
      </Box>
    </Container>
  )
}

export default Page
