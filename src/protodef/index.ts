import { ProtoDefinition } from "./protodef.js";
import { protoDefBasicToType } from "./primitive.js";
import { protoDefBitfield, protoDefBitflags, protoDefMapper } from "./flags.js";
import { Ctx } from "./ctx.js";
import { protoDefSwitch } from "./conditional.js";
import { protoDefArray, protoDefContainer } from "./structures.js";
import { mcDataCustomProtoDefs, protoDefRegistryEntryHolder, protoDefRegistryEntryHolderSet } from "./mcdata.js";
import { TSType } from "../ts/tstype.js";

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
): TSType => {
    let native = protoDefBasicToType(type);
    if (native) return native;

    if (typeof type == "string" && mcDataCustomProtoDefs[type])
        return mcDataCustomProtoDefs[type];

    if (typeof type == "string") {
        let newType = ctx.resolveType(type);
        if (newType) return TSType.Reference(newType);
        return TSType.Reference(`\`$${type}\``);
    }

    const [typeName, args] = type;

    if (typeName == "count") return TSType.Reference("unique symbol");
    if (typeName == "option") return TSType.Union([
        protoDefToType(args as ProtoDefinition.Type, ctx),
        TSType.Reference("undefined"),
    ]);
    if (typeName == "array") return protoDefArray(args, ctx);
    if (typeName === "switch") return protoDefSwitch(args, ctx);
    if (typeName === "container") return protoDefContainer(args, ctx);
    if (typeName == "bitfield") return protoDefBitfield(args);
    if (typeName == "bitflags") return protoDefBitflags(args);
    if (typeName == "mapper") return protoDefMapper(args);

    // mc-proto specific
    if (typeName == "registryEntryHolder") return protoDefRegistryEntryHolder(args, ctx);
    if (typeName == "registryEntryHolderSet") return protoDefRegistryEntryHolderSet(args, ctx);

    return TSType.Reference(`\`$$${typeName}\``);
};

