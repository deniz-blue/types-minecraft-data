export const lines = (lines: string[]) => {
    return lines.join("\n");
};

export const indent = (code: string | string[]) => {
    const space = "\t";
    return (Array.isArray(code) ? lines(code) : code).split("\n").map(x => space+x).join("\n");
};
