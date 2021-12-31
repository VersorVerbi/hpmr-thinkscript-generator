import type {WriteStream} from "fs";
import fs from "fs";
import type {RevalidatorSchema} from "prompt";
import prompt from "prompt";

export default async function gatherVariables(args?: { source?: string, output?: string, symbols?: string[], generateAll?: boolean, useStdOut?: boolean }) {
    let vars: { filename: string | null, symbol1: string, symbol2: string, createFullScript: boolean | null, outFd: WriteStream | null, useStdOut: boolean } = {
        filename: null,
        symbol1: '',
        symbol2: '',
        createFullScript: null,
        outFd: null,
        useStdOut: false
    }

    prompt.start({ message: 'hpmr' });

    let promptProps: { properties: { filename?: RevalidatorSchema, symbols?: RevalidatorSchema, fullScript?: RevalidatorSchema, outPath?: RevalidatorSchema }} = { properties: {} };
    if (args?.source) {
        if (!validateSourceFile(args.source)) {
            process.stderr.write("Invalid file path given for source CSV file in command-line arguments");
            promptProps.properties.filename = sourceFileProp;
        } else {
            vars.filename = args.source;
        }
    } else promptProps.properties.filename = sourceFileProp;

    if (args?.generateAll === undefined) {
        //@ts-ignore
        promptProps.properties.fullScript = fullScriptProp;
    } else {
        vars.createFullScript = args.generateAll;
    }

    if (args?.symbols) {
        if (args.symbols.length === 0) {
            process.stderr.write("Command-line arguments did not include any symbols");
            //@ts-ignore
            promptProps.properties.symbols = symbolsProp;
        } else {
            vars.symbol1 = args.symbols[0];
            if (args.symbols[1]) vars.symbol2 = args.symbols[1];
        }
    } else { //@ts-ignore
        promptProps.properties.symbols = symbolsProp;
    }

    if (args?.output) {
        if (!validateOutFile(args.output)) {
            process.stderr.write("Invalid file path given for output TXT file in command-line arguments");
            promptProps.properties.outPath = outPathProp;
        } else {
            vars.outFd = fs.createWriteStream(args.output);
        }
    } else if (!args?.useStdOut) promptProps.properties.outPath = outPathProp;

    let results = await prompt.get(promptProps);
    //@ts-ignore
    if (results.symbols) vars.symbol1 = results.symbols.one;
    //@ts-ignore
    if (results.symbols) vars.symbol2 = results.symbols.two;
    //@ts-ignore
    if (results.filename) vars.filename = results.filename;
    if (results.outPath) {
        //@ts-ignore
        vars.outFd = fs.createWriteStream(results.outPath);
    } else if (!vars.outFd) {
        vars.useStdOut = true;
    }
    //@ts-ignore
    vars.createFullScript = results.fullScript;

    return vars;
}

const validateSourceFile = (v: string) => {
    let fd;
    let result = true;
    try {
        fd = fs.createReadStream(v);
        fd.on('error', () => {
            result = false;
        });
        fd.close();
    } catch (e) {
        return false;
    }
    return result;
}

const validateOutFile = (v: string) => {
    let fd;
    let result = true;
    try {
        fd = fs.createWriteStream(v);
        fd.on('error', () => { result = false; });
        fd.close();
    } catch (e) {
        return false;
    }
    return result;
}

const sourceFileProp = {
    description: 'Enter the path to the CSV file you want to use',
    pattern: /^.*\.csv$/,
    conform: validateSourceFile,
    message: "You must provide a valid path to a CSV file.",
    required: true
}

const symbolsProp = {
    properties: {
        one: {
            description: 'Enter symbol(s) to match against for this CSV file [1/2]',
            type: 'string',
            message: 'You must enter at least one symbol',
            required: true
        },
        two: {
            description: 'Enter symbol(s) to match against for this CSV file [2/2]',
            type: 'string',
            required: false
        }
    }
}

const fullScriptProp = {
    description: 'Enter true to generate the entire thinkScript file, or false to generate only the if-clause with your symbol and values',
    type: 'boolean',
    required: true,
    message: 'Please enter t/true or f/false'
}

const outPathProp = {
    description: 'Enter the TXT path where you want the thinkScript to be saved (or enter nothing to print it to the console)',
    conform: validateOutFile,
    message: 'Enter a valid path to a TXT file (we cannot create directories) or nothing',
    required: false
}