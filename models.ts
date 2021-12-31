export type HPMRResponse = {
    date: string,
    query: HPMRQuery,
    returnSymbols: [string],
    page: HPMRPage,
    items: [HPMRItem],
    links: [HPMRLink]
}

export type HPMRPage = {
    number: number,
    limit: number,
    offset: number,
    total_items: number,
    total_pages: number,
    links: [HPMRLink]
}

export type HPMRQuery = {
    symbols: [string],
    exchanges: [string],
    groups: [number],
    day_of_week: number,
    from_time: number,
    symbol_id: number,
    page_limit: number,
    page_offset: number,
    timezone_offset: number
}

export type HPMRLink = {
    rel: LinkRel,
    href: string,
    display?: string,
    enabled?: boolean,
    active?: boolean
}

export type HPMRItem = {
    new: boolean,
    data: {
        datetime: string,
        result_uid: number,
        group_id: number,
        broker_id: number,
        symbol: string,
        longname: string,
        display_symbol: string,
        exchange: string,
        symbol_id: number,
        hourly_symbol_id: number,
        day_of_week: number,
        from_time: number,
        closing_price: number,
        low_15: number,
        high_15: number,
        low_30: number,
        high_30: number,
        low_60: number,
        high_60: number,
        low_240: number,
        high_240: number,
        low_1440: number,
        high_1440: number,
        timezone_offset: number,
        timezone: string,
        rank: number,
        rank_rounded: number
    },
    links: [HPMRLink]
}

export enum LinkRel {
    Refresh = 'refresh',
    ChartExtraSmallPriceRangeForecast = 'chart-xs-pricerangeforecast',
    ChartSmallPriceRangeForecast = 'chart-sm-pricerangeforecast',
    ChartMediumPriceRangeForecast = 'chart-md-pricerangeforecast',
    ChartLargePriceRangeForecast = 'chart-lg-pricerangeforecast',
    ChartExtraSmallHourlyMovement = 'chart-xs-hourlymovement',
    ChartSmallHourlyMovement = 'chart-sm-hourlymovement',
    ChartMediumHourlyMovement = 'chart-md-hourlymovement',
    ChartLargeHourlyMovement = 'chart-lg-hourlymovement',
    ChartExtraSmallDailyMovement = 'chart-xs-dailymovement',
    ChartSmallDailyMovement = 'chart-sm-dailymovement',
    ChartMediumDailyMovement = 'chart-md-dailymovement',
    ChartLargeDailyMovement = 'chart-lg-dailymovement',
    ChartExtraSmallPowerStatsProjection = 'chart-xs-powerstatsprojection',
    ChartSmallPowerStatsProjection = 'chart-sm-powerstatsprojection',
    ChartMediumPowerStatsProjection = 'chart-md-powerstatsprojection',
    ChartLargePowerStatsProjection = 'chart-lg-powerstatsprojection',
    CSVPriceRangeForecast = 'csv-pricerangeforecast',
    CSVHourlyMovement = 'csv-hourlymovement',
    CSVDailyMovement = 'csv-dailymovement',
    TradeNow = 'trade-now',
    First = 'first',
    Next = 'next',
    Previous = 'prev',
    Last = 'last',
    PageNum = 'pages[\d]'

}

export type HourlyMovementData = {hour: string, low: number, high: number}

export enum CLIArguments {
    File = '-f',
    Symbol = '-s',
    GenerateAll = '-g',
    GenerateSection = '-m',
    OutputFile = '-o',
    UseStdOut = '-so',
    Help = '-h',
    Help2 = '--help',
    Help3 = '-?'
}

export const HelpText = 'Run the program with no arguments to be prompted for each required piece of data. You will' +
    ' also be prompted for each piece of data that is not included in any given arguments. To provide arguments, use ' +
    'the following options:\n' +
    '  -h, --help, -?          Show this help text, then quit\n' +
    '  -f [filename]           Use the given path as the source CSV file (if the path is invalid, you will be prompted)\n' +
    '  -s [symbol]             Use the given symbol (provide max 2, precede each with -s)\n' +
    '  -o [filename]           Use the given path as the output TXT file (if the path is invalid, you will be prompted)\n' +
    '  -so                     Display output to the screen instead of expecting a text file\n' +
    '  -g                      Generate the entire thinkScript file\n' +
    '  -m                      Generate only the if-clause needed for this symbol to add to an existing script\n';