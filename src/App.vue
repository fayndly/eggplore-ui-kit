<script setup lang="ts">
import { HeaderLayout } from '@/modules/layout/header'
import { LayoutSideBar } from '@/modules/layout/sidebar'
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <HeaderLayout />
    <LayoutSideBar :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/index';

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  padding-top: calc(30px + 62px);
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: $color-primary;
  height: 100%;
  top: 62px;
  z-index: 3;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
