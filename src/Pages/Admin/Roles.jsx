import React,{useState, useEffect} from 'react'
import CrearRoles from './CrearRoles';
import TablaRoles from './TablaRoles';

const Roles = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [textButton, setTextButton] = useState("Crear Roles");
  useEffect(() => {
    if (!mostrarFormulario) {
      setTextButton("Crear Roles");
    } else {
      setTextButton("Ver Roles");
    }
  },[mostrarFormulario]);
    return (
        <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col aling-center ">
        <h2 className="text-5xl text-bold text-fuchsia-900 p-3">
          Pagina de Roles
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
        
        {!mostrarFormulario ? <TablaRoles /> : <CrearRoles />}
      </div>
    </div>
    )
}

export default Roles