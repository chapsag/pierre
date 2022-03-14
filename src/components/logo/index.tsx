import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { LogoBox } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={'#ffffff'}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Pierre-Emmanuel Goffi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
