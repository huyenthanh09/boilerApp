/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-11-11T06:53:16.575Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */
export const Category: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId: IAttribute = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */
export const CustomerName: IAttribute = newAttribute("customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: region
 */
export const Region: IAttribute = newAttribute("region");
/**
 * Attribute Title: State
 * Attribute ID: state
 */
export const State = {
  /**
   * Display Form Title: State
   * Display Form ID: state
   */
  Default: newAttribute("state")
  /**
   * Display Form Title: Location
   * Display Form ID: geo__state__location
   */,
  Location: newAttribute("geo__state__location"),
};
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId: IAttribute = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */
export const ProductName: IAttribute = newAttribute("product_name");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */
export const Category_1: IAttribute = newAttribute("products.category");
/**
 * Metric Title: sum of price
 * Metric ID: sum_of_price
 * Metric Type: MAQL Metric
 */
export const SumOfPrice: IMeasure<IMeasureDefinition> = newMeasure(idRef("sum_of_price", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Minute
 * Attribute ID: date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinute: IAttribute = newAttribute("date.minute");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHour: IAttribute = newAttribute("date.hour");
/**
 * Attribute Title: Date - Date
 * Attribute ID: date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate: IAttribute = newAttribute("date.day");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekYear: IAttribute = newAttribute("date.week");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear: IAttribute = newAttribute("date.month");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Year
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinuteOfHour: IAttribute = newAttribute("date.minuteOfHour");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHourOfDay: IAttribute = newAttribute("date.hourOfDay");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeek: IAttribute = newAttribute("date.dayOfWeek");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.dayOfYear");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekOfYear: IAttribute = newAttribute("date.weekOfYear");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfYear: IAttribute = newAttribute("date.monthOfYear");
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterOfYear: IAttribute = newAttribute("date.quarterOfYear");
/**
 * Attribute Title: Date1 - Minute
 * Attribute ID: date1.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Minute: IAttribute = newAttribute("date1.minute");
/**
 * Attribute Title: Date1 - Hour
 * Attribute ID: date1.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Hour: IAttribute = newAttribute("date1.hour");
/**
 * Attribute Title: Date1 - Date
 * Attribute ID: date1.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Date: IAttribute = newAttribute("date1.day");
/**
 * Attribute Title: Date1 - Week/Year
 * Attribute ID: date1.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekYear: IAttribute = newAttribute("date1.week");
/**
 * Attribute Title: Date1 - Month/Year
 * Attribute ID: date1.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1MonthYear: IAttribute = newAttribute("date1.month");
/**
 * Attribute Title: Date1 - Quarter/Year
 * Attribute ID: date1.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1QuarterYear: IAttribute = newAttribute("date1.quarter");
/**
 * Attribute Title: Date1 - Year
 * Attribute ID: date1.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Year: IAttribute = newAttribute("date1.year");
/**
 * Attribute Title: Date1 - Minute of Hour
 * Attribute ID: date1.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1MinuteOfHour: IAttribute = newAttribute("date1.minuteOfHour");
/**
 * Attribute Title: Date1 - Hour of Day
 * Attribute ID: date1.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1HourOfDay: IAttribute = newAttribute("date1.hourOfDay");
/**
 * Attribute Title: Date1 - Day of Week
 * Attribute ID: date1.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfWeek: IAttribute = newAttribute("date1.dayOfWeek");
/**
 * Attribute Title: Date1 - Day of Month
 * Attribute ID: date1.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfMonth: IAttribute = newAttribute("date1.dayOfMonth");
/**
 * Attribute Title: Date1 - Day of Year
 * Attribute ID: date1.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfYear: IAttribute = newAttribute("date1.dayOfYear");
/**
 * Attribute Title: Date1 - Week of Year
 * Attribute ID: date1.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekOfYear: IAttribute = newAttribute("date1.weekOfYear");
/**
 * Attribute Title: Date1 - Month of Year
 * Attribute ID: date1.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1MonthOfYear: IAttribute = newAttribute("date1.monthOfYear");
/**
 * Attribute Title: Date1 - Quarter of Year
 * Attribute ID: date1.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1QuarterOfYear: IAttribute = newAttribute("date1.quarterOfYear");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Date1
   * Date Data Set ID: date1
   */,
  Date1: {
    ref: idRef("date1", "dataSet"),
    identifier: "date1"
    /**
     * Date Attribute: Date1 - Minute
     * Date Attribute ID: date1.minute
     */,
    Date1Minute: {
      ref: idRef("date1.minute", "attribute"),
      identifier: "date1.minute"
      /**
       * Display Form Title: Date1 - Minute
       * Display Form ID: date1.minute
       */,
      Default: newAttribute("date1.minute"),
    }
    /**
     * Date Attribute: Date1 - Hour
     * Date Attribute ID: date1.hour
     */,
    Date1Hour: {
      ref: idRef("date1.hour", "attribute"),
      identifier: "date1.hour"
      /**
       * Display Form Title: Date1 - Hour
       * Display Form ID: date1.hour
       */,
      Default: newAttribute("date1.hour"),
    }
    /**
     * Date Attribute: Date1 - Date
     * Date Attribute ID: date1.day
     */,
    Date1Date: {
      ref: idRef("date1.day", "attribute"),
      identifier: "date1.day"
      /**
       * Display Form Title: Date1 - Date
       * Display Form ID: date1.day
       */,
      Default: newAttribute("date1.day"),
    }
    /**
     * Date Attribute: Date1 - Week/Year
     * Date Attribute ID: date1.week
     */,
    Date1WeekYear: {
      ref: idRef("date1.week", "attribute"),
      identifier: "date1.week"
      /**
       * Display Form Title: Date1 - Week/Year
       * Display Form ID: date1.week
       */,
      Default: newAttribute("date1.week"),
    }
    /**
     * Date Attribute: Date1 - Month/Year
     * Date Attribute ID: date1.month
     */,
    Date1MonthYear: {
      ref: idRef("date1.month", "attribute"),
      identifier: "date1.month"
      /**
       * Display Form Title: Date1 - Month/Year
       * Display Form ID: date1.month
       */,
      Default: newAttribute("date1.month"),
    }
    /**
     * Date Attribute: Date1 - Quarter/Year
     * Date Attribute ID: date1.quarter
     */,
    Date1QuarterYear: {
      ref: idRef("date1.quarter", "attribute"),
      identifier: "date1.quarter"
      /**
       * Display Form Title: Date1 - Quarter/Year
       * Display Form ID: date1.quarter
       */,
      Default: newAttribute("date1.quarter"),
    }
    /**
     * Date Attribute: Date1 - Year
     * Date Attribute ID: date1.year
     */,
    Date1Year: {
      ref: idRef("date1.year", "attribute"),
      identifier: "date1.year"
      /**
       * Display Form Title: Date1 - Year
       * Display Form ID: date1.year
       */,
      Default: newAttribute("date1.year"),
    }
    /**
     * Date Attribute: Date1 - Minute of Hour
     * Date Attribute ID: date1.minuteOfHour
     */,
    Date1MinuteOfHour: {
      ref: idRef("date1.minuteOfHour", "attribute"),
      identifier: "date1.minuteOfHour"
      /**
       * Display Form Title: Date1 - Minute of Hour
       * Display Form ID: date1.minuteOfHour
       */,
      Default: newAttribute("date1.minuteOfHour"),
    }
    /**
     * Date Attribute: Date1 - Hour of Day
     * Date Attribute ID: date1.hourOfDay
     */,
    Date1HourOfDay: {
      ref: idRef("date1.hourOfDay", "attribute"),
      identifier: "date1.hourOfDay"
      /**
       * Display Form Title: Date1 - Hour of Day
       * Display Form ID: date1.hourOfDay
       */,
      Default: newAttribute("date1.hourOfDay"),
    }
    /**
     * Date Attribute: Date1 - Day of Week
     * Date Attribute ID: date1.dayOfWeek
     */,
    Date1DayOfWeek: {
      ref: idRef("date1.dayOfWeek", "attribute"),
      identifier: "date1.dayOfWeek"
      /**
       * Display Form Title: Date1 - Day of Week
       * Display Form ID: date1.dayOfWeek
       */,
      Default: newAttribute("date1.dayOfWeek"),
    }
    /**
     * Date Attribute: Date1 - Day of Month
     * Date Attribute ID: date1.dayOfMonth
     */,
    Date1DayOfMonth: {
      ref: idRef("date1.dayOfMonth", "attribute"),
      identifier: "date1.dayOfMonth"
      /**
       * Display Form Title: Date1 - Day of Month
       * Display Form ID: date1.dayOfMonth
       */,
      Default: newAttribute("date1.dayOfMonth"),
    }
    /**
     * Date Attribute: Date1 - Day of Year
     * Date Attribute ID: date1.dayOfYear
     */,
    Date1DayOfYear: {
      ref: idRef("date1.dayOfYear", "attribute"),
      identifier: "date1.dayOfYear"
      /**
       * Display Form Title: Date1 - Day of Year
       * Display Form ID: date1.dayOfYear
       */,
      Default: newAttribute("date1.dayOfYear"),
    }
    /**
     * Date Attribute: Date1 - Week of Year
     * Date Attribute ID: date1.weekOfYear
     */,
    Date1WeekOfYear: {
      ref: idRef("date1.weekOfYear", "attribute"),
      identifier: "date1.weekOfYear"
      /**
       * Display Form Title: Date1 - Week of Year
       * Display Form ID: date1.weekOfYear
       */,
      Default: newAttribute("date1.weekOfYear"),
    }
    /**
     * Date Attribute: Date1 - Month of Year
     * Date Attribute ID: date1.monthOfYear
     */,
    Date1MonthOfYear: {
      ref: idRef("date1.monthOfYear", "attribute"),
      identifier: "date1.monthOfYear"
      /**
       * Display Form Title: Date1 - Month of Year
       * Display Form ID: date1.monthOfYear
       */,
      Default: newAttribute("date1.monthOfYear"),
    }
    /**
     * Date Attribute: Date1 - Quarter of Year
     * Date Attribute ID: date1.quarterOfYear
     */,
    Date1QuarterOfYear: {
      ref: idRef("date1.quarterOfYear", "attribute"),
      identifier: "date1.quarterOfYear"
      /**
       * Display Form Title: Date1 - Quarter of Year
       * Display Form ID: date1.quarterOfYear
       */,
      Default: newAttribute("date1.quarterOfYear"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: attribute filter
   * Insight ID: c44f22ac-4c62-48c4-93be-9c308e02b0a5
   */
  AttributeFilter: "c44f22ac-4c62-48c4-93be-9c308e02b0a5"
  /**
   * Insight Title: all attribute filters
   * Insight ID: e947cb97-af96-4307-8207-75f2e6f4c8b7
   */,
  AllAttributeFilters: "e947cb97-af96-4307-8207-75f2e6f4c8b7"
  /**
   * Insight Title: global attribute filter, except Nort, unknown
   * Insight ID: 52f6d01e-8749-448c-8551-3eaa71db2600
   */,
  GlobalAttributeFilterExceptNortUnknown: "52f6d01e-8749-448c-8551-3eaa71db2600"
  /**
   * Insight Title: date format
   * Insight ID: e726b797-c9a0-4fe7-bd00-5557ee376e3f
   */,
  DateFormat: "e726b797-c9a0-4fe7-bd00-5557ee376e3f"
  /**
   * Insight Title: date format 2
   * Insight ID: 883cb8ae-4e25-4023-a655-2a424f5f329f
   */,
  DateFormat2: "883cb8ae-4e25-4023-a655-2a424f5f329f"
  /**
   * Insight Title: empty value
   * Insight ID: 4eca0c46-6940-4131-badb-ebc2d7b507b0
   */,
  EmptyValue: "4eca0c46-6940-4131-badb-ebc2d7b507b0"
  /**
   * Insight Title: date format vs pop
   * Insight ID: 9f29f893-47a6-43d0-9ec7-84e2b17a40cb
   */,
  DateFormatVsPop: "9f29f893-47a6-43d0-9ec7-84e2b17a40cb"
  /**
   * Insight Title: date format vs other filters
   * Insight ID: 4bda2563-293f-4c44-a241-af45c055d5ae
   */,
  DateFormatVsOtherFilters: "4bda2563-293f-4c44-a241-af45c055d5ae"
  /**
   * Insight Title: date format vs ranking
   * Insight ID: 51801f60-1865-44ca-a05e-6b10a2eb1ba9
   */,
  DateFormatVsRanking: "51801f60-1865-44ca-a05e-6b10a2eb1ba9",
};
export const Dashboards = {
  /**
   * Dashboard Title: parent
   * Dashboard ID: 0d084f92-9f73-46a0-901e-17b4ba5071e3
   */
  Parent: "0d084f92-9f73-46a0-901e-17b4ba5071e3"
  /**
   * Dashboard Title: plugin 8.11
   * Dashboard ID: 7fc475bb-474a-4398-bceb-49a0223b032c
   */,
  Plugin811: "7fc475bb-474a-4398-bceb-49a0223b032c"
  /**
   * Dashboard Title: date format
   * Dashboard ID: f0ea15cb-386a-4a4a-8bea-e988ebc04bf7
   */,
  DateFormat_1: "f0ea15cb-386a-4a4a-8bea-e988ebc04bf7"
  /**
   * Dashboard Title: date format-target dashboard
   * Dashboard ID: a9ee3cc2-d8e7-4034-acb3-93569aa57cc1
   */,
  DateFormatTargetDashboard: "a9ee3cc2-d8e7-4034-acb3-93569aa57cc1",
};
