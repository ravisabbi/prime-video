import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="model-container">
          <button
            type="button"
            onClick={() => close()}
            className="close-btn"
            data-testid="closeButton"
          >
            <IoMdClose size="36" />
          </button>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
