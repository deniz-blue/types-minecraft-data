export const replaceMap = (s: string, map: Record<string, string>) => {
    let x = s;
    for(let [k,v] of Object.entries(map)) x = x.replaceAll(k,v);
    return x;
};
