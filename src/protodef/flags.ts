import { indent, lines } from "../codegen.js";
import { TSType } from "../ts/tstype.js";
import type { ProtoDefinition } from "./protodef.js";

export const flagsType = (names: string[]) => {
    const record: Record<string, TSType> = {};

    for(let name of names)
        record[name] = TSType.Union([
            TSType.Reference("boolean"),
            TSType.Reference("undefined"),
        ]);

    return TSType.Record(record);
};

export const protoDefBitfield = (args: ProtoDefinition.BitfieldArgs) => {
    return flagsType(args.map(x => x.name));
};

export const protoDefBitflags = (args: ProtoDefinition.BitflagsArgs) => {
    const flags = Array.isArray(args.flags) ? args.flags : Object.keys(args.flags);
    return flagsType(flags);
};

export const protoDefMapper = (args: ProtoDefinition.MapperArgs) => {
    return TSType.Union(Object.values(args.mappings).map(x => TSType.Reference(JSON.stringify(x))));
};
