import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const userRole = Role({
    name: 'x_476470_eventhub.user',
    description: 'Role para usuários interagir com a aplicação.',
    canDelegate: true,
    grantable: true,
    elevatedPrivilege: false,
    scopedAdmin: false,
})
