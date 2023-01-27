## causal-net.optimizers
This causal-net.optimizer provides: 

### CausalNetSGDOptimizer

This class provides optimizing methods which can be accessed via **causalNetSGDOptimizer** instance.

[EXAMPLE ./examples/causalNetSGDOptimizers.babel.js]

### TrainerMixins

This mixin class provides attributes: **Optimizer**, **Trainer**, **TrainDataGenerator**, methods **train**, handle **Optimizer** setting of pipelineConfig.Net and **TrainDataGenerator** setting of pipelineConfig.Dataset.
[EXAMPLE ./examples/trainer.mixins.babel.js]

### EvaluatorMixins

This mixin class provides methods: **test** and handle **TestDataGenerator** setting of pipelineConfig.Dataset.