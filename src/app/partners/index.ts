import type { CollectionRegistry, SchemaRegistry } from '@mcschema/core'
import { initImmersiveWeathering } from './ImmersiveWeathering.js'
import {initMinejago} from "./Minejago.js";
import {initSherdsApi} from "./SherdsApi.js";

export * from './ImmersiveWeathering.js'
export * from './Minejago.js'

export function initPartners(schemas: SchemaRegistry, collections: CollectionRegistry) {
	initImmersiveWeathering(schemas, collections)
	initMinejago(schemas, collections)
	initSherdsApi(schemas, collections)
}
