import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import { Box, Container } from '@chakra-ui/react'
import type { NextRouter } from 'next/router'

type MainProps = {
  children: React.ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  const showHeaderFooter = router.pathname === '/' ? false : true
  return (
    <Box as="main">
      <Head>
        <title>Pierre-Emmanuel Goffi | Développeur Montréal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Pierre-Emmanuel Goffi | Développeur Montréal"
        />
        <meta
          name="description"
          content="Développeur basé à Montréal, spécialisé en cloud et en conception d'application web innovante"
        />
        <meta name="author" content="Pierre-Emmanuel Goffi" />
      </Head>
      {showHeaderFooter && <Navbar path={router.asPath} />}
      <Container maxW="100vw">
        {children}
        {showHeaderFooter && <Footer />}
      </Container>
    </Box>
  )
}

export default Main
