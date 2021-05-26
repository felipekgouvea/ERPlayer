import cover from '../assets/images/cover/gusttavo-lima-o-embaixador.jpg'
import ControlButton from './components/ControlButton'

function Controls() {
  return (
    <>
      <div className="control-container">
        <img src={cover} alt="Capa do Álbum" className="current" />
      </div>
      <div className="buttons-container">
        <ControlButton/>
      </div>
    </>
  );
}

export default Controls;
