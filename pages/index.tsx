import Star from '@/components/star'
import { Typography, Space, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import StarCard from '@/components/starCard'
import Head from 'next/head'

// $(document).ready(function () {
//   $("a.scrollLink").click(function (event) {
//       event.preventDefault();
//       $("html, body").animate({
//           scrollTop: $($(this).attr("href")).offset().top
//       }, 1000);
//   });
// });

const pageData = [
  {
    page: 'Aretha Franklin',
    author: 'Edgar Pacheco',
    top: '31.5%',
    left: '17.5%',
  },
  {
    page: 'Beyonce Knowles Carter',
    author: 'Aditi Khedkar',
    top: '37%',
    left: '29%',
  },
  {
    page: 'Bob Marley',
    author: 'Dylan Sturr',
    top: '60%',
    left: '30.8%',
  },
  {
    page: 'Charles Mingus',
    author: 'Andy Zhu',
    top: '89%',
    left: '22%',
  },
  {
    page: 'Desmond "Etika" Amofah',
    author: 'Erick Jacomes',
    top: '13.4%',
    left: '44.3%',
  },
  {
    page: 'Frederick Douglass',
    author: 'Kevin Huang',
    top: '88.3%',
    left: '12.3%',
  },
  {
    page: 'Guion Bluford',
    author: 'Alex Pillar',
    top: '63%',
    left: '55.7%',
  },
  {
    page: 'Henrietta Lacks',
    author: 'Chelsey Tang',
    top: '45.2%',
    left: '88%',
  },
  {
    page: 'Jackie Robinson',
    author: 'John Inoa',
    top: '23%',
    left: '77.5%',
  },
  {
    page: 'Jesse Owens',
    author: 'Eric Bruckenstein',
    top: '64%',
    left: '0.8%',
  },
  {
    page: 'Malcolm X',
    author: 'Nate Kim',
    top: '8.7%',
    left: '52.5%',
  },
  {
    page: 'Marsha P. Johnson',
    author: 'Nicholas Panlilio',
    top: '0%',
    left: '43.3%',
  },
  {
    page: 'Michael Jackson',
    author: 'Will Kim',
    top: '75.5%',
    left: '0.3%',
  },
  {
    page: 'Shirley Chisholm',
    author: 'Mackenzie Nielsen',
    top: '50%',
    left: '99%',
  },
  {
    page: 'Josephine Baker',
    author: 'Nina Ignacio',
    top: '43.4%',
    left: '16.4%',
  },
  {
    page: 'Barack Obama',
    author: 'Tristan Florencio',
    top: '10%',
    left: '70%',
  },
  {
    page: 'Stevie Wonder',
    author: 'Miles Neal',
    top: '37.4%',
    left: '96%',
  },
  {
    page: 'Toussaint Louverture',
    author: 'Jose Tabuena',
    top: '41%',
    left: '50%',
  },
  {
    page: 'W. E. B. Du Bois',
    author: 'Cory Zhou',
    top: '7%',
    left: '32%',
  },
]
pageData.sort((a, b) => a.page.localeCompare(b.page))

const creditsData = pageData
  .map((data) => {
    return { page: data.page, author: data.author }
  })
  .concat([
    { page: 'Home Page', author: 'Deejuanae Lewis' },
    { page: 'Home Page', author: 'Rafael Almeida' },
    { page: 'Server', author: 'Aaron Perrotta' },
  ])

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
`

const Constellations = styled.div`
  margin: auto auto;
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
`

const Credits = styled.div`
  width: 900px;
  margin: auto;
  height: 100vh;
`

export default function IndexPage() {
  const [isShowingTitle, setIsShowingTitle] = useState(true)

  const getStarData = (
    pageData: { page: string; author: string; top: string; left: string }[]
  ) => {
    const data: { page: string; top: string; left: string; name: string }[] = []
    for (const pageDatum of pageData) {
      const starData = {
        page: '',
        top: pageDatum.top,
        left: pageDatum.left,
        name: pageDatum.page,
      }
      if (pageDatum.page == 'Beyonce Knowles Carter') {
        starData['page'] = 'beyonce'
      } else if (pageDatum.page == 'W. E. B. Du Bois') {
        starData['page'] = 'dubois'
      } else if (pageDatum.page == 'Desmond "Etika" Amofah') {
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
      <Head>
        <title>Black History Month</title>
      </Head>

      <Home>
        <Image
          src="/bhm/images/fist.svg"
          className="fist"
          width={400}
          height={400}
          alt="Black Lives Matter fist symbol"
        />

        <Image
          src="/bhm/images/earth-planet.svg"
          className="d-none d-lg-block"
          width={378 * 0.5}
          height={754 * 0.5}
          alt="Planet"
          style={{ position: 'absolute', top: '50%', left: '0' }}
        />

        <Image
          src="/bhm/images/satellite.svg"
          className="sway d-none d-lg-block"
          width={200}
          height={200}
          alt="Planet"
          style={{
            animationDelay: '2s',
            position: 'absolute',
            top: '30%',
            right: '10%',
          }}
        />

        {isShowingTitle ? (
          <Typography.Title
            style={{
              color: 'white',
              fontFamily: 'galactic',
              fontSize: '2.5rem',
              textAlign: 'center',
              padding: '0 10px',
            }}
          >
            Black Historical Figures
          </Typography.Title>
        ) : (
          <Typography.Text
            style={{
              color: 'white',
              textAlign: 'center',
              width: '200px',
              margin: '10px',
            }}
          >
            This is a collaborative project between the B-9/10 Web Design class
            to celebrate Black History Month
          </Typography.Text>
        )}

        <Space style={{ marginTop: '16px' }}>
          <Link href="#constellations" scroll={false} className="scrollLink">
            <div className="btn">See The Stars</div>
          </Link>

          <div
            onClick={() => setIsShowingTitle(!isShowingTitle)}
            className="btn"
          >
            {isShowingTitle ? 'About' : 'Back'}
          </div>
        </Space>
      </Home>

      <Constellations id="constellations">
        <div
          className="card border-0 m-auto d-none d-lg-block"
          style={{
            backgroundColor: 'transparent',
            width: '80%',
            height: 'auto',
          }}
        >
          <img
            src="/bhm/images/aquariusConstellation.svg"
            className="card-img"
            alt="Persons Image"
          />

          <div className="card-img-overlay p-0">
            {getStarData(pageData).map(
              (
                datum: {
                  page: string
                  top: string
                  left: string
                  name: string
                },
                i: number
              ) => (
                <Star
                  key={i}
                  name={datum.name}
                  page={datum.page}
                  top={datum.top}
                  left={datum.left}
                />
              )
            )}
          </div>
        </div>

        <div className="container d-block d-lg-none">
          <div className="row row-cols-1 row-cols-md-2">
            {getStarData(pageData).map((datum: { page: string }, i: number) => (
              <StarCard key={i} page={datum.page} />
            ))}
          </div>
        </div>
      </Constellations>

      <Constellations>
        <Image
          src="/bhm/images/earth-planet2.svg"
          className="d-none d-lg-block"
          width={378 * 0.7}
          height={754 * 0.7}
          alt="Planet"
          style={{ position: 'absolute', top: '30%', right: '0' }}
        />
        <Image
          src="/bhm/images/astroid.svg"
          className="d-none d-lg-block sway"
          width={150}
          height={150}
          alt="Astroid"
          style={{
            animationDelay: '2s',
            position: 'absolute',
            top: '5%',
            left: '10%',
          }}
        />
        <Credits>
          <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
            Credits
          </Typography.Title>

          <Row gutter={1}>
            <Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>
              <Space direction="vertical">
                {creditsData.map((datum, i) => (
                  <Typography.Text key={i} style={{ color: 'white' }}>
                    {datum.page}
                  </Typography.Text>
                ))}
              </Space>
            </Col>

            <Col span={12} style={{ textAlign: 'left', paddingLeft: '10px' }}>
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
      </Constellations>
    </>
  )
}
