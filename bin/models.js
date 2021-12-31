export var LinkRel;
(function (LinkRel) {
    LinkRel["Refresh"] = "refresh";
    LinkRel["ChartExtraSmallPriceRangeForecast"] = "chart-xs-pricerangeforecast";
    LinkRel["ChartSmallPriceRangeForecast"] = "chart-sm-pricerangeforecast";
    LinkRel["ChartMediumPriceRangeForecast"] = "chart-md-pricerangeforecast";
    LinkRel["ChartLargePriceRangeForecast"] = "chart-lg-pricerangeforecast";
    LinkRel["ChartExtraSmallHourlyMovement"] = "chart-xs-hourlymovement";
    LinkRel["ChartSmallHourlyMovement"] = "chart-sm-hourlymovement";
    LinkRel["ChartMediumHourlyMovement"] = "chart-md-hourlymovement";
    LinkRel["ChartLargeHourlyMovement"] = "chart-lg-hourlymovement";
    LinkRel["ChartExtraSmallDailyMovement"] = "chart-xs-dailymovement";
    LinkRel["ChartSmallDailyMovement"] = "chart-sm-dailymovement";
    LinkRel["ChartMediumDailyMovement"] = "chart-md-dailymovement";
    LinkRel["ChartLargeDailyMovement"] = "chart-lg-dailymovement";
    LinkRel["ChartExtraSmallPowerStatsProjection"] = "chart-xs-powerstatsprojection";
    LinkRel["ChartSmallPowerStatsProjection"] = "chart-sm-powerstatsprojection";
    LinkRel["ChartMediumPowerStatsProjection"] = "chart-md-powerstatsprojection";
    LinkRel["ChartLargePowerStatsProjection"] = "chart-lg-powerstatsprojection";
    LinkRel["CSVPriceRangeForecast"] = "csv-pricerangeforecast";
    LinkRel["CSVHourlyMovement"] = "csv-hourlymovement";
    LinkRel["CSVDailyMovement"] = "csv-dailymovement";
    LinkRel["TradeNow"] = "trade-now";
    LinkRel["First"] = "first";
    LinkRel["Next"] = "next";
    LinkRel["Previous"] = "prev";
    LinkRel["Last"] = "last";
    LinkRel["PageNum"] = "pages[d]";
})(LinkRel || (LinkRel = {}));
export var CLIArguments;
(function (CLIArguments) {
    CLIArguments["File"] = "-f";
    CLIArguments["Symbol"] = "-s";
    CLIArguments["GenerateAll"] = "-g";
    CLIArguments["GenerateSection"] = "-m";
    CLIArguments["OutputFile"] = "-o";
    CLIArguments["UseStdOut"] = "-so";
    CLIArguments["Help"] = "-h";
    CLIArguments["Help2"] = "--help";
    CLIArguments["Help3"] = "-?";
})(CLIArguments || (CLIArguments = {}));
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
