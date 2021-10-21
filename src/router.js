import Vue from "vue";
import Router from "vue-router";
import VideoModal from "./pages/VideoModal.vue";
import Modal from "./pages/Modal.vue";
import Frontpage from "./pages/Frontpage.vue";
import Dropdowns from "./pages/Dropdowns.vue";
import Accordion from "./pages/Accordion.vue";
import ReadMore from "./pages/ReadMore.vue";
import Buttons from "./pages/Buttons.vue";
import Jotforms from "./pages/Jotform.vue";
import Layouts from "./pages/Layouts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Frontpage",
      component: Frontpage,
    },
    {
      path: "/video-modal",
      name: "VideoModal",
      component: VideoModal,
    },
    {
      path: "/modal",
      name: "Modal",
      component: Modal,
    },
    {
      path: "/dropdowns",
      name: "Dropdowns",
      component: Dropdowns,
    },
    {
      path: "/accordion",
      name: "Accordion",
      component: Accordion,
    },
    {
      path: "/read-more",
      name: "Read More",
      component: ReadMore,
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: Buttons,
    },
    {
      path: "/jotforms",
      name: "Joforms",
      component: Jotforms,
    },
    {
      path: "/layouts",
      name: "Layouts",
      component: Layouts,
    },
  ],
});
