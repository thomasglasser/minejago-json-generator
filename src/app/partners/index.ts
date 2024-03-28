import type { CollectionRegistry, SchemaRegistry } from '@mcschema/core'
import {initMinejago} from './Minejago.js'
import {initSherdsApi} from './SherdsApi.js'

export * from './Minejago.js'
export * from './SherdsApi.js'

export function initPartners(schemas: SchemaRegistry, collections: CollectionRegistry) {
	initMinejago(schemas, collections)
	initSherdsApi(schemas, collections)
}
