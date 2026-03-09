import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// User role - read access for registrations

export const registrationUserRead = Acl({
    $id: Now.ID['registration_user_read'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'read',
    roles: ['x_476470_eventhub.user'],
    active: true,
    admin_overrides: true,
    description: 'Allow user role to read registrations'
})