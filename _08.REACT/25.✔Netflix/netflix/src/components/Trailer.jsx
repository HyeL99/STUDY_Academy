//react-bootstrap modal을 이용한 유튜브 팝업
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';


const Trailer = ({videos}) => {
  const [show, setShow] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  // {videos ? <YouTube videoId={videos.key} opts={opts} onReady={(e)=>_onReady(e)} />:<p>트레일러 영상이 없습니다.</p>}


  console.log('###############',videos);
  return (
    <div>
      <Button variant="danger" onClick={() => setShow(true)}>
        🎥 트레일러 영상 보기
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className='videoModal'
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        {videos && videos[0] ? <YouTube videoId={videos[0].key} opts={opts} onReady={(e)=>_onReady(e)} />:<p>트레일러 영상이 없습니다.</p>}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Trailer
