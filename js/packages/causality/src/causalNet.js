import { DataSourceMixins } from 'causal-net.datasets';
import { PreprocessingMixins, causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { TrainerMixins, EvaluatorMixins } from 'causal-net.optimizers';
import { ModelMixins } from 'causal-net.models';
import { causalNetRunner, LayerRunnerMixins } from 'causal-net.layer';
import { Tensor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { causalNetDeployment, DeploymentMixins } from 'causal-net.deployment';
import { termLogger, LoggerMixins } from 'causal-net.log';
import { default as functor } from './functor';
import { EnsembleTrainerMixins, EnsembleModelMixins, EnsembleDeploymentMixins } from './Ensemble/index';

/**
 * The CausalNet class is the prebuilt pipeline with methods for 
 * processing data/train/evaluate/deploy/ensemble deploy
 * { mixWith: [ 
 *         DataSourceMixins,
 *         PreprocessingMixins,
 *         LayerRunnerMixins, 
 *         ModelMixins, 
 *         EvaluatorMixins,
 *         TrainerMixins, 
 *         LoggerMixins,
 *         DeploymentMixins,
 *         EnsembleTrainerMixins,
 *         EnsembleModelMixins, 
 *         EnsembleDeploymentMixins ] }
 * @class CausalNet
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNet/ensemble.logisticRegression.babel.js]
 */
class CausalNet extends platform.mixWith(Tensor, [ 
        DataSourceMixins,
        PreprocessingMixins,
        LayerRunnerMixins, 
        ModelMixins, 
        EvaluatorMixins,
        TrainerMixins, 
        LoggerMixins,
        DeploymentMixins,
        EnsembleTrainerMixins,
        EnsembleModelMixins, 
        EnsembleDeploymentMixins ]){
    /**
     *Creates an instance of CausalNet.
     * @param { Functor } functor
     * @param { Log } logger
     * @param { Functor } streamPreprocessing
     * @param { Tensor } netParameters
     * @param { Tensor } netRunner
     * @param { Event } streamDeployment
     * @memberof CausalNet
     */
    constructor( functor, logger, streamPreprocessing, netRunner, streamDeployment){
        super();
        this.F = functor;
        this.R = this.F.CoreFunctor;
        this.Logger = logger;
        this.Preprocessing = streamPreprocessing;
        this.LayerRunner = netRunner;        
        this.Deployment = streamDeployment;
    }
}

export default new  CausalNet(  functor, 
                                termLogger, 
                                causalNetPreprocessingStream, 
                                causalNetRunner, 
                                causalNetDeployment );