<template>
  <div id="visionSection">
    <div
      class="visionTitle"
    >
      Vision
    </div>
    <div
      class="visionExplain"
    >
      スキルについてまとめました。苦手なことが多く、未熟者ですがこれから広く知識を高めていきます。そしてデザインの興味があるので、CSSなどのスキルをどんどん高めていきます。
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision'
}
</script>

<style scoped>
#visionSection {
  background: #f5f5f5;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.visionTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.visionExplain {
  padding: 15px;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: keep-all;
  line-height: 25px;
}
</style>
