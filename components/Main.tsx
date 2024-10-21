import { TypeAnimation } from 'react-type-animation'
import { IoIosPin } from 'react-icons/io'
import { Heading } from './Heading'
import { Avatar } from './Avatar'
import { Links } from './Links'

// Next.js
import Link from 'next/link'

export const Main = () => {
  return (
    <>
      <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link href="https://www.joongbu.ac.kr/home/">
            <a className="w-fit" target="_blank">
              <div className="flex items-center p-1 text-sm px-3 mb-4 w-fit rounded-full text-white bg-blue-500">
                <IoIosPin className="mr-2 text-xl" />
                Joongbu University
              </div>
            </a>
          </Link>
          <Heading style={{ marginBottom: '0.5rem' }}>
            포트폴리오 <span className="wave">👋</span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            임건희 &mdash;&nbsp;
            <TypeAnimation
              sequence={[
                '중부대학교',
                3000,
                '정보보호학과',
                2000,
                '91814333',
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <Links />
        </div>
        <div className="flex border mb-8 md:mb-0 duration-300 border-teal-100 dark:border-black rounded-full">
          <Avatar width={122} height={122} />
        </div>
      </main>
    </>
  )
}
