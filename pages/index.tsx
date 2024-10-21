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
        <div className="website-previews">
          <WebsitePreview
            imageUrl="\hcjdemo.jpg"
            link="https://imgunny.netlify.app/"
            title="HCJ Demo"
          />
          <WebsitePreview
            imageUrl="/jbradio.jpg"
            link="https://fianl-team-project.vercel.app/"
            title="라디오 홈페이지 제작"
          />
          <WebsitePreview
            imageUrl="/shopping.jpg"
            link="https://wwonderfruit.netlify.app/"
            title="쇼핑몰 사이트 제작"
          />
        </div>
        <Contact />
      </Layout>
      <style jsx>{`
        .website-previews {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 20px 0;
        }
      `}</style>
    </>
  )
}

export default Home
