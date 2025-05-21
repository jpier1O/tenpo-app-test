This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Tenpo App – Challenge Técnico

Esta es una aplicación construida en Next.js con TypeScript que simula un proceso de login y permite navegar por una sección privada donde se muestra una lista paginada de usuarios.

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
