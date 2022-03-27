import React from 'react';
import {CChartDoughnut} from "@coreui/react-chartjs";
import {CCol} from "@coreui/react";

const Charts = () => {
    return (
        <div>
            <CCol xs={5}>
            <CChartDoughnut
                data={{
                    labels: ['Yaylov №1', 'Yaylov 2№', 'Yaylov 3№', 'Yaylov 4№'],
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                            data: [40, 20, 80, 10],
                        },
                    ],
                }}
            />
            </CCol>
        </div>
    );
};

export default Charts;