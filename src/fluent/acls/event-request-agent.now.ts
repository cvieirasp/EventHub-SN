import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Agent role - read (x_476470_eventhub.user) and write access (no create or delete)

export const eventRequestAgentWrite = Acl({
    $id: Now.ID['event_request_agent_write'],
    type: 'record',
    table: 'x_476470_eventhub_event_request',
    operation: 'write',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to write event requests'
})