import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {obtenerRoles} from './../../api'

const TablaRoles = () => {
    const [loading, setLoading] = useState(false);
    const [roles, setRoles] = useState([]);
    const [consulta, setConsulta] = useState(true);
    const [search, setSearch] = useState("");
    const [rolesFilter, setRolesFilter] = useState(roles);

    useEffect(() => {
        const fetchRoles = async () => {
          setLoading(true);
          
          await obtenerRoles(
            (res) => {
              console.log("Datos recibidos", res);
              setRoles(res.data);
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
            fetchRoles();
          }
        }, [consulta]);
      
        useEffect(() => {
          setRolesFilter(
            roles.filter((element) => {
              return JSON.stringify(element)
                .toLowerCase()
                .includes(search.toLowerCase());
            })
          );
        }, [search, roles]);

    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre del Usuario</th>
      <th>Rol del usuario</th>
      <th>Estado del Usuario</th>
    </tr>
  </thead>
  <tbody>
  {(roles).map((el,i) => {
          return (
            
              <tr key={el._id}>
              <td>{el._id.slice(20)}</td>
              <td>{el.nombreUsuario}</td>
              <td>{el.rolUsuario}</td>
              <td>{el.estadoUsuario}</td>
              <td>{}</td>
              </tr>
            
          );
        })}
  </tbody>
</Table>
        </div>
    );
};

export default TablaRoles