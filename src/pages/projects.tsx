import { NextPage } from 'next'
import Layout from './../components/layouts/Layout';
import Projects from '@/components/layouts/Projects';

interface Props {}

const ProjectsPage: NextPage<Props> = ({}) => {
  return (
    <Layout title='Projects'>
      <Projects/>
    </Layout>
  )
}

export default ProjectsPage