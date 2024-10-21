import { Technologies } from '../components/Technologies'
import { Contact } from '../components/Contact'
import { Layout } from '../components/Layout'
import { About } from '../components/About'
import { Main } from '../components/Main'
import type { NextPage } from 'next'
import WebsitePreview from '../components/WebsitePreview'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Main />
        <About />
        <Technologies />
        <div className="website-previews mt-20">
          <WebsitePreview
            imageUrl="\hcjdemo.jpg"
            link="https://imgunny.netlify.app/"
            title=" "
          />
          <WebsitePreview
            imageUrl="/jbradio.jpg"
            link="https://fianl-team-project.vercel.app/"
            title=" "
          />
          <WebsitePreview
            imageUrl="/shopping.jpg"
            link="https://wwonderfruit.netlify.app/"
            title=" "
          />
        </div>
        <Contact />
      </Layout>
    </>
  )
}

export default Home
