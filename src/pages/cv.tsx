import { Box, Container, Text, Grid, GridItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Skills, Experience } from '../components/cv'

const CV: React.FC = () => {
  return (
    <Layout title="C.V">
      <Container
        centerContent
        maxWidth={['100%', '100%', '70%', '70%']}
        height={['90vh', '100vh,', '250vh', '250vh']}
        fontWeight={1000}
      >
        <Grid
          height={'80%'}
          templateRows="repeat(7, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem colSpan={5} marginBottom={'15px'}>
            <Box>
              <Box>
                <Text
                  fontSize={['xx-small', 'xx-small', 'medium', 'xl']}
                  display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}
                  m={2}
                >
                  *This is not my full cv, but a summary of my skills and
                  experience to serve for mobile. Please use a desktop browser
                  to see the full cv or download it here.
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
          </GridItem>
          <GridItem
            colSpan={6}
            rowSpan={1}
            marginBottom={'25px'}
            display={'flex'}
          >
            <Box width={'49%'}>
              <Text fontSize={['xl', 'xl', '5xl', '5xl']} mb={4}>
                Experience
              </Text>
              <Experience
                title="Co-Founder & Cloud Architect"
                date="piknix, 2021 - Present"
                list={[
                  'Coordinated a team of 4 developers to support development of our web application.',
                  'Worked closely with the CEO to get venture capital backing.',
                  'Designed a well-architected cloud infrastructure for our product following: cost, operational excellence, security, reliability and performance.',
                  'Conducted different user interview to test and improve new features implemented in our product.',
                  'Built a search engine using collaborative filtering to improve “add to cart” action by 75%.',
                  'Wrote a full documentation of the product technical details to streamline on-boarding of new developers and for maintaining it.'
                ]}
              />
              <Experience
                title="Data Developer Intern"
                date="Banque nationale,  August 2020 - December 2020"
                list={[
                  'Programmed reporting tools to help data scientist optimized their IA models in production.',
                  'Built data ingestion pipeline to optimize model training deployment by 8%.',
                  'Repaired chatbot ui glitch in production.'
                ]}
              />
              <Experience
                title="BI Developer Intern"
                date="Banque nationale,  January 2020 - April 2020"
                list={[
                  'Programmed continuous deployment pipeline using Jenkins to optimize deployment of micro-services saving the organization 50+ dev hours per month.',
                  'Built a database test software using perl and python to enable versioning on sensitive data informations.',
                  'Explained, in front of 40 peoples, different ways to use AWS to streamlined our process and increase our productivity.'
                ]}
              />
            </Box>
            <Box width={'49%'} ml={10}>
              <Text fontSize={['xl', 'xl', '5xl', '5xl']} mb={4}>
                Skills
              </Text>
              <Skills
                title={'C++ (3 years)'}
                list={[
                  'Built image analysis softwares. (OpenGL)',
                  'Built distributed programs. (MPI)'
                ]}
              />
              <Skills
                title={'Python (2 years)'}
                list={[
                  'Built machine learning models. (Pytorch)',
                  'Built API. (FastApi)'
                ]}
              />
              <Skills
                title={'Typescript (2 years)'}
                list={[
                  'Built responsive web application. (React/Next)',
                  'Built reporting tools on AWS.',
                  'Built a web scraper.'
                ]}
              />
              <Skills
                title={'Cloud'}
                list={['AWS - GCP', 'AWS Architect Associate']}
              />
              <Skills
                title={'DevOps'}
                list={[
                  'Jenkins, Docker, Terraform, Kubernetes.',
                  'Currently studying for DevOps AWS Associate.'
                ]}
              />
              <Box
                mb={4}
                display={{ base: 'none', md: 'grid', lg: 'grid', xl: 'grid' }}
              >
                <Text fontSize={['xl', 'xl', '5xl', '5xl']} mb={4} mt={10}>
                  Education
                </Text>
                <Text fontSize={['large', 'large', '2xl', '2xl']}>
                  Computer Vision
                </Text>
                <Text
                  as={'i'}
                  fontSize={['small', 'small', 'medium', 'medium']}
                >
                  Université de Sherbrooke - 2021
                </Text>
              </Box>
              <Box
                mb={4}
                display={{ base: 'none', md: 'grid', lg: 'grid', xl: 'grid' }}
              >
                <Text fontSize={['xl', 'xl', '5xl', '5xl']} mb={4} mt={10}>
                  Languages
                </Text>
                <Text fontSize={['large', 'large', 'xl', 'xl']}>French</Text>
                <Text
                  as={'i'}
                  fontSize={['small', 'small', 'medium', 'medium']}
                >
                  Native Speaker
                </Text>

                <Text fontSize={['large', 'large', 'xl', 'xl']} mt={2}>
                  English
                </Text>
                <Text
                  as={'i'}
                  fontSize={['small', 'small', 'medium', 'medium']}
                >
                  Proficient
                </Text>
                <Text fontSize={['large', 'large', 'xl', 'xl']} mt={2}>
                  Dutch/Mandarin
                </Text>
                <Text
                  as={'i'}
                  fontSize={['small', 'small', 'medium', 'medium']}
                >
                  Basic
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            colSpan={6}
            rowSpan={1}
            marginBottom={'25px'}
            display={'flex'}
          >
            <Box width={'49%'}>
              <Text fontSize={['xl', 'xl', '5xl', '5xl']} mb={5}>
                Leadership
              </Text>
              <Text mt={7} fontSize={['large', 'large', '2xl', '2xl']}>
                Canada 🇨🇦
              </Text>
              <Experience
                title="Mentor at Technovation Montreal"
                date="2021 - 2022"
                list={[
                  'Technical mentor for a team of 6 girls.',
                  'Speaker: "How to make a good pitch ?", to teach how to sell your idea to VC.'
                ]}
              />
              <Experience
                title="Centech Incubator program"
                date="2021"
                list={[
                  'Selected to be part of Centech accelerator startup program.',
                  'Participated in the incubator program to develop a startup in the city of Montreal.'
                ]}
              />
              <Experience
                title="Coordinator of the student association"
                date="2019"
                list={[
                  'Coordinated student council and administration council.',
                  'Negotiated with faculty direction to uphold the students best interests.'
                ]}
              />
            </Box>
            <Box width={'49%'} ml={10}>
              <Text
                mt={[0, '58px', '100px', '100px']}
                fontSize={['large', 'large', '2xl', '2xl']}
              >
                Belgium 🇧🇪
              </Text>
              <Experience
                title="Recipient of the price Corsica"
                date="2015"
                list={[
                  'Won first place with my team amoung 15 Belgian college.',
                  'Assisted scientist in an oceanographic center for 2 weeks in Corsica.'
                ]}
              />
              <Experience
                title="Recipient of the price Move With Africa"
                date="2015"
                list={[
                  'Won an essay contest with my team amoung 30 Belgian college.',
                  'Participated in an exchange program of 3 weeks in Benin.'
                ]}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default CV
