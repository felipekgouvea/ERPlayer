import { headerInfo, tracks } from '../services/api'
import PlayListHeader from './components/PLayListHeader'
import PlayListItem from './components/PlayListItem';

function Player() {
  return (
    <div className="player-container">
      <PlayListHeader {...headerInfo} />
      {
        tracks.map((tracks) => (
          <PlayListItem {...tracks} key= {tracks.id}/>
        ))
      }
    </div>
  );
}

export default Player;
