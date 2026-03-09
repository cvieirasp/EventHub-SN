import '@servicenow/sdk/global'
import { 
    Table, 
    ReferenceColumn, 
    ChoiceColumn
} from '@servicenow/sdk/core'

// Event Task table - extends Task for event-related work items
export const x_476470_eventhub_event_task = Table({
    name: 'x_476470_eventhub_event_task',
    label: 'Event Task',
    extends: 'task', // Inherits number, short_description, description, etc.
    schema: {
        // Reference to the event this task is for
        event: ReferenceColumn({
            label: 'Event',
            referenceTable: 'x_476470_eventhub_event',
            mandatory: true
        }),

        // Optional vendor assignment
        vendor: ReferenceColumn({
            label: 'Vendor',
            referenceTable: 'x_476470_eventhub_vendor',
            mandatory: false
        }),

        // Task categorization
        task_type: ChoiceColumn({
            label: 'Task Type',
            choices: {
                room_reservation: { label: 'Room reservation', sequence: 0 },
                buffet_coffee: { label: 'Buffet/Coffee break', sequence: 1 },
                av_preparation: { label: 'AV preparation', sequence: 2 },
                communication: { label: 'Communication', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        })
    },
    display: 'short_description',
    extensible: false,
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private'
})