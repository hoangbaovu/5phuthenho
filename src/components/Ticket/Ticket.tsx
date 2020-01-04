import React from 'react';
import { TicketForm } from './Form';
import { Row, Col, Card } from 'antd';

const Ticket = () => {

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row type="flex" justify="center">
        <Col xs={22} sm={22} md={22} lg={6}>
          <Card title="Đăng ký" bordered={true}>
            <TicketForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Ticket;