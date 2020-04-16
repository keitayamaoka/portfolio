<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <div class="aboutExplain">
      愛媛県生まれ、高知県育ちの新入社員です。大学では経済学や経済実験の勉強をしていました。その他にNPO法人で国際について考える学生主体の合宿運営など行っていました。プログラミングは大学の授業で初めて触りましたが、試行錯誤しながら上手く動いた時の達成感から興味を持ち始めました。いろんなHPを見るのが好きで、就活中もHPで企業を選んだりするほどデザインにも興味があります。
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
  padding: 15px;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: normal;
  display: inline-block;
  text-align: left;
  line-height: 25px;
}
</style>
