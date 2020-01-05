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
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card title="Đăng ký" bordered={false}>
            <TicketForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Ticket;
