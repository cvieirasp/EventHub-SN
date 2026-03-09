import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const agentRole = Role({
    $id: Now.ID['agent_role'],
    name: 'x_476470_eventhub.agent',
    description: 'Role para analistas que farão a avaliação e atendimento de cada solicitação.',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false,
    scoped_admin: false
})