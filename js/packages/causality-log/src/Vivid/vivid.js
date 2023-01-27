import * as d3 from 'd3';
import { platform } from 'causal-net.utils';
import { default as LineChartMixins } from './line.chart.mixins';
import { default as ScatterChartMixins } from './scatter.chart.mixins';
import { default as VividWebMixins } from './vivid.mixins.web';
import { default as VividNodeMixins } from './vivid.mixins.node';
class BasePlot{
    constructor(){

    }
    connect(){
        throw Error('implement require');
    }
}
class Vivid extends platform.mixWith(BasePlot, 
        { node: [VividNodeMixins, ScatterChartMixins, LineChartMixins],
           web: [VividWebMixins, ScatterChartMixins, LineChartMixins]}){
    constructor(d3){
        super();
        this.d3 = d3;
        this.DefaultWidth = 900;
        this.DefaultHeight = 600;
        this.defaultStyle = { svg:  {font: '10px sans-serif' },
                              '.label': {'fill': 'white'},
                              '.axis path, .axis line': { fill: 'none',
                                    'stroke': '#000; shape-rendering: crispEdges' },
                              '.dot' : { 'stroke': '#000' } };
    }

    png({data, width, height, title, plotId}){
        let canvas = this.makeCanvasNode({width, height});
        let context = canvas.getContext?canvas.getContext('2d'):canvas.node().getContext("2d");
        let imagedata = context.createImageData(width, height);
        for (var x=0; x<width; x++) {
            for (var y=0; y<height; y++) {
                var pixelindex = (y * width + x) * 4;
                imagedata.data[pixelindex]   = data[pixelindex];
                imagedata.data[pixelindex+1] = data[pixelindex+1];
                imagedata.data[pixelindex+2] = data[pixelindex+2];
                imagedata.data[pixelindex+3] = data[pixelindex+3];
            }
        }
        context.putImageData(imagedata, 0, 0);
        title = title?title:'unname';
        plotId = plotId?plotId:title.replace(/\s/g,'_') + '.png';
        return plotId;
    }

    basePlot({kwdata, width, height, xLabel, yLabel, style}){
        const d3 = this.d3;
        style = style!==undefined?style:{};
        style = Object.assign({}, this.defaultStyle, style);
        let cssStyle = this.json2css(style);
        width  = width?width : this.DefaultWidth;
        height = height?height : this.DefaultHeight;
        const plotMargin = {top: 20, right: 20, bottom: 30, left: 40},
              plotWidth  = width - plotMargin.left - plotMargin.right,
              plotHeight = height - plotMargin.top - plotMargin.bottom;
        
        
        var svg = this.makeSVGnode({width, height, styles: cssStyle});
        
        svg = svg.append("g")
                    .attr("transform", 
                          "translate(" + plotMargin.left + "," + plotMargin.top + ")");
        let xDomain = d3.extent(kwdata, ([xPoint, yPoint, name])=>xPoint);
        let yDomain = d3.extent(kwdata, ([xPoint, yPoint, name])=>yPoint);
        
        var xMap = d3.scaleLinear().range([0, plotWidth]).domain(xDomain);
        var yMap = d3.scaleLinear().range([plotHeight, 0]).domain(yDomain);
        
        var xAxis = d3.axisBottom(xMap);
        var yAxis = d3.axisLeft(yMap);
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        kwdata.map(([x,y,name])=>color(name));
        xLabel = xLabel?xLabel:'x axis';
        yLabel = yLabel?yLabel:'y axis';
        svg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + plotHeight + ")").call(xAxis)
            .append("text").attr("class", "label")
            .attr("x", plotWidth).attr("y", 0).style('fill','white')
            .style("text-anchor", "end").text(xLabel);
        svg.append("g").attr("class", "y axis").call(yAxis)
            .append("text").attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6).attr("dy", ".91em").style('fill','white')
            .style("text-anchor", "end").text(yLabel);
        
        var legend = svg.selectAll(".legend")
            .data(color.domain()).enter()
            .append("g").attr("class", "legend")
            .attr("transform", (d,i)=>"translate(0," + i * 20 + ")");

        legend.append("rect").attr("x", plotWidth - 18).attr("width", 18)
            .attr("height", 18).style("fill", color);

        legend.append("text").attr("x", plotWidth - 24).attr("y", 9)
            .attr("dy", ".35em").style("text-anchor", "end").text(d=>d);
        this.plotStyle = cssStyle;
        return  { svg, xMap, yMap, color };
    }
}
let vivid = new Vivid(d3);
export default vivid;