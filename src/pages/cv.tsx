import { Box, Container, Text, Grid, GridItem, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Header, Skills, Experience, Title, Languages } from '../components/cv'

const CV: React.FC = () => {
  return (
    <Layout title="C.V">
      <Container
        bg="white"
        textColor={'black'}
        borderRadius={10}
        maxWidth={['100%', '100%', '70%', '70%']}
        fontWeight={1000}
      >
        <Grid
          templateRows="repeat(7, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          display={'inline'}
        >
          <GridItem colSpan={5} marginBottom={'15px'}>
            <Header />
          </GridItem>
          <GridItem
            colSpan={6}
            rowSpan={1}
            marginBottom={'25px'}
            display={'flex'}
          >
            <Box width={'49%'}>
              <Title>Experience</Title>
              <Experience
                title="Co-Founder & Cloud Architect"
                subTitle="piknix, 2021 - Present"
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
                subTitle="Banque nationale,  August 2020 - December 2020"
                list={[
                  'Programmed reporting tools to help data scientist optimized their IA models in production.',
                  'Built data ingestion pipeline to optimize model training deployment by 8%.',
                  'Repaired chatbot ui glitch in production.'
                ]}
              />
              <Experience
                title="BI Developer Intern"
                subTitle="Banque nationale,  January 2020 - April 2020"
                list={[
                  'Programmed continuous deployment pipeline using Jenkins to optimize deployment of micro-services saving the organization 50+ dev hours per month.',
                  'Built a database test software using perl and python to enable versioning on sensitive data informations.',
                  'Explained, in front of 40 peoples, different ways to use AWS to streamlined our process and increase our productivity.'
                ]}
              />
            </Box>
            <Box width={'49%'} ml={10}>
              <Title>Skills</Title>
              <Skills
                title={'C++ (3 y)'}
                list={[
                  'Built image analysis softwares. (OpenGL)',
                  'Built distributed programs. (MPI)'
                ]}
              />
              <Skills
                title={'Python (2 y)'}
                list={[
                  'Built machine learning models. (Pytorch)',
                  'Built API. (FastApi)'
                ]}
              />
              <Skills
                title={'Typescript (2 y)'}
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
                mb={10}
                mt={10}
                display={{ base: 'none', md: 'grid', lg: 'grid', xl: 'grid' }}
              >
                <Title>Education</Title>
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
                <Title>Languages</Title>
                <Languages title={'French'} subTitle={'Native Speaker'} />
                <Languages title={'English'} subTitle={'Proficient'} />
                <Languages title={'Dutch/Mandarin'} subTitle={'Basic'} />
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
              <Title>Leadership</Title>
              <Text mt={7} fontSize={['large', 'large', '2xl', '2xl']}>
                Canada 🇨🇦
              </Text>
              <Experience
                title="Mentor at Technovation Montreal"
                subTitle="2021 - 2022"
                list={[
                  'Technical mentor for a team of 6 girls.',
                  'Speaker: "How to make a good pitch ?", to teach how to sell your idea to VC.'
                ]}
              />
              <Experience
                title="Centech Incubator program"
                subTitle="2021"
                list={[
                  'Selected to be part of Centech accelerator startup program.',
                  'Participated in the incubator program to develop a startup in the city of Montreal.'
                ]}
              />
              <Experience
                title="Coordinator of the student association"
                subTitle="2019"
                list={[
                  'Coordinated student council and administration council.',
                  'Negotiated with faculty direction to uphold the students best interests.'
                ]}
              />
            </Box>
            <Box width={'49%'} ml={10}>
              <Title>&nbsp;</Title>
              <Text fontSize={['large', 'large', '2xl', '2xl']} mt={7}>
                Belgium 🇧🇪
              </Text>
              <Experience
                title="Recipient of the price Corsica"
                subTitle="2015"
                list={[
                  'Won first place with my team amoung 15 Belgian college.',
                  'Assisted scientist in an oceanographic center for 2 weeks in Corsica.'
                ]}
              />
              <Experience
                title="Recipient of the price Move With Africa"
                subTitle="2015"
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
