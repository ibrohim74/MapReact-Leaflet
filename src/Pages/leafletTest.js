import React from 'react';
import {Button, Modal} from "antd";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
} from '@coreui/react-chartjs'
function LeafletTest(props) {
    return (
        <div >
            {/*<a href="https://drive.google.com/uc?export=download&id=1pvrbNwI4r_H29zi1kpBrP4yeW8svHQm7" >download</a>*/}
            {/*<h1>BU Test Oynasi Bu yerda Tajriba Otqaziladi!!</h1>*/}
            <CCol xs={5}>
                <CCard className="mb-4">
                    <CCardHeader>Doughnut Chart</CCardHeader>
                    <CCardBody>
                        <CChartDoughnut
                            type="doughnut"
                            rotation={360}
                            data={{
                                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                                datasets: [
                                    {
                                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                        data: [40, 20, 80, 10],
                                    },
                                ],
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Pie Chart</CCardHeader>
                    <CCardBody>
                        <CChartPie
                            data={{
                                labels: ['Red', 'Green', 'Yellow'],
                                datasets: [
                                    {
                                        data: [300, 50, 100],
                                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    },
                                ],
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>

        </div>
    );
}

export default LeafletTest;