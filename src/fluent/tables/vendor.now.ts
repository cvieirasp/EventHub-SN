import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ChoiceColumn,
    BooleanColumn
} from '@servicenow/sdk/core'

// Vendor table - manages event service vendors
export const x_476470_eventhub_vendor = Table({
    name: 'x_476470_eventhub_vendor',
    label: 'Event Vendor',
    schema: {
        // Basic vendor information
        name: StringColumn({
            label: 'Vendor Name',
            maxLength: 200,
            mandatory: true
        }),

        // Vendor service type
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                buffet_coffee: { label: 'Buffet/Coffee break', sequence: 0 },
                audio_video: { label: 'Audio and Video', sequence: 1 },
                security: { label: 'Security', sequence: 2 },
                other: { label: 'Other', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        }),

        // Contact information
        contact_name: StringColumn({
            label: 'Contact Name',
            maxLength: 100
        }),

        // Using StringColumn for email with appropriate validation
        contact_email: StringColumn({
            label: 'Contact Email',
            maxLength: 100
        }),

        phone: StringColumn({
            label: 'Phone',
            maxLength: 40
        }),

        // Status flag
        active: BooleanColumn({
            label: 'Active',
            default: true
        })
    },
    display: 'name',
    extensible: false,
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private'
})