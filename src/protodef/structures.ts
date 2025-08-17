import { indent, lines } from "../codegen.js";
import type { Ctx } from "./ctx.js";
import { protoDefToType } from "./index.js";
import type { ProtoDefinition } from "./protodef.js";

export const protoDefArray = (args: ProtoDefinition.ArrayArgs, ctx: Ctx) => {
    return lines([
        "(",
        indent(protoDefToType(args.type, ctx)),
        ")[]",
    ]);
};

export const protoDefContainer = (args: ProtoDefinition.ContainerArgs, ctx: Ctx) => {
    let output: string[] = [];

    for(let field of args) {
        output.push(`${field.name}: ${protoDefToType(field.type, ctx)};`);
    }

    return lines([
        "{",
        indent(output),
        "}",
    ]);
};



