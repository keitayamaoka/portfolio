<template>
  <div id="footerSection">
    <div
      class="footerCopyright"
    >
      © Seattleconsulting
    </div>
    <a
      href="#"
      @click="clickSmoothScroll()"
    ><img
      id="footerScroll"
      src="../assets/ue.png"
    ></a>
  </div>
</template>

<script>
export default {

  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        'y'
      )
    }
  }
}
</script>

<style scoped>
#footerSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.footerCopyright {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  text-shadow: 1px 1px 5px #c0c0c0;
}

.footerScroll {
  top: 5px;
  width: 10px;
  height: 10px;
}
</style>
