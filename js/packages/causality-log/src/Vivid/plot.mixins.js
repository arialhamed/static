const PlotMixins = (BaseLogClass)=> class extends BaseLogClass{
    connect(target){
        if(super.connect){
            super.connect(target);
        }
        this.Plot.connect(target);
    }

    set Plot(plot){
        this.plotter = plot;
    }
    get Plot(){
        if(!this.plotter){
            throw Error('Plot is not set');
        }
        return this.plotter;
    }
};
export default PlotMixins;