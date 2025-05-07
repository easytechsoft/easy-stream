<template>
  <div class="test-view">
    <h1>Test Page</h1>
    <p>Welcome to the test route. This is a styled design component.</p>
    <button class="primary-btn">Test Action</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.test-view {
  max-width: 500px;
  margin: 60px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.test-view h1 {
  color: #2c3e50;
  margin-bottom: 16px;
  font-size: 2rem;
}

.test-view p {
  color: #555;
  margin-bottom: 24px;
}

.primary-btn {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.primary-btn:hover {
  background: #369870;
}
</style>
