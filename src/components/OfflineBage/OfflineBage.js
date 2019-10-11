import React, {memo} from 'react'

import { Label } from 'semantic-ui-react'

const OfflineBage = memo(({isOnLine}) => {
  return (
    <Label style={{
      visibility: isOnLine ? 'hidden' : 'visible',
      opacity:isOnLine ? 0 : 1,
      transition: 'all .5s'
    }} color='red' ribbon>
      Offline
    </Label>
  )
})

export default OfflineBage
