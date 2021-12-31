#!/usr/bin/env node
import * as thinkCode from "./codes.js";
import { CLIArguments, HelpText } from "./models.js";
import { parseHpmrCsv } from "./functions.js";
import gatherVariables from "./prompts.js";
let code = {};
let args = {};
let argIdx = 2;
while (argIdx < process.argv.length) {
    try {
        switch (process.argv[argIdx]) {
            case CLIArguments.File:
                args.source = process.argv[++argIdx];
                break;
            case CLIArguments.Symbol:
                if (!args.symbols)
                    args.symbols = [];
                args.symbols.push(process.argv[++argIdx]);
                break;
            case CLIArguments.GenerateAll:
                args.generateAll = true;
                break;
            case CLIArguments.GenerateSection:
                args.generateAll = false;
                break;
            case CLIArguments.OutputFile:
                args.output = process.argv[++argIdx];
                break;
            case CLIArguments.UseStdOut:
                args.useStdOut = true;
                break;
            case CLIArguments.Help:
            case CLIArguments.Help2:
            case CLIArguments.Help3:
                process.stdout.write(HelpText);
                process.exit(0);
                break;
            default:
                process.stderr.write("Unrecognized command-line argument " + process.argv[argIdx]);
                process.exit(-1);
        }
    }
    catch (e) {
        process.stderr.write(JSON.stringify(e));
        process.exit(-1);
    }
    argIdx++;
}
/*
TODO: Maybe for version 2.0
const target = "https://component.autochartist.com/va/resources/results/trumpet_results?broker_id=24&locale=en&timezone=America/Chicago&account_type=LIVE&user=2787&token=" + process.env.TOKEN;

const init: HPMRResponse = await fetchHPMR(target);

let data = init;
let next;

do {
    if (next) data = await fetchHPMR(next);
    for (let itm of data.items) {
        let hpmrData = await getHpmrCsv(itm);
        if (!hpmrData || hpmrData.length === 0) continue;
        code[itm.data.symbol] = <[HourlyMovementData]>hpmrData;
    }
} while ((next = getNextLink(data.page)) !== null);
*/
// TODO: begin version 1.0-only code
let vars = await gatherVariables(args);
if (!vars.filename)
    throw "No source CSV file provided.";
let thinkScript = '';
if (vars.createFullScript) {
    thinkScript = thinkCode.begin;
}
let hpmrData = await parseHpmrCsv(vars.filename);
if (!hpmrData || hpmrData.length === 0) {
    throw "Invalid CSV provided.";
}
code[vars.symbol1] = hpmrData;
// TODO: end version 1.0-only code
for (let [symbol, data] of Object.entries(code)) {
    // TODO: fix symbols
    let scriptAdd = `    if (GetSymbol() == "${symbol}")`;
    if (vars.symbol2.length > 0)
        scriptAdd += ` or (GetSymbol() == "${vars.symbol2}")`;
    scriptAdd += `\n    then {\n`;
    for (let valueSet of data) {
        scriptAdd += `        low${valueSet.hour} = ${valueSet.low}\n        high${valueSet.hour} = ${valueSet.high}\n`;
    }
    scriptAdd += "    } else\n";
    thinkScript += scriptAdd;
}
if (vars.createFullScript) {
    thinkScript += thinkCode.end;
}
if (vars.useStdOut) {
    process.stdout.write(thinkScript);
}
else if (vars.outFd) {
    vars.outFd.write(thinkScript);
    vars.outFd.close();
}
