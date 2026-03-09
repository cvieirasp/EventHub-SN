import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'
import { agentRole } from './agent.now'
import { userRole } from './user.now'

export const adminRole = Role({
    $id: Now.ID['admin_role'],
    name: 'x_476470_eventhub.admin',
    description: 'Role de administradores da aplicação.',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false,
    scoped_admin: false,
    contains_roles: [agentRole, userRole]
})