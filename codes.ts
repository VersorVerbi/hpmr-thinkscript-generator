export const begin = "\n" +
    "input alertsOn = no;\n" +
    "input showBorderOnCloud = yes;\n" +
    "def hour = Floor(SecondsTillTime(0) / -3600);\n" +
    "def pdLow = low(period = AggregationPeriod.HOUR);\n" +
    "def pdHigh = high(period = AggregationPeriod.HOUR);\n" +
    "def state = {default init, run};\n" +
    "def low0;\n" +
    "def high0;\n" +
    "def low1;\n" +
    "def high1;\n" +
    "def low2;\n" +
    "def high2;\n" +
    "def low3;\n" +
    "def high3;\n" +
    "def low4;\n" +
    "def high4;\n" +
    "def low5;\n" +
    "def high5;\n" +
    "def low6;\n" +
    "def high6;\n" +
    "def low7;\n" +
    "def high7;\n" +
    "def low8;\n" +
    "def high8;\n" +
    "def low9;\n" +
    "def high9;\n" +
    "def low10;\n" +
    "def high10;\n" +
    "def low11;\n" +
    "def high11;\n" +
    "def low12;\n" +
    "def high12;\n" +
    "def low13;\n" +
    "def high13;\n" +
    "def low14;\n" +
    "def high14;\n" +
    "def low15;\n" +
    "def high15;\n" +
    "def low16;\n" +
    "def high16;\n" +
    "def low17;\n" +
    "def high17;\n" +
    "def low18;\n" +
    "def high18;\n" +
    "def low19;\n" +
    "def high19;\n" +
    "def low20;\n" +
    "def high20;\n" +
    "def low21;\n" +
    "def high21;\n" +
    "def low22;\n" +
    "def high22;\n" +
    "def low23;\n" +
    "def high23;\n" +
    "switch (state[1]) {\n" +
    "case init:\n"

