import NextLink from 'next/link'
import { Button, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface ContactProps {
  href: string
  text?: string
  icon?: React.ReactNode
}

const ButtonContact = styled(Button)`
  weight: 150px;
  height: 40px;
`

export const Contact: React.FC<ContactProps> = ({ href, text, ...props }) => {
  return (
    <ButtonContact variant={'outline'}>
      <NextLink href={href} passHref>
        <Link isExternal _target="_blank" rel="noopener noreferrer" {...props}>
          {text}
        </Link>
      </NextLink>
    </ButtonContact>
  )
}

export const ContactOnMobile: React.FC<ContactProps> = ({
  href,
  icon,
  ...props
}) => {
  return (
    <ButtonContact variant={'outline'}>
      <NextLink href={href} passHref>
        <Link isExternal _target="_blank" rel="noopener noreferrer" {...props}>
          {icon}
        </Link>
      </NextLink>
    </ButtonContact>
  )
}
