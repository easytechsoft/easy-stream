<template>
  <div class="max-w-sm mx-auto mt-10">
    <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
      <img class="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="User" />
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800">Jane Doe</h2>
        <p class="text-gray-600 mt-2">Full Stack Developer at TechCorp</p>
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped>
/* Add custom styles here if needed, especially for complex gradients or effects */
body {
  background-color: #0A1626;
  font-family: sans-serif;
  /* Fallback font */
  /* Consider adding 'New Science' or similar if available */
}

.text-gradient-white-gray {
  background: linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.text-gradient-green {
  color: #40F99B;
  /* Fallback */
  /* Add specific font if Area Variable is available */
  font-weight: 700;
  /* Assuming Area Variable bold */
}

.button-gradient {
  background: linear-gradient(90deg, #0BC07D 0%, #7DABFF 100%);
}

.card-bg {
  background: rgba(15, 32, 54, 0.7);
  border: 1px solid #2C436D;
}

.icon-wrapper-bg {
  background: linear-gradient(180deg, rgba(44, 67, 109, 0.2) 0%, rgba(84, 101, 133, 0.2) 100%);
  border: 0.88px solid #2C436D;
  /* Adjusted border width */
  transform: rotate(-45deg);
  width: 44px;
  /* Approximate size */
  height: 44px;
  /* Approximate size */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  /* Approximation */
}

.icon-wrapper-bg svg {
  transform: rotate(45deg);
  color: #A9B1C2;
  /* Default icon color */
}

.why-choose-us-bg {
  background: linear-gradient(180deg, #7DABFF -47.22%, #0F2036 55.83%, #0A1626 100%);
}

.subscribe-bg {
  background: linear-gradient(180deg, #0A1626 0%, #25518C 100%);
  border: 1px solid #2C436D;
}

.feature-tag-bg {
  background: linear-gradient(360deg, rgba(32, 52, 89, 0.5) 58.93%, #4570BF 232.95%);
}

.key-reason-card-bg-1 {
  background: linear-gradient(119.3deg, #203459 0%, rgba(64, 249, 155, 0.3) 297.87%);
}

.key-reason-card-bg-2 {
  background: linear-gradient(180deg, #25518C 0%, #7DABFF 100%);
}

.key-reason-card-bg-3 {
  background: linear-gradient(180deg, rgba(64, 249, 155, 0.6) 0%, rgba(38, 147, 92, 0.6) 100%);
  /* backdrop-filter: blur(6.8px); Note: backdrop-filter has limited support and complex interaction */
}
</style>
