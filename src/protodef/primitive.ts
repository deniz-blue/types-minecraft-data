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
        if (type == "native") return "unique symbol";

        if (type == "bool") return "boolean";
        if (type == "cstring") return "string";
        if (type == "void") return "undefined | null";
        if (protoDefNumericTypes.includes(type)) return "number";
    }

    if (type[0] == "buffer") return "Buffer";
    if (type[0] == "int") return "number";

    return null;
};

