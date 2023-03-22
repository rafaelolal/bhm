import Star from '@/components/star'
import { Typography, Button, Space, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

const pageData = [
  {
    page: 'Aretha Franklin',
    author: 'Edgar Pacheco',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Beyonce Knowles Carter',
    author: 'Aditi Khedkar',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Bob Marley',
    author: 'Dylan Sturr',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Charles Mingus',
    author: 'Andy Zhu',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Desmond "Etika" Amofah',
    author: 'Erick Jacomes',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Frederick Douglass',
    author: 'Kevin Huang',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Guion Bluford',
    author: 'Alex Pillar',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Henrietta Lacks',
    author: 'Chelsey Tang',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Jackie Robinson',
    author: 'John Inoa',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Jesse Owens',
    author: 'Eric Bruckenstein',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Malcolm X',
    author: 'Nate Kim',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Marsha P. Johnson',
    author: 'Nicholas Panlilio',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Michael Jackson',
    author: 'Will Kim',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Shirley Chisholm',
    author: 'Mackenzie Nielsen',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Josephine Baker',
    author: 'Nina Ignacio',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Barack Obama',
    author: 'Tristan Florencio',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Stevie Wonder',
    author: 'Miles Neal',
    top: '0%',
    left: '0%',
  },
  {
    page: 'Toussaint Louverture',
    author: 'Jose Tabuena',
    top: '0%',
    left: '0%',
  },
  {
    page: 'W. E. B. Du Bois',
    author: 'Cory Zhou',
    top: '0%',
    left: '0%',
  },
]
pageData.sort((a, b) => a.page.localeCompare(b.page))

const creditsData = pageData
  .map((data) => {
    return { page: data.page, author: data.author }
  })
  .concat([
    { page: 'Home Page', author: 'Deejunae Lewis' },
    { page: 'Home Page', author: 'Rafael Almeida' },
    { page: 'Server', author: 'Aaron Perrotta' },
  ])

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const Constellations = styled.div`
  height: 100vh;
  position: relative;
`

const Credits = styled.div`
  max-width: 720px;
  margin: auto;
  padding: 32px;
  height: 100vh;
`

export default function IndexPage() {
  const [isShowingTitle, setIsShowingTitle] = useState(true)

  const getStarData = (
    pageData: { page: string; author: string; top: string; left: string }[]
  ) => {
    const data: { page: string; top: string; left: string }[] = []
    for (const pageDatum of pageData) {
      const starData = { page: '', top: pageDatum.top, left: pageDatum.left }
      if (pageDatum.page == 'Beyonce Knowles Carter') {
        starData['page'] = 'beyonce'
      } else if (pageDatum.page == 'W. E. B. Du Bois') {
        starData['page'] = 'dubois'
      } else if (pageDatum.page == 'Desmond Daniel "Etika" Amofah') {
        starData['page'] = 'etika'
      } else {
        starData['page'] = pageDatum.page
          .split(' ')
          [pageDatum.page.split(' ').length - 1].toLowerCase()
      }
      data.push(starData)
    }
    return data
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
          <Link href="#constellations" scroll={false}>
            <Button>SEE THE STARS</Button>
          </Link>

          <Button onClick={() => setIsShowingTitle(!isShowingTitle)}>
            {isShowingTitle ? 'About' : 'Back'}
          </Button>
        </Space>
      </Home>

      <Constellations id="constellations">
        {getStarData(pageData).map(
          (datum: { page: string; top: string; left: string }, i: number) => (
            <Star key={i} page={datum.page} top={datum.top} left={datum.left} />
          )
        )}
      </Constellations>

      <Credits>
        <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
          Credits
        </Typography.Title>

        <Row gutter={4}>
          <Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <Space direction="vertical">
              {creditsData.map((datum, i) => (
                <Typography.Text key={i} style={{ color: 'white' }}>
                  {datum.page}
                </Typography.Text>
              ))}
            </Space>
          </Col>

          <Col span={12} style={{ textAlign: 'left' }}>
            <Space direction="vertical">
              {creditsData.map((datum, i) => (
                <Typography.Text key={i} style={{ color: 'white' }}>
                  {datum.author}
                </Typography.Text>
              ))}
            </Space>
          </Col>
        </Row>
      </Credits>
    </>
  )
}
