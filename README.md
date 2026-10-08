# Docuscala - landing estática

Estado: **lista para despliegue técnico, no para publicación corporativa definitiva**.

## Estructura

- `index.html`
- `legal.html`
- `privacy.html`
- `cookies.html`
- `terms.html`
- `404.html`
- `assets/`, `css/`, `js/`
- `robots.txt`, `sitemap.xml`

## Configuración pendiente

1. Cerrar dominio y denominación.
2. Sustituir `placeholder.invalid` en `sitemap.xml` y `robots.txt`.
3. Completar datos legales: `[RAZÓN_SOCIAL]`, `[NIF]`, `[DOMICILIO_SOCIAL]`, `[EMAIL]`, `[DATOS_REGISTRALES]`.
4. Revisar textos legales con tratamientos/proveedores reales.
5. Configurar `whatsappE164` en `js/main.js` solo cuando exista número empresarial verificado.
6. Configurar dominio en GitHub Pages y verificar DNS antes de publicación.

## GitHub Pages

Documentación oficial: https://docs.github.com/en/pages

Para publicar desde una rama, use la configuración de Pages del repositorio. Para dominio personalizado, GitHub recomienda verificar el dominio antes de configurarlo y evitar wildcard DNS.

## Privacidad por defecto

No hay analítica, píxeles, formularios operativos ni cookies no esenciales en el código entregado.
