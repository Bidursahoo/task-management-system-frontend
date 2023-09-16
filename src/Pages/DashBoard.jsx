import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import SideNavBar from '../Components/SideNavBar';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function DashBoard() {
  return (
    <>
    <SideNavBar/>
    <div className='mt-5'>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={200}
    />
    </div>
    </>
    
  );
}