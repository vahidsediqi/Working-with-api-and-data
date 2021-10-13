// Data from: https://data.giss.nasa.gov/gistemp/

chartIt();
async function chartIt() {
const data = await getData();
const ctx = document.getElementById('chart').getContext('2d');
const title = `From 1880 to 2020`
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.XS,
        datasets: [{
            label: title,
            data: data.YS,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return value + ' °';
                    }
                }
            }
        }
    }
});

}

async function getData() {
    const XS = [];
    const YS = [];   
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text()

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const cols = row.split(',');
        const year = cols[0];
        XS.push(year);
        const temp = cols[1];
        YS.push(parseFloat(temp) + 1);
        console.log(year, temp);
    });
    return {
        XS, 
        YS
    };

}