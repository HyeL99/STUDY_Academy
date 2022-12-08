import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const {contactList,keyword} = useSelector(state => state);
  const keywordList = [];
  // contactList.map(item => {
  //   if(item.name.includes(keyword) || item.phoneNumber.includes(keyword)){
  //     keywordList.push(item);
  //   }
  // })
  let list = keywordList.length==0 ? contactList : keywordList;

  return (
    <div>
      <SearchBox />
      <hr />
      <ul>
        {list.map((contact,index)=><ContactItem contact={contact} key={index} />)}
      </ul>
    </div>
  )
}

export default ContactList