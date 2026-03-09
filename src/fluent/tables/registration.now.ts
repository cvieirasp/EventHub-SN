import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    ChoiceColumn,
    DateTimeColumn,
    BooleanColumn
} from '@servicenow/sdk/core'

// Registration table - manages event registrations and attendance
export const x_476470_eventhub_registration = Table({
    name: 'x_476470_eventhub_registration',
    label: 'Event Registration',
    schema: {
        // Core registration fields
        event: ReferenceColumn({
            label: 'Event',
            referenceTable: 'x_476470_eventhub_event',
            mandatory: true
        }),

        attendee: ReferenceColumn({
            label: 'Attendee',
            referenceTable: 'sys_user',
            mandatory: true
        }),

        // Registration status workflow
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                requested: { label: 'Requested', sequence: 0 },
                confirmed: { label: 'Confirmed', sequence: 1 },
                waiting_list: { label: 'Waiting List', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'requested'
        }),

        // Check-in tracking
        checked_in: BooleanColumn({
            label: 'Checked In',
            default: false
        }),

        checked_in_at: DateTimeColumn({
            label: 'Checked In At',
            mandatory: false
        }),

        // Additional information - using StringColumn for journal-like field
        notes: StringColumn({
            label: 'Notes',
            maxLength: 4000
        })
    },
    display: 'attendee',
    extensible: false,
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private'
})