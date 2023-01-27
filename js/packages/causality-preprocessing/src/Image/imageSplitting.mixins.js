const ImageSplittingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    /**
     * Split image into sub images based on split size
     * @param { Array|Buffer } sampleBuffer - original image
     * @param { Number } splitSize - positive number
     * @returns { Array } - array of sub image
     */
    imageSplit(sampleBuffer, splitSize){
        return this.R.splitEvery(splitSize, sampleBuffer);
    }
};

export default ImageSplittingMixins;