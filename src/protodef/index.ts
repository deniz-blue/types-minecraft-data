import type { ProtoDefinition } from "./protodef.js";
import { indent, lines } from "../codegen.js";
import { protoDefBasicToType } from "./primitive.js";
import { protoDefBitfield, protoDefBitflags, protoDefMapper } from "./flags.js";
import type { Ctx } from "./ctx.js";
import { protoDefSwitch } from "./conditional.js";
import { protoDefArray, protoDefContainer } from "./structures.js";
import { mcDataCustomProtoDefs } from "./mcdata.js";

function resolvePath(path: string[], compareTo: string): string {
    const parts = compareTo.split("/");
    let cursor = [...path];

    for (const part of parts) {
        if (part === "..") {
            cursor.pop();
        } else if (part === ".") {
            continue;
        } else {
            cursor.push(part);
        }
    }

    return cursor.join(".");
}

export const protoDefToType = (
    type: ProtoDefinition.Type,
    ctx: Ctx,
): string => {
    console.log(type)
    let native = protoDefBasicToType(type);
    if (native) return native;

    if (typeof type == "string" && mcDataCustomProtoDefs[type])
        return mcDataCustomProtoDefs[type];

    if (typeof type == "string") {
        let newType = ctx.resolveType(type);
        if (newType) return newType;
        return `\`$${type}\``;
    }

    const [typeName, args] = type;

    if (typeName == "count") return "unique symbol";
    if (typeName == "option") return protoDefToType(args as ProtoDefinition.Type, ctx) + " | null | undefined";
    if (typeName == "array") return protoDefArray(args, ctx);
    if (typeName === "switch") return protoDefSwitch(args, ctx);
    if (typeName === "container") return protoDefContainer(args, ctx);
    if (typeName == "bitfield") return protoDefBitfield(args);
    if (typeName == "bitflags") return protoDefBitflags(args);
    if (typeName == "mapper") return protoDefMapper(args);

    return `\`$$${typeName}\``;
};

