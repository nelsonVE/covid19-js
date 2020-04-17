function createChart(body){
    const MAX_X = 10;
    var ctx = document.getElementById('myChart').getContext('2d');
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date();
    var dates = [];
    var arr_data = JSON.stringify("");

    console.log(arr_data);
    date.setDate(date.getDate() - MAX_X);

    for(let i = 0; i <= MAX_X; i++){
        date.setDate(date.getDate() + 1);
        dates[i] = months[date.getMonth()] + " " + date.getDate()
    }

    arr_data.forEach(() => {

    })
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: '# Infected',
                data: [12, 19, 3, 5, 2, 3, 5, 6, 8, 15, 19, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}