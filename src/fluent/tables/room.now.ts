import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    IntegerColumn, 
    BooleanColumn,
    ChoiceColumn
} from '@servicenow/sdk/core'

// Event Room table - for managing event rooms and meeting spaces
export const x_476470_eventhub_room = Table({
    name: 'x_476470_eventhub_room',
    label: 'Event Room',
    schema: {
        name: StringColumn({
            label: 'Room Name',
            maxLength: 100,
            mandatory: true
        }),
        location: ReferenceColumn({
            label: 'Location',
            referenceTable: 'cmn_location',
            mandatory: false
        }),
        capacity: IntegerColumn({
            label: 'Capacity',
            min: 1,
            mandatory: true
        }),
        has_projector: BooleanColumn({
            label: 'Has Projector',
            default: false
        }),
        has_video_conference: BooleanColumn({
            label: 'Has Video Conference',
            default: false
        }),
        availability_status: ChoiceColumn({
            label: 'Availability Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                under_maintenance: { label: 'Under Maintenance', sequence: 1 }
            },
            default: 'active',
            dropdown: 'dropdown_with_none'
        })
    },
    display: 'name',
    accessible_from: 'package_private',
    actions: ['create', 'read', 'update', 'delete'],
    extensible: false
})