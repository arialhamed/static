import { resolve } from "path";

const VividWebMixins = (BaseVividClass)=> class extends BaseVividClass{
    connect(target){
        console.log(target);
        if(typeof target === 'string' && target.startsWith('#')){
            this.d3n = this.d3.select(target);
            let { width } = this.d3n.node().getBoundingClientRect();
            this.DefaultWidth = width - 40;
            this.DefaultWidth = width*0.8;
        }
        else{
            throw Error(`cannot connect to ${target}`);
        }
    }

    makeSVGnode({width, height}){
        return this.d3n.append('svg').attr('width', width).attr('height', height);
    }

    makeCanvasNode({width, height}){
        return this.d3n.append('canvas').attr('width', width).attr('height', height);
    }

    json2css(objectStyle){
        let cssString = Object.entries(objectStyle).reduce((acc1, cur1) => {
                return `${acc1}\n\n${cur1[0]} ` + 
                    Object.keys(cur1[1])
                        .reduce((acc2, cur2) => 
                            `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}';
            }, '');
        
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = cssString;
        document.getElementsByTagName('head')[0].appendChild(style);
        return cssString;
    }

    async show(option={plotId:'new plot'}){
        let {plotId} = option;
        //TODO: remove if not need
        return new Promise((resolve, reject)=>{
            resolve(plotId);
        });
    }
};
export default VividWebMixins;