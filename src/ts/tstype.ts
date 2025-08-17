import { createFactory, match } from "@alan404/enum";
import type { Enum } from "@alan404/enum";
import { indent } from "../codegen.js";

export type TSType = Enum<{
    // Type: { type: TSType };
    Reference: string;
    Array: TSType;
    Union: TSType[];
    Intersection: TSType[];
    Record: Record<string, TSType>;

    If: { field: string; equals?: string; type: TSType; };
}> & {
    generics?: Record<string, string>;
};

export const TSType = createFactory<TSType>(() => ({}));

export const TSTypeToString = (ty: TSType): string => {
    return match<TSType, string>(ty)({
        // Type: ({ type }) => `export const ${} = ${TSTypeToString(type)};`,
        Reference: (v) => v,
        Array: (v) => `${TSTypeToString(v)}[]`,
        Union: (v) => `${v.map(TSTypeToString).join(" | ") || "void"}`,
        Intersection: (v) => `${v.map(x => (
            `${x.type == "Union" ? "(" : ""}${TSTypeToString(x)}${x.type == "Union" ? ")" : ""}`
        )).join(" & ") || "void"}`,
        Record: (v) => `{\n${indent(
            Object.entries(v).map(([k,v]) => {
                const opt = v.type == "Union" && v.data.length == 2 && v.data.some(x => x.type == "Reference" && x.data == "undefined");
                return `${k}${opt ? "?" : ""}: ${TSTypeToString(opt ? v.data.find(x => !(x.type == "Reference" && x.data == "undefined"))! : v)};`;
            })
        )}\n}`,

        If: ({ field, equals, type }) => `If<"${field}", "${equals || "any"}", ${TSTypeToString(type)}>`,
    });
};
