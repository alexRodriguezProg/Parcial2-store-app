# Food Store — Delivery App

Aplicación frontend de una tienda de comida con sistema de delivery. Permite a los usuarios explorar el catálogo de productos, filtrar por categorías, buscar por nombre, ver el detalle de cada producto (ingredientes y alérgenos) y gestionar un carrito de compras.

---

## Stack tecnológico

| Capa               | Tecnología            |
|--------------------|-----------------------|
| Framework UI       | React + TypeScript    |
| Build tool         | Vite                  |
| Routing            | React Router DOM      |
| Estado del carrito | Zustand               |
| Fetching y caché   | TanStack React Query  |
| HTTP client        | Axios                 |
| Estilos            | Tailwind CSS 4        |

---

## Arquitectura

```
src/
├── api/
│   └── axiosInstance.ts       # Instancia de Axios con base URL y credenciales
├── components/
│   ├── cart/                  # CartItem, OrderSummary, QuantitySelector
│   ├── layout/                # Layout principal, Sidebar, Footer
│   ├── product/               # ProductCard, CategoryFilters, IngredientBadge
│   └── ui/                    # SearchBar, Toast, BackButton
├── pages/
│   ├── ProductList.tsx        # Home — catálogo con filtros y búsqueda
│   ├── ProductDetail.tsx      # Detalle de producto con ingredientes
│   └── Cart.tsx               # Carrito de compras
├── router/
│   └── index.tsx              # Definición de rutas
├── store/
│   └── useCartStore.ts        # Estado global del carrito (Zustand)
├── App.tsx
└── main.tsx                   # Configuración de React Query + Router
```

**Rutas disponibles:**

| Ruta            | Vista                  |
|-----------------|------------------------|
| `/`             | Listado de productos   |
| `/producto/:id` | Detalle de un producto |
| `/carrito`      | Carrito de compras     |

**Gestión de estado:**
- El **carrito** se maneja en cliente con Zustand (persiste durante la sesión).
- Los **datos del servidor** (productos, categorías) se obtienen y cachean con React Query.

**Comunicación con el backend:**
- Base URL configurada via variable de entorno: `VITE_API_URL`
- Endpoint principal: `http://localhost:8000/api/v1`
- Endpoints consumidos:
  - `GET /categorias/flat` — categorías para los filtros
  - `GET /productos/` — listado con filtros por categoría, disponibilidad y búsqueda
  - `GET /productos/{id}` — detalle de un producto

---

## Requisitos previos

### 1. Backend corriendo en el puerto 8000

Este frontend consume una API REST. Antes de levantar el frontend, el backend debe estar activo en `http://localhost:8000`.

Asegurate de haber:

1. Instalado las dependencias del backend.
2. Levantado la base de datos **PostgreSQL** con las credenciales correctas.
3. Ejecutado la **seed** para poblar la base de datos (el archivo de seed se encuentra en los archivos del backend).

> Sin el backend activo y la base de datos poblada, la aplicación no mostrará productos ni categorías.

---

## Configuración del proyecto

### 1. Clonar el repositorio e instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

> Si el backend corre en otro puerto o ruta, modificá este valor según corresponda.

---

## Comandos disponibles (recomendados)

```bash
# Levanta el servidor de desarrollo
npm run dev

# Ejecuta el linter para verificar calidad del código
npm run lint
```

El servidor de desarrollo queda disponible por defecto en [http://localhost:5173](http://localhost:5173).

---

## Notas adicionales

- La configuración de Axios incluye `withCredentials: true`, lo que habilita el envío de cookies HTTPOnly. Esto es necesario debido a que el backend implementa autenticación basada en cookies.
- React Query está configurado con `refetchOnWindowFocus: false` y `retry: 1` para evitar refetches innecesarios.
- Los alérgenos en los ingredientes se destacan visualmente en rojo en la vista de detalle del producto.
