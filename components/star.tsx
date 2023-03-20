import Image from 'next/image'

export default function Star(props: { lastName: string }) {
  return (
    <>
      <Image
        src={`/images/people/${props.lastName}.jpg`}
        width={300}
        height={300}
        alt={props.lastName}
      />
    </>
  )
}
