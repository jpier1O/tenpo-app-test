# Tenpo App – Challenge Técnico

Esta es una aplicación construida en Next.js con TypeScript que simula un proceso de login y permite navegar por una sección privada donde se muestra una lista paginada de usuarios.

# Version of Node 22.15.0 (!Important)

# Tecnologías usadas y librerias

- Next.js
- TailwindCSS
- Axios
- React Router
- React Context
- ESLint
- Prettier
- Husky
- Jest
- React Testing Library

---

##  Funcionalidades implementadas

- Pantalla de login con validación y token simulado (`token-fake-tenpo`)
- Sistema de rutas público (`/login`) y privado (`/home`) con control de acceso
- Contexto para login/logout con persistencia de sesión en memoria (`useState`) y en navegador (`sessionStorage`)
- Navbar responsiva con logout y sección de navegación
- Listado de usuarios paginado con datos de [RandomUser API](https://randomuser.me)
- Secciones de “Perfil” y “Configuración” están en construcción
- Redirección desde `/` a `/login` o `/home` si hay sesión


---

## Cómo correr el proyecto localmente

1. Clona el repositorio

```bash
git clone https://github.com/jpier1O/tenpo-app-test.git
cd tenpo-app-test
```

2. Instala las dependencias

```bash
npm install
```

3. Inicia el servidor de desarrollo

```bash
npm run dev
```

4. Navega a `http://localhost:3000` en tu navegador para ver la aplicación.


## Puntos del challenge considerados

#Mejora tecnica en rendimiento y optimización

Actualmente, se hace una única carga masiva de 2000 usuarios en cliente y luego se pagina localmente. Para producción, se recomienda:

- Implementar paginación desde la API
- Usar seed=tenpo para evitar cambios en cada request
- Cachear resultados por página

# Autenticación

- **Axios configurado globalmente** para enviar `Authorization: Bearer token-fake-tenpo` en cada request, si desea en la carpeta lib/constants.ts se puede cambiar el tiempo de vida del token, para probar que se cierre la sesión después de ese tiempo.


# Despliegue

- Se puede desplegar en vercel, se puede ver el despliegue en el siguiente enlace: https://tenpo-app-test.vercel.app/


# Interaccion

- Login con credenciales: 

```
user: tenpouser@tenpo.com
password: Adm1nT3np0!
```

## Configuración de Axios

Se utiliza un interceptor global para añadir automáticamente el token en las peticiones:

```ts
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});