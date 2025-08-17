export namespace MCProtocol.PC_1_21_5.Types {
	export type Varlong = unique symbol;
	export type Optvarint = number;
	export type UUID = unique symbol;
	export type EntityMetadataLoop = unique symbol;
	export type TopBitSetTerminatedArray = unique symbol;
	export type RestBuffer = Buffer;
	export type AnonymousNbt = NBT.Root;
	export type AnonOptionalNbt = NBT.Root | undefined;
	export type RegistryEntryHolder = unique symbol;
	export type RegistryEntryHolderSet = unique symbol;
	export type ByteArray = Buffer;
	export type String = string;
	export type Vec2f = {
		x: number;
		y: number;
	};
	export type Vec3f = {
		x: number;
		y: number;
		z: number;
	};
	export type Vec4f = {
		x: number;
		y: number;
		z: number;
		w: number;
	};
	export type Vec3f64 = {
		x: number;
		y: number;
		z: number;
	};
	export type Vec3i = {
		x: number;
		y: number;
		z: number;
	};
	export type IDSet = {
		name: string;
	} | {
		ids: number[];
	};
	export type ContainerID = number;
	export type SlotComponentType = "custom_data" | "max_stack_size" | "max_damage" | "damage" | "unbreakable" | "custom_name" | "item_name" | "item_model" | "lore" | "rarity" | "enchantments" | "can_place_on" | "can_break" | "attribute_modifiers" | "custom_model_data" | "tooltip_display" | "repair_cost" | "creative_slot_lock" | "enchantment_glint_override" | "intangible_projectile" | "food" | "consumable" | "use_remainder" | "use_cooldown" | "damage_resistant" | "tool" | "weapon" | "enchantable" | "equippable" | "repairable" | "glider" | "tooltip_style" | "death_protection" | "blocks_attacks" | "stored_enchantments" | "dyed_color" | "map_color" | "map_id" | "map_decorations" | "map_post_processing" | "potion_duration_scale" | "charged_projectiles" | "bundle_contents" | "potion_contents" | "suspicious_stew_effects" | "writable_book_content" | "written_book_content" | "trim" | "debug_stick_state" | "entity_data" | "bucket_entity_data" | "block_entity_data" | "instrument" | "provides_trim_material" | "ominous_bottle_amplifier" | "jukebox_playable" | "provides_banner_patterns" | "recipes" | "lodestone_tracker" | "firework_explosion" | "fireworks" | "profile" | "note_block_sound" | "banner_patterns" | "base_color" | "pot_decorations" | "container" | "block_state" | "bees" | "lock" | "container_loot" | "break_sound" | "villager/variant" | "wolf/variant" | "wolf/sound_variant" | "wolf/collar" | "fox/variant" | "salmon/size" | "parrot/variant" | "tropical_fish/pattern" | "tropical_fish/base_color" | "tropical_fish/pattern_color" | "mooshroom/variant" | "rabbit/variant" | "pig/variant" | "cow/variant" | "chicken/variant" | "frog/variant" | "horse/variant" | "painting/variant" | "llama/variant" | "axolotl/variant" | "cat/variant" | "cat/collar" | "sheep/color" | "shulker/color";
	export type SlotComponent = ({
		type: "custom_data";
		data: NBT.Root;
	} | {
		type: "max_stack_size";
		data: number;
	} | {
		type: "max_damage";
		data: number;
	} | {
		type: "damage";
		data: number;
	} | {
		type: "unbreakable";
		data: undefined;
	} | {
		type: "custom_name";
		data: NBT.Root;
	} | {
		type: "item_name";
		data: NBT.Root;
	} | {
		type: "item_model";
		data: string;
	} | {
		type: "lore";
		data: NBT.Root | undefined[];
	} | {
		type: "rarity";
		data: "common" | "uncommon" | "rare" | "epic";
	} | {
		type: "enchantments";
		data: {
			enchantments: {
				id: number;
				level: number;
			}[];
		};
	} | {
		type: "can_place_on";
		data: {
			predicates: ItemBlockPredicate[];
		};
	} | {
		type: "can_break";
		data: {
			predicates: ItemBlockPredicate[];
		};
	} | {
		type: "attribute_modifiers";
		data: {
			attributes: {
				typeId: number;
				name: string;
				value: number;
				operation: "add" | "multiply_base" | "multiply_total";
				slot: "any" | "main_hand" | "off_hand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body" | "saddle";
			}[];
			showTooltip: boolean;
		};
	} | {
		type: "custom_model_data";
		data: {
			floats: number[];
			flags: boolean[];
			strings: string[];
			colors: number[];
		};
	} | {
		type: "tooltip_display";
		data: {
			hideTooltip: boolean;
			hiddenComponents: number[];
		};
	} | {
		type: "repair_cost";
		data: number;
	} | {
		type: "creative_slot_lock";
		data: undefined;
	} | {
		type: "enchantment_glint_override";
		data: boolean;
	} | {
		type: "intangible_projectile";
		data: undefined;
	} | {
		type: "blocks_attacks";
		data: {
			blockDelaySeconds: number;
			disableCooldownScale: number;
			damageReductions: {
				horizontalBlockingAngle: number;
				type?: IDSet;
				base: number;
				factor: number;
			}[];
			itemDamage: {
				threshold: number;
				base: number;
				factor: number;
			};
			bypassedBy?: string;
			blockSound?: ItemSoundHolder;
			disableSound?: ItemSoundHolder;
		};
	} | {
		type: "food";
		data: {
			nutrition: number;
			saturationModifier: number;
			canAlwaysEat: boolean;
		};
	} | {
		type: "consumable";
		data: {
			consume_seconds: number;
			animation: "none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "bundle";
			sound: ItemSoundHolder;
			makes_particles: boolean;
			effects: ItemConsumeEffect[];
		};
	} | {
		type: "use_remainder";
		data: Slot;
	} | {
		type: "use_cooldown";
		data: {
			seconds: number;
			cooldownGroup?: string;
		};
	} | {
		type: "damage_resistant";
		data: string;
	} | {
		type: "tool";
		data: {
			rules: {
				blocks: IDSet;
				speed?: number;
				correctDropForBlocks?: boolean;
			}[];
			defaultMiningSpeed: number;
			damagePerBlock: number;
			canDestroyBlocksInCreative: boolean;
		};
	} | {
		type: "weapon";
		data: {
			itemDamagePerAttack: number;
			disableBlockingForSeconds: number;
		};
	} | {
		type: "enchantable";
		data: number;
	} | {
		type: "equippable";
		data: {
			slot: "main_hand" | "off_hand" | "feet" | "legs" | "chest" | "head" | "body" | "saddle";
			sound: ItemSoundHolder;
			model?: string;
			cameraOverlay?: string;
			allowedEntities?: IDSet;
			dispensable: boolean;
			swappable: boolean;
			damageable: boolean;
			equipOnInteract: boolean;
		};
	} | {
		type: "repairable";
		data: {
			items: IDSet;
		};
	} | {
		type: "glider";
		data: undefined;
	} | {
		type: "tooltip_style";
		data: string;
	} | {
		type: "death_protection";
		data: {
			effects: ItemConsumeEffect[];
		};
	} | {
		type: "stored_enchantments";
		data: {
			enchantments: {
				id: number;
				level: number;
			}[];
		};
	} | {
		type: "dyed_color";
		data: number;
	} | {
		type: "map_color";
		data: number;
	} | {
		type: "map_id";
		data: number;
	} | {
		type: "map_decorations";
		data: NBT.Root;
	} | {
		type: "map_post_processing";
		data: number;
	} | {
		type: "potion_duration_scale";
		data: number;
	} | {
		type: "charged_projectiles";
		data: {
			projectiles: Slot[];
		};
	} | {
		type: "bundle_contents";
		data: {
			contents: Slot[];
		};
	} | {
		type: "potion_contents";
		data: {
			potionId?: number;
			customColor?: number;
			customEffects: ItemPotionEffect[];
			customName?: string;
		};
	} | {
		type: "suspicious_stew_effects";
		data: {
			effects: {
				effect: number;
				duration: number;
			}[];
		};
	} | {
		type: "writable_book_content";
		data: {
			pages: ItemBookPage[];
		};
	} | {
		type: "written_book_content";
		data: {
			rawTitle: string;
			filteredTitle?: string;
			author: string;
			generation: number;
			pages: ItemWrittenBookPage[];
			resolved: boolean;
		};
	} | {
		type: "trim";
		data: {
			material: {
				materialId: number;
			} | {
				data: ArmorTrimMaterial;
			};
			pattern: {
				patternId: number;
			} | {
				data: ArmorTrimPattern;
			};
		};
	} | {
		type: "debug_stick_state";
		data: NBT.Root;
	} | {
		type: "entity_data";
		data: NBT.Root;
	} | {
		type: "bucket_entity_data";
		data: NBT.Root;
	} | {
		type: "block_entity_data";
		data: NBT.Root;
	} | {
		type: "instrument";
		data: {
			instrumentId: number;
		} | {
			data: InstrumentData;
		};
	} | {
		type: "provides_trim_material";
		data: {
			hasHolder: boolean;
			material: If<"hasHolder", "true", {
				materialId: number;
			} | {
				data: ArmorTrimMaterial;
			}> | If<"hasHolder", "false", string>;
		};
	} | {
		type: "ominous_bottle_amplifier";
		data: number;
	} | {
		type: "jukebox_playable";
		data: {
			hasHolder: boolean;
			song: If<"hasHolder", "true", {
				songId: number;
			} | {
				data: JukeboxSongData;
			}> | If<"hasHolder", "false", string>;
		};
	} | {
		type: "provides_banner_patterns";
		data: string;
	} | {
		type: "recipes";
		data: NBT.Root;
	} | {
		type: "lodestone_tracker";
		data: {
			globalPosition?: {
				dimension: string;
				position: Position;
			};
			tracked: boolean;
		};
	} | {
		type: "firework_explosion";
		data: ItemFireworkExplosion;
	} | {
		type: "fireworks";
		data: {
			flightDuration: number;
			explosions: ItemFireworkExplosion[];
		};
	} | {
		type: "profile";
		data: {
			name?: string;
			uuid?: UUID;
			properties: {
				name: string;
				value: string;
				signature?: string;
			}[];
		};
	} | {
		type: "note_block_sound";
		data: string;
	} | {
		type: "banner_patterns";
		data: {
			layers: BannerPatternLayer[];
		};
	} | {
		type: "base_color";
		data: number;
	} | {
		type: "pot_decorations";
		data: {
			decorations: number[];
		};
	} | {
		type: "container";
		data: {
			contents: Slot[];
		};
	} | {
		type: "block_state";
		data: {
			properties: {
				name: string;
				value: string;
			}[];
		};
	} | {
		type: "bees";
		data: {
			bees: {
				nbtData: NBT.Root;
				ticksInHive: number;
				minTicksInHive: number;
			}[];
		};
	} | {
		type: "lock";
		data: NBT.Root;
	} | {
		type: "container_loot";
		data: NBT.Root;
	} | {
		type: "break_sound";
		data: ItemSoundHolder;
	} | {
		type: "villager/variant";
		data: number;
	} | {
		type: "wolf/variant";
		data: number;
	} | {
		type: "wolf/sound_variant";
		data: number;
	} | {
		type: "wolf/collar";
		data: number;
	} | {
		type: "fox/variant";
		data: number;
	} | {
		type: "salmon/size";
		data: number;
	} | {
		type: "parrot/variant";
		data: number;
	} | {
		type: "tropical_fish/pattern";
		data: number;
	} | {
		type: "tropical_fish/base_color";
		data: number;
	} | {
		type: "tropical_fish/pattern_color";
		data: number;
	} | {
		type: "mooshroom/variant";
		data: number;
	} | {
		type: "rabbit/variant";
		data: number;
	} | {
		type: "pig/variant";
		data: number;
	} | {
		type: "cow/variant";
		data: number;
	} | {
		type: "chicken/variant";
		data: {
			variantId: number;
		} | {
			variantData: string;
		};
	} | {
		type: "frog/variant";
		data: number;
	} | {
		type: "horse/variant";
		data: number;
	} | {
		type: "painting/variant";
		data: {
			variantId: number;
		} | {
			data: EntityMetadataPaintingVariant;
		};
	} | {
		type: "llama/variant";
		data: number;
	} | {
		type: "axolotl/variant";
		data: number;
	} | {
		type: "cat/variant";
		data: number;
	} | {
		type: "cat/collar";
		data: number;
	} | {
		type: "sheep/color";
		data: number;
	} | {
		type: "shulker/color";
		data: number;
	});
	export type ItemSoundEvent = {
		soundName: string;
		fixedRange?: number;
	};
	export type ItemSoundHolder = {
		soundId: number;
	} | {
		data: ItemSoundEvent;
	};
	export type ItemFireworkExplosion = {
		shape: "small_ball" | "large_ball" | "star" | "creeper" | "burst";
		colors: number[];
		fadeColors: number[];
		hasTrail: boolean;
		hasTwinkle: boolean;
	};
	export type ItemEffectDetail = {
		amplifier: number;
		duration: number;
		ambient: boolean;
		showParticles: boolean;
		showIcon: boolean;
		hiddenEffect?: ItemEffectDetail;
	};
	export type ItemPotionEffect = {
		id: number;
		details: ItemEffectDetail;
	};
	export type ItemBlockProperty = {
		name: string;
	} & ({
		isExactMatch: true;
		value: {
			exactValue: string;
		};
	} | {
		isExactMatch: false;
		value: {
			minValue: string;
			maxValue: string;
		};
	});
	export type ExactComponentMatcher = SlotComponent[];
	export type DataComponentMatchers = {
		exactMatchers: ExactComponentMatcher;
		partialMatchers: number[];
	};
	export type ItemBlockPredicate = {
		blockSet?: {
			name: string;
		} | {
			blockIds: number[];
		};
		properties?: ItemBlockProperty[];
		nbt?: NBT.Root;
		components: DataComponentMatchers;
	};
	export type ItemBookPage = {
		content: string;
		filteredContent?: string;
	};
	export type ItemWrittenBookPage = {
		content: NBT.Root;
		filteredContent?: NBT.Root;
	};
	export type ItemConsumeEffect = ({
		type: "apply_effects";
		undefined: {
			effects: ItemPotionEffect[];
			probability: number;
		};
	} | {
		type: "remove_effects";
		undefined: {
			effects: IDSet;
		};
	} | {
		type: "clear_all_effects";
		undefined: undefined;
	} | {
		type: "teleport_randomly";
		undefined: {
			diameter: number;
		};
	} | {
		type: "play_sound";
		undefined: {
			sound: ItemSoundHolder;
		};
	});
	export type ArmorTrimMaterial = {
		assetBase: string;
		overrideArmorAssets: {
			key: string;
			value: string;
		}[];
		description: NBT.Root;
	};
	export type ArmorTrimPattern = {
		assetId: string;
		description: NBT.Root;
		decal: boolean;
	};
	export type InstrumentData = {
		soundEvent: ItemSoundHolder;
		useDuration: number;
		range: number;
		description: NBT.Root;
	};
	export type JukeboxSongData = {
		soundEvent: ItemSoundHolder;
		description: NBT.Root;
		lengthInSeconds: number;
		comparatorOutput: number;
	};
	export type BannerPattern = {
		assetId: string;
		translationKey: string;
	};
	export type BannerPatternLayer = {
		pattern: {
			patternId: number;
		} | {
			data: BannerPattern;
		};
		colorId: number;
	};
	export type UntrustedSlotComponent = {
		type: SlotComponentType;
		data: ByteArray;
	};
	export type UntrustedSlot = ({
		itemCount: 0;
		undefined: undefined;
	} | {
		itemCount: false;
		undefined: undefined;
	} | {
		itemCount: never;
		undefined: {
			itemId: number;
			addedComponentCount: number;
			removedComponentCount: number;
			components: UntrustedSlotComponent[];
			removeComponents: {
				type: SlotComponentType;
			}[];
		};
	});
	export type Slot = ({
		itemCount: 0;
		undefined: undefined;
	} | {
		itemCount: never;
		undefined: {
			itemId: number;
			addedComponentCount: number;
			removedComponentCount: number;
			components: SlotComponent[];
			removeComponents: {
				type: SlotComponentType;
			}[];
		};
	});
	export type HashedSlot = {
		itemId: number;
		itemCount: number;
		components: {
			type: SlotComponentType;
			hash: number;
		}[];
		removeComponents: {
			type: SlotComponentType;
		}[];
	};
	export type Particle = ({
		type: "block";
		data: number;
	} | {
		type: "block_marker";
		data: number;
	} | {
		type: "falling_dust";
		data: number;
	} | {
		type: "dust_pillar";
		data: number;
	} | {
		type: "block_crumble";
		data: number;
	} | {
		type: "dust";
		data: {
			red: number;
			green: number;
			blue: number;
			scale: number;
		};
	} | {
		type: "dust_color_transition";
		data: {
			fromRed: number;
			fromGreen: number;
			fromBlue: number;
			scale: number;
			toRed: number;
			toGreen: number;
			toBlue: number;
		};
	} | {
		type: "entity_effect";
		data: number;
	} | {
		type: "item";
		data: Slot;
	} | {
		type: "sculk_charge";
		data: number;
	} | {
		type: "shriek";
		data: number;
	} | {
		type: "vibration";
		data: {
			positionType: "block" | "entity";
			position: If<"positionType", "block", Position> | If<"positionType", "entity", {
				entityId: number;
				entityEyeHeight: number;
			}>;
			ticks: number;
		};
	} | {
		type: "trail";
		data: {
			target: Vec3f64;
			color: number;
		};
	} | {
		type: "tinted_leaves";
		data: number;
	} | {
		type: "firefly";
		data: undefined;
	});
	export type Ingredient = Slot[];
	export type Position = {
		x?: boolean;
		z?: boolean;
		y?: boolean;
	};
	export type SoundSource = "master" | "music" | "record" | "weather" | "block" | "hostile" | "neutral" | "player" | "ambient" | "voice";
	export type PackedChunkPos = {
		z: number;
		x: number;
	};
	export type PreviousMessages = ({
		id: 0;
		signature: Buffer;
	})[];
	export type EntityMetadataEntry = {
		key: number;
	} & ({
		type: "byte";
		value: number;
	} | {
		type: "int";
		value: number;
	} | {
		type: "long";
		value: Varlong;
	} | {
		type: "float";
		value: number;
	} | {
		type: "string";
		value: string;
	} | {
		type: "component";
		value: NBT.Root;
	} | {
		type: "optional_component";
		value?: NBT.Root;
	} | {
		type: "item_stack";
		value: Slot;
	} | {
		type: "boolean";
		value: boolean;
	} | {
		type: "rotations";
		value: {
			pitch: number;
			yaw: number;
			roll: number;
		};
	} | {
		type: "block_pos";
		value: Position;
	} | {
		type: "optional_block_pos";
		value?: Position;
	} | {
		type: "direction";
		value: number;
	} | {
		type: "optional_uuid";
		value?: UUID;
	} | {
		type: "block_state";
		value: number;
	} | {
		type: "optional_block_state";
		value: Optvarint;
	} | {
		type: "compound_tag";
		value: NBT.Root;
	} | {
		type: "particle";
		value: Particle;
	} | {
		type: "particles";
		value: Particle[];
	} | {
		type: "villager_data";
		value: {
			villagerType: number;
			villagerProfession: number;
			level: number;
		};
	} | {
		type: "optional_unsigned_int";
		value: Optvarint;
	} | {
		type: "pose";
		value: number;
	} | {
		type: "cat_variant";
		value: number;
	} | {
		type: "cow_variant";
		value: number;
	} | {
		type: "wolf_variant";
		value: number;
	} | {
		type: "wolf_sound_variant";
		value: number;
	} | {
		type: "frog_variant";
		value: number;
	} | {
		type: "pig_variant";
		value: number;
	} | {
		type: "chicken_variant";
		value: {
			variantId: number;
		} | {
			variantData: string;
		};
	} | {
		type: "optional_global_pos";
		value?: string;
	} | {
		type: "painting_variant";
		value: {
			variantId: number;
		} | {
			variantData: EntityMetadataPaintingVariant;
		};
	} | {
		type: "sniffer_state";
		value: number;
	} | {
		type: "armadillo_state";
		value: number;
	} | {
		type: "vector3";
		value: Vec3f;
	} | {
		type: "quaternion";
		value: Vec4f;
	});
	export type EntityMetadataPaintingVariant = {
		width: number;
		height: number;
		assetId: string;
		title?: NBT.Root;
		author?: NBT.Root;
	};
	export type EntityMetadata = `$$entityMetadataLoop`;
	export type Tags = {
		tagName: string;
		entries: number[];
	}[];
	export type ChunkBlockEntity = {
		undefined: {
			x?: boolean;
			z?: boolean;
		};
		y: number;
		type: number;
		nbtData?: NBT.Root;
	};
	export type ChatSession = {
		uuid: UUID;
		publicKey: {
			expireTime: number;
			keyBytes: Buffer;
			keySignature: Buffer;
		};
	} | undefined;
	export type GameProfile = {
		name: string;
		properties: {
			name: string;
			value: string;
			signature?: string;
		}[];
	};
	export type CommandNode = {
		flags: {
			unused?: boolean;
			has_custom_suggestions?: boolean;
			has_redirect_node?: boolean;
			has_command?: boolean;
			command_node_type?: boolean;
		};
		children: number[];
	} & ({
		flags/has_redirect_node: 1;
		redirectNode: number;
	}) & ({
		flags/command_node_type: 0;
		extraNodeData: undefined;
	} | {
		flags/command_node_type: 1;
		extraNodeData: {
			name: string;
		};
	} | {
		flags/command_node_type: 2;
		extraNodeData: {
			name: string;
			parser: "brigadier:bool" | "brigadier:float" | "brigadier:double" | "brigadier:integer" | "brigadier:long" | "brigadier:string" | "minecraft:entity" | "minecraft:game_profile" | "minecraft:block_pos" | "minecraft:column_pos" | "minecraft:vec3" | "minecraft:vec2" | "minecraft:block_state" | "minecraft:block_predicate" | "minecraft:item_stack" | "minecraft:item_predicate" | "minecraft:color" | "minecraft:component" | "minecraft:style" | "minecraft:message" | "minecraft:nbt" | "minecraft:nbt_tag" | "minecraft:nbt_path" | "minecraft:objective" | "minecraft:objective_criteria" | "minecraft:operation" | "minecraft:particle" | "minecraft:angle" | "minecraft:rotation" | "minecraft:scoreboard_slot" | "minecraft:score_holder" | "minecraft:swizzle" | "minecraft:team" | "minecraft:item_slot" | "minecraft:item_slots" | "minecraft:resource_location" | "minecraft:function" | "minecraft:entity_anchor" | "minecraft:int_range" | "minecraft:float_range" | "minecraft:dimension" | "minecraft:gamemode" | "minecraft:time" | "minecraft:resource_or_tag" | "minecraft:resource_or_tag_key" | "minecraft:resource" | "minecraft:resource_key" | "minecraft:resource_selector" | "minecraft:template_mirror" | "minecraft:template_rotation" | "minecraft:heightmap" | "minecraft:loot_table" | "minecraft:loot_predicate" | "minecraft:loot_modifier" | "minecraft:uuid";
			properties: If<"parser", "brigadier:bool", undefined> | If<"parser", "brigadier:float", {
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: If<"flags/min_present", "1", number>;
				max: If<"flags/max_present", "1", number>;
			}> | If<"parser", "brigadier:double", {
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: If<"flags/min_present", "1", number>;
				max: If<"flags/max_present", "1", number>;
			}> | If<"parser", "brigadier:integer", {
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: If<"flags/min_present", "1", number>;
				max: If<"flags/max_present", "1", number>;
			}> | If<"parser", "brigadier:long", {
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: If<"flags/min_present", "1", number>;
				max: If<"flags/max_present", "1", number>;
			}> | If<"parser", "brigadier:string", "SINGLE_WORD" | "QUOTABLE_PHRASE" | "GREEDY_PHRASE"> | If<"parser", "minecraft:entity", {
				unused?: boolean;
				onlyAllowPlayers?: boolean;
				onlyAllowEntities?: boolean;
			}> | If<"parser", "minecraft:game_profile", undefined> | If<"parser", "minecraft:block_pos", undefined> | If<"parser", "minecraft:column_pos", undefined> | If<"parser", "minecraft:vec3", undefined> | If<"parser", "minecraft:vec2", undefined> | If<"parser", "minecraft:block_state", undefined> | If<"parser", "minecraft:block_predicate", undefined> | If<"parser", "minecraft:item_stack", undefined> | If<"parser", "minecraft:item_predicate", undefined> | If<"parser", "minecraft:color", undefined> | If<"parser", "minecraft:component", undefined> | If<"parser", "minecraft:message", undefined> | If<"parser", "minecraft:nbt", undefined> | If<"parser", "minecraft:nbt_path", undefined> | If<"parser", "minecraft:objective", undefined> | If<"parser", "minecraft:objective_criteria", undefined> | If<"parser", "minecraft:operation", undefined> | If<"parser", "minecraft:particle", undefined> | If<"parser", "minecraft:angle", undefined> | If<"parser", "minecraft:rotation", undefined> | If<"parser", "minecraft:scoreboard_slot", undefined> | If<"parser", "minecraft:score_holder", {
				unused?: boolean;
				allowMultiple?: boolean;
			}> | If<"parser", "minecraft:swizzle", undefined> | If<"parser", "minecraft:team", undefined> | If<"parser", "minecraft:item_slot", undefined> | If<"parser", "minecraft:resource_location", undefined> | If<"parser", "minecraft:function", undefined> | If<"parser", "minecraft:entity_anchor", undefined> | If<"parser", "minecraft:int_range", undefined> | If<"parser", "minecraft:float_range", undefined> | If<"parser", "minecraft:dimension", undefined> | If<"parser", "minecraft:gamemode", undefined> | If<"parser", "minecraft:time", {
				min: number;
			}> | If<"parser", "minecraft:resource_or_tag", {
				registry: string;
			}> | If<"parser", "minecraft:resource_or_tag_key", {
				registry: string;
			}> | If<"parser", "minecraft:resource", {
				registry: string;
			}> | If<"parser", "minecraft:resource_key", {
				registry: string;
			}> | If<"parser", "minecraft:resource_selector", {
				registry: string;
			}> | If<"parser", "minecraft:template_mirror", undefined> | If<"parser", "minecraft:template_rotation", undefined> | If<"parser", "minecraft:heightmap", undefined> | If<"parser", "minecraft:uuid", undefined>;
			suggestionType: If<"../flags/has_custom_suggestions", "1", string>;
		};
	});
	export type PacketCommonSettings = {
		locale: string;
		viewDistance: number;
		chatFlags: number;
		chatColors: boolean;
		skinParts: number;
		mainHand: number;
		enableTextFiltering: boolean;
		enableServerListing: boolean;
		particleStatus: "all" | "decreased" | "minimal";
	};
	export type PacketCommonCookieRequest = {
		cookie: string;
	};
	export type PacketCommonStoreCookie = {
		key: string;
		value: ByteArray;
	};
	export type PacketCommonTransfer = {
		host: string;
		port: number;
	};
	export type PacketCommonCookieResponse = {
		key: string;
		value: ByteArray;
	};
	export type PacketCommonSelectKnownPacks = {
		packs: {
			namespace: string;
			id: string;
			version: string;
		}[];
	};
	export type PacketCommonCustomReportDetails = {
		details: {
			key: string;
			value: string;
		}[];
	};
	export type PacketCommonRemoveResourcePack = {
		uuid?: UUID;
	};
	export type PacketCommonAddResourcePack = {
		uuid: UUID;
		url: string;
		hash: string;
		forced: boolean;
		promptMessage?: NBT.Root;
	};
	export type ServerLinkType = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
	export type PacketCommonServerLinks = {
		links: {
			link: string;
		} & ({
			hasKnownType: true;
			knownType: ServerLinkType;
		} | {
			hasKnownType: false;
			unknownType: NBT.Root;
		})[];
	};
}

