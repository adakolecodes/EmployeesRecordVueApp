
import { createApp } from 'vue' //We're getting a special tool called createApp from the Vue library. This tool helps us create our app.
import App from './App.vue' //We're getting the main component of our app, App.vue, from the same folder.
import router from './router' //We're getting the router (like a navigation system) from another file called router.

import 'bootstrap/dist/css/bootstrap.min.css' //We're bringing in some pre-made CSS styles from Bootstrap to make our app look nice.
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //We're bringing in some pre-made JavaScript from Bootstrap to make our app interactive.

import store from './store/index.js' //We're getting the store from another file called index.js in a folder called store.

const app = createApp(App) //We're using the createApp tool to create our app, and we're passing our main component (App) to it.

app.use(router) //We're telling our app to use the router we imported earlier.
app.use(store) //We're telling our app to use the store we imported earlier.

app.mount('#app') //We're telling our app to attach itself to an HTML element with the id app. This is where our app will be rendered.
