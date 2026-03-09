import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// User role - read-only access for events

export const eventUserRead = Acl({
    $id: Now.ID['event_user_read'],
    type: 'record',
    table: 'x_476470_eventhub_event',
    operation: 'read',
    roles: ['x_476470_eventhub.user'],
    active: true,
    admin_overrides: true,
    description: 'Allow user role to read events'
})
