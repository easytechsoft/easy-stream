<template >
  <div>
    <h2 class=" mb-4">
      Account & Payments
    </h2>
    <div class="content">
      <div class="account-name section section-separate">
        <h5 class="section-title" >Account Name</h5>
        <p>dr-Abdalla3301374@gmail.com</p>
      </div>
      <div class="current-plan section section-separate">
        <h5 class="section-title" >Current Plan</h5>
        <div class="plan-table">
          <div class="table-row">
            <div class="title">plan name</div>
            <div class="value">Trial</div>
          </div>
          <div class="table-row">
            <div class="title">Bandwidth</div>
            <div class="value">5.0 GB</div>
          </div>
          <div class="table-row">
            <div class="title">Storage</div>
            <div class="value">5.0 GB</div>
          </div>
          <div class="table-row">
            <div class="title">Subscription date</div>
            <div class="value">April 30,2025</div>
          </div>
          <div class="table-row">
            <div class="title">Validity</div>
            <div class="value">May 06,2025   ( 7 Days )</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccountView'
}
</script>
<style scoped >
p {
  margin: 0;
}
h2, .content {
  color: #fff
}
.section-title {
  color: rgba(89, 110, 149, 1);
  margin-bottom: 1rem;
}
.section {
  padding: 1rem 0;
}
.section-separate {
  border-bottom: 1px solid rgba(21, 40, 64, 1);
}
.plan-table {
  padding: 1rem 2rem;
}
.table-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.table-row .title {
  width: 200px;
  padding: 0.5rem 0;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
