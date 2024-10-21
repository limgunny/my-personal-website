import { Heading } from './Heading'
import { LinkTag } from './LinkTag'
import { Text } from './Text'

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        안녕하세요 저는 중부대학교 정보보호학과에 재학 중인 임건희입니다.
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        현재 포트폴리를 제공하는 이 웹사이트는{' '}
        <LinkTag href="https://nextjs.org/" target="_blank">
          NextJS
        </LinkTag>{' '}
        를 기반으로 만들어 졌으며 차후{' '}
        <LinkTag href="https://www.mongodb.com/ko-kr" target="_blank">
          mongoDB
        </LinkTag>{' '}
        &#38;{' '}
        <LinkTag href="https://thirdweb.com/" target="_blank">
          ThirdWeb
        </LinkTag>
        을 활용하여 포트폴리오를 보다 완성적으로 채워나가겠습니다.
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        프로그래밍 이외에도 저는 노래를 듣거나 영화를 보는것을 좋아합니다
      </Text>
    </section>
  )
}
