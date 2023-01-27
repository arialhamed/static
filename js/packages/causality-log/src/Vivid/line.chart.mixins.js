const LineChartMixins = (BasePlotClass)=> class extends BasePlotClass{
    line({data, title, xRange, yRange, xLabel, yLabel, style, width, height, plotId}){
        const d3 = this.d3;
        style = style!==undefined?style:{};
        const defaultStyle = {'.line':{ fill: 'none', 'stroke-width': '2px'}};
        style = Object.assign({}, defaultStyle, style);
        let kwdata = Array.isArray(data)?
                data.map((d,ith)=>[...(Array.isArray(d))?d:[ith,d],'data']):
                Object.entries(data).reduce((s,[k, data])=>[...s, 
                    ...data.map((d,ith)=>[...(Array.isArray(d))?d:[ith,d], k])],[]);
        var { svg, xMap, yMap, color } = 
            this.basePlot({kwdata, title, xRange, yRange, xLabel, yLabel, style, width, height});
        var lineGenerator = d3.line()
                .x(function(d) { 
                    return xMap(d[0]); 
                }) 
                .y(function(d) { 
                    return yMap(d[1]); 
                }) 
                .curve(d3.curveMonotoneX) ;
        
        let byName = d3.nest().key(([x,y,name]) => name).entries(kwdata);
        svg.selectAll(".line-groups")
            .data(byName).enter().append("g")
            .attr('class','.line-groups')
            .attr("id", (d)=>d.key)
            .selectAll("path").data((d)=>[d]).enter()
            .append("path").attr("class", "line")
            .attr('stroke', (d)=>color(d.key))
            .attr("d", (d)=>lineGenerator(d.values));
        svg.selectAll(".dot")
            .data(kwdata)
            .enter().append("circle") // Uses the enter().append() method
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", function([x,y]) { return xMap(x); })
            .attr("cy", function([x,y]) { return yMap(y); })
            .attr("fill", function([x,y,name]) { return color(name); })
            .attr("r", 5);
        title = title?title:'unname';
        plotId = plotId?plotId:title.replace(/\s/g,'_') + '.png';
        return plotId;
    }
};

export default LineChartMixins;