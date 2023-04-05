import Image from 'next/image'
import Link from 'next/link'

export default function Star(props: {
  page: string
  top: string
  left: string
}) {
  return (
    <>
      <Link
        className="star"
        href={`https:/ralmeida.dev/bhm/${props.page}`}
        style={{ position: 'absolute', top: props.top, left: props.left }}
      >
        <div>
          <Image
            alt={props.page}
            width={300}
            height={300}
            src={`/images/people/${props.page}.jpg`}
          />
        </div>

        <h6 style={{ textTransform: 'capitalize' }}>{props.page}</h6>
      </Link>
    </>
  )
}
