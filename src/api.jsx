import axios from "axios";

const baseURL = "https://app-backend-enersolar.herokuapp.com";
//const baseURL = "http://localhost:8080"
const eRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
  };
  
  //Crud de Productos
  
  export const  obtenerProductos = async (resCallback, errCallback) => {
    const options = {
      
      method: "GET",
      url: `${baseURL}/api/productos`,
     
     
    };
    await eRequest(options, resCallback, errCallback);
  };

 export const crearProductos = async (resCallback, errCallback) => {
    const options = {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
      method: "post",
      url: `${baseURL}/api/productos`,
      data: {},
      
    };
    await eRequest(options, resCallback, errCallback);
    console.log(options)
  };

  //Crud de Ventas

  export const  obtenerVentas = async (resCallback, errCallback) => {
    const options = {
      
      method: "GET",
      url: `${baseURL}/api/ventas`,
     
     
    };
    await eRequest(options, resCallback, errCallback);
  };

 export const crearVentas = async (resCallback, errCallback) => {
    const options = {
      method: "POST",
      url: `${baseURL}/api/ventas`,
      data:{},
    };
    await eRequest(options, resCallback, errCallback);
  };

  //Crud de Roles

  export const  obtenerRoles = async (resCallback, errCallback) => {
    const options = {
      
      method: "GET",
      url: `${baseURL}/api/usuarios`,
     
     
    };
    await eRequest(options, resCallback, errCallback);
  };

 export const crearRoles = async (resCallback, errCallback) => {
    const options = {
      method: "POST",
      url: `${baseURL}/api/usuarios`,
      data:{},
    };
    await eRequest(options, resCallback, errCallback);
  };