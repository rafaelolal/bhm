import Image from 'next/image'
import Link from 'next/link'

export default function Star(props: { lastName: string }) {
  return (
    <>
      <Link href={`https:/ralmeida.dev/bhm/${props.lastName}`}>
        <Image
          src={`/images/people/${props.lastName}.jpg`}
          width={300}
          height={300}
          alt={props.lastName}
        />
      </Link>
    </>
  )
}
