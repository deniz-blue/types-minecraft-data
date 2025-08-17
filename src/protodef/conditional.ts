import { indent, lines } from "../codegen.js";
import type { Ctx } from "./ctx.js";
import { protoDefToType } from "./index.js";
import type { ProtoDefinition } from "./protodef.js";

export const protoDefSwitch = (args: ProtoDefinition.SwitchArgs, ctx: Ctx) => {
    const { compareTo, fields, default: defaultType } = args;

    let cases: string[] = [];

    const availableTypes: string[] = [];

    for(let value in fields) {
        availableTypes.push(protoDefToType(fields[value]!, ctx));

        cases.push(lines([
            "{",
            indent([
                `${JSON.stringify(compareTo)}: ${JSON.stringify(value)};`,
                `$value: ${protoDefToType(fields[value]!, ctx)}`,
            ]),
            "}",
        ]))
    }

    if(defaultType) {
        availableTypes.push(protoDefToType(defaultType, ctx));

        cases.push(lines([
            "{",
            indent([
                `$default: true;`,
                `$value: ${protoDefToType(defaultType, ctx)}`,
            ]),
            "}",
        ]))
    }

    return availableTypes.map(x => `(${x})`).join(" | ") || "void";

    // const targetPath = resolvePath(ctx.path, compareTo);
    // const fieldName = ctx.path[ctx.path.length - 1]; // current switch’s own name

    // const cases = Object.entries(fields).map(([caseValue, caseType]) => {
    //     return lines([
    //         "{",
    //         indent([
    //             `${targetPath}: ${JSON.stringify(caseValue)};`,
    //             `${fieldName}: ${protoDefToType(caseType, ctx)};`
    //         ]),
    //         "}"
    //     ]);
    // });

    // if (defaultCase) {
    //     cases.push(lines([
    //         "{",
    //         indent([
    //             `${targetPath}: (string & {});`,
    //             `${fieldName}: ${protoDefToType(defaultCase, ctx)};`
    //         ]),
    //         "}"
    //     ]));
    // }

    // return cases.join(" | ");
};
