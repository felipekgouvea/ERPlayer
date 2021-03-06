import { useState } from 'react'
import { liked, noliked } from '../../assets/images/buttons'

type TrackProps = {
  title: string;
  like: boolean;
  albumName: string;
  cover: {
    default: string;
  }
}

function PlayListItem({ title, like, albumName, cover }:TrackProps) {
  const [isLiked, setIsLiked] = useState(like);
  const handlerLiked = () => {
    setIsLiked(!isLiked);
  }  
  
  return (
      <div className="music-container">
        <div className="music-content">
          <img src={cover.default} alt={title} className="music-cover" />
          <div className="music-name">
            <h4>{title}</h4>&nbsp;-&nbsp;<h6>{albumName}</h6>          
          </div>
          <button onClick={() => handlerLiked()} className="button-like">
            <img src={isLiked ? liked : noliked} alt="Like" className="like" />
          </button>
        </div>
      </div>
    );
  }
  
  export default PlayListItem;
