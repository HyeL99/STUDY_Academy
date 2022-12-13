import React from 'react'
import './SourceCard.scss'

const SourceCard = ({openSource, setOpenSource}) => {
  return (
    <div id='sourceCard' className={openSource?'open':''}>
      <button onClick={()=>setOpenSource(false)}>close</button>
      <div> Icons made by<br />
        <a href="https://www.freepik.com" title="Freepik"> Freepik </a>,
        <a href="https://www.flaticon.com/authors/tulpahn" title="tulpahn"> tulpahn </a>,
        <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"> Icongeek26 </a>,
        <a href="https://www.flaticon.com/authors/itim2101" title="itim2101"> itim2101 </a>,
        <a href="https://www.flaticon.com/authors/istar-design-bureau" title="istar_design_bureau"> istar_design_bureau </a> <br />
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default SourceCard