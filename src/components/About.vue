<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <div class="aboutExplain">
      愛媛県生まれ、高知県育ちの<a href="https://www.seattleconsulting.co.jp/team20/">山岡敬汰</a>です。
      高知県は森林率84％で四方八方山に囲まれていますが、食べ物もお酒も自然も素敵な場所です。
      ちなみに僕のおすすめのお酒は”ダバダ火振り”という栗焼酎です！
      大学ではそういった自然に囲まれた環境で経済学や経済実験を学んでいました。
      その他にNPO法人で国際について考える学生主体の合宿運営など行っていました。
      プログラミングは大学の授業で初めて触りましたが、試行錯誤しながら上手く動いた時の達成感から興味を持ち始めました。
      種類は問わずHPを見るのが好きで、就活中もHPで企業を選ぶほどデザインに興味があります。
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
  background: #d6f1f0;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.aboutTitle {
  padding: 5px;
  color: #33a4f0;
  font-family: 'Arial', sans-serif;
  font-size: 22pt;
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
  font-weight: bold;
}
</style>
