import express from 'express'
import SwaggerUI from 'swagger-ui-express'
import * as swaggerDocs from '../../../docs/swagger.json'

const router = express.Router()

router.use('/', SwaggerUI.serve, SwaggerUI.setup(swaggerDocs, {
	swaggerOptions: {
		plugins: [{
			statePlugins: {
				spec: {
					wrapSelectors: {
						allowTryItOutFor: () => () => false,
					},
				},
			},
		}],
	},
}))

export default router
