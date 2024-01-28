import React from 'react';
import {
  AreaChart as AreaChartRecharts,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { selectGraphDataPoints } from '../program/program-slice';
import { useAppSelector } from '../../app/hooks';

export default function AreaChart() {
  const dataPoints = useAppSelector(selectGraphDataPoints);
  return (
    <AreaChartRecharts
      width={1000}
      height={1000}
      data={dataPoints}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChartRecharts>
  );
}
