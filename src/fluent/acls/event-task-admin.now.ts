import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - delete access for event tasks

export const eventTaskAdminRead = Acl({
    $id: Now.ID['event_task_admin_read'],
    type: 'record',
    table: 'x_476470_eventhub_event_task',
    operation: 'read',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to read event tasks'
})

export const eventTaskAdminDelete = Acl({
    $id: Now.ID['event_task_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_event_task',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete event tasks'
})