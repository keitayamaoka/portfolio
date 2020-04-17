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
      まだ自分の中で明確に目標が決まっているわけではありませんが、
      デザインに興味があるのでそちらのスキルを高めていきます。
      また、今回のポートフォリオの実装であらゆる技術を持っていると、表現の幅が広がると感じたので沢山学び、自分の糧にしていきます。
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
  background: #d6f1f0;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.visionTitle {
  color: #33a4f0;
  font-family: 'Arial', sans-serif;
  font-size: 22pt;
  font-weight: bold;
}

.visionExplain {
  padding: 15px;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: normal;
  display: inline-block;
  text-align: left;
  line-height: 25px;
  font-weight: bold;
}
</style>
