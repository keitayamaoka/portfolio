<template>
   <div id="aboutSection">
     <div class="aboutTitle">About Me</div>
     <div class="aboutExplain">愛媛県生まれ、高知県育ち</div>
   </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#aboutSection{
  background: #f5f5f5;
  width: 100%;
  height: auto;
  text-align: center;
  }

  .aboutTitle{
  padding: 20px;
  color: #20879F;
  font-family: Noto Sans, Bold;
  font-size: 18pt;
  }

  .aboutExplain{
  color: #707070;
  font-family: Noto Sans, Bold;
  font-size: 12pt;
  }
</style>