import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

export const WeeklyCasesChart = ({
  data,
}: {
  data: { weekday: string; totalCases: number }[];
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.childNodes.length === 0) {
      const chart = new Chart({
        container: chartRef.current,
        autoFit: true,
        height: 400,
      });

      // Setup for pie chart with inner radius
      chart.coordinate({ type: 'theta', innerRadius: 0.6 });

      // Configure chart data and encodings
      chart
        .interval()
        .data(data)
        .transform({ type: 'stackY' })
        .encode('y', 'totalCases')
        .encode('color', 'weekday')
        .style({ lineWidth: 1, stroke: '#fff' });

      chart.render();
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%' }} />;
};
