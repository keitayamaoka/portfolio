<template>
  <div id="footerSection">
    <a
      href="#"
      @click="clickSmoothScroll()"
    ><img
      id="footerScroll"
      src="../assets/ue.png"
    ></a>
    <div class="footerCopyright">
      &copy;SeattleConsulting
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer'
  ,methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
#footerSection {
  background: linear-gradient(180deg, #0e87f8, #7ef3da);
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: center;
}

.footerCopyright {
  color: #fff;
  font-size: 13pt;
  font-family: 'Noto Sans JP', sans-serif;
  text-shadow: 1px 1px 5px #c0c0c0;
}

#footerScroll {
  width: 40px;
  height: 40px;
}

</style>
