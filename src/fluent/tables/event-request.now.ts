import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    ChoiceColumn,
    DateTimeColumn,
    IntegerColumn,
    DecimalColumn,
    BooleanColumn
} from '@servicenow/sdk/core'

export const x_476470_eventhub_event_request = Table({
    name: 'x_476470_eventhub_event_request',
    label: 'Event Request',
    extends: 'task',
    schema: {
        // Reference fields
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user'
        }),
        
        requested_for: ReferenceColumn({
            label: 'Requested For', 
            referenceTable: 'sys_user'
        }),

        // Choice field for event type
        event_type: ChoiceColumn({
            label: 'Event Type',
            choices: {
                training: { label: 'Training', sequence: 0 },
                general_meeting: { label: 'General Meeting', sequence: 1 },
                workshop: { label: 'Workshop', sequence: 2 },
                social_event: { label: 'Social Event', sequence: 3 },
                webinar: { label: 'Webinar', sequence: 4 }
            },
            dropdown: 'dropdown_with_none'
        }),

        // Date/Time fields
        proposed_start: DateTimeColumn({
            label: 'Proposed Start'
        }),

        proposed_end: DateTimeColumn({
            label: 'Proposed End'
        }),

        // String fields
        timezone: StringColumn({
            label: 'Timezone',
            maxLength: 100
        }),

        // Choice field for location type
        location_type: ChoiceColumn({
            label: 'Location Type',
            choices: {
                in_person: { label: 'In-person', sequence: 0 },
                remote: { label: 'Remote', sequence: 1 },
                hybrid: { label: 'Hybrid', sequence: 2 }
            },
            dropdown: 'dropdown_with_none'
        }),

        // Optional reference fields
        site: ReferenceColumn({
            label: 'Site',
            referenceTable: 'cmn_location',
            mandatory: false
        }),

        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_acme_evt_room',
            mandatory: false
        }),

        // Numeric fields
        expected_attendees: IntegerColumn({
            label: 'Expected Attendees',
            min: 0
        }),

        budget_estimate: DecimalColumn({
            label: 'Budget Estimate'
        }),

        // Optional reference fields
        cost_center: ReferenceColumn({
            label: 'Cost Center',
            referenceTable: 'cmn_cost_center',
            mandatory: false
        }),

        event_owner: ReferenceColumn({
            label: 'Event Owner',
            referenceTable: 'sys_user'
        }),

        sponsor_department: ReferenceColumn({
            label: 'Sponsor Department',
            referenceTable: 'cmn_department'
        }),

        // Boolean fields
        requires_catering: BooleanColumn({
            label: 'Requires Catering',
            default: false
        }),

        requires_av: BooleanColumn({
            label: 'Requires A/V',
            default: false
        }),

        // Choice fields for workflow/status
        risk_level: ChoiceColumn({
            label: 'Risk Level',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 }
            },
            dropdown: 'dropdown_with_none'
        }),

        public_event: BooleanColumn({
            label: 'Public Event',
            default: false
        }),

        approval_stage: ChoiceColumn({
            label: 'Approval Stage',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                manager: { label: 'Manager', sequence: 1 },
                facilities: { label: 'Facilities', sequence: 2 },
                final: { label: 'Final', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'draft'
        }),

        integration_status: ChoiceColumn({
            label: 'Integration Status',
            choices: {
                not_called: { label: 'Not called', sequence: 0 },
                success: { label: 'Success', sequence: 1 },
                failure: { label: 'Failure', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'not_called'
        }),

        // String/JSON field for integration
        integration_payload: StringColumn({
            label: 'Integration Payload',
            maxLength: 4000
        }),

        // URL field for meeting link
        meeting_link: StringColumn({
            label: 'Meeting Link',
            maxLength: 1024
        })
    },
    display: 'short_description',
    extensible: false,
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private'
})