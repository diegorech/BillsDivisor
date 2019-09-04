const Joi = require('@hapi/joi')

const userValidation = data => {
    const schema = {
        name: Joi.string().alphanum().min(4).max(14).required(),
        email: Joi.string().min(6).email({ minDomainSegments: 2 }),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data, schema)
}

module.exports.userValidation = userValidation