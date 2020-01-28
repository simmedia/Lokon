import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Places from "../views/Places.vue";
import PlaceDetails from "../views/PlaceDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/places",
    name: "places",
    component: Places
  },
  {
    path: "/place",
    name: "place",
    props: true,
    component: PlaceDetails
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
