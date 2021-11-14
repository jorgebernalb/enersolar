import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Form, Button, FormGroup  } from 'react-bootstrap'
import { crearProductos } from '../../api';

const CrearProducto = (props) => {
    const { pathname } = window.location;
    //
    const [nombreProd, setNombreProducto] = useState('');
    const [descripcionProd, setDescripcionProducto] = useState('');
    const [precioProd, setPrecio] = useState('');
    const [estadoProd, setEstadoProducto] = useState('no disponible');
    const [data, setData] = useState({});
    
    //manejo post desde botón
    
    const buttonClick = async () =>{
        
        const newProducto = {
            nombreProducto : nombreProd,
            descripcionProducto : descripcionProd,
            precio : precioProd,
            estado : "no disponible"
            
        };
        await crearProductos(
            
                    {
                        body: JSON.stringify(newProducto),
                        data: newProducto
                    }
                    
        );
        console.log(newProducto);
        return newProducto;
        
    };

    ////
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control type="text" name={'nombreProducto'} 
                    value={nombreProd} onChange={(event) => {
                        setNombreProducto(event.target.value);
                      }}
                    placeholder="Ingrese el nombre del producto" />
                    <Form.Text className="text-mute">
                    Nombre estandar del producto.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Descripción del Producto</Form.Label>
                    <Form.Control type="text" name={'descripcionProducto'} 
                    value={descripcionProd} onChange={(event) => {
                        setDescripcionProducto(event.target.value);}}
                      placeholder="Ingrese la descripción del producto" />
                    <Form.Text className="text-muted">
                    Características del producto.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="t3" controlId="precio">
                    <Form.Label>Precio del Producto</Form.Label>
                    <Form.Control type="text" name={'precio'} 
                    value={precioProd} onChange={(event) => {
                        setPrecio(event.target.value);}}
                        placeholder="Ingrese el precio del producto" />
                    <Form.Text className="text-muted">
                    Precio del producto por unidad.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="t4" controlId="estado">
                    <Form.Label>Estado del Producto</Form.Label>
                    <Form.Control type="text" name={'estado'} 
                    value={estadoProd} onChange={(event) => {
                        setEstadoProducto(event.target.value);}}
                        placeholder="Ingrese el estado del producto" />
                    <Form.Text className="text-muted">
                    Estado del producto: disponible o no disponible
                    </Form.Text>
                </Form.Group>

                                
                <Button variant="primary" type="button" onClick={buttonClick}>
                    Crear Producto
                </Button>
                </Form>
    </div>
    )
}

export default CrearProducto