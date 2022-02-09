import {
  Container,
  Box,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import QRcode from '../components/qr-code'
import NextLink from 'next/link'
import SkylineGithub from '../components/skyline-github'

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Section delay={0.1}>
          <Box align="center" my={4}>
            <SkylineGithub />
          </Box>
        </Section>
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('#6E8387', '#C8D3D5')}
            p={3}
            mb={6}
            mt={35}
            align="center"
            textColor={useColorModeValue('white', 'black')}
          >
            Hello, I&apos;m a Belgian developer based in Montreal, CA.
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              mr={{ md: 14 }}
              align="center"
            >
              <QRcode />
            </Box>
            <Box flexGrow={1} align="center" pt={{ md: 5 }}>
              <Heading as="h2" variant="page-title">
                Pierre-Emmanuel Goffi
              </Heading>
              <p>Cloud architect/developer</p>
            </Box>
          </Box>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title" mt={{ md: 5 }}>
              About
            </Heading>
            <Paragraph>
              Hi, I hope you&apos;re doing well. I am cofounder and full-stack
              developer, at piknix. I specialize myself in AI-enabled cloud
              applications. I am a student in Computer Vision at université de
              Sherbrooke. I currently live in Montréal, QC.
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>1996</BioYear>
              Born in Belgium.
            </BioSection>
            <BioSection>
              <BioYear>2016</BioYear>
              Moved to Montréal, Canada.
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Learned Computer Vision at the University of Sherbrooke.
            </BioSection>
            <BioSection>
              <BioYear>Now</BioYear>
              Work as a Cloud Architect at piknix.
            </BioSection>
          </Section>
        </Container>
      </Container>
    </Layout>
  )
}

export default Page
