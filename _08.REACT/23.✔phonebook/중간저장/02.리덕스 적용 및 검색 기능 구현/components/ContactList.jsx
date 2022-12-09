import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const {contactList,keyword} = useSelector(state => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    if(keyword !== ''){
      //검색값이 입력되었을 때
      let book = contactList.filter(item => item.name.includes(keyword));
      setFilteredList(book);
    } else {
      //입력값이 없을 때
      setFilteredList(contactList);
    }
  },[keyword, contactList])
  return (
    <div>
      <SearchBox />
      <hr />
      인원 : {filteredList.length}명
      <ul>
        {filteredList.map((contact,index)=><ContactItem contact={contact} key={index} />)}
      </ul>
    </div>
  )
}

export default ContactList