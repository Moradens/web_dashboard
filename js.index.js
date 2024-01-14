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
        { id: 5, date: '3.3.2023', status: 'warning' }
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
        const randomScore = Math.floor(Math.random() * 101);
        uptimeValue.textContent = `${randomScore}`;
    }

    function updateUptimeDetails() {
        const randomLastDowntime = Math.floor(Math.random() * 61);
        const randomAvgDowntime = Math.floor(Math.random() * 61);

        lastDowntimeValue.textContent = `${randomLastDowntime} minutes`;
        avgDowntimeValue.textContent = `${randomAvgDowntime}`;
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
