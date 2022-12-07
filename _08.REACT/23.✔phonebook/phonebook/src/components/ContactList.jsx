import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';

const ContactList = () => {
  return (
    <div>
      <SearchBox />
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