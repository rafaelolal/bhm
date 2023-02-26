import { Typography, Button, Space, Row, Col } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

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
            style={{ color: 'white', textAlign: 'center', width: '300px' }}
          >
            This is a collaborative project by the B-9/10 Web Design class to
            celebrate Black History Month
          </Typography.Text>
        )}

        <Space style={{ marginTop: '16px' }}>
          <Button>SEE THE STARS</Button>
          <Button onClick={() => setIsShowingTitle(!isShowingTitle)}>
            ABOUT
          </Button>
        </Space>
      </Home>

      <Constellations></Constellations>

      <Credits>
        <Row>
          <Col
            span={8}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography.Title style={{ color: 'white' }}>
              Home Page
            </Typography.Title>
            <Space direction="vertical">
              <Typography.Text style={{ color: 'white' }}>
                Deejuanae Lewis
              </Typography.Text>
              <Typography.Text style={{ color: 'white' }}>
                Rafael Almeida
              </Typography.Text>
            </Space>
          </Col>

          <Col span={16} style={{ textAlign: 'center' }}>
            <Typography.Title style={{ color: 'white' }}>
              Individual Pages
            </Typography.Title>
            <Row gutter={4}>
              <Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                <Space direction="vertical">
                  <Typography.Text style={{ color: 'white' }}>
                    Eric Bruckenstein
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Tristan Florencio
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Kevin Huang
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Nina Ignacio
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    John Inoa
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Erick Jacomes
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Aditi Khedkar
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Nate Kim
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Will Kim
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Miles Neal
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Mackenzie Nielsen
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Edgar Pacheco
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Nicholas Panlilio
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Aaron Perrotta
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Alex Pillar
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Dylan Sturr
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Jose Tabuena
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Chelsey Tang
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Cory Zhou
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Andy Zhu
                  </Typography.Text>
                </Space>
              </Col>
              <Col span={12} style={{ textAlign: 'left' }}>
                <Space direction="vertical">
                  <Typography.Text style={{ color: 'white' }}>
                    Jesse Owens
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    N/A
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Frederick Douglass
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    N/A
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Jackie Robinson
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Desmond Daniel Amofah
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Beyonce Knowles Carter
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Malcolm X
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Michael Jackson
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Stevie Wonder
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    N/A
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Aretha Franklin
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Marsha P. Johnson
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    N/A
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Guion Bluford
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Bob Marley
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Toussaint Louverture
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Henrietta Lacks
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    W. E. B. Du Bois
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    Charles Mingus
                  </Typography.Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Credits>
    </>
  )
}
