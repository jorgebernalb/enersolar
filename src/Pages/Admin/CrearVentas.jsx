import React from 'react'
import { Form, Button  } from 'react-bootstrap'

const CrearVentas = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="nombreVenta">
                    <Form.Label>Nombre de la Venta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la Venta" />
                    <Form.Text className="text-muted">
                    Nombre estandar de la Venta.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha de la Venta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la fecha de la venta" />
                    <Form.Text className="text-muted">
                    Fecha de la Venta dela forma año-mes-día - 2021-10-05
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="valorTotal">
                    <Form.Label>Valor Total de la Venta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el valor Total de la Venta" />
                    <Form.Text className="text-muted">
                    Valor Total de la Venta
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="estadoVenta">
                    <Form.Label>Estado de la Venta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el estado del producto" />
                    <Form.Text className="text-muted">
                    Estado de la Venta: proceso, cancelada o entregada
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombreVendedor">
                    <Form.Label>Nombre del Vendedor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nonmbre del Vendedor" />
                    <Form.Text className="text-muted">
                    Nombre del vendedor
                    </Form.Text>
                </Form.Group>

                                
                <Button variant="primary" type="button">
                    Crear Venta
                </Button>
                </Form>
    </div>
    )
}

export default CrearVentas