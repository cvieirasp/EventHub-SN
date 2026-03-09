import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

// Agent role - read, create and write access for registrations

export const registrationAgentRead = Acl({
    $id: Now.ID['registration_agent_read'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'read',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to read registrations'
})

export const registrationAgentCreate = Acl({
    $id: Now.ID['registration_agent_create'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'create',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to create registrations'
})

export const registrationAgentWrite = Acl({
    $id: Now.ID['registration_agent_write'],
    type: 'record',
    table: 'x_476470_eventhub_registration',
    operation: 'write',
    roles: ['x_476470_eventhub.agent'],
    active: true,
    admin_overrides: true,
    description: 'Allow agent role to write registrations'
})