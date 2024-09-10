import axios from 'axios';

export type CovidData = {
  date: string;
  metric_value: number;
  month?: number;
  year?: number;
};

export type ApiResponse = {
  results: CovidData[];
  next: string | null;
};

export const getCovidData = async (): Promise<CovidData[]> => {
  const initialUrl =
    'https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay?year=2020';

  let allData: CovidData[] = [];
  let nextUrl: string | null = initialUrl;

  // Continue fetching while there's a 'next' page
  while (nextUrl) {
    try {
      // Explicit type annotation for response and destructure result
      const { data }: { data: ApiResponse } = await axios.get(nextUrl);

      const fetchedData: CovidData[] = data.results.map((item) => ({
        date: item.date,
        metric_value: Number(item.metric_value),
        month: item.month,
        year: item.year,
      }));

      // Append the new results to the allData array
      allData = allData.concat(fetchedData);

      // Get the next page URL, if available
      nextUrl = data.next || null;
    } catch (error) {
      console.error('Error fetching COVID-19 data:', error);
      break;
    }
  }

  return allData;
};
