import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

interface props {
  title: string
  subTitle?: string
  list?: string[]
}

const Paragraph = styled(Text)`
  text-align: justify;
  margin-right: 5em;
`

export const Title = styled(Text)`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`

export const Header: React.FC = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={['xx-small', 'xx-small', 'medium', 'xl']}
          display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}
          m={2}
        >
          *This is not my full cv, but a summary of my skills and experience to
          serve for mobile. Please use a desktop browser to see the full cv.
        </Text>
      </Box>
      <Text
        fontSize={['2xl', '2xl', '4xl', '6xl']}
        display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
      >
        Pierre-Emmnauel Goffi
      </Text>
      <Text
        fontSize={['small', 'small', 'medium', 'large']}
        display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
      >
        I am a Belgian developer with 2 years experience in IT industry.
      </Text>
      <Text
        fontSize={['small', 'small', 'medium', 'large']}
        display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
      >
        I specialize myself in ia-enabled cloud applications.
      </Text>
    </Box>
  )
}

export const Experience: React.FC<props> = ({ title, subTitle, list }) => {
  return (
    <Box mb={[0, 0, '50px', '50px']}>
      <Text fontSize={['medium', 'medium', '2xl', '2xl']}>{title}</Text>
      <Text as={'i'} fontSize={['small', 'small', 'medium', 'medium']}>
        {subTitle}
      </Text>
      <List spacing={2} mt={5}>
        {list.map((item, index) => (
          <ListItem key={index}>
            <Paragraph
              fontSize={['xx-small', 'small', 'medium', 'medium']}
              display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
            >
              <ListIcon as={ChevronRightIcon} />
              {item}
            </Paragraph>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export const Skills: React.FC<props> = ({ title, list }) => {
  return (
    <Box mb={[0, 0, '25px', '25px']}>
      <Text fontSize={['medium', 'medium', '2xl', '2xl']}>{title}</Text>
      <List spacing={1}>
        {list.map((item, index) => (
          <ListItem key={index}>
            <Paragraph
              fontSize={['xx-small', 'small', 'medium', 'medium']}
              display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
            >
              <ListIcon as={ChevronRightIcon} />
              {item}
            </Paragraph>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export const Languages: React.FC<props> = ({ title, subTitle }) => {
  return (
    <Box>
      <Text fontSize={['large', 'large', 'xl', 'xl']}>{title}</Text>
      <Text as={'i'} fontSize={['small', 'small', 'medium', 'medium']}>
        {subTitle}
      </Text>
    </Box>
  )
}
