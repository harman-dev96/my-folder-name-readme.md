<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Harman's Portfolio</title>
  <style>
    /* Global styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f0f2f5;
      color: #333;
    }

    header {
      background-color: #4a90e2;
      padding: 20px;
      text-align: center;
      color: white;
    }

    nav a {
      margin: 0 15px;
      text-decoration: none;
      color: white;
    }

    .container {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    section {
      margin-bottom: 30px;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    button {
      padding: 10px 20px;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    /* Responsive */
    @media (max-width: 600px) {
      header, .container {
        padding: 15px;
      }

      nav a {
        display: block;
        margin: 10px 0;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Harman's Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <div class="container">
    <section id="about">
      <h2>About Me</h2>
      <p>Hello! I’m Harman, a web developer passionate about creating responsive and interactive websites.</p>
      <img src="https://via.placeholder.com/600x300" alt="A placeholder image representing web development" />
    </section>

    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>Edu Vibe – Group Study App</li>
        <li>Weather App with API</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: harman@example.com</p>
      <button onclick="showThanks()">Send Message</button>
      <p id="message" style="color: green; font-weight: bold;"></p>
    </section>
  </div>

  <script>
    function showThanks() {
      document.getElementById("message").textContent = "Thank you for reaching out!";
    }
  </script>

</body>
</html>
