import React, { Component } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { javadata} from "../dataitems"




class Chart extends Component {

    render() {
        return (

            <div className="chart" width="100%" height="100%">

                <BarChart
                    width={800}
                    height={300}
                    data={javadata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={50}
                >  <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />

                    <Bar dataKey="per" fill="#ff6600" background={{ fill: '#eee' }} />
                </BarChart>
            </div>
        )
    }
}
export default Chart