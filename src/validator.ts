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
      props: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            required: { type: "boolean", nullable: true },
            value: { type: "string", nullable: true }
          },
          required: ["name"],
        },
        nullable: true
      },
      children: { $ref: "#/definitions/" },
    },
    required: ["name", "package"],
  },
  additionalProperties: false
};

export default ajv.compile(schema);
