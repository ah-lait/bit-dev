<template>
  <div class="navbar">
    <router-link to="/modal">Modal</router-link>
    <router-link to="/video-modal">Video Modal</router-link>
    <router-link to="/dropdown-search-single-select">Dropdown Search Single Select</router-link>
    <router-link to="/dropdowns">Dropdowns</router-link>
    <router-link to="/accordion">Accordion</router-link>
    <router-link to="/read-more">Read More</router-link>
    <router-link to="/buttons">Buttons</router-link>
    <router-link to="/jotforms">Jotforms</router-link>
    <router-link to="/layouts">Layouts</router-link>
    <router-link to="/loaders">Loaders</router-link>
    <router-link to="/menus">Menus</router-link>

    <MobileMenu content-to-move=".navbar .content-spacing">
      <template #menu-icon>
        <div>===</div>
      </template>
      <template #menu-icon-logo>
        LOGO
      </template>
      <template #menu-content>
        LALALAL
      </template>
    </MobileMenu>
  </div>
</template>

<script>
import MobileMenu from "../components/menus/mobileMenu.vue";
export default {
  name: "Navbar",
  components: {
    MobileMenu,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.navbar {
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: black;
}

.navbar a {
  margin-right: 20px;
  font-size: 20px;
}
</style>
