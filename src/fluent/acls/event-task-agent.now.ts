import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Agent role - read, create and write access for event tasks

export const eventTaskAgentRead = Acl({
    $id: Now.ID['event_task_agent_read'],
    type: 'record',
    table: 'x_476470_eventhub_event_task',
    operation: 'read',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to read event tasks'
})

export const eventTaskAgentCreate = Acl({
    $id: Now.ID['event_task_agent_create'],
    type: 'record',
    table: 'x_476470_eventhub_event_task',
    operation: 'create',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to create event tasks'
})

export const eventTaskAgentWrite = Acl({
    $id: Now.ID['event_task_agent_write'],
    type: 'record',
    table: 'x_476470_eventhub_event_task',
    operation: 'write',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to write event tasks'
})