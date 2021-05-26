import { useState } from 'react'
import cover from '../assets/images/cover/gusttavo-lima-o-embaixador.jpg'
import ControlButton from './components/ControlButton'
import {
  stop,
  play,
  prev,
  next,
  pause
} from "../assets/images/buttons"

function Controls() {
  const [isPaused, setIsPaused] = useState(false);
  const handlerPlay = () => {
    setIsPaused(!isPaused);
  }

  return (
    <>
      <div className="control-container">
        <img src={cover} alt="Capa do Álbum" className="current" />
        <div className="buttons-container">
          <ControlButton>
            <img src={prev} alt="Voltar" className="button-icon" />
          </ControlButton>
          <ControlButton>
            <img src={stop} alt="Parar" className="button-icon" />
          </ControlButton>
          <ControlButton>
            <img
              src={isPaused ? pause : play}
              alt="Play/Pause"
              className="button-icon"
              onClick={() => handlerPlay()}
            />
          </ControlButton>
          <ControlButton>
            <img src={next} alt="Próxima" className="button-icon" />
          </ControlButton>
        </div>
      </div>
    </>
  );
}

export default Controls;
