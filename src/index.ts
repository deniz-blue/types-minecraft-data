import { writeFileSync } from "node:fs";
import type { ProtoDefinition } from "./protodef/protodef.js";
import { indent, lines } from "./codegen.js";
import { getDataPaths, getJSON, mcDataPath } from "./data.js";
import { replaceMap } from "./utils.js";
import { protoDefToType } from "./protodef/index.js";
import { protoDefNativeTypes } from "./protodef/primitive.js";
import { mcDataCustomProtoDefs } from "./protodef/mcdata.js";
import { camelCase, createCtx } from "./protodef/ctx.js";

export const generateProtocolTypesFor = (
    rootNamespace: string,
    namespace: string,
    types: ProtoDefinition.Protocol["types"],
    protocolRoot: ProtoDefinition.Protocol,
) => {
    let output: string[] = [];

    output.push(`export namespace ${namespace} {`);

    for (let name in types) {
        if(protoDefNativeTypes.includes(name as any)) continue;
        if(mcDataCustomProtoDefs[name]) continue;
        const v = types[name]!;
        output.push(indent([
            `export type ${camelCase(name)} = ${protoDefToType(v, createCtx({
                protocolRoot,
                namespaceTypes: types,
                rootNamespace,
            }))};`,
        ]));
    }

    output.push(`}`);

    return lines(output)
};

export const generateProtocolFor = (
    rootNamespace: string,
    namespace: string,
    data: ProtoDefinition.Protocol,
    root: ProtoDefinition.Protocol,
) => {
    let blocks: string[] = [];

    const typesOnly = Object.keys(data).length == 1 && !!data["types"];
    for (let ns in data) {
        const prettyNS = replaceMap(ns, {
            types: "Types",
            play: "Play",
            configuration: "Config",
            handshaking: "Handshake",
            status: "Status",
            login: "Login",
            toClient: "Clientbound",
            toServer: "Serverbound",
        });

        let child = namespace + "." + prettyNS;

        if (ns == "types") {
            blocks.push(generateProtocolTypesFor(rootNamespace, typesOnly ? namespace : child, data[ns], root));
        } else {
            blocks.push(generateProtocolFor(rootNamespace, child, data[ns]!, root));
        }
    }

    return blocks.join("\n\n");
};

export const generateDefinitionsFor = (pathId: string) => {
    const [type, version] = pathId.split("/");

    const namespace = `MCProtocol.${type == "pc" ? "Pc" : "Bedrock"}_${version?.replace(/\./g, "_")}`;

    const root = getJSON<ProtoDefinition.Protocol>(mcDataPath(pathId + "/protocol.json"));

    return generateProtocolFor(namespace, namespace, root, root);
};

export const generateDefinitions = () => {
    const paths = getDataPaths();

    let pcProtocolPathIds = new Set<string>();
    for (let v in paths.pc) {
        let info = paths.pc[v];
        let pathId = info?.protocol;
        if (pathId) pcProtocolPathIds.add(pathId);
    }

    for (let pathId of pcProtocolPathIds) {
        let d = generateDefinitionsFor(pathId);
        console.log(d);
    }
};

const main = () => {
    let d = generateDefinitionsFor("pc/1.21.5");
    writeFileSync("./gen/test.d.ts", d);
};
main()
