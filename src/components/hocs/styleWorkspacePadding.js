import { compose, mapProps } from 'recompose'

import { withMainPadding } from './withMainPadding'

import merge from 'lodash.merge'

const styleWorkspacePadding = (options) =>
  compose(
    withMainPadding(options),
    mapProps(({style, mainPaddingStyle, mainPaddingNumbers, paddingSpec, xBreakpoint, ...remainder}) => ({
      style : merge({}, mainPaddingStyle, style),
      ...remainder
    }))
  )

export { styleWorkspacePadding }
