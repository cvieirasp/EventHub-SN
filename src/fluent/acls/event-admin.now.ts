import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - delete access for events

export const eventAdminDelete = Acl({
    $id: Now.ID['event_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_event',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete events'
})
