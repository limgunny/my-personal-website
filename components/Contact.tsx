import { EMAIL_ADDRESS } from '../lib/constants'
import { Heading } from './Heading'
import { LinkTag } from './LinkTag'
import { Text } from './Text'

export const Contact = () => {
  return (
    <section className="flex flex-col">
      <Heading>Contact 📞</Heading>
      <Text>
        {''}
        <LinkTag href="mailto:91814333@jmail.ac.kr" target="_blank">
          91814333@jmail.ac.kr
        </LinkTag>
        에 문의
      </Text>
    </section>
  )
}
