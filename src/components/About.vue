<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <div class="aboutExplain">
      愛媛県生まれ、高知県育ちあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#aboutSection {
  background: #f5f5f5;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.aboutTitle {
  padding: 20px;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
}

.aboutExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 25px;
}
</style>
