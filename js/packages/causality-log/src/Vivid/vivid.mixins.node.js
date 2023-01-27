import { default as D3N } from 'vivid.d3-node';
import { default as canvasModule } from 'canvas';
import { default as svg2png } from 'svg2png';
import * as fs from 'fs';
const VividNodeMixins = (BaseVividClass)=> class extends BaseVividClass{
    connect(channel){
        
    }

    async export2png(outputPath){
        const d3n = this.d3plot;
        if (d3n.options.canvas) {
            const canvas = d3n.options.canvas;
            let stream = canvas.pngStream().pipe(fs.createWriteStream(outputPath));
            return new Promise((resolve, reject)=>{
                stream.on('finish', function () { resolve(outputPath); });
            });
        }
        else{
            
            var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
            let buffer = await svg2png(svgBuffer);
            return new Promise((resolve, reject)=>{
                fs.writeFile(outputPath, buffer, (err)=>{
                    if(err){ 
                        reject('error export file'); 
                    }
                    else{
                        resolve(outputPath);
                    }
                }); });
        }
    }

    json2css(objectStyle){
        let cssString = Object.entries(objectStyle).reduce((acc1, cur1) => {
                return `${acc1}\n\n${cur1[0]} ` + 
                    Object.keys(cur1[1])
                        .reduce((acc2, cur2) => 
                            `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}';
            }, '');
        return cssString;
    }

    makeSVGnode({width, height, styles}){
        var options = { styles, canvasModule, d3:this.d3 };
        this.d3plot = new D3N(options);
        return this.d3plot.createSVG(width, height);
    }

    makeCanvasNode({width, height}){
        var options = { styles:'', canvasModule, d3:this.d3 };
        this.d3plot = new D3N(options);
        return this.d3plot.createCanvas(width, height);
    }

    async show(option={}){
        let {plotId} = option;
        this.open = require("open");
        await this.export2png(plotId);
        return await this.open(plotId);
    }
};
export default VividNodeMixins;