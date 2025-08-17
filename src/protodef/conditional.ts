import { TSType } from "../ts/tstype.js";
import type { Ctx } from "./ctx.js";
import { protoDefToType } from "./index.js";
import type { ProtoDefinition } from "./protodef.js";

export const protoDefSwitch = (args: ProtoDefinition.SwitchArgs, ctx: Ctx) => {
    const { compareTo, fields, default: defaultType } = args;

    const availableTypes: TSType[] = [];

    for(let value in fields) {
        availableTypes.push(TSType.If({
            field: compareTo,
            equals: value,
            type: protoDefToType(fields[value]!, ctx),
        }));
    }

    if(defaultType && defaultType !== "void") {
        availableTypes.push(TSType.If({
            field: compareTo,
            type: protoDefToType(defaultType, ctx),
        }));
    }

    return TSType.Union(availableTypes);
};
