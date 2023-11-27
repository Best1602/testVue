// Dashboard.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDashboardData } from '../../store/actions/dashboardActions';
import PaperComponent from '../common/PaperComponent';
import { SimpleCharts, BasicLineChart, BasicPie, TestLine, Combining } from '../common/Charts';
import { Box, Grid } from '@mui/material';
import Table from '../../components/Table/Table'
import { Test } from '../common/test';


const Dashboard = () => {
    const dashboardData = useSelector((state) => state.dashboard.dashboardData);
    const dispatch = useDispatch();

    const fetchData = () => {
        // เรียก API หรือทำการดึงข้อมูลจากที่ต้องการ
        const data = /* ข้อมูลที่ได้มา */
            dispatch(setDashboardData(data));
    };

    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 356 }}>
                            KPI Staff
                            <SimpleCharts height={300} width={'100%'} />
                        </PaperComponent>
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={7} gridColumn={{ md: 'span 4' }}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 700 }, height: 356 }}>
                            Product Realtime
                            <TestLine height={300} width={'100%'} />
                        </PaperComponent>
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 356 }}>
                            Production Order
                            <BasicPie height={300} width={'100%'} />
                        </PaperComponent>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 400 }}>
                            KPI Line Production
                            <BasicLineChart height={300} width={'100%'} />
                        </PaperComponent>
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={7} gridColumn={{ md: 'span 4' }}>
                        {/* <PaperComponent sx={{ width: { xs: '100%', md: 700 }, height: 450 }}> */}
                        <Table />
                        {/* </PaperComponent> */}
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 400, }}>
                            Production per month
                            <Combining height={350} width={350} />

                        </PaperComponent>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 356 }}>
                            <SimpleCharts />
                        </PaperComponent>
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={7} gridColumn={{ md: 'span 4' }}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 700 }, height: 356 }}>
                            <TestLine />
                        </PaperComponent>
                    </Grid>

                    <Grid item xs={12} sm={9} md={8} lg={8} xl={2.5}>
                        <PaperComponent sx={{ width: { xs: '100%', md: 245 }, height: 356 }}>
                            <BasicPie />
                        </PaperComponent>
                    </Grid>
                </Grid> */}
            </Box>
        </div >
    );
};

export default Dashboard;
