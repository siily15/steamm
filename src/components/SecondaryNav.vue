<template>
  <div class="flex flex-1 bg-secondaryBlue mx-40">
    <div class=" px-4 py-4 border-r-2 border-navy-500 hover:bg-blue-800">
      <span class="text-white ">Sinu Pood</span>
    </div>
    <div class=" px-4 py-4 border-r-2 border-navy-500 hover:bg-blue-800">
      <span class="text-white">Sirvi</span>
    </div>
    <div class=" px-4 py-4 border-r-2 border-navy-500 hover:bg-blue-800">
      <span class="text-white">Punktide Pood</span>
    </div>
    <div class=" px-4 py-4 border-r-2 border-navy-500 hover:bg-blue-800">
      <span class="text-white">Uudised</span>
    </div>
    <div class=" px-4 py-4 border-r-2 border-navy-500 hover:bg-blue-800 ">
      <span class="text-white">Labor</span>
    </div>
    <div class="ml-auto p-4">
      <input type="text" name="search" />
    </div>
  </div>
</template>
<style scoped>
.secondary-nav {
  display: flex;
  flex: 1;
  border: 1px solid rgba(16, 21, 25, 0.3);
  margin: 0 10rem;
  background-color: rgba(62, 126, 167, 0.8);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}

.secondary-nav div {
  padding: 1rem 0;
  border-right-color: rgba(16, 21, 25, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
}

.secondary-nav div:hover {
  background-image: linear-gradient(
    rgb(227, 234, 239) 5%,
    rgb(199, 213, 224) 95%
  );
  cursor: pointer;
}

.nav-item {
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 1rem 2rem;
}

.search {
  margin-left: auto;
}
</style>
