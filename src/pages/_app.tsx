import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import Fonts from '../lib/fonts'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { Container } from '@chakra-ui/react'

const Portfolio = ({
  Component,
  pageProps,
  router
}: AppProps): ReactElement => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GTM })
  }, [])
  return (
    <Container
      style={{ position: 'relative', width: '100vh', height: '100vw' }}
    >
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Container>
  )
}

export default Portfolio
