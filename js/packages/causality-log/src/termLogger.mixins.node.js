import * as cliProgress from 'cli-progress';

const LogNodeMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        this.currentBar = false;
    }
    log(message){
        //TODO: make decorator 
        this.currentBar = false;
        if(this.level >= this.AcceptedLevels['log']){
            return null;
        }
        console.log(message);
    }
    plot(data){
        const Plot = this.Plot;
        if(!data.type){
            throw Error(`plot type is not defined in ${JSON.stringify(data)}`);
        }
        let { plotId } = data;
        if(!plotId){
            this.plotCounter = this.plotCounter!==undefined?this.plotCounter+1:0;
            plotId = `plot-${this.plotCounter}`;
            data.plotId = plotId;
        }
        Plot[data.type](data);
        return plotId;
    }
    
    async show(option={}){
        let {plotId} = option;
        return await this.Plot.show(option);
    }

    progressBegin(range){
        this.processCounter += 1;
        this.currentBar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);
        this.currentBar.setTotal(range);
    }
    progressUpdate(progressMessage){
        if(!this.currentBar){
            this.progressBegin();
        }
        this.processCounter += 1;
        this.currentBar.update(this.processCounter);
    }
    progressEnd(){
        this.currentBar.stop();
        this.processCounter = 0;
    }
    debug(message){
        
        if(this.level >= this.AcceptedLevels['debug']){
            return null;
        }
        console.debug(message);
    }

    warn(message){
        
        if(this.level >= this.AcceptedLevels['warn']){
            return null;
        }
        console.warn(message);
    }

    error(message){
        
        if(this.level >= this.AcceptedLevels['error']){
            return null;
        }
        console.error(message);
    }
};

export default LogNodeMixins;