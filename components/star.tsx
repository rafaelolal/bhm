import Image from 'next/image'
import Link from 'next/link'

export default function Star(props: {
  name: string
  page: string
  top: string
  left: string
}) {
  return (
    <>
      <Link
        className="star"
        href={`https:/ralmeida.dev/${props.page}`}
        style={{ position: 'absolute', top: props.top, left: props.left }}
      >
        <div>
          <Image
            alt={props.page}
            width={300}
            height={300}
            src={`/bhm/images/people/${props.page}.jpg`}
          />
        </div>

        <h6>{props.name}</h6>
      </Link>
    </>
  )
}
