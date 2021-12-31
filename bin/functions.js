import { LinkRel } from "./models.js";
import { parseFile } from "@fast-csv/parse";
import fetch from "node-fetch";
export const getNextLink = (pageObj) => {
    if (!(pageObj === null || pageObj === void 0 ? void 0 : pageObj.links))
        throw "Improper page object";
    for (let link of pageObj.links) {
        if (link.rel === LinkRel.Next) {
            if (!link.enabled)
                return null;
            else
                return link.href;
        }
    }
    return null;
};
export const getHpmrCsv = (itemObj) => {
    if (!(itemObj === null || itemObj === void 0 ? void 0 : itemObj.links))
        return Promise.reject('Improper item object');
    let fn = '';
    for (let link of itemObj.links) {
        if (link.rel === LinkRel.CSVHourlyMovement) {
            fn = link.href;
        }
    }
    if (fn === '')
        return Promise.reject('No CSV hourly movement link found');
    return parseHpmrCsv(fn);
};
export const parseHpmrCsv = (csvFilename) => {
    return new Promise(resolve => {
        let records = [];
        parseFile(csvFilename, { headers: ['hour', 'low', 'high'], renameHeaders: true })
            .on('error', (err) => console.error(err.message))
            .on('data', row => records.push(row))
            .on('end', () => resolve(records));
    });
};
export const fetchHPMR = (target) => {
    return fetch(target)
        .then(resp => resp.text())
        .then(txtData => {
        try {
            return JSON.parse(txtData);
        }
        catch (e) {
            console.log(txtData);
            throw e;
        }
    })
        .then(jsonData => jsonData);
};
