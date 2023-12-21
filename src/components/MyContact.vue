<!-- components/ContactPage.vue -->

<template>
  <div class="contact-page">
    <MyNavbar/>
    <section class="contact-info">
      <h1>Contact Us</h1>
      <p>
        Have a question or need assistance? Feel free to contact us!
      </p>
      <p>
        <strong>Phone:</strong> {{ phoneNumber }}
      </p>
      <p>
        <strong>Email:</strong> <a :href="'mailto:' + emailAddress">{{ emailAddress }}</a>
      </p>
    </section>

    <section class="creative-text">
      <p>
        We're here to make your experience delightful! Whether it's about our mouthwatering menu or
        you need assistance with anything YumYard-related, we've got you covered. Your satisfaction
        is our priority, and we can't wait to hear from you!
      </p>
    </section>
     <footer class="footer">
    <p>&copy; 2023 YumYard. All rights reserved.</p>
    <!-- Additional footer content can be added here -->
  </footer>
  </div>
</template>

<script>
import MyNavbar from '../components/MyNavbar.vue';
export default {
    components: {
        MyNavbar
    },
  data() {
    return {
      phoneNumber: '1234567899',
      emailAddress: 'info@yumyard.com', // Replace with your actual YumYard email address
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.contact-page {
  padding: 20px;
}

.contact-info {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-info h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.contact-info strong {
  font-weight: bold;
}

.contact-info a {
  color: #333;
}

.creative-text {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  font-style: italic;
  color: #555;
}
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  bottom: 0;
  padding: 20px;
  position: absolute;
  
  width: 100%;
}
</style>
