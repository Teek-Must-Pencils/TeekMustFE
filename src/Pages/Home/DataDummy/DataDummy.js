import React from 'react'
import dummyJam from '../../../Assets/Img/Property 1=1.png'
import dummyJam2 from '../../../Assets/Img/Property 1=2.png'
import { Button, Card, Col, Row } from 'react-bootstrap'

export const DataDummy = () => {
  return (
    <div>
    <Row>
    {Array.from({ length: 3 }).map((_, idx) => (
        <Col >
            <img src={dummyJam} alt="" />&ensp;&ensp;&ensp;
            <img src={dummyJam2} alt="" />
        </Col>
        ))}
    </Row>
    </div>
  )
}
