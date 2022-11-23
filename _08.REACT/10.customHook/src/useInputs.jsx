import { useCallback, useState } from 'react'

//해당 input에서 관리할 초기값을 가져옴
const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]:value}))
    },[]);

    const reset =  useCallback(() => {
        setForm(initialForm)
    },[initialForm])

    return [form, onChange, reset]
}

export default useInputs