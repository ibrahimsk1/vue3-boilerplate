# Vue 3 Boilerplate
This project based on "axios": 0.21.0, ,"core-js": 3.6.5, "vue": 3.0.0, , vue-i18n: 9.0.0-beta.15, ,"vue-router": 4.0.1, "vuex": 4.0.0.

## Features
- Global Error Handling
- Http request class based on Axios and Services(Auth , Logger , ... )
- Vuex 4 with multiple modules
- Vue Router w AuthControl beforeRoute option
- Layouts
- i18n inter
- views
- utils

## Project structure
- [`src`](#src)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`constants`](#constants)
  - [`i18n`](#directives)
  - [`Layouts`](#layous)
  - [`services`](#services)
  - [`store`](#store)
  - [`utils`](#utils)
  - [`views`](#views)
  - [`.env.js`](#envjs)
  - [`main.js`](#mainjs)
  - [`App.vue`](#app)
  - [`router.js`](#router)



### `src`
source folder

### `assets`
Images/Fonts/Other media stuff.

### `components`
Shared and other Components

### `constants`
App config and static data files

### `i18n`
Internationalization plugin for Vue.js
- intlify/vue-i18n-next is used.
- defaultLocale is 'en' and have an option 'tr'
- can control via store i18n module

### `layout`
Base app layout components.
- Auth, Home , .. layouts
- `Header`, `Footer` components added in  Home layout.

### `services`
- Http request class based on Axios w Response and Request Middleware classes
- Api class wrapper for Http class
- AuthService based on Api class controls AuthorizationHeader ,  localStorage and Auth based Apis
- Logger Service used in Global error handling module

### `store`
Vuex 4 store
- Multiple modules (Auth , i18n)

### `utils`
- AuthRequired - controls Auth beforeEnter w router
- ExeceptionHandler controls global error w window.onerror and Vue.config.errorHandler
- Logs with LoggerService
- `Intercept` High order class wraps home component. - Global and other dailogs - Main loading screen

### `views`
Contain views used in app.
- Views index file use Layout and router-view
- Auth , Home , Error(404) views

### `.env.js`
Environment variables (add this to git ignore).

### `main.js`
Root app initialization file.


### `App.vue`
Root app initialization file.

### `router`
Router instance and routing declaration.
- router initialization,
- Auth control
- redirect to child w consuming Layouts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
