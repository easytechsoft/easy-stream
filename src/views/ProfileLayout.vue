<template>
  <div class="profile-layout">
    <SidebarComponent />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue';

export default {
  name: 'ProfileLayout',
  components: {
    SidebarComponent
  }
}
</script>

<style scoped>
.profile-layout {
  display: flex;
}
.content {
  width: 78%;
  padding: 2rem 1rem;
  height: 100%;
}
</style>
