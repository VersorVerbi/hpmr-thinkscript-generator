# hpmr-thinkscript-generator
 Given a CSV file and a symbol, generates a thinkScript that shows hourly price movement ranges (HPMR)

# How to Use
First make sure you have [Node.js](https://nodejs.org/en/) installed on your device, then follow instructions below to use this program.

First, download the release ZIP and unzip it. Then open that folder in your command-line prompt.
### Windows
Use `node hpmr.js` at the command line to run the program.
### MacOS, Linux
Use `csv2thinkScript` at the command line to run the program.
### Any OS
If you add the downloaded folder to your PATH, you can do this anywhere and use relative file paths for the other files you'll use with the program.

Run the program with no arguments to be prompted for each required piece of data. You will also be prompted for each piece of data that is not included in any given arguments. To provide arguments, use the following options:

| Option | Explanation |
| ------ | ----------- |
| `-h`, `--help`, `-?` | Show help text, then quit |
|`-f [filename]`|Use the given path as the source CSV file (if the path is invalid, you will be prompted)|
|`-s [symbol]`|Use the given symbol (provide max 2, precede each with `-s`)|
|`-o [filename]`|Use the given path as the output TXT file (if the path is invalid, you will be prompted)|
|`-so`|Display output to the screen instead of expecting a text file|
|`-g`|Generate the entire thinkScript file|
|`-m`|Generate only the if-clause needed for this symbol to add to an existing script|