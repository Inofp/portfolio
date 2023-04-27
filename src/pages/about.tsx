import { NextPage } from 'next'
import Layout from './../components/layouts/Layout';
import About from '@/components/layouts/About';




interface Props { }

const AboutPage: NextPage<Props> = ({ }) => {
  return (
    <Layout title='About'>
      <About />
    </Layout>
  )
}

export default AboutPage