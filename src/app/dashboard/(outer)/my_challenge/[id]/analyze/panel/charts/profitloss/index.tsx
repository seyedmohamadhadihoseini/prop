"use client";
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from "react";


export default function ProfitLossChart({data,x_data}:{data:any[],x_data:any[]}) {
    const series = [{ data }];
    const [colorX, setColorX] = useState<'None' | 'piecewise' | 'continuous' | 'ordinal'
    >('ordinal');
    const [colorY, setColorY] = useState<'None' | 'piecewise' | 'continuous'>(
        'piecewise',
    );
    return (
        <BarChart
            height={300}

            grid={{ horizontal: true }}
            series={series}
            margin={{
                top: 10,
                bottom: 20,
            }}
            yAxis={[
                {
                    colorMap:
                        (colorY === 'continuous' && {
                            type: 'continuous',
                            min: -10,
                            max: 10,

                            color: ['red', 'green'],
                        }) ||
                        (colorY === 'piecewise' && {
                            type: 'piecewise',
                            thresholds: [0],
                            colors: ['red', 'green'],
                        }) ||
                        undefined,
                },
            ]}
            xAxis={[
                {
                    scaleType: 'band',
                    data: x_data,
                    
                    valueFormatter: (value) => value.toISOString().split("T")[0],
                    colorMap:
                        (colorX === 'ordinal' && {
                            type: 'ordinal',
                            colors: [
                                '#ccebc5',
                                '#a8ddb5',
                                '#7bccc4',
                                '#4eb3d3',
                                '#2b8cbe',
                                '#08589e',
                            ],
                        }) ||
                        (colorX === 'continuous' && {
                            type: 'continuous',
                            min: new Date(2019, 1, 1),
                            max: new Date(2024, 1, 1),
                            color: ['green', 'orange'],
                        }) ||
                        (colorX === 'piecewise' && {
                            type: 'piecewise',
                            thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                            colors: ['blue', 'red', 'blue'],
                        }) ||
                        undefined,
                },
            ]}
        />
    );
}
