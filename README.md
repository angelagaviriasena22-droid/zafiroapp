#  Zafiro Bloom Tours

## Descripción del Proyecto

Zafiro Bloom Tours es un sistema de informacion diseñado para facilitar la gestión y reserva de paquetes turísticos. Los usuarios pueden consultar destinos disponibles, reservar paquetes turísticos y crear viajes personalizados según sus preferencias, ofreciendo una experiencia más cómoda y adaptada a sus necesidades.


## Stack Tecnológico

### Backend
- Python
- FastAPI


### Frontend
- React
- Vite
- HTML5
- CSS3
- JavaScript

### Base de Datos
- posgress

### Control de Versiones
- Git
- GitHub

---

## Estructura del Proyecto

```text
Zafiro_Bloom_Tours/
│
├── backend/          # API Backend
├── frontend/         # Aplicación Cliente
├── db/ 
|__Docs             # Scripts de Base de Datos
└── README.md
```

---

# Ejecución del Backend

## 1. Ingresar a la carpeta backend

```bash
cd backend
```

## 2. Crear entorno virtual

```bash
python -m venv venv
```

## 3. Activar entorno virtual

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

## 4. Instalar dependencias

```bash
pip install -r requirements.txt
```

## 5. Ejecutar el servidor

```bash
fastapi main:app --reload
```

El backend quedará disponible en:

```text
http://127.0.0.1:8000
```

---

# Ejecución del Frontend

## 1. Ingresar a la carpeta frontend

```bash
cd frontend
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

# Funcionalidades Principales


- Visualización de información turística.
- Creación de viajes personalizados.


---

# Integrantes del Proyecto

- Taliana Lozada
- angela gaviria
- laura gutierrez
 

---

# Estado del Proyecto

Proyecto en desarrollo académico para la gestión y reserva de servicios turísticos mediante un sistema de informacion moderna e interactiva.