export namespace MCProtocol.PC_1_21_5.Handshake.Clientbound {
	export type Packet = void;
}

export namespace MCProtocol.PC_1_21_5.Handshake.Serverbound {
	export type PacketSetProtocol = {
		protocolVersion: number;
		serverHost: string;
		serverPort: number;
		nextState: number;
	};
	export type PacketLegacyServerListPing = {
		payload: number;
	};
	export type Packet = ({
		name: "set_protocol";
		params: PacketSetProtocol;
	} | {
		name: "legacy_server_list_ping";
		params: PacketLegacyServerListPing;
	});
}

export namespace MCProtocol.PC_1_21_5.Status.Clientbound {
	export type PacketServerInfo = {
		response: string;
	};
	export type PacketPing = {
		time: number;
	};
	export type Packet = ({
		name: "server_info";
		params: PacketServerInfo;
	} | {
		name: "ping";
		params: PacketPing;
	});
}

export namespace MCProtocol.PC_1_21_5.Status.Serverbound {
	export type PacketPingStart = void;
	export type PacketPing = {
		time: number;
	};
	export type Packet = ({
		name: "ping_start";
		params: PacketPingStart;
	} | {
		name: "ping";
		params: PacketPing;
	});
}

export namespace MCProtocol.PC_1_21_5.Login.Clientbound {
	export type PacketDisconnect = {
		reason: string;
	};
	export type PacketEncryptionBegin = {
		serverId: string;
		publicKey: Buffer;
		verifyToken: Buffer;
		shouldAuthenticate: boolean;
	};
	export type PacketSuccess = {
		uuid: MCProtocol.PC_1_21_5.Types.UUID;
		username: string;
		properties: {
			name: string;
			value: string;
			signature?: string;
		}[];
	};
	export type PacketCompress = {
		threshold: number;
	};
	export type PacketLoginPluginRequest = {
		messageId: number;
		channel: string;
		data: Buffer;
	};
	export type Packet = ({
		name: "disconnect";
		params: PacketDisconnect;
	} | {
		name: "encryption_begin";
		params: PacketEncryptionBegin;
	} | {
		name: "success";
		params: PacketSuccess;
	} | {
		name: "compress";
		params: PacketCompress;
	} | {
		name: "login_plugin_request";
		params: PacketLoginPluginRequest;
	} | {
		name: "cookie_request";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieRequest;
	});
}

