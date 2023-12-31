const initialState = {
    dashboardData: null,
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DASHBOARD_DATA':
            return {
                ...state,
                dashboardData: action.payload,
            };
        default:
            return state;
    }
};

export default dashboardReducer;