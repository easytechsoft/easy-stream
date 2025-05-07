<template>
  <footer class="easy-stream-footer">
    <div class="footer-container py-5 mb-2">
      <LogoComponent />
    </div>
    <div class="footer-container">
      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>Help center</li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Businesses</h3>
        <ul>
          <li>Products</li>
          <li>Plans & Pricing</li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Follow us on</h3>
        <ul>
          <li>
            <i class="pi pi-linkedin" style="font-size: 1.5rem;"></i>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2025 Easy Tech, Inc. All rights reserved.</p>
    </div>
  </footer>
</template>
<script>
import LogoComponent from '../Logo/LogoComponent.vue';

export default {
  name: 'FooterComponent',
  components: {
    LogoComponent
  }
}
</script>
<style scoped>
.easy-stream-footer {
  padding: 3rem 1rem 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  /* margin-top: 5rem; */
  border-top: 1px solid rgba(44, 67, 109, 1);
  color: rgba(231, 231, 231, 1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1.5rem;
}

.footer-section {
  flex: 1;
  min-width: 150px;
  margin-bottom: 1rem;
  padding: 0 1rem;
}

.footer-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: rgba(67, 98, 154, 1);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.footer-section li:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(44, 67, 109, 1);
  font-size: 0.8rem;
  color: #666;
}

@media (max-width: 768px) {
  .footer-section {
    min-width: 50%;
  }
}
</style>
