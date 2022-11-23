import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <div style={{ border: '2px solid #000', padding: '16px', margin: '50px'}}>
        {children}
        </div>
    )
}
export default Wrapper;

/*
    컴포넌트 안에 다른 컴포넌트가 사용되었을 때에는 { children } 사용
*/