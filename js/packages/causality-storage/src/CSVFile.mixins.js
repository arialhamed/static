import { csvUtils } from 'causal-net.utils';
/** 
 * This CSVFileMixins class provide mixins for handle read/write/fetch csv content
 * @class CSVFileMixins
 * @experiment
 * @extends { StorageClass } 
 */
const CSVFileMixins = (StorageClass)=> class extends StorageClass{
    /**
     * Read CSV content as item array given the file path
     * @param { String } filePath - full file path 
     * @returns { Promise } Array content promise 
     */
    async readCSVFile(filePath){
        return await this.readFile(filePath);
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeCSVFile(filePath, parsedData){
        return await this.writeFile(filePath, parsedData);
    }

    /**
     * fetch CSV file, transform to get raw pixel data and save to file at the filePath
     * @param { Url } url - url for png file
     * @param { String } filePath - file name to save content
     * @returns { Promise } Array content promiser 
     */
    async fetchCSVFile(url, filePath){
        let data = await csvUtils.fetchCSV(url);
        return await this.writePNGFile(filePath, data);
    }
};
export default CSVFileMixins;
    