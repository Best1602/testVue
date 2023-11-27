// // Charts.jsx
// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { BarPlot } from '@mui/x-charts/BarChart';
// import { LinePlot } from '@mui/x-charts/LineChart';
// import { ChartContainer } from '@mui/x-charts/ChartContainer';

// import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
// import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';




// export function SimpleCharts({ height, width }) {
//     return (
//         <BarChart
//             xAxis={[
//                 {
//                     id: 'barCategories',
//                     data: ['สมชาย', 'สมนึก', 'สะอาด'],
//                     scaleType: 'band',
//                 },
//             ]}
//             barSize={100}
//             series={[
//                 {
//                     data: [100, 20, 30]
//                 }
//             ]}
//             yAxis={[{
//                 domain: [0, 100],
//                 allowDataOverflow: true
//             }]}
//             width={width}
//             height={height}
//             sx={{
//                 width: '100%',
//             }}
//         />
//     );
// }

// export function BasicLineChart({ height, width }) {
//     return (
//         <LineChart
//             xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//             series={[
//                 {
//                     data: [2, 5.5, 2, 8.5, 1.5, 5],
//                 },
//             ]}
//             width={width}
//             height={height}
//             sx={{
//                 width: '100%', // เพิ่มบรรทัดนี้
//             }}
//         />
//     );
// }

// export function BasicPie({ height, width }) {
//     return (
//         <PieChart
//             series={[
//                 {
//                     data: [
//                         { id: 0, value: 10, label: 'PR023' },
//                         { id: 1, value: 15, label: 'PR024' },
//                         { id: 2, value: 20, label: 'PR025' },
//                     ],

//                 },
//             ]}
//             cornerRadius={30} // หรือตรวจสอบที่นี่ว่า cornerRadius เป็นตัวเลข
//             width={width}
//             height={height}
//             slotProps={{
//                 legend: {
//                     direction: 'row',
//                     position: { vertical: 'top', horizontal: 'middle' },
//                     padding: 0,

//                 },
//             }}
//             sx={{
//                 width: '100%',
//                 marginLeft: 8
//                 // เพิ่มบรรทัดนี้
//             }}
//         />
//     );
// }

// export function TestLine({ height, width }) {
//     // Generate data for each hour
//     const hours = Array.from({ length: 10 }, (_, index) => index + 1);

//     // Generate corresponding data points (replace this with your actual data)
//     const dataPoints = [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8];

//     // Combine hours and dataPoints to create xAxis and series data
//     const formattedData = {
//         xAxis: [{ data: hours }],
//         series: [{ data: dataPoints, showMark: ({ index }) => index % 2 === 0 }],
//     };

//     return (
//         <LineChart
//             xAxis={formattedData.xAxis}
//             series={formattedData.series}
//             width={width}
//             height={height}
//         />
//     );
// }



// export function Combining() {
//     const series = [
//         {
//             type: 'bar',
//             stack: '',
//             yAxisKey: 'eco',
//             data: [2, 5, 3, 4, 1],
//         },
//         {
//             type: 'bar',
//             stack: '',
//             yAxisKey: 'eco',
//             data: [5, 6, 2, 8, 9],
//         },
//         {
//             type: 'line',
//             yAxisKey: 'pib',
//             color: 'red',
//             data: [1000, 1500, 3000, 5000, 9000],
//         },
//     ];
//     return (
//         <ChartContainer
//             series={series}
//             width={500}
//             height={400}
//             xAxis={[
//                 {
//                     id: 'months', // เปลี่ยน id เป็น 'months'
//                     data: ['Jan23', 'Feb23', 'Mar23', 'Apr23', 'May23'], // เปลี่ยนข้อมูลเป็นเดือน
//                     scaleType: 'band',
//                     valueFormatter: (value) => value.toString(),
//                 },
//             ]}
//             yAxis={[
//                 {
//                     id: 'eco',
//                     scaleType: 'linear',
//                 },
//                 {
//                     id: 'pib',
//                     scaleType: 'log',
//                 },
//             ]}
//             sx={{
//                 width: '100%',
//             }}
//         >
//             <BarPlot />
//             <LinePlot />
//             <ChartsXAxis label="Months" position="bottom" axisId="months" /> {/* เปลี่ยน label เป็น 'Months' และ axisId เป็น 'months' */}
//             <ChartsYAxis label="Results" position="left" axisId="eco" />
//             <ChartsYAxis label="PIB" position="right" axisId="pib" />
//         </ChartContainer >
//     );
// }