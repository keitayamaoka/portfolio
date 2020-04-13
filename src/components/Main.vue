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
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20pt;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  padding-top: 30px;
  font-size: 20pt;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.profilePicture {
  position: relative;
  border-radius: 50%;
  top: 5px;
  width: 64px;
  height: 64px;
}
</style>
