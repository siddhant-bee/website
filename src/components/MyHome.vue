<template>
    <div > 
        
<MyNavbar/>
<div class="corosal" style="width: 80%; margin-bottom: 100px;margin-left: 150px;margin-top: 100px;" >
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="height: 500px;">
    <div class="carousel-item active">
      <img src="../assets/first.png" class=" w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/second.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/third.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="background-container" ></div>
 <footer class="footer">
    <p>&copy; 2023 YumYard. All rights reserved.</p>
    <!-- Additional footer content can be added here -->
  </footer>
</div>
</template>

<script setup>
import MyNavbar from '../components/MyNavbar.vue'
</script>

<style scoped>
.background-container {
  background-image: url('../assets/homemenu.jpg');
  background-size: cover; /* or background-size: contain; */
  background-repeat: no-repeat;
  /* Additional styling for your container, if needed */
  margin-left: 350px;
  width: 50%;
  height: 1000px;
  z-index: -1;
  position: relative;
}
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: absolute;
  
  width: 100%;
}
</style>