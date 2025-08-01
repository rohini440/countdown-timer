let interval;

    function startCountdown() {
      clearInterval(interval);
      const input = document.getElementById('datetime-input').value;
      const targetTime = new Date(input).getTime();

      if (!targetTime || isNaN(targetTime)) {
        alert("Please select a valid future date and time.");
        return;
      }

      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance <= 0) {
          clearInterval(interval);
          document.getElementById("message").textContent = "⏰ Countdown Complete!";
          updateTimer(0, 0, 0, 0);
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateTimer(days, hours, minutes, seconds);
      }, 1000);
    }

    function updateTimer(days, hours, minutes, seconds) {
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    function toggleTheme(checkbox) {
      const body = document.body;
      const container = document.querySelector('.container');
      const label = document.getElementById('theme-label');

      if (checkbox.checked) {
        // Light mode
        body.style.background = 'var(--bg-color-light)';
        body.style.color = 'var(--text-color-light)';
        container.style.backgroundColor = 'var(--card-color-light)';
        label.textContent = '☀️ Light';
      } else {
        // Dark mode
        body.style.background = 'var(--bg-color-dark)';
        body.style.color = 'var(--text-color-dark)';
        container.style.backgroundColor = 'var(--card-color-dark)';
        label.textContent = '🌙 Dark';
      }
    }
