import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app/App.vue";
import router from "./router";
import "../node_modules/bulma/bulma.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
