import { readFileSync } from "node:fs"

export const mcDataRoot = "./minecraft-data/data/";
export const mcDataPath = (path: string) => mcDataRoot + path;

export const getJSON = <T>(path: string): T => {
    return JSON.parse(readFileSync(path).toString()) as T;
};

export type McDataResourceType = "blocks" | "protocol" | "version" | "proto" | "attributes"
    | "blockCollisionShapes" | "biomes" | "enchantments" | "effects" | "items"
    | "recipes" | "instruments" | "materials" | "entities" | "windows" |
    "language" | "foods" | "particles" | "tints" | "mapIcons" |
    "protocolComments" | "sounds" | "commands" | "blockLoot" |
    "entityLoot" | "loginPacket" | "steve" | "types" | "blockStates"
    | "blocksB2J" | "blocksJ2B" | "blockMappings";

export type McDataPaths = Record<"pc" | "bedrock", Partial<Record<string, Partial<Record<McDataResourceType, string>>>>>;

export const getDataPaths = () => {
    return getJSON<McDataPaths>(mcDataPath("dataPaths.json"));
};

export const getProtoDef = () => {

};
