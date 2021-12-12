import { createApp } from 'vue'
import store from './store'
// Vant
// login
import 'vant/lib/index.css';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
//tab
import { Tab, Tabs } from 'vant';



import App from './App.vue'
import router from './router'

createApp(App).use(Tabs).use(Tab).use(Button).use(Field).use(Form).use(store).use(router).mount('#app')
