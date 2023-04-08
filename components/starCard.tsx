import Image from 'next/image'
import Link from 'next/link'

export default function StarCard(props: { page: string }) {
  return (
    <>
      <div className="starCard d-flex flex-column my-3">
        <div
          style={{
            backgroundColor: 'white',
            margin: 'auto',
            padding: '14px',
            clipPath:
              'polygon( 41% 0%, 65% 27%, 100% 27.5%, 80% 57%, 92% 90%, 57% 80%, 28% 100%, 27% 68%, 0% 47%, 31% 36%)',
            height: 'fit-content',
            width: 'fit-content',
          }}
        >
          <a href={`https://ralmeida.dev/${props.page}`}>
            <Image
              alt={props.page}
              width={300}
              height={300}
              src={`/bhm/images/people/${props.page}.jpg`}
            />
          </a>
        </div>

        <h6>{props.page}</h6>
      </div>
    </>
  )
}
