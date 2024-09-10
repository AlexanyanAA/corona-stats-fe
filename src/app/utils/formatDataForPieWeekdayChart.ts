import { CovidData } from '@/api/getCovidData';

export const getWeeklyCaseTotals = (
  data: CovidData[]
): { weekday: string; totalCases: number }[] => {
  // Filter data by the specified year

  // Record to store total cases per weekday
  const weeklyCases: Record<string, number> = {};
  data.forEach(({ date, metric_value }) => {
    const weekday = new Date(date).toLocaleString('default', {
      weekday: 'long',
    });

    if (!weeklyCases[weekday]) {
      weeklyCases[weekday] = 0;
    }

    // Add the metric_value (number of deaths or cases) to the total for the weekday
    weeklyCases[weekday] += metric_value;
  });

  // Return the sorted results as an array of objects
  return Object.keys(weeklyCases)
    .map((weekday) => ({ weekday, totalCases: weeklyCases[weekday] }))
    .sort((a, b) => b.totalCases - a.totalCases);
};
