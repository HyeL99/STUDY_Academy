import React from 'react'

export default function CreateUser({username,email,onCreate,onChange}) {
  return (
    <div>
      <input  
        name='username' 
        placeholder='계정명' 
        value={username} 
        onChange={onChange}
        />
        <input 
        name='email' 
        placeholder='이메일' 
        value={email}
        onChange={onChange}
        />
        <button onClick={onCreate}>등록</button>
    </div>
  )
}
