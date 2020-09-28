## Como iniciarla

Primero, instale las dependencias necesarias: 

```bash
npm install
```

Luego, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abrir en [http://localhost:3000](http://localhost:3000) en tu navegador.

## Elaboración de la página

Comicdev esta desarrollada con el Next JS, React y SASS. Al ser una página que consume comics de https://xkcd.com/ decidí jugar un poco con el concepto de la web, haciendo una temática de DC comics, cree un tema claro y un tema oscuro, como la temática es de comics, decidí llamarlos modo Flash y modo Batman respectivamente, además, el tema se guarda en localStorage para que este siga siendo el mismo al recargar la web. 

La página consume los datos de https://xkcd.com/ como comentaba, cree componentes para la pantalla de "cargando", pantalla de "Ha ocurrido un error" y pantalla para ver los datos del comic correctamente. Espero les guste.

Adicionalmente tambien desplegue Comicdev en https://comicdev.vercel.app/

Página elaborada por https://simontorres.dev/




