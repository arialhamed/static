import { fetch } from 'causal-net.utils';
const TextFileMixins = (StorageClass)=> class extends StorageClass{
    
    /**
     * @param  {} filePath
     */
    async readFile(filePath){
        filePath = this.correctName(filePath);
        let item = await this.getItem(filePath);
        return item[filePath];
    }
    /**
     * @param  {} filePath
     * @param  {} data
     */
    async writeFile(filePath, data){
        filePath = this.correctName(filePath);
        return await this.setItem(filePath, data);
    }

    async deleteFile(filePath){
        filePath = this.correctName(filePath);
        return await this.delItem(filePath);
    }

    async fetchFile(url, filePath){
        filePath = this.correctName(filePath);
        let response = await fetch.fetchData(url);
        return await this.writeFile(filePath, response);
    }
};
export default TextFileMixins;