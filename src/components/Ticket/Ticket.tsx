import React from 'react';
import { TicketForm } from './Form';
import { Row, Col } from 'antd';
import './less/Ticket.less';

const Ticket = () => {

  return (
    <>
      <Row type="flex" justify="center" style={{ marginTop: '120px' }}>
        <Col xs={24} sm={24} md={24} lg={8}>

          <TicketForm />

        </Col>
      </Row>
    </>
  )
}

export default Ticket;
