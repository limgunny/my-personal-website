import Image from 'next/image'

interface Props {
  width: number
  height: number
}

export const Avatar = ({ width, height }: Props) => {
  return (
    <Image
      src="/me.jpeg"
      alt=""
      className="rounded-full"
      width={width}
      height={height}
    />
  )
}
