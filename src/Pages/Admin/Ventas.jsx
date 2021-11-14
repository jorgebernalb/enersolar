
import React,{useState, useEffect} from 'react'
import CrearVentas from './CrearVentas';
import TablaVentas from './TablaVentas';

const Ventas = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [textButton, setTextButton] = useState("Crear Venta");
  useEffect(() => {
    if (!mostrarFormulario) {
      setTextButton("Crear Venta");
    } else {
      setTextButton("Ver Ventas");
    }
  },[mostrarFormulario]);
    return (
        <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col aling-center ">
        <h2 className="text-5xl text-bold text-fuchsia-900 p-3">
          Pagina de Ventas
        </h2>
        <button 
          onClick={() => {
            setMostrarFormulario(!mostrarFormulario);
          }}
          className="btn btn-primary aling-center"
        >
          {textButton}
        </button>
      </div>
      <div className="p-3 items-center">
        
        {!mostrarFormulario ? <TablaVentas /> : <CrearVentas />}
      </div>
    </div>
    )
}

export default Ventas