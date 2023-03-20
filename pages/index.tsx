import Star from '@/components/star'
import { Typography, Button, Space, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

const pageData = [
  ['Aretha Franklin', 'Edgar Pacheco'],
  ['Beyonce Knowles Carter', 'Aditi Khedkar'],
  ['Bob Marley', 'Dylan Sturr'],
  ['Charles Mingus', 'Andy Zhu'],
  ['Desmond "Etika" Amofah', 'Erick Jacomes'],
  ['Frederick Douglass', 'Kevin Huang'],
  ['Guion Bluford', 'Alex Pillar'],
  ['Henrietta Lacks', 'Chelsey Tang'],
  ['Jackie Robinson', 'John Inoa'],
  ['Jesse Owens', 'Eric Bruckenstein'],
  ['Malcolm X', 'Nate Kim'],
  ['Marsha P. Johnson', 'Nicholas Panlilio'],
  ['Michael Jackson', 'Will Kim'],
  ['Shirley Chisholm', 'Mackenzie Nielsen'],
  ['Josephine Baker', 'Nina Ignacio'],
  ['Barack Obama', 'Tristan Florencio'],
  ['Stevie Wonder', 'Miles Neal'],
  ['Toussaint Louverture', 'Jose Tabuena'],
  ['W. E. B. Du Bois', 'Cory Zhou'],
]

const creditsData = pageData.concat([
  ['Home Page', 'Deejunae Lewis'],
  ['Home Page', 'Rafael Almeida'],
  ['Server', 'Aaron Perrotta'],
])
creditsData.sort()

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const Constellations = styled.div`
  height: 100vh;
`

const Credits = styled.div`
  max-width: 720px;
  margin: auto;
  padding: 32px;
  height: 100vh;
`

export default function IndexPage() {
  const [isShowingTitle, setIsShowingTitle] = useState(true)

  const getLastNames = (pageData: string[][]) => {
    const lastNames: string[] = []
    for (const page of pageData) {
      const name = page[0]
      if (name == 'Beyonce Knowles Carter') {
        lastNames.push('beyonce')
      } else if (name == 'W. E. B. Du Bois') {
        lastNames.push('dubois')
      } else if (name == 'Desmond Daniel "Etika" Amofah') {
        lastNames.push('etika')
      } else {
        lastNames.push(
          name.split(' ')[name.split(' ').length - 1].toLowerCase()
        )
      }
    }
    return lastNames
  }

  return (
    <>
      <Home>
        <Image
          src="/images/blm.png"
          width={300}
          height={300}
          alt="Black Lives Matter fist symbol"
        />

        {isShowingTitle ? (
          <Typography.Title style={{ color: 'white' }}>
            Black Excellence
          </Typography.Title>
        ) : (
          <Typography.Text
            style={{ color: 'white', textAlign: 'center', width: '197px' }}
          >
            This is a collaborative project between the B-9/10 Web Design class
            to celebrate Black History Month
          </Typography.Text>
        )}

        <Space style={{ marginTop: '16px' }}>
          <Link href="#stars" scroll={false}>
            <Button>SEE THE STARS</Button>
          </Link>

          <Button onClick={() => setIsShowingTitle(!isShowingTitle)}>
            {isShowingTitle ? 'About' : 'Back'}
          </Button>
        </Space>
      </Home>

      <Constellations id="stars">
        {getLastNames(pageData).map((name: string, i: number) => (
          <Star key={i} lastName={name} />
        ))}
      </Constellations>

      <Credits>
        <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
          Credits
        </Typography.Title>

        <Row gutter={4}>
          <Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <Space direction="vertical">
              {creditsData.map((l, i) => (
                <Typography.Text key={i} style={{ color: 'white' }}>
                  {l[0]}
                </Typography.Text>
              ))}
            </Space>
          </Col>

          <Col span={12} style={{ textAlign: 'left' }}>
            <Space direction="vertical">
              {creditsData.map((l, i) => (
                <Typography.Text key={i} style={{ color: 'white' }}>
                  {l[1]}
                </Typography.Text>
              ))}
            </Space>
          </Col>
        </Row>
      </Credits>
    </>
  )
}
