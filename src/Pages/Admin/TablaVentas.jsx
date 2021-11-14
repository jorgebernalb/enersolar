import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {obtenerVentas} from '../../api'

const TablaVentas = () => {
    const [loading, setLoading] = useState(false);
    const [ventas, setVentas] = useState([]);
    const [consulta, setConsulta] = useState(true);
    const [search, setSearch] = useState("");
    const [ventasFilter, setVentasFilter] = useState(ventas);

    useEffect(() => {
        const fetchVentas = async () => {
          setLoading(true);
          
          await obtenerVentas(
            (res) => {
              console.log("Datos recibidos", res);
              setVentas(res.data);
              setLoading(false);
              setConsulta(false);
            },
            (err) => {
              console.error("error", err);
              setLoading(false);
            }
          );
        };
        console.log("consulta", consulta);

        if (consulta) {
            fetchVentas();
          }
        }, [consulta]);
      
        useEffect(() => {
          setVentasFilter(
            ventas.filter((element) => {
              return JSON.stringify(element)
                .toLowerCase()
                .includes(search.toLowerCase());
            })
          );
        }, [search, ventas]);

    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre de la Venta</th>
      <th>Fecha</th>
      <th>Valor Total</th>
      <th>Estado</th>
      <th>Vendedor</th>
    </tr>
  </thead>
  <tbody>
  {(ventas).map((el,i) => {
          return (
            
              <tr key={el._id}>
              <td>{el._id.slice(20)}</td>
              <td>{el.nombreVenta}</td>
              <td>{el.fecha}</td>
              <td>{el.valorTotal}</td>
              <td>{el.estadoVenta}</td>
              <td>{el.nombreVendedor}</td>
              <td>{}</td>
              </tr>
            
          );
        })}
  </tbody>
</Table>
        </div>
    );
};

export default TablaVentas