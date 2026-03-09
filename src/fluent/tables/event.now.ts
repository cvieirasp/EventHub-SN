import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    ChoiceColumn,
    DateTimeColumn,
    IntegerColumn
} from '@servicenow/sdk/core'

// Event table - represents approved/scheduled events from event requests
export const x_476470_eventhub_event = Table({
    name: 'x_476470_eventhub_event',
    label: 'Event',
    schema: {
        // Basic event information
        name: StringColumn({
            label: 'Event Name',
            maxLength: 200,
            mandatory: true
        }),

        // Reference to original event request
        event_request: ReferenceColumn({
            label: 'Event Request',
            referenceTable: 'x_476470_eventhub_event_request'
        }),

        // Event status workflow
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                planned: { label: 'Planned', sequence: 0 },
                open_for_registration: { label: 'Open for Registration', sequence: 1 },
                closed: { label: 'Closed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 },
                completed: { label: 'Completed', sequence: 4 }
            },
            dropdown: 'dropdown_with_none'
        }),

        // Date/Time fields
        start: DateTimeColumn({
            label: 'Start Date/Time',
            mandatory: true
        }),

        end: DateTimeColumn({
            label: 'End Date/Time',
            mandatory: true
        }),

        // Location and logistics
        timezone: StringColumn({
            label: 'Timezone',
            maxLength: 100
        }),

        location_type: ChoiceColumn({
            label: 'Location Type',
            choices: {
                in_person: { label: 'In-person', sequence: 0 },
                remote: { label: 'Remote', sequence: 1 },
                hybrid: { label: 'Hybrid', sequence: 2 }
            },
            dropdown: 'dropdown_with_none'
        }),

        site: ReferenceColumn({
            label: 'Site',
            referenceTable: 'cmn_location',
            mandatory: false
        }),

        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_476470_eventhub_room',
            mandatory: false
        }),

        // Event details
        capacity: IntegerColumn({
            label: 'Capacity',
            min: 0
        }),

        owner: ReferenceColumn({
            label: 'Event Owner',
            referenceTable: 'sys_user',
            mandatory: true
        }),

        description: StringColumn({
            label: 'Description',
            maxLength: 4000
        }),

        agenda: StringColumn({
            label: 'Agenda',
            maxLength: 8000 // HTML content can be longer
        }),

        // For attachment, using StringColumn to store attachment sys_id or filename
        // In ServiceNow, attachments are typically handled through the attachment table
        banner_image: StringColumn({
            label: 'Banner Image',
            maxLength: 255
        }),

        meeting_link: StringColumn({
            label: 'Meeting Link',
            maxLength: 1024
        })
    },
    display: 'name',
    extensible: false,
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private'
})