import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './ContactItem.module.css'
import profile from '../assets/profile.png'

const ContactItem = ({contact}) => {
  return (
    <li className={styles.box}>
      <Row className={styles.wrap}>
        <Col xs={3} lg={2} className={styles.imgWrap}>
          <img src={profile} alt="프로필사진"/>
        </Col>
        <Col xs className={styles.contents}>
          <h5>{contact.name}</h5>
          <p>{contact.phoneNumber}</p>
        </Col>
      </Row>
    </li>
  )
}

export default ContactItem