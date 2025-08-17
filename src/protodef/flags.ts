import { indent, lines } from "../codegen.js";
import type { ProtoDefinition } from "./protodef.js";

export const flagsType = (names: string[]) => {
    return lines([
        "{",
        indent(
            names.map(name => `${name}?: boolean;`),
        ),
        "}",
    ]);
};

export const protoDefBitfield = (args: ProtoDefinition.BitfieldArgs) => {
    return flagsType(args.map(x => x.name));
};

export const protoDefBitflags = (args: ProtoDefinition.BitflagsArgs) => {
    const flags = Array.isArray(args.flags) ? args.flags : Object.keys(args.flags);
    return flagsType(flags);
};

export const protoDefMapper = (args: ProtoDefinition.MapperArgs) => {
    return `${Object.values(args.mappings).map(x => JSON.stringify(x)).join(" | ") || "void"}`;
};
