import { useEffect, useState } from 'react'
import { historiaCumpleañosFantasia, historiaDefault, historiaSanValentin } from '../../util/historia'
import style from './index.module.css'

const Terminal = () => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [historiaSeleccionada, setHistoriaSeleccionada] = useState(null);
  const [historiaActual, setHistoriaActual] = useState(null)
  const [historiasDisponibles] = useState([
    { nombre: 'Cumpleaños en Fantasía', historia: historiaCumpleañosFantasia },
    { nombre: 'San valentin', historia: historiaSanValentin },
    { nombre: 'Otra Historia', historia: historiaDefault }
  ]);
  const handleChangeHistoria = (indice) => {
    setHistoriaSeleccionada(historiasDisponibles[indice].historia);
  };
  useEffect(()=>{
    console.log({historiaSeleccionada});
    historiaSeleccionada != null && setHistoriaActual(historiaSeleccionada[0])
  },[historiaSeleccionada])
  

  useEffect(() => {
    if(historiaActual == null) return
    if (historiaActual.opciones && historiaActual.opciones.length > 0) {
      setText(`${historiaActual.descripcion}\n`);
      console.log({historiaActual});
      historiaActual.opciones.forEach((opcion) => {
        setText(prevText => prevText + `${opcion.id}. ${opcion.texto}\n`);
      });
    } else {
      setText(`${historiaActual.descripcion}\n\n\nFin del juego! <3`);
    }
  }, [historiaActual]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const opcionSeleccionada = historiaActual.opciones.find(opcion => opcion.id.toString() === input.toLowerCase());
    if (opcionSeleccionada) {
      const siguientePaso = historiaSeleccionada.find(paso => paso.id === opcionSeleccionada.siguienteId);
      setHistoriaActual(siguientePaso);
    } else {
      setText(prevText => prevText + "Opción no válida. Por favor, selecciona una opción válida.\n");
    }
    setInput('');
  };

  return (
    <>
    <div className={style.historias}>
        <p>Elige una historia:</p>
        <ul>
          {historiasDisponibles.map((historia, index) => (
            <li key={index} onClick={() => handleChangeHistoria(index)}>
              {historia.nombre}
            </li>
          ))}
        </ul>
      </div>
    <div className={style.terminal}>
      <div>{text}</div>
      <form onSubmit={handleSubmit}>
      <span className={style.prompt}>{'>>'} </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
};

export default Terminal;
