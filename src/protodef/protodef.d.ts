export namespace ProtoDefinition {
    export type Protocol = {
        types: Partial<Record<string, Type>>;
        [field?: string]: Protocol;
    };

    export type Type =
        | "native"
        | NativeNumericType
        | NativeUnitType
        | NativeType
        | [string, any]
        ;

    export type NativeNumericType =
        | `${"i" | "u"}${"8" | "16" | "32" | "64"}`
        | `f${"32" | "64"}`
        | "varint"
        | "varint64"
        | "varint128"
        | "zigzag32"
        | "zigzag64"
        ;

    export type NativeUnitType = "bool" | "cstring" | "void";

    export type SwitchArgs = { compareTo: string; compareToValue?: any; fields: Record<string, Type>; default?: Type };
    export type IntArgs = { size: number };
    export type ArrayArgs = { type: Type; countType: Type; count?: string };
    export type ContainerArgs = { name: string; type: Type; anon?: boolean }[];
    export type CountArgs = { type: Type; countFor?: string };
    export type PStringArgs = { countType: Type; count?: string; encoding?: string };
    export type BufferArgs = { countType: Type; count?: string; rest?: boolean };
    export type BitfieldArgs = { name: string; size: number; signed: boolean }[];
    export type MapperArgs = { type: Type; mappings: Record<any, any> };
    export type BitflagsArgs = { type: string; flags: string[] | Record<string, number>; big?: boolean; shift?: boolean };

    export type NativeType =
        // Conditional
        | ["switch", SwitchArgs]
        | ["option", Type]
        // Numeric
        | ["int", IntArgs]
        | [NativeNumericType, any]
        // Primitives
        | [NativeUnitType, any]
        // Structures
        | ["array", ArrayArgs]
        | ["container", ContainerArgs]
        | ["count", CountArgs]
        // Utils
        | ["pstring", PStringArgs]
        | ["buffer", BufferArgs]
        | ["bitfield", BitfieldArgs]
        | ["mapper", MapperArgs]
        | ["bitflags", BitflagsArgs]
        ;
};