export namespace MCProtocol.PC_1_21_5.Login.Serverbound {
	export type PacketLoginStart = {
		username: string;
		playerUUID: MCProtocol.PC_1_21_5.Types.UUID;
	};
	export type PacketEncryptionBegin = {
		sharedSecret: Buffer;
		verifyToken: Buffer;
	};
	export type PacketLoginPluginResponse = {
		messageId: number;
		data?: Buffer;
	};
	export type PacketLoginAcknowledged = void;
	export type Packet = ({
		name: "login_start";
		params: PacketLoginStart;
	} | {
		name: "encryption_begin";
		params: PacketEncryptionBegin;
	} | {
		name: "login_plugin_response";
		params: PacketLoginPluginResponse;
	} | {
		name: "login_acknowledged";
		params: PacketLoginAcknowledged;
	} | {
		name: "cookie_response";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieResponse;
	});
}

export namespace MCProtocol.PC_1_21_5.Config.Clientbound {
	export type PacketCustomPayload = {
		channel: string;
		data: Buffer;
	};
	export type PacketDisconnect = {
		reason: NBT.Root;
	};
	export type PacketFinishConfiguration = void;
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketPing = {
		id: number;
	};
	export type PacketResetChat = void;
	export type PacketRegistryData = {
		id: string;
		entries: {
			key: string;
			value?: NBT.Root;
		}[];
	};
	export type PacketFeatureFlags = {
		features: string[];
	};
	export type PacketTags = {
		tags: {
			tagType: string;
			tags: MCProtocol.PC_1_21_5.Types.Tags;
		}[];
	};
	export type Packet = ({
		name: "cookie_request";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieRequest;
	} | {
		name: "custom_payload";
		params: PacketCustomPayload;
	} | {
		name: "disconnect";
		params: PacketDisconnect;
	} | {
		name: "finish_configuration";
		params: PacketFinishConfiguration;
	} | {
		name: "keep_alive";
		params: PacketKeepAlive;
	} | {
		name: "ping";
		params: PacketPing;
	} | {
		name: "reset_chat";
		params: PacketResetChat;
	} | {
		name: "registry_data";
		params: PacketRegistryData;
	} | {
		name: "remove_resource_pack";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonRemoveResourcePack;
	} | {
		name: "add_resource_pack";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonAddResourcePack;
	} | {
		name: "store_cookie";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonStoreCookie;
	} | {
		name: "transfer";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonTransfer;
	} | {
		name: "feature_flags";
		params: PacketFeatureFlags;
	} | {
		name: "tags";
		params: PacketTags;
	} | {
		name: "select_known_packs";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonSelectKnownPacks;
	} | {
		name: "custom_report_details";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCustomReportDetails;
	} | {
		name: "server_links";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonServerLinks;
	});
}