export const end = "\n" +
    "    {\n" +
    "        low0 = Double.NaN;\n" +
    "        high0 = Double.NaN;\n" +
    "        low1 = Double.NaN;\n" +
    "        high1 = Double.NaN;\n" +
    "        low2 = Double.NaN;\n" +
    "        high2 = Double.NaN;\n" +
    "        low3 = Double.NaN;\n" +
    "        high3 = Double.NaN;\n" +
    "        low4 = Double.NaN;\n" +
    "        high4 = Double.NaN;\n" +
    "        low5 = Double.NaN;\n" +
    "        high5 = Double.NaN;\n" +
    "        low6 = Double.NaN;\n" +
    "        high6 = Double.NaN;\n" +
    "        low7 = Double.NaN;\n" +
    "        high7 = Double.NaN;\n" +
    "        low8 = Double.NaN;\n" +
    "        high8 = Double.NaN;\n" +
    "        low9 = Double.NaN;\n" +
    "        high9 = Double.NaN;\n" +
    "        low10 = Double.NaN;\n" +
    "        high10 = Double.NaN;\n" +
    "        low11 = Double.NaN;\n" +
    "        high11 = Double.NaN;\n" +
    "        low12 = Double.NaN;\n" +
    "        high12 = Double.NaN;\n" +
    "        low13 = Double.NaN;\n" +
    "        high13 = Double.NaN;\n" +
    "        low14 = Double.NaN;\n" +
    "        high14 = Double.NaN;\n" +
    "        low15 = Double.NaN;\n" +
    "        high15 = Double.NaN;\n" +
    "        low16 = Double.NaN;\n" +
    "        high16 = Double.NaN;\n" +
    "        low17 = Double.NaN;\n" +
    "        high17 = Double.NaN;\n" +
    "        low18 = Double.NaN;\n" +
    "        high18 = Double.NaN;\n" +
    "        low19 = Double.NaN;\n" +
    "        high19 = Double.NaN;\n" +
    "        low20 = Double.NaN;\n" +
    "        high20 = Double.NaN;\n" +
    "        low21 = Double.NaN;\n" +
    "        high21 = Double.NaN;\n" +
    "        low22 = Double.NaN;\n" +
    "        high22 = Double.NaN;\n" +
    "        low23 = Double.NaN;\n" +
    "        high23 = Double.NaN;\n" +
    "    }\n" +
    "    state = if BarNumber() > 2 then state.run else state.init;\n" +
    "case run:\n" +
    "    low0 = low0[1];\n" +
    "    low1 = low1[1];\n" +
    "    low2 = low2[1];\n" +
    "    low3 = low3[1];\n" +
    "    low4 = low4[1];\n" +
    "    low5 = low5[1];\n" +
    "    low6 = low6[1];\n" +
    "    low7 = low7[1];\n" +
    "    low8 = low8[1];\n" +
    "    low9 = low9[1];\n" +
    "    low10 = low10[1];\n" +
    "    low11 = low11[1];\n" +
    "    low12 = low12[1];\n" +
    "    low13 = low13[1];\n" +
    "    low14 = low14[1];\n" +
    "    low15 = low15[1];\n" +
    "    low16 = low16[1];\n" +
    "    low17 = low17[1];\n" +
    "    low18 = low18[1];\n" +
    "    low19 = low19[1];\n" +
    "    low20 = low20[1];\n" +
    "    low21 = low21[1];\n" +
    "    low22 = low22[1];\n" +
    "    low23 = low23[1];\n" +
    "    high0 = high0[1];\n" +
    "    high1 = high1[1];\n" +
    "    high2 = high2[1];\n" +
    "    high3 = high3[1];\n" +
    "    high4 = high4[1];\n" +
    "    high5 = high5[1];\n" +
    "    high6 = high6[1];\n" +
    "    high7 = high7[1];\n" +
    "    high8 = high8[1];\n" +
    "    high9 = high9[1];\n" +
    "    high10 = high10[1];\n" +
    "    high11 = high11[1];\n" +
    "    high12 = high12[1];\n" +
    "    high13 = high13[1];\n" +
    "    high14 = high14[1];\n" +
    "    high15 = high15[1];\n" +
    "    high16 = high16[1];\n" +
    "    high17 = high17[1];\n" +
    "    high18 = high18[1];\n" +
    "    high19 = high19[1];\n" +
    "    high20 = high20[1];\n" +
    "    high21 = high21[1];\n" +
    "    high22 = high22[1];\n" +
    "    high23 = high23[1];\n" +
    "    state = state.run;\n" +
    "}\n" +
    "def xhigh = if (hour == 0) then (pdLow + high0) else\n" +
    "if (hour == 1) then (pdLow + high1) else\n" +
    "if (hour == 2) then (pdLow + high2) else\n" +
    "if (hour == 3) then (pdLow + high3) else\n" +
    "if (hour == 4) then (pdLow + high4) else\n" +
    "if (hour == 5) then (pdLow + high5) else\n" +
    "if (hour == 6) then (pdLow + high6) else\n" +
    "if (hour == 7) then (pdLow + high7) else\n" +
    "if (hour == 8) then (pdLow + high8) else\n" +
    "if (hour == 9) then (pdLow + high9) else\n" +
    "if (hour == 10) then (pdLow + high10) else\n" +
    "if (hour == 11) then (pdLow + high11) else\n" +
    "if (hour == 12) then (pdLow + high12) else\n" +
    "if (hour == 13) then (pdLow + high13) else\n" +
    "if (hour == 14) then (pdLow + high14) else\n" +
    "if (hour == 15) then (pdLow + high15) else\n" +
    "if (hour == 16) then (pdLow + high16) else\n" +
    "if (hour == 17) then (pdLow + high17) else\n" +
    "if (hour == 18) then (pdLow + high18) else\n" +
    "if (hour == 19) then (pdLow + high19) else\n" +
    "if (hour == 20) then (pdLow + high20) else\n" +
    "if (hour == 21) then (pdLow + high21) else\n" +
    "if (hour == 22) then (pdLow + high22) else\n" +
    "if (hour == 23) then (pdLow + high23) else\n" +
    "Double.NaN;\n" +
    "def mhigh = if (hour == 0) then (pdLow + (high0 + low0) / 2) else\n" +
    "if (hour == 1) then (pdLow + (high1 + low1) / 2) else\n" +
    "if (hour == 2) then (pdLow + (high2 + low2) / 2) else\n" +
    "if (hour == 3) then (pdLow + (high3 + low3) / 2) else\n" +
    "if (hour == 4) then (pdLow + (high4 + low4) / 2) else\n" +
    "if (hour == 5) then (pdLow + (high5 + low5) / 2) else\n" +
    "if (hour == 6) then (pdLow + (high6 + low6) / 2) else\n" +
    "if (hour == 7) then (pdLow + (high7 + low7) / 2) else\n" +
    "if (hour == 8) then (pdLow + (high8 + low8) / 2) else\n" +
    "if (hour == 9) then (pdLow + (high9 + low9) / 2) else\n" +
    "if (hour == 10) then (pdLow + (high10 + low10) / 2) else\n" +
    "if (hour == 11) then (pdLow + (high11 + low11) / 2) else\n" +
    "if (hour == 12) then (pdLow + (high12 + low12) / 2) else\n" +
    "if (hour == 13) then (pdLow + (high13 + low13) / 2) else\n" +
    "if (hour == 14) then (pdLow + (high14 + low14) / 2) else\n" +
    "if (hour == 15) then (pdLow + (high15 + low15) / 2) else\n" +
    "if (hour == 16) then (pdLow + (high16 + low16) / 2) else\n" +
    "if (hour == 17) then (pdLow + (high17 + low17) / 2) else\n" +
    "if (hour == 18) then (pdLow + (high18 + low18) / 2) else\n" +
    "if (hour == 19) then (pdLow + (high19 + low19) / 2) else\n" +
    "if (hour == 20) then (pdLow + (high20 + low20) / 2) else\n" +
    "if (hour == 21) then (pdLow + (high21 + low21) / 2) else\n" +
    "if (hour == 22) then (pdLow + (high22 + low22) / 2) else\n" +
    "if (hour == 23) then (pdLow + (high23 + low23) / 2) else\n" +
    "Double.NaN;\n" +
    "plot nhigh = if (hour == 0) then (pdLow + low0) else\n" +
    "if (hour == 1) then (pdLow + low1) else\n" +
    "if (hour == 2) then (pdLow + low2) else\n" +
    "if (hour == 3) then (pdLow + low3) else\n" +
    "if (hour == 4) then (pdLow + low4) else\n" +
    "if (hour == 5) then (pdLow + low5) else\n" +
    "if (hour == 6) then (pdLow + low6) else\n" +
    "if (hour == 7) then (pdLow + low7) else\n" +
    "if (hour == 8) then (pdLow + low8) else\n" +
    "if (hour == 9) then (pdLow + low9) else\n" +
    "if (hour == 10) then (pdLow + low10) else\n" +
    "if (hour == 11) then (pdLow + low11) else\n" +
    "if (hour == 12) then (pdLow + low12) else\n" +
    "if (hour == 13) then (pdLow + low13) else\n" +
    "if (hour == 14) then (pdLow + low14) else\n" +
    "if (hour == 15) then (pdLow + low15) else\n" +
    "if (hour == 16) then (pdLow + low16) else\n" +
    "if (hour == 17) then (pdLow + low17) else\n" +
    "if (hour == 18) then (pdLow + low18) else\n" +
    "if (hour == 19) then (pdLow + low19) else\n" +
    "if (hour == 20) then (pdLow + low20) else\n" +
    "if (hour == 21) then (pdLow + low21) else\n" +
    "if (hour == 22) then (pdLow + low22) else\n" +
    "if (hour == 23) then (pdLow + low23) else\n" +
    "Double.NaN;\n" +
    "def xlow = if (hour == 0) then (pdHigh - high0) else\n" +
    "if (hour == 1) then (pdHigh - high1) else\n" +
    "if (hour == 2) then (pdHigh - high2) else\n" +
    "if (hour == 3) then (pdHigh - high3) else\n" +
    "if (hour == 4) then (pdHigh - high4) else\n" +
    "if (hour == 5) then (pdHigh - high5) else\n" +
    "if (hour == 6) then (pdHigh - high6) else\n" +
    "if (hour == 7) then (pdHigh - high7) else\n" +
    "if (hour == 8) then (pdHigh - high8) else\n" +
    "if (hour == 9) then (pdHigh - high9) else\n" +
    "if (hour == 10) then (pdHigh - high10) else\n" +
    "if (hour == 11) then (pdHigh - high11) else\n" +
    "if (hour == 12) then (pdHigh - high12) else\n" +
    "if (hour == 13) then (pdHigh - high13) else\n" +
    "if (hour == 14) then (pdHigh - high14) else\n" +
    "if (hour == 15) then (pdHigh - high15) else\n" +
    "if (hour == 16) then (pdHigh - high16) else\n" +
    "if (hour == 17) then (pdHigh - high17) else\n" +
    "if (hour == 18) then (pdHigh - high18) else\n" +
    "if (hour == 19) then (pdHigh - high19) else\n" +
    "if (hour == 20) then (pdHigh - high20) else\n" +
    "if (hour == 21) then (pdHigh - high21) else\n" +
    "if (hour == 22) then (pdHigh - high22) else\n" +
    "if (hour == 23) then (pdHigh - high23) else\n" +
    "Double.NaN;\n" +
    "def mlow = if (hour == 0) then (pdHigh - (high0 + low0) / 2) else\n" +
    "if (hour == 1) then (pdHigh - (high1 + low1) / 2) else\n" +
    "if (hour == 2) then (pdHigh - (high2 + low2) / 2) else\n" +
    "if (hour == 3) then (pdHigh - (high3 + low3) / 2) else\n" +
    "if (hour == 4) then (pdHigh - (high4 + low4) / 2) else\n" +
    "if (hour == 5) then (pdHigh - (high5 + low5) / 2) else\n" +
    "if (hour == 6) then (pdHigh - (high6 + low6) / 2) else\n" +
    "if (hour == 7) then (pdHigh - (high7 + low7) / 2) else\n" +
    "if (hour == 8) then (pdHigh - (high8 + low8) / 2) else\n" +
    "if (hour == 9) then (pdHigh - (high9 + low9) / 2) else\n" +
    "if (hour == 10) then (pdHigh - (high10 + low10) / 2) else\n" +
    "if (hour == 11) then (pdHigh - (high11 + low11) / 2) else\n" +
    "if (hour == 12) then (pdHigh - (high12 + low12) / 2) else\n" +
    "if (hour == 13) then (pdHigh - (high13 + low13) / 2) else\n" +
    "if (hour == 14) then (pdHigh - (high14 + low14) / 2) else\n" +
    "if (hour == 15) then (pdHigh - (high15 + low15) / 2) else\n" +
    "if (hour == 16) then (pdHigh - (high16 + low16) / 2) else\n" +
    "if (hour == 17) then (pdHigh - (high17 + low17) / 2) else\n" +
    "if (hour == 18) then (pdHigh - (high18 + low18) / 2) else\n" +
    "if (hour == 19) then (pdHigh - (high19 + low19) / 2) else\n" +
    "if (hour == 20) then (pdHigh - (high20 + low20) / 2) else\n" +
    "if (hour == 21) then (pdHigh - (high21 + low21) / 2) else\n" +
    "if (hour == 22) then (pdHigh - (high22 + low22) / 2) else\n" +
    "if (hour == 23) then (pdHigh - (high23 + low23) / 2) else\n" +
    "Double.NaN;\n" +
    "plot nlow = if (hour == 0) then (pdHigh - low0) else\n" +
    "if (hour == 1) then (pdHigh - low1) else\n" +
    "if (hour == 2) then (pdHigh - low2) else\n" +
    "if (hour == 3) then (pdHigh - low3) else\n" +
    "if (hour == 4) then (pdHigh - low4) else\n" +
    "if (hour == 5) then (pdHigh - low5) else\n" +
    "if (hour == 6) then (pdHigh - low6) else\n" +
    "if (hour == 7) then (pdHigh - low7) else\n" +
    "if (hour == 8) then (pdHigh - low8) else\n" +
    "if (hour == 9) then (pdHigh - low9) else\n" +
    "if (hour == 10) then (pdHigh - low10) else\n" +
    "if (hour == 11) then (pdHigh - low11) else\n" +
    "if (hour == 12) then (pdHigh - low12) else\n" +
    "if (hour == 13) then (pdHigh - low13) else\n" +
    "if (hour == 14) then (pdHigh - low14) else\n" +
    "if (hour == 15) then (pdHigh - low15) else\n" +
    "if (hour == 16) then (pdHigh - low16) else\n" +
    "if (hour == 17) then (pdHigh - low17) else\n" +
    "if (hour == 18) then (pdHigh - low18) else\n" +
    "if (hour == 19) then (pdHigh - low19) else\n" +
    "if (hour == 20) then (pdHigh - low20) else\n" +
    "if (hour == 21) then (pdHigh - low21) else\n" +
    "if (hour == 22) then (pdHigh - low22) else\n" +
    "if (hour == 23) then (pdHigh - low23) else\n" +
    "Double.NaN;\n" +
    "nlow.SetPaintingStrategy(PaintingStrategy.LINE);\n" +
    "nlow.SetDefaultColor(Color.GRAY);\n" +
    "nlow.SetStyle(Curve.SHORT_DASH);\n" +
    "nhigh.SetPaintingStrategy(PaintingStrategy.LINE);\n" +
    "nhigh.SetDefaultColor(Color.GRAY);\n" +
    "nhigh.SetStyle(Curve.SHORT_DASH);\n" +
    "AddCloud(mhigh, xhigh, Color.LIGHT_RED, Color.LIGHT_RED, showBorderOnCloud);\n" +
    "AddCloud(mlow, xlow, Color.LIGHT_GREEN, Color.LIGHT_GREEN, showBorderOnCloud);\n" +
    "Alert(alertsOn and low <= mlow, \"HPMR Long Entry Trigger\", Alert.ONCE, Sound.Ring);\n" +
    "Alert(alertsOn and high >= mhigh, \"HPMR Short Entry Trigger\", Alert.ONCE, Sound.Ring);";