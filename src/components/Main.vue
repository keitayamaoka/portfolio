
<template>
  <div id="mainSection">
    <div class="userName">
      K.Yamaoka
    </div>
    <div class="companyName">
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
  padding-bottom: 30px;
  width: 100%;
  height: auto;
  text-align: center;
}

.userName {
  padding: 20px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20pt;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20pt;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.profilePicture {
  position: relative;
  top: 15px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style>
