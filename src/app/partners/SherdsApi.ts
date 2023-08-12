import type { CollectionRegistry, SchemaRegistry} from '@mcschema/core'
import {Mod, ObjectNode} from '@mcschema/core'
import {StringNode as RawStringNode} from '@mcschema/core/lib/nodes/StringNode.js'

const ID = 'sherdsapi'

export function initSherdsApi(schemas: SchemaRegistry, collections: CollectionRegistry) {
	const StringNode = RawStringNode.bind(undefined, collections)


	schemas.register(`${ID}:sherd`, Mod(ObjectNode({
		item: StringNode({ validator: 'resource', params: { pool: 'item' } }),
		// @ts-ignore
		pattern: StringNode({ validator: 'resource', params: { pool: '$decorated_pot_pattern' } }),
	}, {context: `${ID}:sherd`}), {
	}))
}
