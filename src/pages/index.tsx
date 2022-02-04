import {
  Container,
  Box,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container centerContent>
      <Box
        borderRadius="lg"
        width={'100vw'}
        height={'100vh'}
        bg={useColorModeValue('#6E8387', '#C8D3D5')}
        align="center"
        textColor={useColorModeValue('white', 'black')}
      >
        FrontPage
      </Box>
    </Container>
  )
}

export default Page
