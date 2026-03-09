import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const agentRole = Role({
    name: 'x_476470_eventhub.agent',
    description: 'Role para analistas que farão a avaliação e atendimento de cada solicitação.',
    canDelegate: true,
    grantable: true,
    elevatedPrivilege: false,
    scopedAdmin: false,
})
