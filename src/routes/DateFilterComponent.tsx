import React, { useState } from "react";
import {
    DateFilter,
    DateFilterHelpers,
    DateFilterOption,
    IDateFilterOptionsByType,
} from "@gooddata/sdk-ui-filters";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { modifyMeasure, DateFilterGranularity } from "@gooddata/sdk-model";

import { Md } from "../md";

const Price = modifyMeasure(Md.SumOfPrice, (m) => m.format("#,##0").alias("$ Price"));

const measures = [Price];

const availableGranularities: DateFilterGranularity[] = ["GDC.time.month",
"GDC.time.year",
"GDC.time.quarter",
"GDC.time.date",
"GDC.time.minute"];

//const dateFilterOptions = defaultDateFilterOptions;

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

const dateFilterOptions: IDateFilterOptionsByType = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },
    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        // from: dateFrom.toISOString().substr(0, 10), // 'YYYY-MM-DD'
        // to: new Date().toISOString().substr(0, 10), // 'YYYY-MM-DD'
        from: "31/03/2020",
        to: "20/11/2020",
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2015-01-01",
            to: "2015-12-31",
            name: "Year 2015",
            localIdentifier: "year2015",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2016-01-01",
            to: "2016-12-31",
            name: "Year 2016",
            localIdentifier: "year2016",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2017-01-01",
            to: "2017-12-31",
            name: "Year 2017",
            localIdentifier: "year2017",
            visible: true,
            type: "absolutePreset",
        },
    ],
    relativeForm: {
        localIdentifier: "RELATIVE_FORM",
        type: "relativeForm",
        granularity: "GDC.time.year",
        from: -2,
        to: -2,
        name: "",
        visible: true,
    },
    
};

interface IDateFilterComponentExampleState {
    selectedFilterOption: DateFilterOption;
    excludeCurrentPeriod: boolean;
}

const dateFilterContainerStyle = { width: 200 };
const columnChartContainerStyle = { height: 300 };

export const DateFilterWithColumnChartExample: React.FC = () => {
    const [state, setState] = useState<IDateFilterComponentExampleState>({
        selectedFilterOption: dateFilterOptions.allTime!,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        state.selectedFilterOption,
        Md.DateDatasets.Date.ref,
        state.excludeCurrentPeriod,
    );

    return (
        <div>
            <div style={dateFilterContainerStyle}>
                <DateFilter
                    excludeCurrentPeriod={state.excludeCurrentPeriod}
                    selectedFilterOption={state.selectedFilterOption}
                    filterOptions={dateFilterOptions}
                    availableGranularities={availableGranularities}
                    customFilterName="Selected date range"
                    dateFilterMode="active"
                    onApply={onApply}
                />
            </div>
            <div style={columnChartContainerStyle}>
                <ColumnChart
                    measures={measures}
                    viewBy={Md.Date1Date}
                    filters={dateFilter ? [dateFilter] : []}
                />
            </div>
        </div>
    );
};