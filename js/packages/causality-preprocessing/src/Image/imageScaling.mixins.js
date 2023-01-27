import { default as BoxScaling } from './boxScaling';
const ImageScalingMixins = (PreprocessingClass) => class extends PreprocessingClass{
    /**
     * scaling image from origin size to new size, image chanel must be 4
     * @param { Array|Buffer } sampleBuffer - original image
     * @param { Array } originSize - originize of image [weight, height]
     * @param { Array } newSize - new size of image [weight, height]
     * @returns { Array } - array of sub image
     */
    imageResize(sampleBuffer, originSize, newSize){
        sampleBuffer = Buffer.from(sampleBuffer);
        return BoxScaling(sampleBuffer, originSize, newSize);
    }
};

export default ImageScalingMixins;