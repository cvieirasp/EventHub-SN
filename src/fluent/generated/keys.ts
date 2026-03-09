import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '10c074f79afc46a99f08a1345055b851'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ba2c39e9b91e47278b15de94df941ccf'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '014f958c4a6743fba3b6456279af65c9'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08405291baa845f99a3cbe02cf7d2279'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bc5ea061f764c03b9215aaa5f297e02'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'meeting_link'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f391930202b462db0d64c56b2126551'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'proposed_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '10a83961d8984da4b9f9abf1e34c16dd'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '11c6a3648d6942f0ae10ac14f1a70ad8'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            value: 'social_event'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1894cb51ba0f43dda84789dfe94b33d0'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1da1bddd3acf402893be483e9588131a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e605a226fe34beb90742e0a4d3aa9d1'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23f18224fc854f189be907ed4d83e0c1'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                            value: 'remote'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '259aa2153eed4b2f9140f2f34ec8a171'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ca0ad24c2f5438da1b555218b5c592b'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2e06c1a9e76d4feb9f47d2aff3893df4'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                            value: 'in_person'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f51d7273b90432589291265a7eb4c1a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                            value: 'manager'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2f9ee0bb5a9147db8abb4a37f60dd6b4'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '30877904a7064d9e99d97419f1d76b7d'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '32a26ea5c7ea4ebca5050e9552dd8d17'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3308484b4f9548a1bb63971eb8dfb8b6'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requires_catering'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3427334a20254deeb4868573f3039826'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '373d1e63a9a042739252024a47405dd7'
                        key: {
                            name: 'x_476470_eventhub.admin'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3be2d75488c54fcfb4f8d78f55862d59'
                        key: {
                            name: 'x_476470_eventhub.agent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ed70c59c6eb4f41b8f8df5c2ed84b56'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requires_av'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f4c1ff1a68e439aa26418d7220e432a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'public_event'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41453d3cbde841cca92e07e9e13b1c05'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'site'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4997a4f183fc4f6cbd6cc1a8d8a3dbb5'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c23f2fb9d614def828f5d118e3f45af'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requires_av'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4c86c6638c9742f29b11c2232b317054'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4e7d452e01a14579aa1cc48fa7c63000'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            value: 'general_meeting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53ab4d70dfed4ff5a519058e777d4ccd'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '548f263c5a2549eaab971489d5bdff00'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            value: 'webinar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57f1a873e38843b69ddc444eec5adbbf'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59457258905a48578f18b67639ccb5c2'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requires_catering'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d92de29d91147bfb98844b7a3ddd0f2'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'sponsor_department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5eef0f755799491899ef59b555b9c1e7'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '63fa00c29a684d5289078644adfaea52'
                        key: {
                            role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                            contains: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b1ea9515d5a4193893f74ee462269fa'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requested_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '725ab3d050ed4d0195b8d4b1b5212776'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'expected_attendees'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7601c683f456419898a21b81afb1899a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77fced0bfdf74aee94618423c253d168'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7eafd6d855f144abad538b0e02c841cf'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'budget_estimate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81e1d50f460a4adf988eb8acac06edfc'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'expected_attendees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '858886bf19f14c44b1cac9da908b9c10'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b6bc6a835af4a7f9e538310cc924370'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'proposed_start'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8da6767226f243fdbcf9ab9d9aa11ee3'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'sponsor_department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93b2b80a12374c5ba7c7feebc5fa152d'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'proposed_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '960c1b6c6fe1479489491c163001e123'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9931ebab4c1c489c9e08b7a4336018af'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'public_event'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1acceae93b444bcbfc4c4fcf40923e4'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3308f2e5c5641e5b72090ff170f136f'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                            value: 'facilities'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a56bc81b53d445aca340c0834b2cd1db'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6fb65798a534a368698433cee64ec1a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a74f971f1dc9449aa91f1ab7463269d5'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'site'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a884977988b442beab49c608b2cd526a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8f62bac787f4df98bb734c7e9412727'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab62b120b87f42fba10ce2a3d997a62c'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            value: 'workshop'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acf6633c39e5434496afc29c814b6c53'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                            value: 'not_called'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aea958c2501d4c16a604a90408c1f07f'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_owner'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b0fcd56e2d824fa8b8867dafbb622dee'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b494ecf2a16f4d7e8cea3e91f3a28d33'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_payload'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9e33846e1f746e2865be6151e9ad671'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'meeting_link'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c246a8475f884da2ae8f982b490bac63'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4bc70eeb0a841f78d93d771b82546cf'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'risk_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c630e5b717344b88929c79f1584969dd'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_payload'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6ce40ff4f314a6da9c7c262ba61c439'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c88e8d9f745147cfbb7f8d18faf7ebab'
                        key: {
                            role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                            contains: {
                                id: 'f91dd930a2be455a9f93740fef42ef59'
                                key: {
                                    name: 'x_476470_eventhub.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf83f5db012242b38758d25ba42b1eb6'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                            value: 'failure'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd84125565fa34d51b994f7b412974b9a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'budget_estimate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1a2561c7f74468d8691db6d04c202b7'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'approval_stage'
                            value: 'final'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6dac3f8758543c896ef9d50d90d4c1b'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebc66e7efd474b9aa77e699474862bc8'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                            value: 'success'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1974aba58454b6ea4a25512ec06109f'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'event_type'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1c6099533d447f7be8108dadb5bc0a1'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'integration_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f91dd930a2be455a9f93740fef42ef59'
                        key: {
                            name: 'x_476470_eventhub.user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa1704ef2c8b4f1694d204067c2b8372'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                            value: 'hybrid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'feafb9d0f61146089a48ac32f3485459'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff9e6a9d5d654d668b46b4ace2e14c6a'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'proposed_end'
                        }
                    },
                ]
            }
        }
    }
}
