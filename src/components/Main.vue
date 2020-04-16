<template>
  <div id="mainSection">
    <div
      class="userName"
    >
      Keita.Yamaoka
    </div>
    <div
      class="companyName"
    >
      Seattleconsulting
    </div>
    <img
      class="profilePicture"
      src="../assets/pro.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Main'
}

</script>

<style scoped>
#mainSection {
  background: linear-gradient(180deg, #7ef3da, #0e87f8);
  padding: 10px;
  width: 100%;
  height: 220px;
  text-align: center;
}

.userName {
  color: #fff;
  font-family: 'Arial', sans-serif;
  font-size: 25pt;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.companyName {
  color: #fff;
  font-family: 'Arial', sans-serif;
  padding-top: 15px;
  font-size: 25pt;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.profilePicture {
  position: relative;
  border-radius: 50%;
  top: 18px;
  width: 100px;
  height: 100px;
}
</style>
