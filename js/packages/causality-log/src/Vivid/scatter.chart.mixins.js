const ScatterChartMixins = (BasePlotClass)=> class extends BasePlotClass{
    scatter({data, title, xRange, yRange, xLabel, yLabel, style, width, height, plotId}){
        let kwdata = Array.isArray(data)?
                data.map(d=>[...d,'data']):
                Object.entries(data).reduce((s,[k, data])=>[...s, ...data.map(d=>[...d, k])],[]);
        let { svg, xMap, yMap, color } = 
            this.basePlot({kwdata, title, xRange, yRange, xLabel, yLabel, style, width, height});
        svg.selectAll("circle")
            .data(kwdata)
            .enter().append("circle")
            .attr("cx", ([x,y, name])=>xMap(x))
            .attr("cy", ([x,y, name])=>yMap(y))
            .attr("r", 5)
            .attr("fill", ([x,y,name])=>color(name));
        title = title?title:'unname';
        plotId = plotId?plotId:title.replace(/\s/g,'_') + '.png';
        return plotId;
    }
};

export default ScatterChartMixins;