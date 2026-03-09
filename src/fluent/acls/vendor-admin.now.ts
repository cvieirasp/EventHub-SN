import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Admin role - delete access for vendors

export const vendorAdminRead = Acl({
    $id: Now.ID['vendor_admin_read'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'read',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to read vendors'
})

export const vendorAdminDelete = Acl({
    $id: Now.ID['vendor_admin_delete'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'delete',
    roles: ['x_476470_eventhub.admin'],
    active: true,
    admin_overrides: true,
    description: 'Allow admin role to delete vendors'
})