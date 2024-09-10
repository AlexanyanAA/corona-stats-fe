import { CovidData } from '@/api/getCovidData';

export const getMonthlyCaseTotals = (data: CovidData[]) => {
  // Filter data by the specified year

  // Record to store total cases per month
  const monthlyTotals: Record<string, number> = {};

  data.forEach(({ date, metric_value }) => {
    const monthName = new Date(date).toLocaleString('default', {
      month: 'long',
    });

    // Initialize the month if it doesn't exist in the totals object
    if (!monthlyTotals[monthName]) {
      monthlyTotals[monthName] = 0;
    }

    // Add the metric_value (number of deaths or cases) to the total for the month
    monthlyTotals[monthName] += metric_value;
  });

  // Return the results as an array of objects
  return Object.keys(monthlyTotals).map((month) => ({
    month,
    totalCases: monthlyTotals[month],
  }));
};
