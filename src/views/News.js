import React from 'react'
import PageNavbar from "components/Navbars/PageNavbar.js";
import Hero from 'components/Hero.js'
import SimpleFooter from 'components/SimpleFooter.js';
import { NewsData } from './NewsData';
import {Row,Col} from 'reactstrap';

const News = () => {
  return (
    <>
      <PageNavbar />
      <Hero heading="News" body="Read more about what we are doing" />
      <Row className="d-flex no-margin news">
        {NewsData.map(news => {
          return (
            <Col xs={12} lg={3} key={news.id}>
              <a className='news-content' href={news.link} target="_blank" rel='noopener norefferer'>
                {news.title}
              </a>
            </Col>
          )
        })}
      </Row>

      <SimpleFooter />
    </>
  )
}

export default News