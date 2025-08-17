import { TSType } from "../ts/tstype.js";
import type { ProtoDefinition } from "./protodef.js";

export const protoDefNumericTypes = [
    "i8",
    "u8",
    "i16",
    "u16",
    "i32",
    "u32",
    "i64",
    "u64",
    "f32",
    "f64",
    "varint",
    "varint64",
    "varint128",
    "zigzag32",
    "zigzag64",
] as const;

export const protoDefNativeTypes = [
    ...protoDefNumericTypes,
    "switch",
    "option",
    "int",
    "array",
    "container",
    "count",
    "pstring",
    "buffer",
    "bitfield",
    "mapper",
    "bitflags",
    "bool",
    "cstring",
    "void",
] as const;

export const protoDefBasicToType = (
    type: ProtoDefinition.Type
) => {
    if (typeof type == "string") {
        if (type == "native") return TSType.Reference("unique symbol");

        if (type == "bool") return TSType.Reference("boolean");
        if (type == "cstring") return TSType.Reference("string");
        if (type == "void") return TSType.Reference("undefined");
        if (protoDefNumericTypes.includes(type)) return TSType.Reference("number");
    }

    if (type[0] == "buffer") return TSType.Reference("Buffer");
    if (type[0] == "int") return TSType.Reference("number");

    return null;
};

