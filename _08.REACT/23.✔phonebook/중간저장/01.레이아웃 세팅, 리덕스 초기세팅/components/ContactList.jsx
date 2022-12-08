import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import styles from './ContactList.module,css';

const ContactList = () => {
  return (
    <div>
      <SearchBox />
      <hr />
      <ul>
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </ul>
    </div>
  )
}

export default ContactList