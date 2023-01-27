const ColorTransformingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    
    colorTransform(tranformFn, sampleBuffer, channelSize){
        const R = this.R;
        return R.flatten(R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer)));
    }
    /**
     * Transform color image to black on white image. This function also reduce chanel to 1.
     * @param { Array|Buffer } sampleBuffer
     * @param { Number } channelSize
     * @return { Array } image data after transform
     */
    blackWhiteTransform(sampleBuffer){
        const BlackWhiteFn = (pixel)=>{
            let pixelValue = (pixel[0] + pixel[1] +pixel[2])/3;
            return ~~pixelValue;
        };
        return this.colorTransform(BlackWhiteFn, sampleBuffer, 4);
    }

    oneBitTransform(sampleBuffer){
        const BlackWhiteFn = (pixel)=>{
            let pixelValue = (pixel[0] + pixel[1] +pixel[2])/3;
            return pixelValue>127?1:0;
        };
        return this.colorTransform(BlackWhiteFn, sampleBuffer, 4);
    }
};

export default ColorTransformingMixins;