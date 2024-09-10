import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

export const MonthlyCasesChart = ({
  data,
}: {
  data: { month: string; totalCases: number }[];
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current?.childNodes.length === 0) {
      const chart = new Chart({
        container: chartRef.current,
        autoFit: true,
        height: 400,
      });

      chart
        .interval()
        .data(data)
        .encode('x', 'month')
        .encode('y', 'totalCases')
        .encode('color', 'month')
        .style('fillOpacity', 0.8);

      chart.render();
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%' }} />;
};
