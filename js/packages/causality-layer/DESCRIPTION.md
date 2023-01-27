## causal-net.layer

This module provides:

### CausalNetLayers

This class provides common used layers which can be accessed via **causalNetLayers** instance.

[EXAMPLE ./examples/dense.layer.js]

### CausalNetParameters

This class is a standard implementation for model parameters which can be accessed via **causalNetParameters** instance

[EXAMPLE ./examples/parameters.babel.js]

### CausalNetRunner

This CausalNetRunner class provide a standard net excecutor which is provided pipeline instance at **LayerRunner** attribute.

[EXAMPLE ./examples/runner.babel.js]

### LayerRunnerMixins

This mixin class provide attributes: **ParameterInitializer**, **LayerRunner**, and handle **Net** setting of pipelineConfig.

[EXAMPLE ./examples/layerRunner.mixins.babel.js]