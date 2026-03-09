import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - full CRUD access (create, read - x_476470_eventhub.user, write - x_476470_eventhub.agent, delete)

export const eventRequestAdminCreate = Acl({
    $id: Now.ID['event_request_admin_create'],
    type: 'record',
    table: 'x_476470_eventhub_event_request',
    operation: 'create',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to create event requests'
})

export const eventRequestAdminDelete = Acl({
    $id: Now.ID['event_request_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_event_request',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete event requests'
})