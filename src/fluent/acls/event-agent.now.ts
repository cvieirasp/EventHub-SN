import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Agent role - create and write access for events

export const eventAgentCreate = Acl({
    $id: Now.ID['event_agent_create'],
    type: 'record',
    table: 'x_476470_eventhub_event',
    operation: 'create',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to create events'
})

export const eventAgentWrite = Acl({
    $id: Now.ID['event_agent_write'],
    type: 'record',
    table: 'x_476470_eventhub_event',
    operation: 'write',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to write events'
})
