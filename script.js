window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  // 🌤️ Set time-based background gradient
  const hour = new Date().getHours();
  let gradient = '';

    if (hour < 6) {
      // 🌌 Twilight to Dawn (Deep purples and indigos)
      gradient = 'linear-gradient(to bottom, #0b032d, #2c1444, #5c4a99, #8a63b1, #b38ddf)';
    } else if (hour < 12) {
      // 🌅 Morning (Cool blue morning sky)
      gradient = 'linear-gradient(to bottom, #3b0a62, #5e2e91, #4a6edb, #3f87ff, #72b7ff)';
    } else if (hour < 18) {
      // 🌞 Midday (Rich aquas)
      gradient = 'linear-gradient(to bottom, #2b0b3f, #5a187d, #814099, #e494b6, #ffadc2)';
    } else if (hour < 21) {
      // 🌇 Sunset (Warm violets and pinks)
      gradient = 'linear-gradient(to bottom, #2b0b3f, #5a187d, #814099, #e494b6, #ffadc2)';
    } else {
      // 🌙 Night (Deep blues to soft purples)
      gradient = 'linear-gradient(to bottom, #0d0b22, #1c1242, #3b2d69, #8a63b1, #c2a4dd)';
    }


 const button = document.querySelector(".view-project-btn");

    if (button) {
      let buttonGradient = "";
      let buttonShadow = "";

      if (hour < 6) {
        // 🌌 Twilight
        buttonGradient = "linear-gradient(135deg, #c084fc, #e0b3ff)";
        buttonShadow = "0 4px 12px rgba(192, 132, 252, 0.4)";
      } else if (hour < 12) {
        // 🌅 Morning
        buttonGradient = "linear-gradient(135deg, #5fc5ff, #9be6ff)";
        buttonShadow = "0 4px 12px rgba(95, 197, 255, 0.4)";
      } else if (hour < 18) {
        // 🌞 Midday
        buttonGradient = "linear-gradient(135deg,rgb(93, 33, 124),rgb(150, 86, 182))";
        buttonShadow = "0 4px 12px rgba(185, 148, 199, 0.4)";
      } else if (hour < 21) {
        // 🌇 Sunset
        buttonGradient = "linear-gradient(135deg,rgb(93, 33, 124),rgb(150, 86, 182))";
        buttonShadow = "0 4px 12px rgba(185, 148, 199, 0.4)";
      } else {
        // 🌙 Night
        buttonGradient = "linear-gradient(135deg, #7f63b8, #c2a4dd)";
        buttonShadow = "0 4px 12px rgba(194, 164, 221, 0.4)";
      }

      button.style.background = buttonGradient;
      button.style.color = "#ffffff";
      button.style.border = "none";
      button.style.boxShadow = buttonShadow;
    }


  document.body.style.setProperty('background', gradient, 'important');
  console.log(`Hour: ${hour} → Gradient set to: ${gradient}`);

  // 🫧 Floating bubbles
  let lastBubbleTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastBubbleTime > 100) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 1500);
      lastBubbleTime = now;
    }
  });

    // 🌍 Geo-based greeting
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const country = data.country_name;
      const region = data.region;
      const emojiFlags = {
        "United States": "🇺🇸",
        "India": "🇮🇳",
        "United Kingdom": "🇬🇧",
        "Canada": "🇨🇦",
        "France": "🇫🇷",
        "Germany": "🇩🇪",
        "Australia": "🇦🇺",
        "Japan": "🇯🇵"
      };
      const flag = emojiFlags[country] || "🌍";

      const counterValue = document.getElementById('counter')?.textContent || '???';
      const geoMsg = `Hey you, floating in from ${region || country} ☁️ You are visitor #${counterValue}!`;

      const geoBox = document.createElement('div');
      geoBox.textContent = geoMsg;
      geoBox.className = 'speech-bubble floating-geo';
      geoBox.style.cssText += `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
      `;
      document.body.appendChild(geoBox);

      setTimeout(() => geoBox.remove(), 12000);

    })
    .catch(err => {
      console.log("Geo fetch failed", err);
    });


});
