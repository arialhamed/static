import assert from 'assert';
import * as generateSchema from 'generate-schema';
import * as Validator from 'ajv';
/**
 * This Assert class provides asserting methods based on builtin 
 * [generate-schema](https://www.npmjs.com/package/generate-schema), 
 * and schema checking [ajv](https://www.npmjs.com/package/ajv) 
 *
 * @class Assert
 * @example
 * [EXAMPLE ../examples/assert.babel.js]
 */
class Assert{
    /**
     *Creates an instance of assert.
     * @memberof assert
     */
    constructor(assert, generateSchema, Validator){
        /** 
         * @private 
         * @type { Object } assert
        */
        this.assert = assert;
        this.generateSchema = generateSchema;
        this.Validator = Validator;
    }
    /**
     * Try to check if the sample pattern matchs with input value pattern. 
     * Since the auto-learnt sample pattern could be incompleted, 
     * this function usage should follow the examples.
     * @param { Any } value - input value
     * @param { Any } sample - sample value pattern
     * @param { String } [name='sample'] - value name
     * @memberof assert
     */
    seemMatchSample(value, sample, name='sample'){
        let schema = generateSchema.json(name, sample);
        delete schema.$schema;
        let validator = new Validator(); 
        let valid = validator.addSchema(schema, name).validate(name, value);
        if(!valid){ 
            throw Error(`value ${JSON.stringify(value)} not match schema \n${JSON.stringify(schema)}`);
        }
    }
    /**
     * assert object to be instance of class
     * @param { Object } instance
     * @param { Class } targetClass
     * @memberof assert
     */
    beInstanceOf(instance, targetClass){
        if(targetClass === String){
            if(typeof(instance) !== 'string'){
                throw Error(`${JSON.stringify(instance)} must be type of ${targetClass.name}`);
            }
        }
        if(targetClass === Function){
            if(typeof(instance) !== 'function'){
                throw Error(`${JSON.stringify(instance)} must be type of ${targetClass.name}`);
            }
        }
        else if(!(instance instanceof targetClass)){
            throw Error(`${JSON.stringify(instance)} must be instance of ${targetClass.name}`);
        }
    }
} 

export default new Assert(assert, generateSchema, Validator);