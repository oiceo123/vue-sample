<template>
  <nav class="container">
    <router-link to="/v-bind">v-bind</router-link> |
    <router-link to="/v-if">v-if</router-link> |
    <router-link to="/v-show">v-show</router-link> |
    <router-link to="/v-for">v-for</router-link> |
    <router-link to="/v-on">v-on</router-link> |
    <router-link to="/v-model">v-model</router-link> |
    <router-link to="/v-slot">v-slot</router-link> |
    <router-link to="/ref">ref</router-link> |
    <router-link to="/props">props</router-link> |
    <router-link to="/props-validate">props-validate</router-link> |
    <router-link to="/emit">emit</router-link> |
    <router-link to="/http-request">http-request</router-link> |
    <router-link to="/lifecycle">lifecycle</router-link> |
    <router-link to="/computed">computed</router-link> |
    <router-link to="/watcher">watcher</router-link> |
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