export namespace MCProtocol.PC_1_21_5.Config.Serverbound {
	export type PacketCustomPayload = {
		channel: string;
		data: Buffer;
	};
	export type PacketFinishConfiguration = void;
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketPong = {
		id: number;
	};
	export type PacketResourcePackReceive = {
		uuid: MCProtocol.PC_1_21_5.Types.UUID;
		result: number;
	};
	export type Packet = ({
		name: "settings";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonSettings;
	} | {
		name: "cookie_response";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieResponse;
	} | {
		name: "custom_payload";
		params: PacketCustomPayload;
	} | {
		name: "finish_configuration";
		params: PacketFinishConfiguration;
	} | {
		name: "keep_alive";
		params: PacketKeepAlive;
	} | {
		name: "pong";
		params: PacketPong;
	} | {
		name: "resource_pack_receive";
		params: PacketResourcePackReceive;
	} | {
		name: "select_known_packs";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonSelectKnownPacks;
	} | {
		name: "custom_report_details";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCustomReportDetails;
	} | {
		name: "server_links";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonServerLinks;
	});
}

export namespace MCProtocol.PC_1_21_5.Play.Clientbound {
	export type SlotDisplay = ({
		type: "empty";
		data: undefined;
	} | {
		type: "any_fuel";
		data: undefined;
	} | {
		type: "item";
		data: number;
	} | {
		type: "item_stack";
		data: MCProtocol.PC_1_21_5.Types.Slot;
	} | {
		type: "tag";
		data: string;
	} | {
		type: "smithing_trim";
		data: {
			base: SlotDisplay;
			material: SlotDisplay;
			pattern: {
				patternId: number;
			} | {
				data: MCProtocol.PC_1_21_5.Types.ArmorTrimPattern;
			};
		};
	} | {
		type: "with_remainder";
		data: {
			input: SlotDisplay;
			remainder: SlotDisplay;
		};
	} | {
		type: "composite";
		data: SlotDisplay[];
	});
	export type RecipeDisplay = ({
		type: "crafting_shapeless";
		data: {
			ingredients: SlotDisplay[];
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		};
	} | {
		type: "crafting_shaped";
		data: {
			width: number;
			height: number;
			ingredients: SlotDisplay[];
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		};
	} | {
		type: "furnace";
		data: {
			ingredient: SlotDisplay;
			fuel: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
			duration: number;
			experience: number;
		};
	} | {
		type: "stonecutter";
		data: {
			ingredient: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		};
	} | {
		type: "smithing";
		data: {
			template: SlotDisplay;
			base: SlotDisplay;
			addition: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		};
	});
	export type SpawnInfo = {
		dimension: number;
		name: string;
		hashedSeed: number;
		gamemode: "survival" | "creative" | "adventure" | "spectator";
		previousGamemode: number;
		isDebug: boolean;
		isFlat: boolean;
		death?: {
			dimensionName: string;
			location: MCProtocol.PC_1_21_5.Types.Position;
		};
		portalCooldown: number;
		seaLevel: number;
	};
	export type PacketSpawnEntity = {
		entityId: number;
		objectUUID: MCProtocol.PC_1_21_5.Types.UUID;
		type: number;
		x: number;
		y: number;
		z: number;
		pitch: number;
		yaw: number;
		headPitch: number;
		objectData: number;
		velocityX: number;
		velocityY: number;
		velocityZ: number;
	};
	export type PacketAnimation = {
		entityId: number;
		animation: number;
	};
	export type PacketStatistics = {
		entries: {
			categoryId: number;
			statisticId: number;
			value: number;
		}[];
	};
	export type PacketAcknowledgePlayerDigging = {
		sequenceId: number;
	};
	export type PacketBlockBreakAnimation = {
		entityId: number;
		location: MCProtocol.PC_1_21_5.Types.Position;
		destroyStage: number;
	};
	export type PacketTileEntityData = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		action: number;
		nbtData?: NBT.Root;
	};
	export type PacketBlockAction = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		byte1: number;
		byte2: number;
		blockId: number;
	};
	export type PacketBlockChange = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		type: number;
	};
	export type PacketBossBar = {
		entityUUID: MCProtocol.PC_1_21_5.Types.UUID;
	} & ({
		action: 0;
		title: NBT.Root;
	} | {
		action: 3;
		title: NBT.Root;
	} | {
		action: 0;
		health: number;
	} | {
		action: 2;
		health: number;
	} | {
		action: 0;
		color: number;
	} | {
		action: 4;
		color: number;
	} | {
		action: 0;
		dividers: number;
	} | {
		action: 4;
		dividers: number;
	} | {
		action: 0;
		flags: number;
	} | {
		action: 5;
		flags: number;
	});
	export type PacketDifficulty = {
		difficulty: number;
		difficultyLocked: boolean;
	};
	export type PacketChunkBatchFinished = {
		batchSize: number;
	};
	export type PacketChunkBatchStart = void;
	export type PacketChunkBiomes = {
		biomes: {
			position: MCProtocol.PC_1_21_5.Types.PackedChunkPos;
			data: MCProtocol.PC_1_21_5.Types.ByteArray;
		}[];
	};
	export type PacketClearTitles = {
		reset: boolean;
	};
	export type PacketTabComplete = {
		transactionId: number;
		start: number;
		length: number;
		matches: {
			match: string;
			tooltip?: NBT.Root;
		}[];
	};
	export type PacketDeclareCommands = {
		nodes: MCProtocol.PC_1_21_5.Types.CommandNode[];
		rootIndex: number;
	};
	export type PacketCloseWindow = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
	};
	export type PacketWindowItems = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		stateId: number;
		items: MCProtocol.PC_1_21_5.Types.Slot[];
		carriedItem: MCProtocol.PC_1_21_5.Types.Slot;
	};
	export type PacketCraftProgressBar = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		property: number;
		value: number;
	};
	export type PacketSetSlot = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		stateId: number;
		slot: number;
		item: MCProtocol.PC_1_21_5.Types.Slot;
	};
	export type PacketSetCooldown = {
		cooldownGroup: string;
		cooldownTicks: number;
	};
	export type PacketChatSuggestions = {
		action: number;
		entries: string[];
	};
	export type PacketCustomPayload = {
		channel: string;
		data: Buffer;
	};
	export type PacketDamageEvent = {
		entityId: number;
		sourceTypeId: number;
		sourceCauseId: number;
		sourceDirectId: number;
		sourcePosition?: MCProtocol.PC_1_21_5.Types.Vec3f64;
	};
	export type PacketDebugSample = {
		sample: number[];
		type: number;
	};
	export type PacketHideMessage = ({
		id: 0;
		signature: Buffer;
	});
	export type PacketKickDisconnect = {
		reason: NBT.Root;
	};
	export type ChatTypeParameterType = "content" | "sender" | "target";
	export type ChatType = {
		translationKey: string;
		parameters: ChatTypeParameterType[];
		style: NBT.Root;
	};
	export type ChatTypes = {
		chat: ChatType;
		narration: ChatType;
	};
	export type ChatTypesHolder = {
		chatType: number;
	} | {
		data: ChatTypes;
	};
	export type PacketProfilelessChat = {
		message: NBT.Root;
		type: ChatTypesHolder;
		name: NBT.Root;
		target?: NBT.Root;
	};
	export type PacketEntityStatus = {
		entityId: number;
		entityStatus: number;
	};
	export type PacketSyncEntityPosition = {
		entityId: number;
		x: number;
		y: number;
		z: number;
		dx: number;
		dy: number;
		dz: number;
		yaw: number;
		pitch: number;
		onGround: boolean;
	};
	export type PacketExplosion = {
		x: number;
		y: number;
		z: number;
		playerKnockback?: MCProtocol.PC_1_21_5.Types.Vec3f;
		explosionParticle: MCProtocol.PC_1_21_5.Types.Particle;
		sound: MCProtocol.PC_1_21_5.Types.ItemSoundHolder;
	};
	export type PacketUnloadChunk = {
		chunkZ: number;
		chunkX: number;
	};
	export type PacketGameStateChange = {
		reason: number;
		gameMode: number;
	};
	export type PacketOpenHorseWindow = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		nbSlots: number;
		entityId: number;
	};
	export type PacketHurtAnimation = {
		entityId: number;
		yaw: number;
	};
	export type PacketInitializeWorldBorder = {
		x: number;
		z: number;
		oldDiameter: number;
		newDiameter: number;
		speed: number;
		portalTeleportBoundary: number;
		warningBlocks: number;
		warningTime: number;
	};
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketMapChunk = {
		x: number;
		z: number;
		heightmaps: {
			type: number;
			data: number[];
		}[];
		chunkData: MCProtocol.PC_1_21_5.Types.ByteArray;
		blockEntities: MCProtocol.PC_1_21_5.Types.ChunkBlockEntity[];
		skyLightMask: number[];
		blockLightMask: number[];
		emptySkyLightMask: number[];
		emptyBlockLightMask: number[];
		skyLight: number[][];
		blockLight: number[][];
	};
	export type PacketWorldEvent = {
		effectId: number;
		location: MCProtocol.PC_1_21_5.Types.Position;
		data: number;
		global: boolean;
	};
	export type PacketWorldParticles = {
		longDistance: boolean;
		alwaysShow: boolean;
		x: number;
		y: number;
		z: number;
		offsetX: number;
		offsetY: number;
		offsetZ: number;
		velocityOffset: number;
		amount: number;
		particle: MCProtocol.PC_1_21_5.Types.Particle;
	};
	export type PacketUpdateLight = {
		chunkX: number;
		chunkZ: number;
		skyLightMask: number[];
		blockLightMask: number[];
		emptySkyLightMask: number[];
		emptyBlockLightMask: number[];
		skyLight: number[][];
		blockLight: number[][];
	};
	export type PacketLogin = {
		entityId: number;
		isHardcore: boolean;
		worldNames: string[];
		maxPlayers: number;
		viewDistance: number;
		simulationDistance: number;
		reducedDebugInfo: boolean;
		enableRespawnScreen: boolean;
		doLimitedCrafting: boolean;
		worldState: SpawnInfo;
		enforcesSecureChat: boolean;
	};
	export type PacketMap = {
		itemDamage: number;
		scale: number;
		locked: boolean;
		icons?: {
			type: number;
			x: number;
			z: number;
			direction: number;
			displayName?: NBT.Root;
		}[];
	} & ({
		columns: 0;
		rows: undefined;
	} | {
		columns: never;
		rows: number;
	} | {
		columns: 0;
		x: undefined;
	} | {
		columns: never;
		x: number;
	} | {
		columns: 0;
		y: undefined;
	} | {
		columns: never;
		y: number;
	} | {
		columns: 0;
		data: undefined;
	} | {
		columns: never;
		data: Buffer;
	});
	export type PacketTradeList = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		trades: {
			inputItem1: {
				itemId: number;
				itemCount: number;
				components: MCProtocol.PC_1_21_5.Types.ExactComponentMatcher;
			};
			outputItem: MCProtocol.PC_1_21_5.Types.Slot;
			inputItem2?: {
				itemId: number;
				itemCount: number;
				components: MCProtocol.PC_1_21_5.Types.ExactComponentMatcher;
			};
			tradeDisabled: boolean;
			nbTradeUses: number;
			maximumNbTradeUses: number;
			xp: number;
			specialPrice: number;
			priceMultiplier: number;
			demand: number;
		}[];
		villagerLevel: number;
		experience: number;
		isRegularVillager: boolean;
		canRestock: boolean;
	};
	export type PacketRelEntityMove = {
		entityId: number;
		dX: number;
		dY: number;
		dZ: number;
		onGround: boolean;
	};
	export type PacketEntityMoveLook = {
		entityId: number;
		dX: number;
		dY: number;
		dZ: number;
		yaw: number;
		pitch: number;
		onGround: boolean;
	};
	export type PacketMoveMinecart = {
		entityId: number;
		steps: {
			position: MCProtocol.PC_1_21_5.Types.Vec3f;
			movement: MCProtocol.PC_1_21_5.Types.Vec3f;
			yaw: number;
			pitch: number;
			weight: number;
		}[];
	};
	export type PacketEntityLook = {
		entityId: number;
		yaw: number;
		pitch: number;
		onGround: boolean;
	};
	export type PacketVehicleMove = {
		x: number;
		y: number;
		z: number;
		yaw: number;
		pitch: number;
	};
	export type PacketOpenBook = {
		hand: number;
	};
	export type PacketOpenWindow = {
		windowId: number;
		inventoryType: number;
		windowTitle: NBT.Root;
	};
	export type PacketOpenSignEntity = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		isFrontText: boolean;
	};
	export type PacketPing = {
		id: number;
	};
	export type PacketPingResponse = {
		id: number;
	};
	export type PacketCraftRecipeResponse = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		recipeDisplay: RecipeDisplay;
	};
	export type PacketAbilities = {
		flags: number;
		flyingSpeed: number;
		walkingSpeed: number;
	};
	export type PacketPlayerChat = {
		globalIndex: number;
		senderUuid: MCProtocol.PC_1_21_5.Types.UUID;
		index: number;
		signature?: Buffer;
		plainMessage: string;
		timestamp: number;
		salt: number;
		previousMessages: MCProtocol.PC_1_21_5.Types.PreviousMessages;
		unsignedChatContent?: NBT.Root;
		type: ChatTypesHolder;
		networkName: NBT.Root;
		networkTargetName?: NBT.Root;
	} & ({
		filterType: 2;
		filterTypeMask: number[];
	});
	export type PacketEndCombatEvent = {
		duration: number;
	};
	export type PacketEnterCombatEvent = void;
	export type PacketDeathCombatEvent = {
		playerId: number;
		message: NBT.Root;
	};
	export type PacketPlayerRemove = {
		players: MCProtocol.PC_1_21_5.Types.UUID[];
	};
	export type PacketPlayerInfo = {
		action: {
			add_player?: boolean;
			initialize_chat?: boolean;
			update_game_mode?: boolean;
			update_listed?: boolean;
			update_latency?: boolean;
			update_display_name?: boolean;
			update_hat?: boolean;
			update_list_order?: boolean;
		};
		data: {
			uuid: MCProtocol.PC_1_21_5.Types.UUID;
		} & ({
			../action/add_player: true;
			player: MCProtocol.PC_1_21_5.Types.GameProfile;
		}) & ({
			../action/initialize_chat: true;
			chatSession: MCProtocol.PC_1_21_5.Types.ChatSession;
		}) & ({
			../action/update_game_mode: true;
			gamemode: number;
		}) & ({
			../action/update_listed: true;
			listed: number;
		}) & ({
			../action/update_latency: true;
			latency: number;
		}) & ({
			../action/update_display_name: true;
			displayName?: NBT.Root;
		}) & ({
			../action/update_list_order: true;
			listPriority: number;
		}) & ({
			../action/update_hat: true;
			showHat: boolean;
		})[];
	};
	export type PacketFacePlayer = {
		feet_eyes: number;
		x: number;
		y: number;
		z: number;
	} & ({
		isEntity: true;
		entityId: number;
	} | {
		isEntity: true;
		entity_feet_eyes: number;
	});
	export type PositionUpdateRelatives = {
		x?: boolean;
		y?: boolean;
		z?: boolean;
		yaw?: boolean;
		pitch?: boolean;
		dx?: boolean;
		dy?: boolean;
		dz?: boolean;
		yawDelta?: boolean;
	};
	export type PacketPosition = {
		teleportId: number;
		x: number;
		y: number;
		z: number;
		dx: number;
		dy: number;
		dz: number;
		yaw: number;
		pitch: number;
		flags: PositionUpdateRelatives;
	};
	export type PacketPlayerRotation = {
		yaw: number;
		pitch: number;
	};
	export type PacketRecipeBookAdd = {
		entries: {
			recipe: {
				displayId: number;
				display: RecipeDisplay;
				group: MCProtocol.PC_1_21_5.Types.Optvarint;
				category: "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_food" | "stonecutter" | "smithing" | "campfire";
				craftingRequirements?: MCProtocol.PC_1_21_5.Types.IDSet[];
			};
			flags: {
				notification?: boolean;
				highlight?: boolean;
			};
		}[];
		replace: boolean;
	};
	export type PacketRecipeBookRemove = {
		recipeIds: number[];
	};
	export type PacketRecipeBookSettings = {
		craftingGuiOpen: boolean;
		craftingFilteringCraftable: boolean;
		smeltingGuiOpen: boolean;
		smeltingFilteringCraftable: boolean;
		blastGuiOpen: boolean;
		blastFilteringCraftable: boolean;
		smokerGuiOpen: boolean;
		smokerFilteringCraftable: boolean;
	};
	export type PacketEntityDestroy = {
		entityIds: number[];
	};
	export type PacketRemoveEntityEffect = {
		entityId: number;
		effectId: number;
	};
	export type PacketResetScore = {
		entity_name: string;
		objective_name?: string;
	};
	export type PacketRespawn = {
		worldState: SpawnInfo;
		copyMetadata: number;
	};
	export type PacketEntityHeadRotation = {
		entityId: number;
		headYaw: number;
	};
	export type PacketMultiBlockChange = {
		chunkCoordinates: {
			x?: boolean;
			z?: boolean;
			y?: boolean;
		};
		records: number[];
	};
	export type PacketSelectAdvancementTab = {
		id?: string;
	};
	export type PacketServerData = {
		motd: NBT.Root;
		iconBytes?: MCProtocol.PC_1_21_5.Types.ByteArray;
	};
	export type PacketActionBar = {
		text: NBT.Root;
	};
	export type PacketWorldBorderCenter = {
		x: number;
		z: number;
	};
	export type PacketWorldBorderLerpSize = {
		oldDiameter: number;
		newDiameter: number;
		speed: number;
	};
	export type PacketWorldBorderSize = {
		diameter: number;
	};
	export type PacketWorldBorderWarningDelay = {
		warningTime: number;
	};
	export type PacketWorldBorderWarningReach = {
		warningBlocks: number;
	};
	export type PacketCamera = {
		cameraId: number;
	};
	export type PacketUpdateViewPosition = {
		chunkX: number;
		chunkZ: number;
	};
	export type PacketUpdateViewDistance = {
		viewDistance: number;
	};
	export type PacketSetCursorItem = {
		contents: MCProtocol.PC_1_21_5.Types.Slot;
	};
	export type PacketSpawnPosition = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		angle: number;
	};
	export type PacketScoreboardDisplayObjective = {
		position: number;
		name: string;
	};
	export type PacketEntityMetadata = {
		entityId: number;
		metadata: MCProtocol.PC_1_21_5.Types.EntityMetadata;
	};
	export type PacketAttachEntity = {
		entityId: number;
		vehicleId: number;
	};
	export type PacketEntityVelocity = {
		entityId: number;
		velocityX: number;
		velocityY: number;
		velocityZ: number;
	};
	export type PacketEntityEquipment = {
		entityId: number;
		equipments: `$$topBitSetTerminatedArray`;
	};
	export type PacketExperience = {
		experienceBar: number;
		level: number;
		totalExperience: number;
	};
	export type PacketUpdateHealth = {
		health: number;
		food: number;
		foodSaturation: number;
	};
	export type PacketHeldItemSlot = {
		slot: number;
	};
	export type PacketScoreboardObjective = {
		name: string;
	} & ({
		action: 0;
		displayText: NBT.Root;
	} | {
		action: 2;
		displayText: NBT.Root;
	} | {
		action: 0;
		type: number;
	} | {
		action: 2;
		type: number;
	} | {
		action: 0;
		number_format?: number;
	} | {
		action: 2;
		number_format?: number;
	} | {
		action: 0;
		styling: If<"number_format", "1", NBT.Root> | If<"number_format", "2", NBT.Root>;
	} | {
		action: 2;
		styling: If<"number_format", "1", NBT.Root> | If<"number_format", "2", NBT.Root>;
	});
	export type PacketSetPassengers = {
		entityId: number;
		passengers: number[];
	};
	export type PacketSetPlayerInventory = {
		slotId: number;
		contents: MCProtocol.PC_1_21_5.Types.Slot;
	};
	export type PacketTeams = {
		team: string;
	} & ({
		mode: 0;
		name: NBT.Root;
	} | {
		mode: 2;
		name: NBT.Root;
	} | {
		mode: 0;
		friendlyFire: number;
	} | {
		mode: 2;
		friendlyFire: number;
	} | {
		mode: 0;
		nameTagVisibility: number;
	} | {
		mode: 2;
		nameTagVisibility: number;
	} | {
		mode: 0;
		collisionRule: number;
	} | {
		mode: 2;
		collisionRule: number;
	} | {
		mode: 0;
		formatting: number;
	} | {
		mode: 2;
		formatting: number;
	} | {
		mode: 0;
		prefix: NBT.Root;
	} | {
		mode: 2;
		prefix: NBT.Root;
	} | {
		mode: 0;
		suffix: NBT.Root;
	} | {
		mode: 2;
		suffix: NBT.Root;
	} | {
		mode: 0;
		players: string[];
	} | {
		mode: 3;
		players: string[];
	} | {
		mode: 4;
		players: string[];
	});
	export type PacketScoreboardScore = {
		itemName: string;
		scoreName: string;
		value: number;
		display_name?: NBT.Root;
	} & ({
		number_format: 1;
		styling: NBT.Root;
	} | {
		number_format: 2;
		styling: NBT.Root;
	});
	export type PacketSimulationDistance = {
		distance: number;
	};
	export type PacketSetTitleSubtitle = {
		text: NBT.Root;
	};
	export type PacketUpdateTime = {
		age: number;
		time: number;
		tickDayTime: boolean;
	};
	export type PacketSetTitleText = {
		text: NBT.Root;
	};
	export type PacketSetTitleTime = {
		fadeIn: number;
		stay: number;
		fadeOut: number;
	};
	export type PacketEntitySoundEffect = {
		sound: MCProtocol.PC_1_21_5.Types.ItemSoundHolder;
		soundCategory: MCProtocol.PC_1_21_5.Types.SoundSource;
		entityId: number;
		volume: number;
		pitch: number;
		seed: number;
	};
	export type PacketSoundEffect = {
		sound: MCProtocol.PC_1_21_5.Types.ItemSoundHolder;
		soundCategory: MCProtocol.PC_1_21_5.Types.SoundSource;
		x: number;
		y: number;
		z: number;
		volume: number;
		pitch: number;
		seed: number;
	};
	export type PacketStartConfiguration = void;
	export type PacketStopSound = ({
		flags: 1;
		source: number;
	} | {
		flags: 3;
		source: number;
	} | {
		flags: 2;
		sound: string;
	} | {
		flags: 3;
		sound: string;
	});
	export type PacketSystemChat = {
		content: NBT.Root;
		isActionBar: boolean;
	};
	export type PacketPlayerlistHeader = {
		header: NBT.Root;
		footer: NBT.Root;
	};
	export type PacketNbtQueryResponse = {
		transactionId: number;
		nbt?: NBT.Root;
	};
	export type PacketCollect = {
		collectedEntityId: number;
		collectorEntityId: number;
		pickupItemCount: number;
	};
	export type PacketEntityTeleport = {
		entityId: number;
		x: number;
		y: number;
		z: number;
		yaw: number;
		pitch: number;
		onGround: boolean;
	};
	export type PacketTestInstanceBlockStatus = {
		status: NBT.Root;
		size?: MCProtocol.PC_1_21_5.Types.Vec3i;
	};
	export type PacketSetTickingState = {
		tick_rate: number;
		is_frozen: boolean;
	};
	export type PacketStepTick = {
		tick_steps: number;
	};
	export type PacketAdvancements = {
		reset: boolean;
		advancementMapping: {
			key: string;
			value: {
				parentId?: string;
				displayData?: {
					title: NBT.Root;
					description: NBT.Root;
					icon: MCProtocol.PC_1_21_5.Types.Slot;
					frameType: number;
					flags: {
						unused?: boolean;
						hidden?: boolean;
						show_toast?: boolean;
						has_background_texture?: boolean;
					};
					xCord: number;
					yCord: number;
				} & ({
					flags/has_background_texture: 1;
					backgroundTexture: string;
				});
				requirements: string[][];
				sendsTelemtryData: boolean;
			};
		}[];
		identifiers: string[];
		progressMapping: {
			key: string;
			value: {
				criterionIdentifier: string;
				criterionProgress?: number;
			}[];
		}[];
		showAdvancements: boolean;
	};
	export type PacketEntityUpdateAttributes = {
		entityId: number;
		properties: {
			key: "generic.armor" | "generic.armor_toughness" | "generic.attack_damage" | "generic.attack_knockback" | "generic.attack_speed" | "player.block_break_speed" | "player.block_interaction_range" | "player.entity_interaction_range" | "generic.fall_damage_multiplier" | "generic.flying_speed" | "generic.follow_range" | "generic.gravity" | "generic.jump_strength" | "generic.knockback_resistance" | "generic.luck" | "generic.max_absorption" | "generic.max_health" | "generic.movement_speed" | "generic.safe_fall_distance" | "generic.scale" | "zombie.spawn_reinforcements" | "generic.step_height";
			value: number;
			modifiers: {
				uuid: string;
				amount: number;
				operation: number;
			}[];
		}[];
	};
	export type PacketEntityEffect = {
		entityId: number;
		effectId: number;
		amplifier: number;
		duration: number;
		flags: number;
	};
	export type PacketDeclareRecipes = {
		recipes: {
			name: string;
			items: number[];
		}[];
		stoneCutterRecipes: {
			input: MCProtocol.PC_1_21_5.Types.IDSet;
			slotDisplay: SlotDisplay;
		}[];
	};
	export type PacketTags = {
		tags: {
			tagType: string;
			tags: MCProtocol.PC_1_21_5.Types.Tags;
		}[];
	};
	export type PacketSetProjectilePower = {
		id: number;
		accelerationPower: number;
	};
	export type Packet = ({
		name: "bundle_delimiter";
		params: undefined;
	} | {
		name: "spawn_entity";
		params: PacketSpawnEntity;
	} | {
		name: "animation";
		params: PacketAnimation;
	} | {
		name: "statistics";
		params: PacketStatistics;
	} | {
		name: "acknowledge_player_digging";
		params: PacketAcknowledgePlayerDigging;
	} | {
		name: "block_break_animation";
		params: PacketBlockBreakAnimation;
	} | {
		name: "tile_entity_data";
		params: PacketTileEntityData;
	} | {
		name: "block_action";
		params: PacketBlockAction;
	} | {
		name: "block_change";
		params: PacketBlockChange;
	} | {
		name: "boss_bar";
		params: PacketBossBar;
	} | {
		name: "difficulty";
		params: PacketDifficulty;
	} | {
		name: "chunk_batch_finished";
		params: PacketChunkBatchFinished;
	} | {
		name: "chunk_batch_start";
		params: PacketChunkBatchStart;
	} | {
		name: "chunk_biomes";
		params: PacketChunkBiomes;
	} | {
		name: "clear_titles";
		params: PacketClearTitles;
	} | {
		name: "tab_complete";
		params: PacketTabComplete;
	} | {
		name: "declare_commands";
		params: PacketDeclareCommands;
	} | {
		name: "close_window";
		params: PacketCloseWindow;
	} | {
		name: "window_items";
		params: PacketWindowItems;
	} | {
		name: "craft_progress_bar";
		params: PacketCraftProgressBar;
	} | {
		name: "set_slot";
		params: PacketSetSlot;
	} | {
		name: "cookie_request";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieRequest;
	} | {
		name: "set_cooldown";
		params: PacketSetCooldown;
	} | {
		name: "chat_suggestions";
		params: PacketChatSuggestions;
	} | {
		name: "custom_payload";
		params: PacketCustomPayload;
	} | {
		name: "damage_event";
		params: PacketDamageEvent;
	} | {
		name: "debug_sample";
		params: PacketDebugSample;
	} | {
		name: "hide_message";
		params: PacketHideMessage;
	} | {
		name: "kick_disconnect";
		params: PacketKickDisconnect;
	} | {
		name: "profileless_chat";
		params: PacketProfilelessChat;
	} | {
		name: "entity_status";
		params: PacketEntityStatus;
	} | {
		name: "sync_entity_position";
		params: PacketSyncEntityPosition;
	} | {
		name: "explosion";
		params: PacketExplosion;
	} | {
		name: "unload_chunk";
		params: PacketUnloadChunk;
	} | {
		name: "game_state_change";
		params: PacketGameStateChange;
	} | {
		name: "open_horse_window";
		params: PacketOpenHorseWindow;
	} | {
		name: "hurt_animation";
		params: PacketHurtAnimation;
	} | {
		name: "initialize_world_border";
		params: PacketInitializeWorldBorder;
	} | {
		name: "keep_alive";
		params: PacketKeepAlive;
	} | {
		name: "map_chunk";
		params: PacketMapChunk;
	} | {
		name: "world_event";
		params: PacketWorldEvent;
	} | {
		name: "world_particles";
		params: PacketWorldParticles;
	} | {
		name: "update_light";
		params: PacketUpdateLight;
	} | {
		name: "login";
		params: PacketLogin;
	} | {
		name: "map";
		params: PacketMap;
	} | {
		name: "trade_list";
		params: PacketTradeList;
	} | {
		name: "rel_entity_move";
		params: PacketRelEntityMove;
	} | {
		name: "entity_move_look";
		params: PacketEntityMoveLook;
	} | {
		name: "move_minecart";
		params: PacketMoveMinecart;
	} | {
		name: "entity_look";
		params: PacketEntityLook;
	} | {
		name: "vehicle_move";
		params: PacketVehicleMove;
	} | {
		name: "open_book";
		params: PacketOpenBook;
	} | {
		name: "open_window";
		params: PacketOpenWindow;
	} | {
		name: "open_sign_entity";
		params: PacketOpenSignEntity;
	} | {
		name: "ping";
		params: PacketPing;
	} | {
		name: "ping_response";
		params: PacketPingResponse;
	} | {
		name: "craft_recipe_response";
		params: PacketCraftRecipeResponse;
	} | {
		name: "abilities";
		params: PacketAbilities;
	} | {
		name: "player_chat";
		params: PacketPlayerChat;
	} | {
		name: "end_combat_event";
		params: PacketEndCombatEvent;
	} | {
		name: "enter_combat_event";
		params: PacketEnterCombatEvent;
	} | {
		name: "death_combat_event";
		params: PacketDeathCombatEvent;
	} | {
		name: "player_remove";
		params: PacketPlayerRemove;
	} | {
		name: "player_info";
		params: PacketPlayerInfo;
	} | {
		name: "face_player";
		params: PacketFacePlayer;
	} | {
		name: "position";
		params: PacketPosition;
	} | {
		name: "player_rotation";
		params: PacketPlayerRotation;
	} | {
		name: "recipe_book_add";
		params: PacketRecipeBookAdd;
	} | {
		name: "recipe_book_remove";
		params: PacketRecipeBookRemove;
	} | {
		name: "recipe_book_settings";
		params: PacketRecipeBookSettings;
	} | {
		name: "entity_destroy";
		params: PacketEntityDestroy;
	} | {
		name: "remove_entity_effect";
		params: PacketRemoveEntityEffect;
	} | {
		name: "reset_score";
		params: PacketResetScore;
	} | {
		name: "remove_resource_pack";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonRemoveResourcePack;
	} | {
		name: "add_resource_pack";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonAddResourcePack;
	} | {
		name: "respawn";
		params: PacketRespawn;
	} | {
		name: "entity_head_rotation";
		params: PacketEntityHeadRotation;
	} | {
		name: "multi_block_change";
		params: PacketMultiBlockChange;
	} | {
		name: "select_advancement_tab";
		params: PacketSelectAdvancementTab;
	} | {
		name: "server_data";
		params: PacketServerData;
	} | {
		name: "action_bar";
		params: PacketActionBar;
	} | {
		name: "world_border_center";
		params: PacketWorldBorderCenter;
	} | {
		name: "world_border_lerp_size";
		params: PacketWorldBorderLerpSize;
	} | {
		name: "world_border_size";
		params: PacketWorldBorderSize;
	} | {
		name: "world_border_warning_delay";
		params: PacketWorldBorderWarningDelay;
	} | {
		name: "world_border_warning_reach";
		params: PacketWorldBorderWarningReach;
	} | {
		name: "camera";
		params: PacketCamera;
	} | {
		name: "update_view_position";
		params: PacketUpdateViewPosition;
	} | {
		name: "update_view_distance";
		params: PacketUpdateViewDistance;
	} | {
		name: "set_cursor_item";
		params: PacketSetCursorItem;
	} | {
		name: "held_item_slot";
		params: PacketHeldItemSlot;
	} | {
		name: "spawn_position";
		params: PacketSpawnPosition;
	} | {
		name: "scoreboard_display_objective";
		params: PacketScoreboardDisplayObjective;
	} | {
		name: "entity_metadata";
		params: PacketEntityMetadata;
	} | {
		name: "attach_entity";
		params: PacketAttachEntity;
	} | {
		name: "entity_velocity";
		params: PacketEntityVelocity;
	} | {
		name: "entity_equipment";
		params: PacketEntityEquipment;
	} | {
		name: "experience";
		params: PacketExperience;
	} | {
		name: "update_health";
		params: PacketUpdateHealth;
	} | {
		name: "scoreboard_objective";
		params: PacketScoreboardObjective;
	} | {
		name: "set_passengers";
		params: PacketSetPassengers;
	} | {
		name: "set_player_inventory";
		params: PacketSetPlayerInventory;
	} | {
		name: "teams";
		params: PacketTeams;
	} | {
		name: "scoreboard_score";
		params: PacketScoreboardScore;
	} | {
		name: "simulation_distance";
		params: PacketSimulationDistance;
	} | {
		name: "set_title_subtitle";
		params: PacketSetTitleSubtitle;
	} | {
		name: "update_time";
		params: PacketUpdateTime;
	} | {
		name: "set_title_text";
		params: PacketSetTitleText;
	} | {
		name: "set_title_time";
		params: PacketSetTitleTime;
	} | {
		name: "entity_sound_effect";
		params: PacketEntitySoundEffect;
	} | {
		name: "sound_effect";
		params: PacketSoundEffect;
	} | {
		name: "start_configuration";
		params: PacketStartConfiguration;
	} | {
		name: "stop_sound";
		params: PacketStopSound;
	} | {
		name: "store_cookie";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonStoreCookie;
	} | {
		name: "system_chat";
		params: PacketSystemChat;
	} | {
		name: "playerlist_header";
		params: PacketPlayerlistHeader;
	} | {
		name: "nbt_query_response";
		params: PacketNbtQueryResponse;
	} | {
		name: "collect";
		params: PacketCollect;
	} | {
		name: "entity_teleport";
		params: PacketEntityTeleport;
	} | {
		name: "test_instance_block_status";
		params: PacketTestInstanceBlockStatus;
	} | {
		name: "set_ticking_state";
		params: PacketSetTickingState;
	} | {
		name: "step_tick";
		params: PacketStepTick;
	} | {
		name: "transfer";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonTransfer;
	} | {
		name: "advancements";
		params: PacketAdvancements;
	} | {
		name: "entity_update_attributes";
		params: PacketEntityUpdateAttributes;
	} | {
		name: "entity_effect";
		params: PacketEntityEffect;
	} | {
		name: "declare_recipes";
		params: PacketDeclareRecipes;
	} | {
		name: "tags";
		params: PacketTags;
	} | {
		name: "set_projectile_power";
		params: PacketSetProjectilePower;
	} | {
		name: "custom_report_details";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCustomReportDetails;
	} | {
		name: "server_links";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonServerLinks;
	});
}

export namespace MCProtocol.PC_1_21_5.Play.Serverbound {
	export type PacketTeleportConfirm = {
		teleportId: number;
	};
	export type PacketQueryBlockNbt = {
		transactionId: number;
		location: MCProtocol.PC_1_21_5.Types.Position;
	};
	export type PacketSelectBundleItem = {
		slotId: number;
		selectedItemIndex: number;
	};
	export type PacketSetDifficulty = {
		newDifficulty: number;
	};
	export type PacketMessageAcknowledgement = {
		count: number;
	};
	export type PacketChatCommand = {
		command: string;
	};
	export type PacketChatCommandSigned = {
		command: string;
		timestamp: number;
		salt: number;
		argumentSignatures: {
			argumentName: string;
			signature: Buffer;
		}[];
		messageCount: number;
		acknowledged: Buffer;
		checksum: number;
	};
	export type PacketChatMessage = {
		message: string;
		timestamp: number;
		salt: number;
		signature?: Buffer;
		offset: number;
		acknowledged: Buffer;
		checksum: number;
	};
	export type PacketChatSessionUpdate = {
		sessionUUID: MCProtocol.PC_1_21_5.Types.UUID;
		expireTime: number;
		publicKey: MCProtocol.PC_1_21_5.Types.ByteArray;
		signature: MCProtocol.PC_1_21_5.Types.ByteArray;
	};
	export type PacketChunkBatchReceived = {
		chunksPerTick: number;
	};
	export type PacketClientCommand = {
		actionId: number;
	};
	export type PacketTickEnd = void;
	export type PacketTabComplete = {
		transactionId: number;
		text: string;
	};
	export type PacketConfigurationAcknowledged = void;
	export type PacketEnchantItem = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		enchantment: number;
	};
	export type PacketWindowClick = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		stateId: number;
		slot: number;
		mouseButton: number;
		mode: number;
		changedSlots: {
			location: number;
			item?: MCProtocol.PC_1_21_5.Types.HashedSlot;
		}[];
		cursorItem?: MCProtocol.PC_1_21_5.Types.HashedSlot;
	};
	export type PacketCloseWindow = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
	};
	export type PacketSetSlotState = {
		slot_id: number;
		window_id: MCProtocol.PC_1_21_5.Types.ContainerID;
		state: boolean;
	};
	export type PacketCustomPayload = {
		channel: string;
		data: Buffer;
	};
	export type PacketDebugSampleSubscription = {
		type: number;
	};
	export type PacketEditBook = {
		hand: number;
		pages: string[];
		title?: string;
	};
	export type PacketQueryEntityNbt = {
		transactionId: number;
		entityId: number;
	};
	export type PacketUseEntity = {
		target: number;
		sneaking: boolean;
	} & ({
		mouse: 2;
		x: number;
	} | {
		mouse: 2;
		y: number;
	} | {
		mouse: 2;
		z: number;
	} | {
		mouse: 0;
		hand: number;
	} | {
		mouse: 2;
		hand: number;
	});
	export type PacketGenerateStructure = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		levels: number;
		keepJigsaws: boolean;
	};
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketLockDifficulty = {
		locked: boolean;
	};
	export type MovementFlags = {
		onGround?: boolean;
		hasHorizontalCollision?: boolean;
	};
	export type PacketPosition = {
		x: number;
		y: number;
		z: number;
		flags: MovementFlags;
	};
	export type PacketPositionLook = {
		x: number;
		y: number;
		z: number;
		yaw: number;
		pitch: number;
		flags: MovementFlags;
	};
	export type PacketLook = {
		yaw: number;
		pitch: number;
		flags: MovementFlags;
	};
	export type PacketFlying = {
		flags: MovementFlags;
	};
	export type PacketVehicleMove = {
		x: number;
		y: number;
		z: number;
		yaw: number;
		pitch: number;
		onGround: boolean;
	};
	export type PacketSteerBoat = {
		leftPaddle: boolean;
		rightPaddle: boolean;
	};
	export type PacketPickItemFromBlock = {
		position: MCProtocol.PC_1_21_5.Types.Position;
		includeData: boolean;
	};
	export type PacketPickItemFromEntity = {
		entityId: number;
		includeData: boolean;
	};
	export type PacketPingRequest = {
		id: number;
	};
	export type PacketCraftRecipeRequest = {
		windowId: MCProtocol.PC_1_21_5.Types.ContainerID;
		recipeId: number;
		makeAll: boolean;
	};
	export type PacketAbilities = {
		flags: number;
	};
	export type PacketBlockDig = {
		status: number;
		location: MCProtocol.PC_1_21_5.Types.Position;
		face: number;
		sequence: number;
	};
	export type PacketEntityAction = {
		entityId: number;
		actionId: number;
		jumpBoost: number;
	};
	export type PacketPlayerInput = {
		inputs: {
			forward?: boolean;
			backward?: boolean;
			left?: boolean;
			right?: boolean;
			jump?: boolean;
			shift?: boolean;
			sprint?: boolean;
		};
	};
	export type PacketPlayerLoaded = void;
	export type PacketPong = {
		id: number;
	};
	export type PacketRecipeBook = {
		bookId: number;
		bookOpen: boolean;
		filterActive: boolean;
	};
	export type PacketDisplayedRecipe = {
		recipeId: number;
	};
	export type PacketNameItem = {
		name: string;
	};
	export type PacketResourcePackReceive = {
		uuid: MCProtocol.PC_1_21_5.Types.UUID;
		result: number;
	};
	export type PacketAdvancementTab = ({
		action: 0;
		tabId: string;
	} | {
		action: 1;
		tabId: undefined;
	});
	export type PacketSelectTrade = {
		slot: number;
	};
	export type PacketSetBeaconEffect = {
		primary_effect?: number;
		secondary_effect?: number;
	};
	export type PacketHeldItemSlot = {
		slotId: number;
	};
	export type PacketUpdateCommandBlock = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		command: string;
		mode: number;
		flags: number;
	};
	export type PacketUpdateCommandBlockMinecart = {
		entityId: number;
		command: string;
		track_output: boolean;
	};
	export type PacketSetCreativeSlot = {
		slot: number;
		item: MCProtocol.PC_1_21_5.Types.UntrustedSlot;
	};
	export type PacketUpdateJigsawBlock = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		name: string;
		target: string;
		pool: string;
		finalState: string;
		jointType: string;
		selection_priority: number;
		placement_priority: number;
	};
	export type PacketUpdateStructureBlock = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		action: number;
		mode: number;
		name: string;
		offset_x: number;
		offset_y: number;
		offset_z: number;
		size_x: number;
		size_y: number;
		size_z: number;
		mirror: number;
		rotation: number;
		metadata: string;
		integrity: number;
		seed: number;
		flags: "ignore_entities" | "show_air" | "show_bounding_box" | "strict";
	};
	export type PacketSetTestBlock = {
		position: MCProtocol.PC_1_21_5.Types.Position;
		mode: number;
		message: string;
	};
	export type PacketUpdateSign = {
		location: MCProtocol.PC_1_21_5.Types.Position;
		isFrontText: boolean;
		text1: string;
		text2: string;
		text3: string;
		text4: string;
	};
	export type PacketArmAnimation = {
		hand: number;
	};
	export type PacketSpectate = {
		target: MCProtocol.PC_1_21_5.Types.UUID;
	};
	export type PacketTestInstanceBlockAction = {
		pos: MCProtocol.PC_1_21_5.Types.Position;
		action: number;
		data: {
			test?: string;
			size: MCProtocol.PC_1_21_5.Types.Vec3i;
			rotation: number;
			ignoreEntities: boolean;
			status: number;
			errorMessage?: NBT.Root;
		};
	};
	export type PacketBlockPlace = {
		hand: number;
		location: MCProtocol.PC_1_21_5.Types.Position;
		direction: number;
		cursorX: number;
		cursorY: number;
		cursorZ: number;
		insideBlock: boolean;
		worldBorderHit: boolean;
		sequence: number;
	};
	export type PacketUseItem = {
		hand: number;
		sequence: number;
		rotation: MCProtocol.PC_1_21_5.Types.Vec2f;
	};
	export type Packet = ({
		name: "teleport_confirm";
		params: PacketTeleportConfirm;
	} | {
		name: "query_block_nbt";
		params: PacketQueryBlockNbt;
	} | {
		name: "select_bundle_item";
		params: PacketSelectBundleItem;
	} | {
		name: "set_difficulty";
		params: PacketSetDifficulty;
	} | {
		name: "message_acknowledgement";
		params: PacketMessageAcknowledgement;
	} | {
		name: "chat_command";
		params: PacketChatCommand;
	} | {
		name: "chat_command_signed";
		params: PacketChatCommandSigned;
	} | {
		name: "chat_message";
		params: PacketChatMessage;
	} | {
		name: "chat_session_update";
		params: PacketChatSessionUpdate;
	} | {
		name: "chunk_batch_received";
		params: PacketChunkBatchReceived;
	} | {
		name: "client_command";
		params: PacketClientCommand;
	} | {
		name: "tick_end";
		params: PacketTickEnd;
	} | {
		name: "settings";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonSettings;
	} | {
		name: "tab_complete";
		params: PacketTabComplete;
	} | {
		name: "configuration_acknowledged";
		params: PacketConfigurationAcknowledged;
	} | {
		name: "enchant_item";
		params: PacketEnchantItem;
	} | {
		name: "window_click";
		params: PacketWindowClick;
	} | {
		name: "close_window";
		params: PacketCloseWindow;
	} | {
		name: "set_slot_state";
		params: PacketSetSlotState;
	} | {
		name: "cookie_response";
		params: MCProtocol.PC_1_21_5.Types.PacketCommonCookieResponse;
	} | {
		name: "custom_payload";
		params: PacketCustomPayload;
	} | {
		name: "edit_book";
		params: PacketEditBook;
	} | {
		name: "query_entity_nbt";
		params: PacketQueryEntityNbt;
	} | {
		name: "use_entity";
		params: PacketUseEntity;
	} | {
		name: "generate_structure";
		params: PacketGenerateStructure;
	} | {
		name: "keep_alive";
		params: PacketKeepAlive;
	} | {
		name: "lock_difficulty";
		params: PacketLockDifficulty;
	} | {
		name: "position";
		params: PacketPosition;
	} | {
		name: "position_look";
		params: PacketPositionLook;
	} | {
		name: "look";
		params: PacketLook;
	} | {
		name: "flying";
		params: PacketFlying;
	} | {
		name: "vehicle_move";
		params: PacketVehicleMove;
	} | {
		name: "steer_boat";
		params: PacketSteerBoat;
	} | {
		name: "pick_item_from_block";
		params: PacketPickItemFromBlock;
	} | {
		name: "pick_item_from_entity";
		params: PacketPickItemFromEntity;
	} | {
		name: "ping_request";
		params: PacketPingRequest;
	} | {
		name: "craft_recipe_request";
		params: PacketCraftRecipeRequest;
	} | {
		name: "abilities";
		params: PacketAbilities;
	} | {
		name: "block_dig";
		params: PacketBlockDig;
	} | {
		name: "entity_action";
		params: PacketEntityAction;
	} | {
		name: "player_input";
		params: PacketPlayerInput;
	} | {
		name: "player_loaded";
		params: PacketPlayerLoaded;
	} | {
		name: "pong";
		params: PacketPong;
	} | {
		name: "recipe_book";
		params: PacketRecipeBook;
	} | {
		name: "displayed_recipe";
		params: PacketDisplayedRecipe;
	} | {
		name: "name_item";
		params: PacketNameItem;
	} | {
		name: "resource_pack_receive";
		params: PacketResourcePackReceive;
	} | {
		name: "advancement_tab";
		params: PacketAdvancementTab;
	} | {
		name: "select_trade";
		params: PacketSelectTrade;
	} | {
		name: "set_beacon_effect";
		params: PacketSetBeaconEffect;
	} | {
		name: "held_item_slot";
		params: PacketHeldItemSlot;
	} | {
		name: "update_command_block";
		params: PacketUpdateCommandBlock;
	} | {
		name: "update_command_block_minecart";
		params: PacketUpdateCommandBlockMinecart;
	} | {
		name: "set_creative_slot";
		params: PacketSetCreativeSlot;
	} | {
		name: "update_jigsaw_block";
		params: PacketUpdateJigsawBlock;
	} | {
		name: "update_structure_block";
		params: PacketUpdateStructureBlock;
	} | {
		name: "set_test_block";
		params: PacketSetTestBlock;
	} | {
		name: "update_sign";
		params: PacketUpdateSign;
	} | {
		name: "arm_animation";
		params: PacketArmAnimation;
	} | {
		name: "test_instance_block_action";
		params: PacketTestInstanceBlockAction;
	} | {
		name: "spectate";
		params: PacketSpectate;
	} | {
		name: "block_place";
		params: PacketBlockPlace;
	} | {
		name: "use_item";
		params: PacketUseItem;
	});
}