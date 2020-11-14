# FrontBack

Mini CLI para instalar dependencias utilizadas diariamente con un solo comando. Para el Backend y próximamente para el Frontend.

Inspiración y créditos totales a [Rafi993](https://github.com/Rafi993/frontend-dev) y [https://dev.to/nickytonline/stuff-i-always-set-up-for-frontend-work-56h2](https://dev.to/nickytonline/stuff-i-always-set-up-for-frontend-work-56h2).

## Instalación
Debes instalar de forma global este CLI.

```sh
$ npm i -g frontback
```

## Uso
Navegue hasta su proyecto y ejecute el siguiente comando:

```sh
$ npx frontback
```

## ¿Qué dependencias instala este CLI?

Las dependencias que se instalan son las siguientes:

* `eslint`
* `prettier`
* `eslint-config-prettier`
* `eslint-plugin-prettier`
* `husky`
* `lint-staged`
  <!-- * stylelint -->
  <!-- * stylelint-config-standard -->

> A continuación las siguientes dependencias que se instalan son por qué mi configuración `eslint-config-franqsanz` los requiere.
* `eslint-config-airbnb-base`
* `eslint-plugin-import`
* `eslint-plugin-node`
* `eslint-config-franqsanz`

## Archivos pre configurados
También se instalarán  algunos archivos.

* `.eslintrc.js`
* `.huskyrc`
* `.lintstagedrc`
* `.prettierrc`

Cómo se ve el archivo `.eslintrc.js`:
```js
module.exports = {
  extends: [
    'prettier',
    'franqsanz',
    'airbnb-base',
    'plugin:node/recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {}
};
```
Cómo se ve el archivo `.huskyrc`:

```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```
Cómo se ve el archivo `.lintstagedrc`:

```json
{
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Cómo se ve el archivo `.prettierrc`:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2
}
```