# COVID-19 Data Dashboard

A web application for visualizing COVID-19 case data for England, fetched from the UKHSA API. The app provides monthly and weekly breakdowns of COVID-19 cases and displays them using interactive charts.

## Features

- Fetches COVID-19 cases by day using a paginated API.
- Displays monthly and weekly case data using G2 charts.
- Built with React, TypeScript, and Ant Design.

## Technologies

- **React**
- **TypeScript**
- **Ant Design** (UI components)
- **Axios** (API requests)
- **G2** (Charting library)

## Setup

1. Clone the repository:
   `git clone https://github.com/your-repo.git`
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`

## API

Data is fetched from the [UKHSA API](https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay).
