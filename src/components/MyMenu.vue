<template>
    <div >
<MyNavbar/>
<img class="menuu" src="../assets/menu.jpg" alt="">
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
.menuu{
    margin-left: 380px;
    width: 50%;
    height: 1000px;
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