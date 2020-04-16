<template>
  <div id="drawerSection">
    <label for="nav-input">
      <img
        id="drawerButton"
        src="../assets/close.png"
      >
    </label>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem" />
      <li>
        <a href="#HeaderButton">Home</a>
      </li>
      <li>
        <a href="#aboutSection">About Me</a>
      </li>
      <li>
        <a href="#skillSection">Skill Sets</a>
      </li>
      <li>
        <a href="#visionSection">Vision</a>
      </li>
    </ul>
    <a
      class="drawerMenuItemLink"
      href=""
    />
  </div>
</template>

<script>

</script>

<style>

#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

.drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
}

.drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
  list-style: none;
}

.drawerMenuItemLink {
  font-family: 'Arial', sans-serif;
}

.drawerMenuSection li {
  border: 1px solid #55e9d5;
  padding: 20px;
  background-color: #fff;
  font-weight: bolder;
}

#drawerButton {
  width: 30px;
  height: 30px;
  float: right;
  margin: 10px;
}

a:link,
a:visited,
a:hover,
a:active {
  color: #419fec;
  text-decoration: none;
}
</style>
