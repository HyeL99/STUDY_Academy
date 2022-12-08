import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './ContactItem.module.css'

const ContactItem = () => {
  return (
    <li className={styles.box}>
      <Row className={styles.wrap}>
        <Col xs={3} lg={2} className={styles.imgWrap}>
          <img src="https://cdn-icons-png.flaticon.com/512/4675/4675250.png" alt="프로필사진"/>
        </Col>
        <Col xs className={styles.contents}>
          <h5>가나다</h5>
          <p>010-1234-5678</p>
        </Col>
      </Row>
    </li>
  )
}

export default ContactItem