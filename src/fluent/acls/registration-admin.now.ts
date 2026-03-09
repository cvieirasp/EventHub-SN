import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - delete access for registrations

export const registrationAdminRead = Acl({
    $id: Now.ID['registration_admin_read'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'read',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to read registrations'
})

export const registrationAdminDelete = Acl({
    $id: Now.ID['registration_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete registrations'
})