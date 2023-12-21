<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img src="../assets/logo.jpg" alt=""  width="60" height="54" style="margin-right:10px">
    <a class="navbar-brand" href="#" style="font-size: 30px, font-weight: bold , " @click="$router.push('/')">YUMYARD</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <a class="navbar-brand" href="#" style="font-size: 30px, font-weight: bold ,  " @click="$router.push('/menu')">MENU</a>  
       <a class="navbar-brand" href="#" style="font-size: 30px, font-weight: bold , " @click="$router.push('/career')">CAREER</a>
        
      </ul>
      <form class="d-flex">
        <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
        <button class="btn btn-outline-success" type="submit" @click="$router.push('/contact')">CONTACT US</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>