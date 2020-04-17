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
      スキルについてまとめました。
      グラフは10段階評価で表示させていますが、ご覧の通りまだ身に付いていないものばかりです。しかしHTMLやCSSの技術はポートフォリオの実装で多少なりとも伸びました。
      これから広く知識と技術を高めていきます。その中でもデザインに興味があるので、CSSなどのスキルをどんどん上げていきます。
    </div>
    <label id="gitHubLabel">
      GitHub
      <a
        id="gitHubLink"
        href="https://github.com/keitayamaoka/portfolio"
      >https://github.com/keitayamaoka/portfolio</a>
    </label>
    <ul class="skillCategories">
      <li>
        <span
          id="front"
          @click="setCurrentChart('front')"
        >Front-end</span>
      </li>
      <li>
        <span
          id="back"
          @click="setCurrentChart('back')"
        >Back-end</span>
      </li>
      <li>
        <span
          id="devOps"
          @click="setCurrentChart('devOps')"
        >DevOps</span>
      </li>
    </ul>
    <ul
      class="skillList1"
      :class="{'front-Change': isFrontActive}"
    >
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>SCSS</li>
      <li>Vue</li>
    </ul>
    <ul
      class="skillList2"
      :class="{'back-Change': isBackActive}"
    >
      <li>Java</li>
      <li>Ruby</li>
      <li>RubyOnRails</li>
      <li>MySQL</li>
      <li>Python</li>
    </ul>
    <ul
      class="skillList3"
      :class="{'dep-Change': isDevOpsActive}"
    >
      <li>Linux</li>
      <li>Node</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>Firebase</li>
    </ul>
    <div id="skillGraph">
      <div
        v-if="isFrontActive"
      >
        <Chart />
      </div>
      <div
        v-if="isBackActive"
      >
        <Chart2 />
      </div>
      <div
        v-if="isDevOpsActive"
      >
        <Chart3 />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

export default {
  name: 'Skill',
  components: {
    Chart,
    Chart2,
    Chart3
  },
  data(){
    return {
      currentChart: 'front'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';
    },
    isDevOpsActive() {
      return this.currentChart=='devOps';
    },
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<style scoped>
#skillSection {
  background: rgb(253, 253, 253);
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.skillTitle {
  padding: 7px;
  color: #33a4f0;
  font-family: 'Arial', sans-serif;
  font-size: 22pt;
  font-weight: bold;
}

.skillExplain {
  padding: 15px;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12;
  word-break: normal;
  display: inline-block;
  text-align: left;
  line-height: 25px;
  font-weight: bold;
}

#gitHubLink {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

#gitHubLabel {
  padding: 7px;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

.skillCategories li {
  padding: 10px;
  font-family: 'Arial', sans-serif;
  display: inline-flex;
  font-size: 20px;
}

.skillList1 li {
  padding: 10px;
  font-family: 'Arial', sans-serif;
  display: inline-block;
  color: #c00;
  font-size: 20px;
  margin: 0 10px 10px;
  box-shadow: 2px 2px 4px gray;
}

.skillList2 li {
  padding: 10px;
  font-family: 'Arial', sans-serif;
  display: inline-flex;
  position: relative;
  top: 10px;
  font-size: 20px;
  color: #090;
  margin: 0 10px 10px;
  box-shadow: 2px 2px 4px gray;
}

.skillList3 li {
  padding: 10px;
  font-family: 'Arial', sans-serif;
  display: inline-flex;
  position: relative;
  top: 20px;
  font-size: 20px;
  color: #a16eff;
  margin: 0 10px 10px;
  box-shadow: 2px 2px 4px gray;
}

#skillGraph {
  position: relative;
  margin: 10px 0 1px;
  top: 10px;
  width: 330px;
  height: 330px;
  margin-left: auto;
  margin-right: auto;
}

.front-Change li {
  background-color: rgb(241, 195, 173);
}

.back-Change li {
  background-color: rgb(184, 245, 204);
}

.dep-Change li {
  background-color: rgb(217, 190, 233);
}

.skillCategories li:nth-child(3n+1) {
  color: #c00;
}

.skillCategories li:nth-child(3n+2) {
  color: #090;
}

.skillCategories li:nth-child(3n+3) {
  color: #a16eff;
}

</style>
