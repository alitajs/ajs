import Ajv, { JSONSchemaType } from "ajv";
import type { ComponentSchema } from "./Schema";

const ajv = new Ajv()

const schema: JSONSchemaType<ComponentSchema[]> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      package: { type: "string" },
      description: { type: "string", nullable: true },
      uuid: { type: "string", nullable: true },
      visibleOn: { type: "string", nullable: true },
      actions: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            value: { type: "string" }
          },
          required: ["name", "value"],
        },
        nullable: true
      },
      props: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            isOptional: { type: "boolean", nullable: true },
            value: { type: "string", nullable: true }
          },
          required: ["name"],
        },
        nullable: true
      },
      className: { type: "string", nullable: true },
      childrens: { $ref: "#/definitions/" },
      style: { type: "object", nullable: true }
    },
    required: ["name", "package"],
  },
  additionalProperties: false
};

export default ajv.compile(schema);
