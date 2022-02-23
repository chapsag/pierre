import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

interface props {
  title: string
  date?: string
  list: string[]
}

const Paragraph = styled(Text)`
  text-align: justify;
  margin-right: 5em;
`

export const Experience: React.FC<props> = ({ title, date, list }) => {
  return (
    <Box mb={[0, 0, '50px', '50px']}>
      <Text fontSize={['medium', 'medium', '2xl', '2xl']}>{title}</Text>
      <Text as={'i'} fontSize={['small', 'small', 'medium', 'medium']}>
        {date}
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
