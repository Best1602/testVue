// Charts.jsx
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'; // Import the Chart component from 'react-apexcharts'
import axios from 'axios';
// Function to convert data format for ApexCharts
const convertToApexFormat = (dataPoints) => dataPoints.map((value, index) => ({ x: index + 1, y: value }));

export function SimpleCharts({ height, width }) {
    const options = {
        xaxis: {
            categories: ['สมชาย', 'สมนึก', 'สะอาด'],
        },
        yaxis: {
            min: 0,
            max: 100,
        },
        theme: {
            palette: 'palette1', // You can use 'palette1', 'palette2', ..., or provide your own colors
        },
    };

    const series = [
        {
            name: 'Series 1',
            data: [100, 20, 30],
        },
    ];

    return <Chart options={options} series={series} type="bar" height={height} width={width} />;
}

export function BasicLineChart({ height, width }) {
    const options = {
        xaxis: {
            categories: [1, 2, 3, 5, 8, 10],
        },
    };

    const series = [
        {
            name: 'Series 1',
            data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
    ];

    return <Chart options={options} series={series} type="line" height={height} width={width} />;
}

export function BasicPie({ height, width }) {
    const options = {
        labels: ['PR023', 'PR024', 'PR025'],
    };

    const series = [10, 15, 20];

    return <Chart options={options} series={series} type="pie" height={height} width={width} />;
}
// export function BasicPie({ height, width }) {
//     const [data, setData] = useState([]);
//     console.log(data);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://203.154.174.129/Absent-api/table');
//                 // แก้ไขข้อมูลที่ได้จาก API
//                 const modifiedData = response.data.map(item => ({
//                     ...item,
//                     typabsent: `${item.typabsent === 'Absent Sick' ? 'ลาป่วย' : item.typabsent === 'Absent Other' ? 'ลาอื่นๆ' : item.typabsent === 'Absent Take Annual' ? 'ลาพักร้อน' : item.typabsent === 'Absent Business' ? 'ลากิจ' : item.typabsent}`,

//                 }));
//                 setData(modifiedData);
//             } catch (error) {
//                 console.error('Error fetching data from API', error);
//             }
//         };

//         fetchData();
//     }, []);

//     // ตรวจสอบว่าได้ข้อมูลมาหรือไม่
//     if (data.length === 0) {
//         return null;
//     }

//     // นับจำนวนของแต่ละ `typabsent`
//     const countByTypabsent = data.reduce((count, item) => {
//         const typabsent = item.typabsent;
//         count[typabsent] = (count[typabsent] || 0) + 1;
//         return count;
//     }, {});

//     // สร้างข้อมูลที่จะนำมาแสดงใน Chart
//     const chartData = {
//         labels: Object.keys(countByTypabsent),
//         series: Object.values(countByTypabsent),
//     };

//     // ตั้งค่าของ Chart
//     const options = {
//         labels: chartData.labels,
//         plotOptions: {
//             pie: {
//                 dataLabels: {
//                     position: 'bottom', // กำหนดตำแหน่งของ label ไปที่ด้านล่าง
//                 },
//             },

//         },

//         chart: {
//             width: width, // กำหนดความกว้างของ Pie Chart
//             height: height, // กำหนดความสูงของ Pie Chart
//         },
//         legend: {
//             show: true,
//             position: 'bottom', // กำหนดตำแหน่งของ legend
//             horizontalAlign: 'center', // จัดตำแหน่งให้อยู่ตรงกลาง
//             offsetY: 5, // กำหนดตำแหน่งแนวนอน
//         },
//     };

//     // สร้าง series สำหรับ Pie Chart
//     const series = chartData.series;

//     return <Chart options={options} series={series} type="pie" height={height} width={width} />;
// }
export function TestLine({ height, width }) {
    const [salesData, setSalesData] = useState(Array.from({ length: 24 }, (_, index) => (index === 8 ? 5 : Math.floor(Math.random() * 10) + 1)));
    const [timeLabels, setTimeLabels] = useState(Array.from({ length: 24 }, (_, index) => index));
    const hours = [...Array(24).keys()];
    const options = {
        chart: {
            id: 'realtime',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: hours.map(hour => {

                return `${hour.toString().padStart(2, '0')}:00`
            })
        },

        yaxis: {
            title: {
                text: 'จำนวนชิ้นที่ผลิตได้',
            },
            min: 0,
            max: 20,
            labels: {
                formatter: (value) => Math.floor(value),
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'],
                opacity: 0.2,
            },
            borderColor: '#f1f1f1',
        },
        stroke: {
            curve: 'smooth', // เปลี่ยนเป็น 'straight' หรือ 'smooth' ตามที่ต้องการ
        },
    };

    return <Chart options={options} series={[{ name: 'จำนวนชิ้นที่ผลิตได้', data: salesData }]} type="line" height={height} width={width} />;
}
export function Combining({ height, width }) {
    const options = {
        xaxis: {
            categories: ['Jan23', 'Feb23', 'Mar23', 'Apr23', 'May23'],
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB',
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    },
                },
                title: {
                    text: 'Eco',
                    style: {
                        color: '#008FFB',
                    },
                },
                tooltip: {
                    enabled: true,
                },
            },
            {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#00E396',
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    },
                },
                title: {
                    text: 'Pib',
                    style: {
                        color: '#00E396',
                    },
                },
            },
        ],
    };

    const series = [
        {
            name: 'Eco',
            type: 'bar',
            data: [2, 5, 3, 4, 1],
        },
        {
            name: 'Income',
            type: 'bar',
            data: [5, 6, 2, 8, 9],
        },
        {
            name: 'Pib',
            type: 'line',
            data: [1000, 1500, 3000, 5000, 9000],
        },
    ];

    return <Chart options={options} series={series} type="bar" height={height} width={width} />;
}
