import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// User role - read-only access for rooms

export const roomUserRead = Acl({
    $id: Now.ID['room_user_read'],
    type: 'record',
    table: 'x_476470_eventhub_room',
    operation: 'read',
    roles: ['x_476470_eventhub.user'],
    active: true,
    admin_overrides: true,
    description: 'Allow user role to read rooms'
})