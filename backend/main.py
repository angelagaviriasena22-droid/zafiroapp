from fastapi import FastAPI, HTTPException, status
from clientes import Cliente, ClienteCrear, ClienteEditar
from facturas import Factura, FacturaCrear, FacturaEditar
from transacciones import Transaccion, TransaccionCrear, TransaccionEditar



app = FastAPI()


lista_clientes:list[Cliente] = []
lista_facturas:list[Factura] = []
lista_transacciones:list[Transaccion] = []

#endpoint para listar clientes
@app.get("/clientes", response_model=list[Cliente])
async def listar_clientes():
    return lista_clientes

#endpoint para listar un solo cliente
@app.get("/clientes/{id}", response_model=Cliente)
async def listar_cliente(cliente_id: int):
    #recorrer la lista_clientes
    for i, obj_cliente in enumerate(lista_clientes):
        if obj_cliente.id == cliente_id:
             return obj_cliente
    raise HTTPException(status_code=400, detail=f"El cliente con id {cliente_id}, no existe."
    )
    
#endpoint para crear un cliente y agregar a la lista
@app.post("/clientes", response_model=Cliente)
async def crear_cliente(datos_cliente: ClienteCrear):
    cliente_val = Cliente.model_validate(datos_cliente.model_dump())
    #generar el id
    id_cliente = len(lista_clientes) + 1
    cliente_val.id = id_cliente
    lista_clientes.append(cliente_val)
    return cliente_val

#endpoint para crear un editar un cliente y agregar a la lista
@app.patch("/clientes/{cliente_id}", response_model=Cliente)
async def editar_cliente(cliente_id: int, datos_cliente: ClienteEditar):
    for i, obj_cliente in enumerate(lista_clientes):
        if obj_cliente.id == cliente_id:
            #validar cliente
            cliente_val = Cliente.model_validate(datos_cliente.model_dump())
            cliente_val.id = cliente_id
            lista_clientes[i] = cliente_val
            return cliente_val
    raise HTTPException(status_code=400, detail=f"El cliente con id {cliente_id}, no existe.")

#endpoint para eliminar un cliente
@app.delete("/clientes/{cliente_id}", response_model=Cliente)
async def eliminar_cliente(cliente_id: int):
    for i, obj_cliente in enumerate(lista_clientes):
        if obj_cliente.id == cliente_id:
            cliente_eliminado = lista_clientes.pop(i)
            return cliente_eliminado
    raise HTTPException(
        status_code=400, detail=f"El cliente con id {cliente_id}, no existe."
        )



@app.get("/facturas", response_model=list[Factura])
async def listar_facturas():
    return lista_facturas

@app.get("/facturas/{factura_id}", response_model=Factura)
async def listar_factura(factura_id: int):
    for i, obj_factura in enumerate(lista_facturas):
        if obj_factura.id == factura_id:
             return obj_factura
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"La factura con id {factura_id}, no existe."
    )
    


@app.post("/facturas/{cliente_id}", response_model=Factura)
async def crear_factura(cliente_id: int, datos_factura: FacturaCrear):
    #buscar el cliente
    cliente_encontrado = None
    for cliente in lista_clientes:
        if cliente.id == cliente_id:
            cliente_encontrado = cliente
    #mensaje si no existe el cliente
    if not cliente_encontrado:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"El cliente con id {cliente_id}, no existe."
        )
    #validar datos de la factura
    factura_val = Factura.model_validate(datos_factura.model_dump())
    factura_val.cliente = cliente_encontrado
    #generar el id de la factura
    factura_val.id = len(lista_facturas) + 1
    lista_facturas.append(factura_val)
    return factura_val

@app.patch("/facturas/{factura_id}", response_model=Factura)
async def editar_factura(factura_id: int, datos_factura: FacturaCrear):
    pass

@app.delete("/facturas/{factura_id}", response_model=Factura)
async def eliminar_factura(factura_id: int):
    pass   

#endpoints para transacciones

@app.get("/transacciones", response_model=list[Transaccion])
async def listar_transacciones():
    return lista_transacciones


@app.get("/transacciones/{id_transaccion}", response_model=Transaccion)
async def listar_transaccion(id_transaccion: int):
    pass    


@app.post("/transacciones/{factura.id}", response_model=Transaccion)
async def crear_transaccion(factura_id: int, datos_transaccion: TransaccionCrear):
    #buscar la factura
    factura_encontrada = None
    for factura in lista_facturas:
        if factura.id == factura_id:
            factura_encontrada = factura
    #mensaje si no existe la factura
    if not factura_encontrada:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"La factura con id {factura_id}, no existe."
        )
    #validar datos de la transaccion
    transaccion_val = Transaccion.model_validate(datos_transaccion.model_dump())
    transaccion_val.factura_id = factura_id
    factura_encontrada.transacciones.append(transaccion_val)
    #id de la transaccion
    transaccion_val.id = len(lista_transacciones) + 1
    transaccion_val.factura_id = factura_id
    return transaccion_val

@app.patch("/transacciones/{id_transaccion}", response_model=Transaccion)
async def editar_transaccion(id_transaccion: int, datos_transaccion: TransaccionCrear):
    pass

@app.delete("/transacciones/{id_transaccion}", response_model=Transaccion)
async def eliminar_transaccion(id_transaccion: int):
    pass    