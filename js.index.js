document.addEventListener('DOMContentLoaded', function () {
    const refreshBtn = document.querySelector('.btn.refresh');
    const showAlertBtn = document.querySelector('.btn.show-alert');
    const uptimeBarsContainer = document.querySelector('.uptime-bars');
    const uptimeValue = document.querySelector('.uptime');
    const lastDowntimeValue = document.querySelector('.last-downtime');
    const avgDowntimeValue = document.querySelector('.avg-downtime');

    const uptimeData = [
        { id: 1, date: '8.1.2023', status: 'error' },
        { id: 2, date: '3.3.2023', status: 'warning' },
        { id: 3, date: '12.1.2023', status: 'success' },
        { id: 4, date: '12.1.2023', status: 'success' },
        { id: 5, date: '3.3.2023', status: 'warning' },
        { id: 6, date: '8.1.2023', status: 'error' },
        { id: 7, date: '8.1.2023', status: 'error' },
        { id: 8, date: '3.3.2023', status: 'warning' },
        { id: 9, date: '12.1.2023', status: 'success' },
        { id: 10, date: '12.1.2023', status: 'success' },
        { id: 11, date: '3.3.2023', status: 'warning' },
        { id: 12, date: '8.1.2023', status: 'error' },
    ];

    refreshBtn.addEventListener('click', function () {
        updateUptimeScore();
        updateUptimeBars();
        updateUptimeDetails();
    });

    showAlertBtn.addEventListener('click', function () {
        showAlert();
    });

    function updateUptimeScore() {
        const avgDowntime = calculateAverageDowntime();
        uptimeValue.textContent = `${100 - avgDowntime}`;
    }

    function updateUptimeDetails() {
        const latestData = uptimeData[uptimeData.length - 1];
        lastDowntimeValue.textContent = `${latestData.date}`;

        const avgDowntime = calculateAverageDowntime();
        avgDowntimeValue.textContent = `${avgDowntime}`;
    }

    function calculateAverageDowntime() {
        const totalDowntime = uptimeData.reduce((sum, data) => {
            return data.status === 'success' ? sum : sum + 1;
        }, 0);

        const avgDowntime = (totalDowntime / uptimeData.length) * 100;
        return avgDowntime.toFixed(2);
    }

    function getRandomColor() {
        const colors = ['red', 'orange', 'green'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function showAlert() {
        const alertToast = document.querySelector('.alert-toast');
        alertToast.style.display = 'block';
        setTimeout(function () {
            alertToast.style.display = 'none';
        }, 2000);
    }

    function updateUptimeBars() {
        uptimeBarsContainer.innerHTML = '';

        for (let i = 0; i < uptimeData.length; i++) {
            const data = uptimeData[i];
            const bar = document.createElement('div');
            const status = data.status === 'error' ? 'red' : (data.status === 'warning' ? 'orange' : 'green');
            bar.className = `uptime-bar ${status}`;
            uptimeBarsContainer.appendChild(bar);
        }
    }
});
