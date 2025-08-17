import { EnumData, match } from "@alan404/enum";
import { TSType } from "../ts/tstype.js";

const isWrapper = (t?: TSType) =>
    !!t && (t.type === "Union" || t.type === "Intersection" || t.type === "Array");

const asRecord = (t: TSType): Record<string, TSType> | null =>
    t.type === "Record" ? t.data : null;

const cloneRec = (r: Record<string, TSType>) => ({ ...r });

type PCtx = {
    node: TSType;
    up?: PCtx;
};

function child(c: PCtx, node: TSType): PCtx {
    return { node, up: c };
}

// --- Main pass ---
export function postprocess(c: PCtx): TSType {
    return match<TSType, TSType>(c.node)({
        Reference: () => c.node,
        Array: (v) => TSType.Array(postprocess(child(c, v))),
        Union: (arr) => TSType.Union(arr.map(x => postprocess(child(c, x)))),
        Intersection: (arr) => TSType.Intersection(arr.map(x => postprocess(child(c, x)))),

        If: (v) => v.type,

        Record: (record) => {
            const baseFields = new Set<string>();
            const conditionals: { field: string; equals?: string; name: string; type: TSType }[] = [];

            for (let [k, v] of Object.entries(record)) {
                if (v.type == "Union" && v.data.every(x => x.type == "If")) {
                    for (let x of v.data) {
                        conditionals.push({
                            ...x.data,
                            name: k,
                        });
                    }
                } else {
                    baseFields.add(k);
                }
            }

            const grouped: Record<string, typeof conditionals> = {};
            for (const cond of conditionals) {
                (grouped[cond.field] ||= []).push(cond);
            }

            const baseRecord: Record<string, TSType> = {};
            for (let field of Object.keys(grouped)) baseFields.delete(field);
            for (let field of baseFields) baseRecord[field] = postprocess(child(c, record[field]!));

            const intersection = TSType.Intersection([]);
            if (Object.keys(baseRecord).length) intersection.data.push(TSType.Record(baseRecord));

            for (let [field, conds] of Object.entries(grouped)) {
                const fieldType = record[field];

                const union = TSType.Union([]);

                for (let cond of conds) {
                    const ident = !isNaN(Number(cond.equals)) ? cond.equals : (
                        (cond.equals == "true" || cond.equals == "false") ? cond.equals : JSON.stringify(cond.equals)
                    );

                    union.data.push(TSType.Record({
                        [cond.field]: TSType.Reference(cond.equals && ident ? ident : "never"),
                        [cond.name]: cond.type,
                    }))
                }

                intersection.data.push(union);
            }

            return intersection;
        },
    });
}
