<template>
  <v-app id="app">
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      dark
      enable-resize-watcher
      overflow
      absolute>
      <v-list dense>
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Test</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>
    <v-toolbar class="indigo lighten-2">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Boardgame</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      drawerRight: true,
      right: null,
      left: null,
    };
  },
};
</script>

<style>
</style>
