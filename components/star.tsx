import Image from 'next/image'
import Link from 'next/link'

export default function Star(props: {
  page: string
  top: string
  left: string
}) {
  return (
    <>
      <Link href={`https:/ralmeida.dev/bhm/${props.page}`}>
        <Image
          alt={props.page}
          width={300}
          height={300}
          src={`/images/people/${props.page}.jpg`}
          style={{ position: 'absolute', top: props.top, left: props.left }}
        />
      </Link>
    </>
  )
}
