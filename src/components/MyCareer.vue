<!-- components/CareerPage.vue -->

<template>
<div class="nav">
<MyNavbar/>
  <div class="career-page">
    
    <section class="hero">
      <h2>About YumYard</h2>
      <p>
        YumYard is a leading fast-food chain committed to delivering delicious and nutritious meals to our customers.
        Our success is built on a strong foundation of quality, innovation, and customer satisfaction.
      </p>
      <p>
        At YumYard, we believe in fostering a collaborative and inclusive work environment where creativity and
        dedication are celebrated. Join us in creating memorable dining experiences for people around the world.
      </p>
    </section>

    <section class="hero">
      <h2>Why Join YumYard?</h2>
      <ul>
        <li>Proven business model with a track record of success</li>
        <li>Comprehensive training and ongoing support</li>
        <li>Access to high-quality ingredients and recipes</li>
        <li>Marketing and promotional assistance</li>
        <li>Global brand recognition</li>
        <!-- Add more benefits as needed -->
      </ul>
    </section>

    <section class="hero">
      <h1>Join Our Team</h1>
      <p>We are excited to offer franchise opportunities. Join YumYard and be a part of our success!</p>
    </section>

    <section class="franchise-form">
      <h2>Franchise Inquiry</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Your Name:</label>
        <input type="text" id="name"  required>

        <label for="email">Your Email:</label>
        <input type="email" id="email"  required>

        <label for="phone">Your Phone Number:</label>
        <input type="tel" id="phone"  required>

        <label for="message">Your Message:</label>
        <textarea id="message"  required></textarea>

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  </div>
  </div>
</template>

<script setup>
import MyNavbar from '../components/MyNavbar.vue'
</script>

<style scoped>
/* Add your custom styles here */
.career-page {
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.franchise-form {
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

textarea {
  height: 100px;
}

button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
ul {
  list-style: none;
}
</style>
