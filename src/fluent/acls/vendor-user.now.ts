import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// User role - read access for vendors

export const vendorUserRead = Acl({
    $id: Now.ID['vendor_user_read'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'read',
    roles: ['x_476470_eventhub.user'],
    active: true,
    admin_overrides: true,
    description: 'Allow user role to read vendors'
})