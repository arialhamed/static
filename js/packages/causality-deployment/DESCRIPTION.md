## causal-net.deployment 

This package provides:

### causalNetDeployment

The implementation for event-based model deployment which is supplied to pipeline class instance as **Deployment** attribute. Pipeline class must be mixed with DeploymentMixins.

[EXAMPLE ./examples/causalNetDeployment.babel.js]

### DeploymentMixins

This mixin class provides attributes: **Deployment**, **Inferencer**, and handle Deployment setting of pipelineConfig.
[EXAMPLE ./examples/deployment.mixins.babel.js]