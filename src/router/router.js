import Vue 					          	from "vue";
import VueRouter 			        	from "vue-router";

Vue.use(VueRouter);

import state 										from "../vuex/state.js";

import Contacts 				        from "../components/Contacts/Contacts.vue";

// define routes
const routes = [
	{ path: "/", component: Contacts }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: 'history',
	routes
});;
