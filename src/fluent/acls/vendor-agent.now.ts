import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Agent role - read, create and write access for vendors

export const vendorAgentRead = Acl({
    $id: Now.ID['vendor_agent_read'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'read',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to read vendors'
})

export const vendorAgentCreate = Acl({
    $id: Now.ID['vendor_agent_create'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'create',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to create vendors'
})

export const vendorAgentWrite = Acl({
    $id: Now.ID['vendor_agent_write'],
    type: 'record',
    table: 'x_476470_eventhub_vendor',
    operation: 'write',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to write vendors'
})