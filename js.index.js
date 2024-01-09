document.addEventListener('DOMContentLoaded', function () {
    const refreshBtn = document.querySelector('.btn.refresh');
    const showAlertBtn = document.querySelector('.btn.show-alert');
    const uptimeScore = document.querySelector('.uptime-score');
    const alertToast = document.querySelector('.alert-toast');
    const uptimeBarsContainer = document.querySelector('.uptime-bars');
    const uptimeValue = document.querySelector('.uptime');
    const lastDowntimeValue = document.querySelector('.last-downtime');
    const avgDowntimeValue = document.querySelector('.avg-downtime');

    refreshBtn.addEventListener('click', function () {
        updateUptimeScore();
        updateUptimeBars();
        updateUptimeDetails();
    });

    function updateUptimeScore() {
        const randomScore = Math.floor(Math.random() * 101);
        uptimeScore.textContent = `Uptime Score: ${randomScore}%`;
    }

    function updateUptimeBars() {
        const bars = Array.from(uptimeBarsContainer.getElementsByClassName('uptime-bar'));
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 6); // 0 do 5
            const randomColor = getRandomColor();
            bar.style.height = `${randomHeight}px`;
            bar.style.backgroundColor = randomColor;
        });
    }

    function updateUptimeDetails() {
        const randomUptime = Math.floor(Math.random() * 101);
        const randomLastDowntime = Math.floor(Math.random() * 61); // 0 do 60
        const randomAvgDowntime = Math.floor(Math.random() * 61); // 0 do 60

        uptimeValue.textContent = randomUptime;
        lastDowntimeValue.textContent = randomLastDowntime;
        avgDowntimeValue.textContent = randomAvgDowntime;
    }

    function getRandomColor() {
        const colors = ['green', 'orange', 'red'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    refreshBtn.addEventListener('click', function () {
        updateUptimeScore();
    });

    showAlertBtn.addEventListener('click', function () {
        showAlert();
    });
    function showAlert() {
        alertToast.style.display = 'block';
        setTimeout(function () {
            alertToast.style.display = 'none';
        }, 3000);
    }
});
