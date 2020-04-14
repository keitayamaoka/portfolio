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
    <ul class="skillCategories">
      <li>
        <span
          @click="change"
        >Front-end</span>
      </li>
      <li>Back-end</li>
      <li>DevOps</li>
    </ul>
    <ul
      :class="{'active': isActive}"
      class="skillList1"
    >
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>SCSS</li>
      <li>Vue</li>
    </ul>
    <ul class="skillList2">
      <li>Java</li>
      <li>Ruby</li>
      <li>RubyOnRails</li>
      <li>MySQL</li>
    </ul>
    <ul class="skillList3">
      <li>Linux</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>Firebase</li>
    </ul>
    <div id="skillGraph">
      <Chart />
      <Chart2 />
      <Chart3 />
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
  methods:{
    change(){
      this.isActive=!this.isActive
    }
  }
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

.skillCategories li {
  padding: 10px;
  display: inline-flex;
  font-size: 20px;
}

.skillList1 li {
  padding: 10px;
  display: inline-block;
  color: #c00;
  font-size: 20px;
  margin: 0 10px;
  box-shadow: 2px 2px 4px gray;
}

.skillList2 li {
  padding: 10px;
  display: inline-flex;
  position: relative;
  top: 10px;
  font-size: 20px;
  color: #090;
  margin: 0 10px;
  box-shadow: 2px 2px 4px gray;
}

.skillList3 li {
  padding: 10px;
  display: inline-flex;
  position: relative;
  top: 20px;
  font-size: 20px;
  color: #a16eff;
  margin: 0 10px;
  box-shadow: 2px 2px 4px gray;
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

#skillGraph {
  position: relative;
  top: 30px;
}

.active {
  display: none;
}
</style>
