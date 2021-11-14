import React from 'react'
import { Form, Button  } from 'react-bootstrap'

const CrearRoles = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="nombreUsuario">
                    <Form.Label>Nombre del Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del usuario" />
                    <Form.Text className="text-muted">
                    Nombre completo del usuario
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="rolUsuario">
                    <Form.Label>Rol del Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el rol del usuario" />
                    <Form.Text className="text-muted">
                    Rol del usuario: Administrdor o Vendedor
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="estadoUsuario">
                    <Form.Label>Estado del Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el estado del usuario" />
                    <Form.Text className="text-muted">
                    Estado del usuario: pendiente, autorizado, no autorizado
                    </Form.Text>
                </Form.Group>

                  
                <Button variant="primary" type="button">
                    Crear Usuario
                </Button>
                </Form>
    </div>
    )
}

export default CrearRoles