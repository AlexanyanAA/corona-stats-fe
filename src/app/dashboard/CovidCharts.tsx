'use client';

import React, { useEffect, useState } from 'react';
import { Col, Empty, Row, Spin } from 'antd';
import { CovidData, getCovidData } from '@/api/getCovidData';
import { ChartCard } from './ChartCard';
import { MonthlyCasesChart } from './MonthlyCasesChart';
import { getWeeklyCaseTotals } from '../utils/formatDataForPieWeekdayChart';
import { getMonthlyCaseTotals } from '../utils/formatDataForLinearMonthlyChart';
import { WeeklyCasesChart } from './WeeklyCasesChart';

export const CovidCharts = () => {
  const [data, setData] = useState<null | CovidData[]>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fetchedData = await getCovidData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching COVID data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Empty dependency array ensures this only runs once

  if (isLoading) return <Spin />;
  if (!data) return <Empty />;

  const monthlyData = getMonthlyCaseTotals(data);
  const weeklyData = getWeeklyCaseTotals(data);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} xl={12}>
        <ChartCard title="Monthly COVID-19 Cases in 2020">
          <MonthlyCasesChart data={monthlyData} />
        </ChartCard>
      </Col>
      <Col xs={24} xl={12}>
        <ChartCard title="Weekly COVID-19 Cases by Day in 2020">
          <WeeklyCasesChart data={weeklyData} />
        </ChartCard>
      </Col>
    </Row>
  );
};
