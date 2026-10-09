# Gonzalo Bravo · Sitio personal

[Visitar el sitio](https://gonzalobravoargentina.github.io/)

Portfolio académico y de divulgación de Gonzalo Bravo, biólogo marino, buzo científico y gestor de datos radicado en Puerto Madryn, Patagonia argentina.

El sitio reúne mi trayectoria, publicaciones, charlas con video y proyectos sobre biodiversidad marina, monitoreo de arrecifes rocosos, inteligencia artificial aplicada a la ecología y cultura oceánica.

## Contenido

- **Inicio:** presentación e intereses de investigación.
- **Publications:** artículos científicos, capítulos de libros y protocolos.
- **Talks:** grabaciones de charlas científicas y de divulgación.
- **Outreach:** proyectos de educación y comunicación del océano.
- **CV:** trayectoria y currículums descargables en inglés y español.

## Actualizar con GitHub Desktop

1. Abrí este repositorio y usá **Fetch origin / Pull origin** para traer los cambios recientes.
2. Editá los archivos con tu editor de texto y guardalos.
3. Revisá los cambios, escribí un mensaje descriptivo y seleccioná **Commit to master**.
4. Seleccioná **Push origin**. GitHub Pages publica la actualización automáticamente. Consultá su estado en **Actions**.

### Dónde editar

| Contenido | Archivo o carpeta |
| --- | --- |
| Presentación y novedades | `_pages/about.md` |
| Currículum | `_pages/cv.md` |
| Publicaciones | `_publications/` |
| Charlas con video | `_talks/` |
| Proyectos de divulgación | `_portfolio/` |
| Menú | `_data/navigation.yml` |
| Perfil y configuración | `_config.yml` |
| Foto | `images/profile.png` |
| PDFs descargables | `files/` |

Para agregar una publicación, charla o proyecto, copiá un archivo de la carpeta correspondiente con un nombre nuevo y actualizá sus datos y texto. En las charlas, usá `category: science` o `category: outreach` y agregá la grabación en `link`.

No edites `_site/`: contiene archivos generados automáticamente.

## Vista previa local

Con Ruby y Bundler instalados, ejecutá desde la carpeta del repositorio:

```sh
bundle install
bundle exec jekyll serve --host localhost
```

Abrí `http://localhost:4000/`. Si modificás `_config.yml`, reiniciá el servidor.

## Créditos

Sitio personalizado a partir de [AcademicPages](https://github.com/academicpages/academicpages.github.io), basado en [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) de Michael Rose. Utiliza Jekyll y se aloja en GitHub Pages.

Se conserva la [licencia MIT de la plantilla](LICENSE) y su aviso de copyright original. Gracias a quienes desarrollan y mantienen estas herramientas.
