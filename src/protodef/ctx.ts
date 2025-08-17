import type { ProtoDefinition } from "./protodef.js";

export const camelCase = (s: string) => {
    return s.split("_").map(x => x[0]?.toUpperCase() + x.slice(1)).join("");
};

export interface Ctx {
    protocolRoot: ProtoDefinition.Protocol;
    rootNamespace: string;
    namespaceTypes: ProtoDefinition.Protocol["types"];
    path: string[];

    resolveType: (s: string) => string | null;
};

export const createCtx = ({
    protocolRoot,
    namespaceTypes,
    rootNamespace,
}: Pick<Ctx, "protocolRoot" | "namespaceTypes" | "rootNamespace">): Ctx => {
    return {
        namespaceTypes,
        rootNamespace,
        protocolRoot,
        resolveType: (s) => {
            if(namespaceTypes[s]) return camelCase(s);
            if(protocolRoot.types[s]) return rootNamespace + ".Types." + camelCase(s);
            return null;
        },
        path: [],
    };
};
