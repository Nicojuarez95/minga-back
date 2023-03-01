import Joi from "joi-oid";

const schema_signin = Joi.object({
  mail: Joi.string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
    invalid: "Not an objets",
    }),
  password: Joi
    .string()
    .required()
    .min(8)
    .max(50)
    .messages({
    "string.min": "The name must have at least 3 characteres",
    "string.max": "The name must have a maximum of 20 characteres", 
  })
});

export default schema_signin;