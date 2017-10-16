// @flow
import { validateModel } from './validate'
import { createDispatchers } from './dispatch'
import { createEffects } from './effects'
import { createHooks } from './hooks'
import { createReducersAndUpdateStore } from './store'
import { createSelectors } from './select'

/**
 * model
 */
export default (model: $model): void => {
  validateModel(model)

  createReducersAndUpdateStore(model)
  createDispatchers(model)
  createEffects(model)
  createHooks(model)
  createSelectors(model)
}