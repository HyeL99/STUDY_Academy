import React from 'react'

const Box = ({title, item, rst}) => {
    if(rst !== '' && title === 'COMPUTER' && rst !== 'tie') {
        rst === 'win' ? rst='lose' : rst='win'
    } else {
        if(rst === '') {
            rst = 'Game Start'
        }
    }

    return (
        <div className={`box ${rst}`}>
            <h1>{title}</h1>
            <img src={item&&item.img} alt={item&&item.name} className='itemImg'/>
            <h2>{rst}</h2>
        </div>
    )
}

Box.defaultProps = {
    item: {
        name:'game thumbnail',
        img:'game.gif',
    }
}

export default Box
