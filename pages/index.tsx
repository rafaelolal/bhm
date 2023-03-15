import { Typography, Button, Space, Row, Col } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

const creditsData = [
  ['Home Page', 'Deejunae Lewis'],
  ['Home Page', 'Rafael Almeida'],
  ['Aretha Franklin', 'Edgar Pacheco'],
  ['Beyonce Knowles Carter', 'Aditi Khedkar'],
  ['Bob Marley', 'Dylan Sturr'],
  ['Charles Mingus', 'Andy Zhu'],
  ['Desmond Daniel Amofah', 'Erick Jacomes'],
  ['Frederick Douglass', 'Kevin Huang'],
  ['Guion Bluford', 'Alex Pillar'],
  ['Henrietta Lacks', 'Chelsey Tang'],
  ['Jackie Robinson', 'John Inoa'],
  ['Jesse Owens', 'Eric Bruckenstein'],
  ['Malcolm X', 'Nate Kim'],
  ['Marsha P. Johnson', 'Nicholas Panlilio'],
  ['Michael Jackson', 'Will Kim'],
  ['N/A', 'Aaron Perrotta'],
  ['Shirley Chisholm', 'Mackenzie Nielsen'],
  ['Josephine Baker', 'Nina Ignacio'],
  ['Barack Obama', 'Tristan Florencio'],
  ['Stevie Wonder', 'Miles Neal'],
  ['Toussaint Louverture', 'Jose Tabuena'],
  ['W. E. B. Du Bois', 'Cory Zhou'],
]
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
            This is a collaborative project by the B-9/10 Web Design class to
            celebrate Black History Month
          </Typography.Text>
        )}

        <Space style={{ marginTop: '16px' }}>
          <Button>SEE THE STARS</Button>
          <Button onClick={() => setIsShowingTitle(!isShowingTitle)}>
            {isShowingTitle ? 'About' : 'Back'}
          </Button>
        </Space>
      </Home>

      <Constellations></Constellations>

      <Credits>
        <Typography.Title style={{ color: 'white' }}>Credits</Typography.Title>

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
