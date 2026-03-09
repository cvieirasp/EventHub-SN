import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const userRole = Role({
    $id: Now.ID['user_role'],
    name: 'x_476470_eventhub.user',
    description: 'Role para usuários interagir com a aplicação.',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false,
    scoped_admin: false
})