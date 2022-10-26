import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Text, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      expenses: 4000,
      income: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      expenses: 3000,
      income: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      expenses: 2000,
      income: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      expenses: 2780,
      income: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      expenses: 1890,
      income: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      expenses: 2390,
      income: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      expenses: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      expenses: 3000,
      income: 1398,
      amt: 2210,
    },
    {
      name: 'Sep',
      expenses: 2000,
      income: 9800,
      amt: 2290,
    },
    {
      name: 'Oct',
      expenses: 2780,
      income: 3908,
      amt: 2000,
    },
    {
      name: 'Nov',
      expenses: 1890,
      income: 4800,
      amt: 2181,
    },
    {
      name: 'Dec',
      expenses: 2390,
      income: 3800,
      amt: 2500,
    },
];

const Barchart = () => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={200} // 500
        height={200} // 300
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barGap={"1%"}
        barSize={28}
      >
        <defs>
          <pattern id="pattern_OEHpq" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <line x1="0" y="0" x2="0" y2="6" stroke="#000000" stroke-width="3" />
          </pattern>
        </defs>
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <Text />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          height={36}
          iconType="circle"
          iconSize={12}
          wrapperStyle={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            maxWidth: 200,
            borderRadius: 10,
          }}
        />
        <Bar dataKey="income" stackId="a" fill="#92c1ec" />
        <Bar dataKey="expenses" stackId="a" fill="url(#pattern_OEHpq)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart;