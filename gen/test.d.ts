export namespace MCProtocol.Pc_1_21_5.Types {
	export type Varlong = unique symbol;
	export type Optvarint = number;
	export type UUID = unique symbol;
	export type EntityMetadataLoop = unique symbol;
	export type TopBitSetTerminatedArray = unique symbol;
	export type RestBuffer = unique symbol;
	export type AnonymousNbt = unique symbol;
	export type AnonOptionalNbt = unique symbol;
	export type RegistryEntryHolder = unique symbol;
	export type RegistryEntryHolderSet = unique symbol;
	export type ByteArray = Buffer;
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
	export type IDSet = `$$registryEntryHolderSet`;
	export type ContainerID = number;
	export type SlotComponentType = "custom_data" | "max_stack_size" | "max_damage" | "damage" | "unbreakable" | "custom_name" | "item_name" | "item_model" | "lore" | "rarity" | "enchantments" | "can_place_on" | "can_break" | "attribute_modifiers" | "custom_model_data" | "tooltip_display" | "repair_cost" | "creative_slot_lock" | "enchantment_glint_override" | "intangible_projectile" | "food" | "consumable" | "use_remainder" | "use_cooldown" | "damage_resistant" | "tool" | "weapon" | "enchantable" | "equippable" | "repairable" | "glider" | "tooltip_style" | "death_protection" | "blocks_attacks" | "stored_enchantments" | "dyed_color" | "map_color" | "map_id" | "map_decorations" | "map_post_processing" | "potion_duration_scale" | "charged_projectiles" | "bundle_contents" | "potion_contents" | "suspicious_stew_effects" | "writable_book_content" | "written_book_content" | "trim" | "debug_stick_state" | "entity_data" | "bucket_entity_data" | "block_entity_data" | "instrument" | "provides_trim_material" | "ominous_bottle_amplifier" | "jukebox_playable" | "provides_banner_patterns" | "recipes" | "lodestone_tracker" | "firework_explosion" | "fireworks" | "profile" | "note_block_sound" | "banner_patterns" | "base_color" | "pot_decorations" | "container" | "block_state" | "bees" | "lock" | "container_loot" | "break_sound" | "villager/variant" | "wolf/variant" | "wolf/sound_variant" | "wolf/collar" | "fox/variant" | "salmon/size" | "parrot/variant" | "tropical_fish/pattern" | "tropical_fish/base_color" | "tropical_fish/pattern_color" | "mooshroom/variant" | "rabbit/variant" | "pig/variant" | "cow/variant" | "chicken/variant" | "frog/variant" | "horse/variant" | "painting/variant" | "llama/variant" | "axolotl/variant" | "cat/variant" | "cat/collar" | "sheep/color" | "shulker/color";
	export type SlotComponent = {
		type: SlotComponentType;
		data: (AnonymousNbt) | (number) | (number) | (number) | (undefined | null) | (AnonymousNbt) | (AnonymousNbt) | (string) | ((
			AnonOptionalNbt
		)[]) | ("common" | "uncommon" | "rare" | "epic") | ({
			enchantments: (
				{
					id: number;
					level: number;
				}
			)[];
		}) | ({
			predicates: (
				ItemBlockPredicate
			)[];
		}) | ({
			predicates: (
				ItemBlockPredicate
			)[];
		}) | ({
			attributes: (
				{
					typeId: number;
					name: string;
					value: number;
					operation: "add" | "multiply_base" | "multiply_total";
					slot: "any" | "main_hand" | "off_hand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body" | "saddle";
				}
			)[];
			showTooltip: boolean;
		}) | ({
			floats: (
				number
			)[];
			flags: (
				boolean
			)[];
			strings: (
				string
			)[];
			colors: (
				number
			)[];
		}) | ({
			hideTooltip: boolean;
			hiddenComponents: (
				number
			)[];
		}) | (number) | (undefined | null) | (boolean) | (undefined | null) | ({
			blockDelaySeconds: number;
			disableCooldownScale: number;
			damageReductions: (
				{
					horizontalBlockingAngle: number;
					type: IDSet | null | undefined;
					base: number;
					factor: number;
				}
			)[];
			itemDamage: {
				threshold: number;
				base: number;
				factor: number;
			};
			bypassedBy: string | null | undefined;
			blockSound: ItemSoundHolder | null | undefined;
			disableSound: ItemSoundHolder | null | undefined;
		}) | ({
			nutrition: number;
			saturationModifier: number;
			canAlwaysEat: boolean;
		}) | ({
			consume_seconds: number;
			animation: "none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "bundle";
			sound: ItemSoundHolder;
			makes_particles: boolean;
			effects: (
				ItemConsumeEffect
			)[];
		}) | (Slot) | ({
			seconds: number;
			cooldownGroup: string | null | undefined;
		}) | (string) | ({
			rules: (
				{
					blocks: IDSet;
					speed: number | null | undefined;
					correctDropForBlocks: boolean | null | undefined;
				}
			)[];
			defaultMiningSpeed: number;
			damagePerBlock: number;
			canDestroyBlocksInCreative: boolean;
		}) | ({
			itemDamagePerAttack: number;
			disableBlockingForSeconds: number;
		}) | (number) | ({
			slot: "main_hand" | "off_hand" | "feet" | "legs" | "chest" | "head" | "body" | "saddle";
			sound: ItemSoundHolder;
			model: string | null | undefined;
			cameraOverlay: string | null | undefined;
			allowedEntities: IDSet | null | undefined;
			dispensable: boolean;
			swappable: boolean;
			damageable: boolean;
			equipOnInteract: boolean;
		}) | ({
			items: IDSet;
		}) | (undefined | null) | (string) | ({
			effects: (
				ItemConsumeEffect
			)[];
		}) | ({
			enchantments: (
				{
					id: number;
					level: number;
				}
			)[];
		}) | (number) | (number) | (number) | (AnonymousNbt) | (number) | (number) | ({
			projectiles: (
				Slot
			)[];
		}) | ({
			contents: (
				Slot
			)[];
		}) | ({
			potionId: number | null | undefined;
			customColor: number | null | undefined;
			customEffects: (
				ItemPotionEffect
			)[];
			customName: string | null | undefined;
		}) | ({
			effects: (
				{
					effect: number;
					duration: number;
				}
			)[];
		}) | ({
			pages: (
				ItemBookPage
			)[];
		}) | ({
			rawTitle: string;
			filteredTitle: string | null | undefined;
			author: string;
			generation: number;
			pages: (
				ItemWrittenBookPage
			)[];
			resolved: boolean;
		}) | ({
			material: `$$registryEntryHolder`;
			pattern: `$$registryEntryHolder`;
		}) | (AnonymousNbt) | (AnonymousNbt) | (AnonymousNbt) | (AnonymousNbt) | (`$$registryEntryHolder`) | ({
			hasHolder: boolean;
			material: (`$$registryEntryHolder`) | (string);
		}) | (number) | ({
			hasHolder: boolean;
			song: (`$$registryEntryHolder`) | (string);
		}) | (string) | (AnonymousNbt) | ({
			globalPosition: {
				dimension: string;
				position: Position;
			} | null | undefined;
			tracked: boolean;
		}) | (ItemFireworkExplosion) | ({
			flightDuration: number;
			explosions: (
				ItemFireworkExplosion
			)[];
		}) | ({
			name: string | null | undefined;
			uuid: UUID | null | undefined;
			properties: (
				{
					name: string;
					value: string;
					signature: string | null | undefined;
				}
			)[];
		}) | (string) | ({
			layers: (
				BannerPatternLayer
			)[];
		}) | (number) | ({
			decorations: (
				number
			)[];
		}) | ({
			contents: (
				Slot
			)[];
		}) | ({
			properties: (
				{
					name: string;
					value: string;
				}
			)[];
		}) | ({
			bees: (
				{
					nbtData: AnonymousNbt;
					ticksInHive: number;
					minTicksInHive: number;
				}
			)[];
		}) | (AnonymousNbt) | (AnonymousNbt) | (ItemSoundHolder) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (`$$registryEntryHolder`) | (number) | (number) | (`$$registryEntryHolder`) | (number) | (number) | (number) | (number) | (number) | (number);
	};
	export type ItemSoundEvent = {
		soundName: string;
		fixedRange: number | null | undefined;
	};
	export type ItemSoundHolder = `$$registryEntryHolder`;
	export type ItemFireworkExplosion = {
		shape: "small_ball" | "large_ball" | "star" | "creeper" | "burst";
		colors: (
			number
		)[];
		fadeColors: (
			number
		)[];
		hasTrail: boolean;
		hasTwinkle: boolean;
	};
	export type ItemEffectDetail = {
		amplifier: number;
		duration: number;
		ambient: boolean;
		showParticles: boolean;
		showIcon: boolean;
		hiddenEffect: ItemEffectDetail | null | undefined;
	};
	export type ItemPotionEffect = {
		id: number;
		details: ItemEffectDetail;
	};
	export type ItemBlockProperty = {
		name: string;
		isExactMatch: boolean;
		value: ({
			exactValue: string;
		}) | ({
			minValue: string;
			maxValue: string;
		});
	};
	export type ExactComponentMatcher = (
		SlotComponent
	)[];
	export type DataComponentMatchers = {
		exactMatchers: ExactComponentMatcher;
		partialMatchers: (
			number
		)[];
	};
	export type ItemBlockPredicate = {
		blockSet: `$$registryEntryHolderSet` | null | undefined;
		properties: (
			ItemBlockProperty
		)[] | null | undefined;
		nbt: AnonOptionalNbt;
		components: DataComponentMatchers;
	};
	export type ItemBookPage = {
		content: string;
		filteredContent: string | null | undefined;
	};
	export type ItemWrittenBookPage = {
		content: AnonymousNbt;
		filteredContent: AnonOptionalNbt;
	};
	export type ItemConsumeEffect = {
		type: "apply_effects" | "remove_effects" | "clear_all_effects" | "teleport_randomly" | "play_sound";
		undefined: ({
			effects: (
				ItemPotionEffect
			)[];
			probability: number;
		}) | ({
			effects: IDSet;
		}) | (undefined | null) | ({
			diameter: number;
		}) | ({
			sound: ItemSoundHolder;
		});
	};
	export type ArmorTrimMaterial = {
		assetBase: string;
		overrideArmorAssets: (
			{
				key: string;
				value: string;
			}
		)[];
		description: AnonymousNbt;
	};
	export type ArmorTrimPattern = {
		assetId: string;
		description: AnonymousNbt;
		decal: boolean;
	};
	export type InstrumentData = {
		soundEvent: ItemSoundHolder;
		useDuration: number;
		range: number;
		description: AnonymousNbt;
	};
	export type JukeboxSongData = {
		soundEvent: ItemSoundHolder;
		description: AnonymousNbt;
		lengthInSeconds: number;
		comparatorOutput: number;
	};
	export type BannerPattern = {
		assetId: string;
		translationKey: string;
	};
	export type BannerPatternLayer = {
		pattern: `$$registryEntryHolder`;
		colorId: number;
	};
	export type UntrustedSlotComponent = {
		type: SlotComponentType;
		data: ByteArray;
	};
	export type UntrustedSlot = {
		itemCount: number;
		undefined: (undefined | null) | (undefined | null) | ({
			itemId: number;
			addedComponentCount: number;
			removedComponentCount: number;
			components: (
				UntrustedSlotComponent
			)[];
			removeComponents: (
				{
					type: SlotComponentType;
				}
			)[];
		});
	};
	export type Slot = {
		itemCount: number;
		undefined: (undefined | null) | ({
			itemId: number;
			addedComponentCount: number;
			removedComponentCount: number;
			components: (
				SlotComponent
			)[];
			removeComponents: (
				{
					type: SlotComponentType;
				}
			)[];
		});
	};
	export type HashedSlot = {
		itemId: number;
		itemCount: number;
		components: (
			{
				type: SlotComponentType;
				hash: number;
			}
		)[];
		removeComponents: (
			{
				type: SlotComponentType;
			}
		)[];
	};
	export type Particle = {
		type: "angry_villager" | "block" | "block_marker" | "bubble" | "cloud" | "crit" | "damage_indicator" | "dragon_breath" | "dripping_lava" | "falling_lava" | "landing_lava" | "dripping_water" | "falling_water" | "dust" | "dust_color_transition" | "effect" | "elder_guardian" | "enchanted_hit" | "enchant" | "end_rod" | "entity_effect" | "explosion_emitter" | "explosion" | "gust" | "small_gust" | "gust_emitter_large" | "gust_emitter_small" | "sonic_boom" | "falling_dust" | "firework" | "fishing" | "flame" | "infested" | "cherry_leaves" | "pale_oak_leaves" | "tinted_leaves" | "sculk_soul" | "sculk_charge" | "sculk_charge_pop" | "soul_fire_flame" | "soul" | "flash" | "happy_villager" | "composter" | "heart" | "instant_effect" | "item" | "vibration" | "trail" | "item_slime" | "item_cobweb" | "item_snowball" | "large_smoke" | "lava" | "mycelium" | "note" | "poof" | "portal" | "rain" | "smoke" | "white_smoke" | "sneeze" | "spit" | "squid_ink" | "sweep_attack" | "totem_of_undying" | "underwater" | "splash" | "witch" | "bubble_pop" | "current_down" | "bubble_column_up" | "nautilus" | "dolphin" | "campfire_cosy_smoke" | "campfire_signal_smoke" | "dripping_honey" | "falling_honey" | "landing_honey" | "falling_nectar" | "falling_spore_blossom" | "ash" | "crimson_spore" | "warped_spore" | "spore_blossom_air" | "dripping_obsidian_tear" | "falling_obsidian_tear" | "landing_obsidian_tear" | "reverse_portal" | "white_ash" | "small_flame" | "snowflake" | "dripping_dripstone_lava" | "falling_dripstone_lava" | "dripping_dripstone_water" | "falling_dripstone_water" | "glow_squid_ink" | "glow" | "wax_on" | "wax_off" | "electric_spark" | "scrape" | "shriek" | "egg_crack" | "dust_plume" | "trial_spawner_detected_player" | "trial_spawner_detected_player_ominous" | "vault_connection" | "dust_pillar" | "ominous_spawning" | "raid_omen" | "trial_omen" | "block_crumble" | "firefly";
		data: (number) | (number) | (number) | (number) | (number) | ({
			red: number;
			green: number;
			blue: number;
			scale: number;
		}) | ({
			fromRed: number;
			fromGreen: number;
			fromBlue: number;
			scale: number;
			toRed: number;
			toGreen: number;
			toBlue: number;
		}) | (number) | (Slot) | (number) | (number) | ({
			positionType: "block" | "entity";
			position: (Position) | ({
				entityId: number;
				entityEyeHeight: number;
			});
			ticks: number;
		}) | ({
			target: Vec3f64;
			color: number;
		}) | (number) | (undefined | null);
	};
	export type Ingredient = (
		Slot
	)[];
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
	export type PreviousMessages = (
		{
			id: number;
			signature: (Buffer) | (undefined | null);
		}
	)[];
	export type EntityMetadataEntry = {
		key: number;
		type: "byte" | "int" | "long" | "float" | "string" | "component" | "optional_component" | "item_stack" | "boolean" | "rotations" | "block_pos" | "optional_block_pos" | "direction" | "optional_uuid" | "block_state" | "optional_block_state" | "compound_tag" | "particle" | "particles" | "villager_data" | "optional_unsigned_int" | "pose" | "cat_variant" | "cow_variant" | "wolf_variant" | "wolf_sound_variant" | "frog_variant" | "pig_variant" | "chicken_variant" | "optional_global_pos" | "painting_variant" | "sniffer_state" | "armadillo_state" | "vector3" | "quaternion";
		value: (number) | (number) | (Varlong) | (number) | (string) | (AnonymousNbt) | (AnonymousNbt | null | undefined) | (Slot) | (boolean) | ({
			pitch: number;
			yaw: number;
			roll: number;
		}) | (Position) | (Position | null | undefined) | (number) | (UUID | null | undefined) | (number) | (Optvarint) | (AnonymousNbt) | (Particle) | ((
			Particle
		)[]) | ({
			villagerType: number;
			villagerProfession: number;
			level: number;
		}) | (Optvarint) | (number) | (number) | (number) | (number) | (number) | (number) | (number) | (`$$registryEntryHolder`) | (string | null | undefined) | (`$$registryEntryHolder`) | (number) | (number) | (Vec3f) | (Vec4f);
	};
	export type EntityMetadataPaintingVariant = {
		width: number;
		height: number;
		assetId: string;
		title: AnonymousNbt | null | undefined;
		author: AnonymousNbt | null | undefined;
	};
	export type EntityMetadata = `$$entityMetadataLoop`;
	export type Tags = (
		{
			tagName: string;
			entries: (
				number
			)[];
		}
	)[];
	export type ChunkBlockEntity = {
		undefined: {
			x?: boolean;
			z?: boolean;
		};
		y: number;
		type: number;
		nbtData: AnonOptionalNbt;
	};
	export type ChatSession = {
		uuid: UUID;
		publicKey: {
			expireTime: number;
			keyBytes: Buffer;
			keySignature: Buffer;
		};
	} | null | undefined;
	export type GameProfile = {
		name: string;
		properties: (
			{
				name: string;
				value: string;
				signature: string | null | undefined;
			}
		)[];
	};
	export type CommandNode = {
		flags: {
			unused?: boolean;
			has_custom_suggestions?: boolean;
			has_redirect_node?: boolean;
			has_command?: boolean;
			command_node_type?: boolean;
		};
		children: (
			number
		)[];
		redirectNode: (number) | (undefined | null);
		extraNodeData: (undefined | null) | ({
			name: string;
		}) | ({
			name: string;
			parser: "brigadier:bool" | "brigadier:float" | "brigadier:double" | "brigadier:integer" | "brigadier:long" | "brigadier:string" | "minecraft:entity" | "minecraft:game_profile" | "minecraft:block_pos" | "minecraft:column_pos" | "minecraft:vec3" | "minecraft:vec2" | "minecraft:block_state" | "minecraft:block_predicate" | "minecraft:item_stack" | "minecraft:item_predicate" | "minecraft:color" | "minecraft:component" | "minecraft:style" | "minecraft:message" | "minecraft:nbt" | "minecraft:nbt_tag" | "minecraft:nbt_path" | "minecraft:objective" | "minecraft:objective_criteria" | "minecraft:operation" | "minecraft:particle" | "minecraft:angle" | "minecraft:rotation" | "minecraft:scoreboard_slot" | "minecraft:score_holder" | "minecraft:swizzle" | "minecraft:team" | "minecraft:item_slot" | "minecraft:item_slots" | "minecraft:resource_location" | "minecraft:function" | "minecraft:entity_anchor" | "minecraft:int_range" | "minecraft:float_range" | "minecraft:dimension" | "minecraft:gamemode" | "minecraft:time" | "minecraft:resource_or_tag" | "minecraft:resource_or_tag_key" | "minecraft:resource" | "minecraft:resource_key" | "minecraft:resource_selector" | "minecraft:template_mirror" | "minecraft:template_rotation" | "minecraft:heightmap" | "minecraft:loot_table" | "minecraft:loot_predicate" | "minecraft:loot_modifier" | "minecraft:uuid";
			properties: (undefined | null) | ({
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: (number) | (undefined | null);
				max: (number) | (undefined | null);
			}) | ({
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: (number) | (undefined | null);
				max: (number) | (undefined | null);
			}) | ({
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: (number) | (undefined | null);
				max: (number) | (undefined | null);
			}) | ({
				flags: {
					unused?: boolean;
					max_present?: boolean;
					min_present?: boolean;
				};
				min: (number) | (undefined | null);
				max: (number) | (undefined | null);
			}) | ("SINGLE_WORD" | "QUOTABLE_PHRASE" | "GREEDY_PHRASE") | ({
				unused?: boolean;
				onlyAllowPlayers?: boolean;
				onlyAllowEntities?: boolean;
			}) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | ({
				unused?: boolean;
				allowMultiple?: boolean;
			}) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null) | ({
				min: number;
			}) | ({
				registry: string;
			}) | ({
				registry: string;
			}) | ({
				registry: string;
			}) | ({
				registry: string;
			}) | ({
				registry: string;
			}) | (undefined | null) | (undefined | null) | (undefined | null) | (undefined | null);
			suggestionType: (string) | (undefined | null);
		});
	};
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
		packs: (
			{
				namespace: string;
				id: string;
				version: string;
			}
		)[];
	};
	export type PacketCommonCustomReportDetails = {
		details: (
			{
				key: string;
				value: string;
			}
		)[];
	};
	export type PacketCommonRemoveResourcePack = {
		uuid: UUID | null | undefined;
	};
	export type PacketCommonAddResourcePack = {
		uuid: UUID;
		url: string;
		hash: string;
		forced: boolean;
		promptMessage: AnonymousNbt | null | undefined;
	};
	export type ServerLinkType = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
	export type PacketCommonServerLinks = {
		links: (
			{
				hasKnownType: boolean;
				knownType: (ServerLinkType);
				unknownType: (AnonymousNbt);
				link: string;
			}
		)[];
	};
}

export namespace MCProtocol.Pc_1_21_5.Handshake.Clientbound {
	export type Packet = {
		name: void;
		params: void;
	};
}

export namespace MCProtocol.Pc_1_21_5.Handshake.Serverbound {
	export type PacketSetProtocol = {
		protocolVersion: number;
		serverHost: string;
		serverPort: number;
		nextState: number;
	};
	export type PacketLegacyServerListPing = {
		payload: number;
	};
	export type Packet = {
		name: "set_protocol" | "legacy_server_list_ping";
		params: (PacketSetProtocol) | (PacketLegacyServerListPing);
	};
}

export namespace MCProtocol.Pc_1_21_5.Status.Clientbound {
	export type PacketServerInfo = {
		response: string;
	};
	export type PacketPing = {
		time: number;
	};
	export type Packet = {
		name: "server_info" | "ping";
		params: (PacketServerInfo) | (PacketPing);
	};
}

export namespace MCProtocol.Pc_1_21_5.Status.Serverbound {
	export type PacketPingStart = {
		
	};
	export type PacketPing = {
		time: number;
	};
	export type Packet = {
		name: "ping_start" | "ping";
		params: (PacketPingStart) | (PacketPing);
	};
}

export namespace MCProtocol.Pc_1_21_5.Login.Clientbound {
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
		uuid: MCProtocol.Pc_1_21_5.Types.UUID;
		username: string;
		properties: (
			{
				name: string;
				value: string;
				signature: string | null | undefined;
			}
		)[];
	};
	export type PacketCompress = {
		threshold: number;
	};
	export type PacketLoginPluginRequest = {
		messageId: number;
		channel: string;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer;
	};
	export type Packet = {
		name: "disconnect" | "encryption_begin" | "success" | "compress" | "login_plugin_request" | "cookie_request";
		params: (PacketDisconnect) | (PacketEncryptionBegin) | (PacketSuccess) | (PacketCompress) | (PacketLoginPluginRequest) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieRequest);
	};
}

export namespace MCProtocol.Pc_1_21_5.Login.Serverbound {
	export type PacketLoginStart = {
		username: string;
		playerUUID: MCProtocol.Pc_1_21_5.Types.UUID;
	};
	export type PacketEncryptionBegin = {
		sharedSecret: Buffer;
		verifyToken: Buffer;
	};
	export type PacketLoginPluginResponse = {
		messageId: number;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer | null | undefined;
	};
	export type PacketLoginAcknowledged = {
		
	};
	export type Packet = {
		name: "login_start" | "encryption_begin" | "login_plugin_response" | "login_acknowledged" | "cookie_response";
		params: (PacketLoginStart) | (PacketEncryptionBegin) | (PacketLoginPluginResponse) | (PacketLoginAcknowledged) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieResponse);
	};
}

export namespace MCProtocol.Pc_1_21_5.Config.Clientbound {
	export type PacketCustomPayload = {
		channel: string;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer;
	};
	export type PacketDisconnect = {
		reason: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketFinishConfiguration = {
		
	};
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketPing = {
		id: number;
	};
	export type PacketResetChat = {
		
	};
	export type PacketRegistryData = {
		id: string;
		entries: (
			{
				key: string;
				value: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
			}
		)[];
	};
	export type PacketFeatureFlags = {
		features: (
			string
		)[];
	};
	export type PacketTags = {
		tags: (
			{
				tagType: string;
				tags: MCProtocol.Pc_1_21_5.Types.Tags;
			}
		)[];
	};
	export type Packet = {
		name: "cookie_request" | "custom_payload" | "disconnect" | "finish_configuration" | "keep_alive" | "ping" | "reset_chat" | "registry_data" | "remove_resource_pack" | "add_resource_pack" | "store_cookie" | "transfer" | "feature_flags" | "tags" | "select_known_packs" | "custom_report_details" | "server_links";
		params: (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieRequest) | (PacketCustomPayload) | (PacketDisconnect) | (PacketFinishConfiguration) | (PacketKeepAlive) | (PacketPing) | (PacketResetChat) | (PacketRegistryData) | (MCProtocol.Pc_1_21_5.Types.PacketCommonRemoveResourcePack) | (MCProtocol.Pc_1_21_5.Types.PacketCommonAddResourcePack) | (MCProtocol.Pc_1_21_5.Types.PacketCommonStoreCookie) | (MCProtocol.Pc_1_21_5.Types.PacketCommonTransfer) | (PacketFeatureFlags) | (PacketTags) | (MCProtocol.Pc_1_21_5.Types.PacketCommonSelectKnownPacks) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCustomReportDetails) | (MCProtocol.Pc_1_21_5.Types.PacketCommonServerLinks);
	};
}

export namespace MCProtocol.Pc_1_21_5.Config.Serverbound {
	export type PacketCustomPayload = {
		channel: string;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer;
	};
	export type PacketFinishConfiguration = {
		
	};
	export type PacketKeepAlive = {
		keepAliveId: number;
	};
	export type PacketPong = {
		id: number;
	};
	export type PacketResourcePackReceive = {
		uuid: MCProtocol.Pc_1_21_5.Types.UUID;
		result: number;
	};
	export type Packet = {
		name: "settings" | "cookie_response" | "custom_payload" | "finish_configuration" | "keep_alive" | "pong" | "resource_pack_receive" | "select_known_packs" | "custom_report_details" | "server_links";
		params: (MCProtocol.Pc_1_21_5.Types.PacketCommonSettings) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieResponse) | (PacketCustomPayload) | (PacketFinishConfiguration) | (PacketKeepAlive) | (PacketPong) | (PacketResourcePackReceive) | (MCProtocol.Pc_1_21_5.Types.PacketCommonSelectKnownPacks) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCustomReportDetails) | (MCProtocol.Pc_1_21_5.Types.PacketCommonServerLinks);
	};
}

export namespace MCProtocol.Pc_1_21_5.Play.Clientbound {
	export type SlotDisplay = {
		type: "empty" | "any_fuel" | "item" | "item_stack" | "tag" | "smithing_trim" | "with_remainder" | "composite";
		data: (undefined | null) | (undefined | null) | (number) | (MCProtocol.Pc_1_21_5.Types.Slot) | (string) | ({
			base: SlotDisplay;
			material: SlotDisplay;
			pattern: `$$registryEntryHolder`;
		}) | ({
			input: SlotDisplay;
			remainder: SlotDisplay;
		}) | ((
			SlotDisplay
		)[]);
	};
	export type RecipeDisplay = {
		type: "crafting_shapeless" | "crafting_shaped" | "furnace" | "stonecutter" | "smithing";
		data: ({
			ingredients: (
				SlotDisplay
			)[];
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		}) | ({
			width: number;
			height: number;
			ingredients: (
				SlotDisplay
			)[];
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		}) | ({
			ingredient: SlotDisplay;
			fuel: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
			duration: number;
			experience: number;
		}) | ({
			ingredient: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		}) | ({
			template: SlotDisplay;
			base: SlotDisplay;
			addition: SlotDisplay;
			result: SlotDisplay;
			craftingStation: SlotDisplay;
		});
	};
	export type SpawnInfo = {
		dimension: number;
		name: string;
		hashedSeed: number;
		gamemode: "survival" | "creative" | "adventure" | "spectator";
		previousGamemode: number;
		isDebug: boolean;
		isFlat: boolean;
		death: {
			dimensionName: string;
			location: MCProtocol.Pc_1_21_5.Types.Position;
		} | null | undefined;
		portalCooldown: number;
		seaLevel: number;
	};
	export type PacketSpawnEntity = {
		entityId: number;
		objectUUID: MCProtocol.Pc_1_21_5.Types.UUID;
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
		entries: (
			{
				categoryId: number;
				statisticId: number;
				value: number;
			}
		)[];
	};
	export type PacketAcknowledgePlayerDigging = {
		sequenceId: number;
	};
	export type PacketBlockBreakAnimation = {
		entityId: number;
		location: MCProtocol.Pc_1_21_5.Types.Position;
		destroyStage: number;
	};
	export type PacketTileEntityData = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		action: number;
		nbtData: MCProtocol.Pc_1_21_5.Types.AnonOptionalNbt;
	};
	export type PacketBlockAction = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		byte1: number;
		byte2: number;
		blockId: number;
	};
	export type PacketBlockChange = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		type: number;
	};
	export type PacketBossBar = {
		entityUUID: MCProtocol.Pc_1_21_5.Types.UUID;
		action: number;
		title: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
		health: (number) | (number) | (undefined | null);
		color: (number) | (number) | (undefined | null);
		dividers: (number) | (number) | (undefined | null);
		flags: (number) | (number) | (undefined | null);
	};
	export type PacketDifficulty = {
		difficulty: number;
		difficultyLocked: boolean;
	};
	export type PacketChunkBatchFinished = {
		batchSize: number;
	};
	export type PacketChunkBatchStart = {
		
	};
	export type PacketChunkBiomes = {
		biomes: (
			{
				position: MCProtocol.Pc_1_21_5.Types.PackedChunkPos;
				data: MCProtocol.Pc_1_21_5.Types.ByteArray;
			}
		)[];
	};
	export type PacketClearTitles = {
		reset: boolean;
	};
	export type PacketTabComplete = {
		transactionId: number;
		start: number;
		length: number;
		matches: (
			{
				match: string;
				tooltip: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
			}
		)[];
	};
	export type PacketDeclareCommands = {
		nodes: (
			MCProtocol.Pc_1_21_5.Types.CommandNode
		)[];
		rootIndex: number;
	};
	export type PacketCloseWindow = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
	};
	export type PacketWindowItems = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		stateId: number;
		items: (
			MCProtocol.Pc_1_21_5.Types.Slot
		)[];
		carriedItem: MCProtocol.Pc_1_21_5.Types.Slot;
	};
	export type PacketCraftProgressBar = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		property: number;
		value: number;
	};
	export type PacketSetSlot = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		stateId: number;
		slot: number;
		item: MCProtocol.Pc_1_21_5.Types.Slot;
	};
	export type PacketSetCooldown = {
		cooldownGroup: string;
		cooldownTicks: number;
	};
	export type PacketChatSuggestions = {
		action: number;
		entries: (
			string
		)[];
	};
	export type PacketCustomPayload = {
		channel: string;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer;
	};
	export type PacketDamageEvent = {
		entityId: number;
		sourceTypeId: number;
		sourceCauseId: number;
		sourceDirectId: number;
		sourcePosition: MCProtocol.Pc_1_21_5.Types.Vec3f64 | null | undefined;
	};
	export type PacketDebugSample = {
		sample: (
			number
		)[];
		type: number;
	};
	export type PacketHideMessage = {
		id: number;
		signature: (Buffer) | (undefined | null);
	};
	export type PacketKickDisconnect = {
		reason: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type ChatTypeParameterType = "content" | "sender" | "target";
	export type ChatType = {
		translationKey: string;
		parameters: (
			ChatTypeParameterType
		)[];
		style: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type ChatTypes = {
		chat: ChatType;
		narration: ChatType;
	};
	export type ChatTypesHolder = `$$registryEntryHolder`;
	export type PacketProfilelessChat = {
		message: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		type: ChatTypesHolder;
		name: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		target: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
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
		playerKnockback: MCProtocol.Pc_1_21_5.Types.Vec3f | null | undefined;
		explosionParticle: MCProtocol.Pc_1_21_5.Types.Particle;
		sound: MCProtocol.Pc_1_21_5.Types.ItemSoundHolder;
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
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
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
		heightmaps: (
			{
				type: number;
				data: (
					number
				)[];
			}
		)[];
		chunkData: MCProtocol.Pc_1_21_5.Types.ByteArray;
		blockEntities: (
			MCProtocol.Pc_1_21_5.Types.ChunkBlockEntity
		)[];
		skyLightMask: (
			number
		)[];
		blockLightMask: (
			number
		)[];
		emptySkyLightMask: (
			number
		)[];
		emptyBlockLightMask: (
			number
		)[];
		skyLight: (
			(
				number
			)[]
		)[];
		blockLight: (
			(
				number
			)[]
		)[];
	};
	export type PacketWorldEvent = {
		effectId: number;
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		particle: MCProtocol.Pc_1_21_5.Types.Particle;
	};
	export type PacketUpdateLight = {
		chunkX: number;
		chunkZ: number;
		skyLightMask: (
			number
		)[];
		blockLightMask: (
			number
		)[];
		emptySkyLightMask: (
			number
		)[];
		emptyBlockLightMask: (
			number
		)[];
		skyLight: (
			(
				number
			)[]
		)[];
		blockLight: (
			(
				number
			)[]
		)[];
	};
	export type PacketLogin = {
		entityId: number;
		isHardcore: boolean;
		worldNames: (
			string
		)[];
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
		icons: (
			{
				type: number;
				x: number;
				z: number;
				direction: number;
				displayName: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
			}
		)[] | null | undefined;
		columns: number;
		rows: (undefined | null) | (number);
		x: (undefined | null) | (number);
		y: (undefined | null) | (number);
		data: (undefined | null) | (Buffer);
	};
	export type PacketTradeList = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		trades: (
			{
				inputItem1: {
					itemId: number;
					itemCount: number;
					components: MCProtocol.Pc_1_21_5.Types.ExactComponentMatcher;
				};
				outputItem: MCProtocol.Pc_1_21_5.Types.Slot;
				inputItem2: {
					itemId: number;
					itemCount: number;
					components: MCProtocol.Pc_1_21_5.Types.ExactComponentMatcher;
				} | null | undefined;
				tradeDisabled: boolean;
				nbTradeUses: number;
				maximumNbTradeUses: number;
				xp: number;
				specialPrice: number;
				priceMultiplier: number;
				demand: number;
			}
		)[];
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
		steps: (
			{
				position: MCProtocol.Pc_1_21_5.Types.Vec3f;
				movement: MCProtocol.Pc_1_21_5.Types.Vec3f;
				yaw: number;
				pitch: number;
				weight: number;
			}
		)[];
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
		windowTitle: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketOpenSignEntity = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		isFrontText: boolean;
	};
	export type PacketPing = {
		id: number;
	};
	export type PacketPingResponse = {
		id: number;
	};
	export type PacketCraftRecipeResponse = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		recipeDisplay: RecipeDisplay;
	};
	export type PacketAbilities = {
		flags: number;
		flyingSpeed: number;
		walkingSpeed: number;
	};
	export type PacketPlayerChat = {
		globalIndex: number;
		senderUuid: MCProtocol.Pc_1_21_5.Types.UUID;
		index: number;
		signature: Buffer | null | undefined;
		plainMessage: string;
		timestamp: number;
		salt: number;
		previousMessages: MCProtocol.Pc_1_21_5.Types.PreviousMessages;
		unsignedChatContent: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
		filterType: number;
		filterTypeMask: ((
			number
		)[]) | (undefined | null);
		type: ChatTypesHolder;
		networkName: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		networkTargetName: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
	};
	export type PacketEndCombatEvent = {
		duration: number;
	};
	export type PacketEnterCombatEvent = {
		
	};
	export type PacketDeathCombatEvent = {
		playerId: number;
		message: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketPlayerRemove = {
		players: (
			MCProtocol.Pc_1_21_5.Types.UUID
		)[];
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
		data: (
			{
				uuid: MCProtocol.Pc_1_21_5.Types.UUID;
				player: (MCProtocol.Pc_1_21_5.Types.GameProfile) | (undefined | null);
				chatSession: (MCProtocol.Pc_1_21_5.Types.ChatSession) | (undefined | null);
				gamemode: (number) | (undefined | null);
				listed: (number) | (undefined | null);
				latency: (number) | (undefined | null);
				displayName: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined) | (undefined | null);
				listPriority: (number) | (undefined | null);
				showHat: (boolean) | (undefined | null);
			}
		)[];
	};
	export type PacketFacePlayer = {
		feet_eyes: number;
		x: number;
		y: number;
		z: number;
		isEntity: boolean;
		entityId: (number) | (undefined | null);
		entity_feet_eyes: (number) | (undefined | null);
	};
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
		entries: (
			{
				recipe: {
					displayId: number;
					display: RecipeDisplay;
					group: MCProtocol.Pc_1_21_5.Types.Optvarint;
					category: "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_food" | "stonecutter" | "smithing" | "campfire";
					craftingRequirements: (
						MCProtocol.Pc_1_21_5.Types.IDSet
					)[] | null | undefined;
				};
				flags: {
					notification?: boolean;
					highlight?: boolean;
				};
			}
		)[];
		replace: boolean;
	};
	export type PacketRecipeBookRemove = {
		recipeIds: (
			number
		)[];
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
		entityIds: (
			number
		)[];
	};
	export type PacketRemoveEntityEffect = {
		entityId: number;
		effectId: number;
	};
	export type PacketResetScore = {
		entity_name: string;
		objective_name: string | null | undefined;
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
		records: (
			number
		)[];
	};
	export type PacketSelectAdvancementTab = {
		id: string | null | undefined;
	};
	export type PacketServerData = {
		motd: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		iconBytes: MCProtocol.Pc_1_21_5.Types.ByteArray | null | undefined;
	};
	export type PacketActionBar = {
		text: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
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
		contents: MCProtocol.Pc_1_21_5.Types.Slot;
	};
	export type PacketSpawnPosition = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		angle: number;
	};
	export type PacketScoreboardDisplayObjective = {
		position: number;
		name: string;
	};
	export type PacketEntityMetadata = {
		entityId: number;
		metadata: MCProtocol.Pc_1_21_5.Types.EntityMetadata;
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
		action: number;
		displayText: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
		type: (number) | (number) | (undefined | null);
		number_format: (number | null | undefined) | (number | null | undefined) | (undefined | null);
		styling: ((MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null)) | ((MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null)) | (undefined | null);
	};
	export type PacketSetPassengers = {
		entityId: number;
		passengers: (
			number
		)[];
	};
	export type PacketSetPlayerInventory = {
		slotId: number;
		contents: MCProtocol.Pc_1_21_5.Types.Slot;
	};
	export type PacketTeams = {
		team: string;
		mode: number;
		name: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
		friendlyFire: (number) | (number) | (undefined | null);
		nameTagVisibility: (number) | (number) | (undefined | null);
		collisionRule: (number) | (number) | (undefined | null);
		formatting: (number) | (number) | (undefined | null);
		prefix: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
		suffix: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
		players: ((
			string
		)[]) | ((
			string
		)[]) | ((
			string
		)[]) | (undefined | null);
	};
	export type PacketScoreboardScore = {
		itemName: string;
		scoreName: string;
		value: number;
		display_name: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
		number_format: number | null | undefined;
		styling: (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (MCProtocol.Pc_1_21_5.Types.AnonymousNbt) | (undefined | null);
	};
	export type PacketSimulationDistance = {
		distance: number;
	};
	export type PacketSetTitleSubtitle = {
		text: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketUpdateTime = {
		age: number;
		time: number;
		tickDayTime: boolean;
	};
	export type PacketSetTitleText = {
		text: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketSetTitleTime = {
		fadeIn: number;
		stay: number;
		fadeOut: number;
	};
	export type PacketEntitySoundEffect = {
		sound: MCProtocol.Pc_1_21_5.Types.ItemSoundHolder;
		soundCategory: MCProtocol.Pc_1_21_5.Types.SoundSource;
		entityId: number;
		volume: number;
		pitch: number;
		seed: number;
	};
	export type PacketSoundEffect = {
		sound: MCProtocol.Pc_1_21_5.Types.ItemSoundHolder;
		soundCategory: MCProtocol.Pc_1_21_5.Types.SoundSource;
		x: number;
		y: number;
		z: number;
		volume: number;
		pitch: number;
		seed: number;
	};
	export type PacketStartConfiguration = {
		
	};
	export type PacketStopSound = {
		flags: number;
		source: (number) | (number) | (undefined | null);
		sound: (string) | (string) | (undefined | null);
	};
	export type PacketSystemChat = {
		content: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		isActionBar: boolean;
	};
	export type PacketPlayerlistHeader = {
		header: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		footer: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
	};
	export type PacketNbtQueryResponse = {
		transactionId: number;
		nbt: MCProtocol.Pc_1_21_5.Types.AnonOptionalNbt;
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
		status: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
		size: MCProtocol.Pc_1_21_5.Types.Vec3i | null | undefined;
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
		advancementMapping: (
			{
				key: string;
				value: {
					parentId: string | null | undefined;
					displayData: {
						title: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
						description: MCProtocol.Pc_1_21_5.Types.AnonymousNbt;
						icon: MCProtocol.Pc_1_21_5.Types.Slot;
						frameType: number;
						flags: {
							unused?: boolean;
							hidden?: boolean;
							show_toast?: boolean;
							has_background_texture?: boolean;
						};
						backgroundTexture: (string) | (undefined | null);
						xCord: number;
						yCord: number;
					} | null | undefined;
					requirements: (
						(
							string
						)[]
					)[];
					sendsTelemtryData: boolean;
				};
			}
		)[];
		identifiers: (
			string
		)[];
		progressMapping: (
			{
				key: string;
				value: (
					{
						criterionIdentifier: string;
						criterionProgress: number | null | undefined;
					}
				)[];
			}
		)[];
		showAdvancements: boolean;
	};
	export type PacketEntityUpdateAttributes = {
		entityId: number;
		properties: (
			{
				key: "generic.armor" | "generic.armor_toughness" | "generic.attack_damage" | "generic.attack_knockback" | "generic.attack_speed" | "player.block_break_speed" | "player.block_interaction_range" | "player.entity_interaction_range" | "generic.fall_damage_multiplier" | "generic.flying_speed" | "generic.follow_range" | "generic.gravity" | "generic.jump_strength" | "generic.knockback_resistance" | "generic.luck" | "generic.max_absorption" | "generic.max_health" | "generic.movement_speed" | "generic.safe_fall_distance" | "generic.scale" | "zombie.spawn_reinforcements" | "generic.step_height";
				value: number;
				modifiers: (
					{
						uuid: string;
						amount: number;
						operation: number;
					}
				)[];
			}
		)[];
	};
	export type PacketEntityEffect = {
		entityId: number;
		effectId: number;
		amplifier: number;
		duration: number;
		flags: number;
	};
	export type PacketDeclareRecipes = {
		recipes: (
			{
				name: string;
				items: (
					number
				)[];
			}
		)[];
		stoneCutterRecipes: (
			{
				input: MCProtocol.Pc_1_21_5.Types.IDSet;
				slotDisplay: SlotDisplay;
			}
		)[];
	};
	export type PacketTags = {
		tags: (
			{
				tagType: string;
				tags: MCProtocol.Pc_1_21_5.Types.Tags;
			}
		)[];
	};
	export type PacketSetProjectilePower = {
		id: number;
		accelerationPower: number;
	};
	export type Packet = {
		name: "bundle_delimiter" | "spawn_entity" | "animation" | "statistics" | "acknowledge_player_digging" | "block_break_animation" | "tile_entity_data" | "block_action" | "block_change" | "boss_bar" | "difficulty" | "chunk_batch_finished" | "chunk_batch_start" | "chunk_biomes" | "clear_titles" | "tab_complete" | "declare_commands" | "close_window" | "window_items" | "craft_progress_bar" | "set_slot" | "cookie_request" | "set_cooldown" | "chat_suggestions" | "custom_payload" | "damage_event" | "debug_sample" | "hide_message" | "kick_disconnect" | "profileless_chat" | "entity_status" | "sync_entity_position" | "explosion" | "unload_chunk" | "game_state_change" | "open_horse_window" | "hurt_animation" | "initialize_world_border" | "keep_alive" | "map_chunk" | "world_event" | "world_particles" | "update_light" | "login" | "map" | "trade_list" | "rel_entity_move" | "entity_move_look" | "move_minecart" | "entity_look" | "vehicle_move" | "open_book" | "open_window" | "open_sign_entity" | "ping" | "ping_response" | "craft_recipe_response" | "abilities" | "player_chat" | "end_combat_event" | "enter_combat_event" | "death_combat_event" | "player_remove" | "player_info" | "face_player" | "position" | "player_rotation" | "recipe_book_add" | "recipe_book_remove" | "recipe_book_settings" | "entity_destroy" | "remove_entity_effect" | "reset_score" | "remove_resource_pack" | "add_resource_pack" | "respawn" | "entity_head_rotation" | "multi_block_change" | "select_advancement_tab" | "server_data" | "action_bar" | "world_border_center" | "world_border_lerp_size" | "world_border_size" | "world_border_warning_delay" | "world_border_warning_reach" | "camera" | "update_view_position" | "update_view_distance" | "set_cursor_item" | "spawn_position" | "scoreboard_display_objective" | "entity_metadata" | "attach_entity" | "entity_velocity" | "entity_equipment" | "experience" | "update_health" | "held_item_slot" | "scoreboard_objective" | "set_passengers" | "set_player_inventory" | "teams" | "scoreboard_score" | "simulation_distance" | "set_title_subtitle" | "update_time" | "set_title_text" | "set_title_time" | "entity_sound_effect" | "sound_effect" | "start_configuration" | "stop_sound" | "store_cookie" | "system_chat" | "playerlist_header" | "nbt_query_response" | "collect" | "entity_teleport" | "test_instance_block_status" | "set_ticking_state" | "step_tick" | "transfer" | "advancements" | "entity_update_attributes" | "entity_effect" | "declare_recipes" | "tags" | "set_projectile_power" | "custom_report_details" | "server_links";
		params: (undefined | null) | (PacketSpawnEntity) | (PacketAnimation) | (PacketStatistics) | (PacketAcknowledgePlayerDigging) | (PacketBlockBreakAnimation) | (PacketTileEntityData) | (PacketBlockAction) | (PacketBlockChange) | (PacketBossBar) | (PacketDifficulty) | (PacketChunkBatchFinished) | (PacketChunkBatchStart) | (PacketChunkBiomes) | (PacketClearTitles) | (PacketTabComplete) | (PacketDeclareCommands) | (PacketCloseWindow) | (PacketWindowItems) | (PacketCraftProgressBar) | (PacketSetSlot) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieRequest) | (PacketSetCooldown) | (PacketChatSuggestions) | (PacketCustomPayload) | (PacketDamageEvent) | (PacketDebugSample) | (PacketHideMessage) | (PacketKickDisconnect) | (PacketProfilelessChat) | (PacketEntityStatus) | (PacketSyncEntityPosition) | (PacketExplosion) | (PacketUnloadChunk) | (PacketGameStateChange) | (PacketOpenHorseWindow) | (PacketHurtAnimation) | (PacketInitializeWorldBorder) | (PacketKeepAlive) | (PacketMapChunk) | (PacketWorldEvent) | (PacketWorldParticles) | (PacketUpdateLight) | (PacketLogin) | (PacketMap) | (PacketTradeList) | (PacketRelEntityMove) | (PacketEntityMoveLook) | (PacketMoveMinecart) | (PacketEntityLook) | (PacketVehicleMove) | (PacketOpenBook) | (PacketOpenWindow) | (PacketOpenSignEntity) | (PacketPing) | (PacketPingResponse) | (PacketCraftRecipeResponse) | (PacketAbilities) | (PacketPlayerChat) | (PacketEndCombatEvent) | (PacketEnterCombatEvent) | (PacketDeathCombatEvent) | (PacketPlayerRemove) | (PacketPlayerInfo) | (PacketFacePlayer) | (PacketPosition) | (PacketPlayerRotation) | (PacketRecipeBookAdd) | (PacketRecipeBookRemove) | (PacketRecipeBookSettings) | (PacketEntityDestroy) | (PacketRemoveEntityEffect) | (PacketResetScore) | (MCProtocol.Pc_1_21_5.Types.PacketCommonRemoveResourcePack) | (MCProtocol.Pc_1_21_5.Types.PacketCommonAddResourcePack) | (PacketRespawn) | (PacketEntityHeadRotation) | (PacketMultiBlockChange) | (PacketSelectAdvancementTab) | (PacketServerData) | (PacketActionBar) | (PacketWorldBorderCenter) | (PacketWorldBorderLerpSize) | (PacketWorldBorderSize) | (PacketWorldBorderWarningDelay) | (PacketWorldBorderWarningReach) | (PacketCamera) | (PacketUpdateViewPosition) | (PacketUpdateViewDistance) | (PacketSetCursorItem) | (PacketHeldItemSlot) | (PacketSpawnPosition) | (PacketScoreboardDisplayObjective) | (PacketEntityMetadata) | (PacketAttachEntity) | (PacketEntityVelocity) | (PacketEntityEquipment) | (PacketExperience) | (PacketUpdateHealth) | (PacketScoreboardObjective) | (PacketSetPassengers) | (PacketSetPlayerInventory) | (PacketTeams) | (PacketScoreboardScore) | (PacketSimulationDistance) | (PacketSetTitleSubtitle) | (PacketUpdateTime) | (PacketSetTitleText) | (PacketSetTitleTime) | (PacketEntitySoundEffect) | (PacketSoundEffect) | (PacketStartConfiguration) | (PacketStopSound) | (MCProtocol.Pc_1_21_5.Types.PacketCommonStoreCookie) | (PacketSystemChat) | (PacketPlayerlistHeader) | (PacketNbtQueryResponse) | (PacketCollect) | (PacketEntityTeleport) | (PacketTestInstanceBlockStatus) | (PacketSetTickingState) | (PacketStepTick) | (MCProtocol.Pc_1_21_5.Types.PacketCommonTransfer) | (PacketAdvancements) | (PacketEntityUpdateAttributes) | (PacketEntityEffect) | (PacketDeclareRecipes) | (PacketTags) | (PacketSetProjectilePower) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCustomReportDetails) | (MCProtocol.Pc_1_21_5.Types.PacketCommonServerLinks);
	};
}

export namespace MCProtocol.Pc_1_21_5.Play.Serverbound {
	export type PacketTeleportConfirm = {
		teleportId: number;
	};
	export type PacketQueryBlockNbt = {
		transactionId: number;
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		argumentSignatures: (
			{
				argumentName: string;
				signature: Buffer;
			}
		)[];
		messageCount: number;
		acknowledged: Buffer;
		checksum: number;
	};
	export type PacketChatMessage = {
		message: string;
		timestamp: number;
		salt: number;
		signature: Buffer | null | undefined;
		offset: number;
		acknowledged: Buffer;
		checksum: number;
	};
	export type PacketChatSessionUpdate = {
		sessionUUID: MCProtocol.Pc_1_21_5.Types.UUID;
		expireTime: number;
		publicKey: MCProtocol.Pc_1_21_5.Types.ByteArray;
		signature: MCProtocol.Pc_1_21_5.Types.ByteArray;
	};
	export type PacketChunkBatchReceived = {
		chunksPerTick: number;
	};
	export type PacketClientCommand = {
		actionId: number;
	};
	export type PacketTickEnd = {
		
	};
	export type PacketTabComplete = {
		transactionId: number;
		text: string;
	};
	export type PacketConfigurationAcknowledged = {
		
	};
	export type PacketEnchantItem = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		enchantment: number;
	};
	export type PacketWindowClick = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		stateId: number;
		slot: number;
		mouseButton: number;
		mode: number;
		changedSlots: (
			{
				location: number;
				item: MCProtocol.Pc_1_21_5.Types.HashedSlot | null | undefined;
			}
		)[];
		cursorItem: MCProtocol.Pc_1_21_5.Types.HashedSlot | null | undefined;
	};
	export type PacketCloseWindow = {
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
	};
	export type PacketSetSlotState = {
		slot_id: number;
		window_id: MCProtocol.Pc_1_21_5.Types.ContainerID;
		state: boolean;
	};
	export type PacketCustomPayload = {
		channel: string;
		data: MCProtocol.Pc_1_21_5.Types.RestBuffer;
	};
	export type PacketDebugSampleSubscription = {
		type: number;
	};
	export type PacketEditBook = {
		hand: number;
		pages: (
			string
		)[];
		title: string | null | undefined;
	};
	export type PacketQueryEntityNbt = {
		transactionId: number;
		entityId: number;
	};
	export type PacketUseEntity = {
		target: number;
		mouse: number;
		x: (number) | (undefined | null);
		y: (number) | (undefined | null);
		z: (number) | (undefined | null);
		hand: (number) | (number) | (undefined | null);
		sneaking: boolean;
	};
	export type PacketGenerateStructure = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		position: MCProtocol.Pc_1_21_5.Types.Position;
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
		windowId: MCProtocol.Pc_1_21_5.Types.ContainerID;
		recipeId: number;
		makeAll: boolean;
	};
	export type PacketAbilities = {
		flags: number;
	};
	export type PacketBlockDig = {
		status: number;
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
	export type PacketPlayerLoaded = {
		
	};
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
		uuid: MCProtocol.Pc_1_21_5.Types.UUID;
		result: number;
	};
	export type PacketAdvancementTab = {
		action: number;
		tabId: (string) | (undefined | null);
	};
	export type PacketSelectTrade = {
		slot: number;
	};
	export type PacketSetBeaconEffect = {
		primary_effect: number | null | undefined;
		secondary_effect: number | null | undefined;
	};
	export type PacketHeldItemSlot = {
		slotId: number;
	};
	export type PacketUpdateCommandBlock = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		item: MCProtocol.Pc_1_21_5.Types.UntrustedSlot;
	};
	export type PacketUpdateJigsawBlock = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
		name: string;
		target: string;
		pool: string;
		finalState: string;
		jointType: string;
		selection_priority: number;
		placement_priority: number;
	};
	export type PacketUpdateStructureBlock = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		position: MCProtocol.Pc_1_21_5.Types.Position;
		mode: number;
		message: string;
	};
	export type PacketUpdateSign = {
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		target: MCProtocol.Pc_1_21_5.Types.UUID;
	};
	export type PacketTestInstanceBlockAction = {
		pos: MCProtocol.Pc_1_21_5.Types.Position;
		action: number;
		data: {
			test: string | null | undefined;
			size: MCProtocol.Pc_1_21_5.Types.Vec3i;
			rotation: number;
			ignoreEntities: boolean;
			status: number;
			errorMessage: MCProtocol.Pc_1_21_5.Types.AnonymousNbt | null | undefined;
		};
	};
	export type PacketBlockPlace = {
		hand: number;
		location: MCProtocol.Pc_1_21_5.Types.Position;
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
		rotation: MCProtocol.Pc_1_21_5.Types.Vec2f;
	};
	export type Packet = {
		name: "teleport_confirm" | "query_block_nbt" | "select_bundle_item" | "set_difficulty" | "message_acknowledgement" | "chat_command" | "chat_command_signed" | "chat_message" | "chat_session_update" | "chunk_batch_received" | "client_command" | "tick_end" | "settings" | "tab_complete" | "configuration_acknowledged" | "enchant_item" | "window_click" | "close_window" | "set_slot_state" | "cookie_response" | "custom_payload" | "debug_sample_subscription" | "edit_book" | "query_entity_nbt" | "use_entity" | "generate_structure" | "keep_alive" | "lock_difficulty" | "position" | "position_look" | "look" | "flying" | "vehicle_move" | "steer_boat" | "pick_item_from_block" | "pick_item_from_entity" | "ping_request" | "craft_recipe_request" | "abilities" | "block_dig" | "entity_action" | "player_input" | "player_loaded" | "pong" | "recipe_book" | "displayed_recipe" | "name_item" | "resource_pack_receive" | "advancement_tab" | "select_trade" | "set_beacon_effect" | "held_item_slot" | "update_command_block" | "update_command_block_minecart" | "set_creative_slot" | "update_jigsaw_block" | "update_structure_block" | "set_test_block" | "update_sign" | "arm_animation" | "test_instance_block_action" | "spectate" | "block_place" | "use_item";
		params: (PacketTeleportConfirm) | (PacketQueryBlockNbt) | (PacketSelectBundleItem) | (PacketSetDifficulty) | (PacketMessageAcknowledgement) | (PacketChatCommand) | (PacketChatCommandSigned) | (PacketChatMessage) | (PacketChatSessionUpdate) | (PacketChunkBatchReceived) | (PacketClientCommand) | (PacketTickEnd) | (MCProtocol.Pc_1_21_5.Types.PacketCommonSettings) | (PacketTabComplete) | (PacketConfigurationAcknowledged) | (PacketEnchantItem) | (PacketWindowClick) | (PacketCloseWindow) | (PacketSetSlotState) | (MCProtocol.Pc_1_21_5.Types.PacketCommonCookieResponse) | (PacketCustomPayload) | (PacketEditBook) | (PacketQueryEntityNbt) | (PacketUseEntity) | (PacketGenerateStructure) | (PacketKeepAlive) | (PacketLockDifficulty) | (PacketPosition) | (PacketPositionLook) | (PacketLook) | (PacketFlying) | (PacketVehicleMove) | (PacketSteerBoat) | (PacketPickItemFromBlock) | (PacketPickItemFromEntity) | (PacketPingRequest) | (PacketCraftRecipeRequest) | (PacketAbilities) | (PacketBlockDig) | (PacketEntityAction) | (PacketPlayerInput) | (PacketPlayerLoaded) | (PacketPong) | (PacketRecipeBook) | (PacketDisplayedRecipe) | (PacketNameItem) | (PacketResourcePackReceive) | (PacketAdvancementTab) | (PacketSelectTrade) | (PacketSetBeaconEffect) | (PacketHeldItemSlot) | (PacketUpdateCommandBlock) | (PacketUpdateCommandBlockMinecart) | (PacketSetCreativeSlot) | (PacketUpdateJigsawBlock) | (PacketUpdateStructureBlock) | (PacketSetTestBlock) | (PacketUpdateSign) | (PacketArmAnimation) | (PacketTestInstanceBlockAction) | (PacketSpectate) | (PacketBlockPlace) | (PacketUseItem);
	};
}