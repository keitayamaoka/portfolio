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
  font-family: 'Noto Sans JP', sans-serif;
}

.drawerMenuSection li {
  border: 1px solid #aaa8a8;
  padding: 20px;
  color: #aaa8a8;
  background-color: #fff;
  text-shadow: 1px 2px 3px #c0c0c0;
  font-weight: bold;
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
  color: #aaa8a8;
  text-decoration: none;
}
</style>
