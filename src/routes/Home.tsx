import { idRef } from "@gooddata/sdk-model";
import { Dashboard, DashboardConfig } from "@gooddata/sdk-ui-dashboard";
import { InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";
import {Md} from "../md";

import Page from "../components/Page";
import { BarChart } from "@gooddata/sdk-ui-charts";

import {DateFilterWithColumnChartExample} from "./DateFilterComponent";

const style = { height: 300 };

const dashboardRef = idRef("f0ea15cb-386a-4a4a-8bea-e988ebc04bf7");
const config: DashboardConfig = { isReadOnly: false };

const Home: React.FC = () => {
    return <Page>

        <p>Dashboard component</p>
        <div><Dashboard dashboard={dashboardRef} config={config} /></div>

        <p>date component</p>
        <div>
            <DateFilterWithColumnChartExample />
        </div>

        <p>Insight View</p>
         <div style={style}>
            <InsightView insight={Md.Insights.DateFormat} />
        </div>

        <p>bar chart</p>
        <div style={style}>
            <BarChart measures={[Md.SumOfPrice]} viewBy={Md.Date1MonthYear} stackBy={Md.Date1DayOfWeek} />
        </div>
    </Page>;
};

export default Home;
