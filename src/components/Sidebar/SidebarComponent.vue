<template >
  <aside class="sidebar" >
    <ul class="links">
      <li>
        <router-link :to="{name: 'my_videos'}" >
          <i class="pi pi-video"></i>
          My Videos
        </router-link>
      </li>
      <li>
        <router-link >
          <i class="pi pi-building-columns"></i>
          Account & Payment
        </router-link>
      </li>
      <li>
        <router-link >
          <i class="pi pi-chart-line"></i>
          Analytics
        </router-link>
      </li>
      <li>
        <router-link >
          <i class="pi pi-tag"></i>
          Pricing
        </router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'SidebarComponent'
}
</script>
<style scoped >
.sidebar {
  width: 22%;
  min-height: 50vh;
  background: rgba(17, 27, 40, 1);
  border-right: 1px solid rgba(21, 40, 64, 1)
}
.links {
  margin: 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.links li {
  display: block;
  width: 100%;
  margin-bottom: 1.2rem;
}
.links li a {
  all: unset;
  display: block;
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
}
.links li a i {
  color: rgba(89, 110, 149, 1);
  margin-right: 0.5rem;
}
</style>
