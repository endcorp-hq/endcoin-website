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
  const width = window.innerWidth > 1000 ? 1000 : window.innerWidth - 20;
  const height = window.innerHeight > 1000 ? 1000 : window.innerHeight - 20;
  return (
    <AreaChartRecharts
      width={width}
      height={height}
      data={dataPoints}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="blocktime" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="EndGaia" stroke="#8884d8" fill="#8884d8" />
    </AreaChartRecharts>
  );
}
