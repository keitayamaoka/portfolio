<template>
  <div id="skillSection">
    <div
      class="skillTitle"
    >
      Skill Set
    </div>
    <div
      class="skillExplain"
    >
      文章が入りますああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
    </div>
    <lavel
      for="gitHubLabel"
    >
      GitHub :
      <a href="https://github.com/keitayamaoka/portfolio">https://github.com/keitayamaoka/portfolio</a>
    </lavel>
    <div
      class="skillGrapf"
    >
      Front-end
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
}
</script>

<style scoped>
#skillSection {
  background: #fff;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.skillTitle {
  padding: 7px;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12;
  word-break: break-all;
  line-height: 25px;
}

.gitHubLabel {
  padding: 7px;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

</style>
