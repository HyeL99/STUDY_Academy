import React, { useState } from 'react'

const CreateUser = () => {
    const [form, setForm] = useState({userName:'',email:''});
    let {userName, email} = form;

    const onCreate = () => {
        console.log('onCreate');
        setForm({userName:'', email:''});
    }
    const onChange = (e) => {
        const nextForm = {...form, [e.target.name]:e.target.value}
        setForm(nextForm);
    }

    return (
        <div>
            <input type="text" name="userName" placeholder='계정명' value={userName} onChange={onChange} />
            <input type="text" name="email" placeholder='이메일' value={email} onChange={onChange} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser