import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'
import { agentRole } from './agent.now'
import { userRole } from './user.now'

export const adminRole = Role({
    name: 'x_476470_eventhub.admin',
    description: 'Role de administradores da aplicação.',
    canDelegate: true,
    grantable: true,
    elevatedPrivilege: false,
    scopedAdmin: false,
    containsRoles: [agentRole, userRole],
})
