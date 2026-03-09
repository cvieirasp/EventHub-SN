import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - create, write, and delete access for rooms

export const roomAdminCreate = Acl({
    $id: Now.ID['room_admin_create'],
    type: 'record',
    table: 'x_476470_eventhub_room',
    operation: 'create',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to create rooms'
})

export const roomAdminWrite = Acl({
    $id: Now.ID['room_admin_write'],
    type: 'record',
    table: 'x_476470_eventhub_room',
    operation: 'write',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to write rooms'
})

export const roomAdminDelete = Acl({
    $id: Now.ID['room_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_room',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete rooms'
})