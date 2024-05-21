export function getTemplate(element, params = '') {
	return `
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hintergrund CMS</title>
        <meta name="description" content="Admin Panel for Hintergrund CMS">
        <style>body{margin:0}</style>
    </head>
    <body>
        <${element} ${params}></${element}>
        <script type="module" src="https://unpkg.com/@hintergrund/admin@0.0.1-next.11/dist/index.js"></script>
    </body>
  </html>
  `;
}
