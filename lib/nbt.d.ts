declare global {
    export namespace NBT {
        export type Root = Compound & { name?: string };

        export type Tag =
            | Byte
            | Short
            | Int
            | Long
            | Float
            | Double
            | String
            | List
            | Compound
            | ByteArray
            | ShortArray
            | IntArray
            | LongArray
            ;

        export type Byte = { type: "byte", value: number };
        export type Short = { type: "short", value: number };
        export type Int = { type: "int", value: number };
        export type Long = { type: "long", value: [number, number] };
        export type Float = { type: "float", value: number };
        export type Double = { type: "double", value: number };
        export type String = { type: "string", value: number };

        export type List<T extends Tag> = { type: "list", value: T[] };

        export type Compound<Shape extends Record<string, Tag>> = {
            type: "compound",
            value: { [K in Shape]: Shape[K] },
        };

        export type ByteArray = { type: "byteArray", value: number[] };
        export type ShortArray = { type: "shortArray", value: number[] };
        export type IntArray = { type: "intArray", value: number[] };
        export type LongArray = { type: "longArray", value: [number, number][] };
    };
}
