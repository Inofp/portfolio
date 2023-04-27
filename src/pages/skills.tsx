import { NextPage } from 'next'
import Layout from '@/components/layouts/Layout';
import Skills from '@/components/layouts/Skills';


interface Props {}

const SkillsPage: NextPage<Props> = ({}) => {
  return (
    <Layout title='Skills'>
      <Skills />
      
    </Layout>
  )
}

export default SkillsPage