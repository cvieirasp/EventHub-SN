import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '61834451c3a332100b3a3132b40131db': {
                        table: 'sys_embedded_help_role'
                        id: '61834451c3a332100b3a3132b40131db'
                        deleted: true
                    }
                    '9a438411c3a332100b3a3132b40131f5': {
                        table: 'sys_embedded_help_role'
                        id: '9a438411c3a332100b3a3132b40131f5'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '10c074f79afc46a99f08a1345055b851'
                    }
                    event_admin_delete: {
                        table: 'sys_security_acl'
                        id: '85fdad4d1cc843aaabc2ef885d1d5d40'
                    }
                    event_admin_read: {
                        table: 'sys_security_acl'
                        id: '2237bc732e94462c9ed6018dc65d5590'
                    }
                    event_agent_create: {
                        table: 'sys_security_acl'
                        id: 'e3bedf7939784ca19ae4813f9fa80cde'
                    }
                    event_agent_read: {
                        table: 'sys_security_acl'
                        id: '906ba70cfe744fff8662c3368c16f7ff'
                    }
                    event_agent_write: {
                        table: 'sys_security_acl'
                        id: 'd6f5094774eb48a780ac92ce8e89ae6a'
                    }
                    event_request_admin_create: {
                        table: 'sys_security_acl'
                        id: 'd6bc190091fa48ad9de6ef3c5a4e7f9d'
                    }
                    event_request_admin_delete: {
                        table: 'sys_security_acl'
                        id: '077a8dfd76da4942b47c0d95afa08edd'
                    }
                    event_request_admin_read: {
                        table: 'sys_security_acl'
                        id: '6d930090aaa440da9eed7b736cf2c491'
                        deleted: true
                    }
                    event_request_admin_write: {
                        table: 'sys_security_acl'
                        id: '8d4511c31177468194d00581f0bcde41'
                        deleted: true
                    }
                    event_request_agent_read: {
                        table: 'sys_security_acl'
                        id: '722eac6b3aa2496b84becac63300edb6'
                        deleted: true
                    }
                    event_request_agent_write: {
                        table: 'sys_security_acl'
                        id: '441e6e8a6ae643b580e73232fc17f864'
                    }
                    event_request_user_read: {
                        table: 'sys_security_acl'
                        id: 'e5b1cdc41aa74129a4f53b78ace8328f'
                    }
                    event_user_read: {
                        table: 'sys_security_acl'
                        id: '8c069e4a970645e48c6fe2b57a1fdac1'
                    }
                    fea38851c3a332100b3a3132b40131b5: {
                        table: 'sys_embedded_help_role'
                        id: 'fea38851c3a332100b3a3132b40131b5'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ba2c39e9b91e47278b15de94df941ccf'
                    }
                    room_admin_create: {
                        table: 'sys_security_acl'
                        id: '15bb90c96fb34defab836862b0b43826'
                    }
                    room_admin_delete: {
                        table: 'sys_security_acl'
                        id: '181aa64b8e164a83bf17a5580ce49142'
                    }
                    room_admin_write: {
                        table: 'sys_security_acl'
                        id: 'b2df72f6c71e498fbced13a51e5387d7'
                    }
                    room_user_read: {
                        table: 'sys_security_acl'
                        id: 'a34bd481f8914677acf10c4910422f01'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '009550f40412457cb69037e7d03bab09'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                            value: 'in_person'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '014f958c4a6743fba3b6456279af65c9'
                        key: {
                            name: 'x_476470_eventhub_event_request'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '059d9f37994e4745adb813121c02fc2d'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'has_projector'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05f60097d7884147a7a7fe5436230c9a'
                        deleted: true
                        key: {
                            sys_security_acl: '722eac6b3aa2496b84becac63300edb6'
                            sys_user_role: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '07b709febe2642a6ae298a6fafd138a1'
                        key: {
                            sys_security_acl: 'b2df72f6c71e498fbced13a51e5387d7'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
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
                        id: '0b28b8f744a94fd6914e559c562e0482'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'agenda'
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
                        table: 'sys_security_acl_role'
                        id: '0fa1c7869fca4d37b9898fb0733b500f'
                        deleted: true
                        key: {
                            sys_security_acl: '6d930090aaa440da9eed7b736cf2c491'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
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
                        table: 'sys_db_object'
                        id: '148f49d1b1944d50bd9bb249c4a613b7'
                        key: {
                            name: 'x_476470_eventhub_room'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1545c5dff7e2482897929a918b135e3d'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1548d05e40c14d8d8912aa97a5f2fcf3'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16e9ffd3b87c4199bf3424d1e525035d'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'has_projector'
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
                        table: 'sys_security_acl_role'
                        id: '1cc889b79f724ceeaf947c6882e5d462'
                        key: {
                            sys_security_acl: '906ba70cfe744fff8662c3368c16f7ff'
                            sys_user_role: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: '2170839424884fa7b502bef5626a7710'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '21ed68f69ccb4ef98ff6dee5990074f1'
                        key: {
                            sys_security_acl: 'd6f5094774eb48a780ac92ce8e89ae6a'
                            sys_user_role: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22b27b5450fc4688bf05df0ed870b803'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'room'
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
                        table: 'sys_documentation'
                        id: '26b5a62c0ca24920b94762f10ce23828'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'site'
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
                        table: 'sys_dictionary'
                        id: '2fb4d766faf14e05a7c76522ce5de727'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '3299560b35b44ce28693a99db5c17fb0'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'site'
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
                        id: '33b02cf72b764085bff02b9a3f5197a0'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'location'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '36e1b105ec7844aa9c7cf5e7b76ef878'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '372b90b1e3d743db8b307022d1ccc4f6'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'availability_status'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '373d1e63a9a042739252024a47405dd7'
                        deleted: false
                        key: {
                            name: 'x_476470_eventhub.admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37f29748f6dd4761aa53b1f82fae3f1a'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'event_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a998fa7480141a8a280a7056f9c03e2'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'meeting_link'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b0d3aeb467b489da8d1bcd8d7aeaf09'
                        key: {
                            sys_security_acl: 'e3bedf7939784ca19ae4813f9fa80cde'
                            sys_user_role: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3be2d75488c54fcfb4f8d78f55862d59'
                        deleted: false
                        key: {
                            name: 'x_476470_eventhub.agent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e488a44876945d791cefe688ef905e4'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                            language: 'en'
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
                        id: '437db9112651429f937e3372a3cd924e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45339a3e4b7b45d99ffdeefe8309f0f0'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47494bfab3b84d40b912c809f0d6db43'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
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
                        id: '4d074f2234f14c2da4b55fb2e6571560'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'availability_status'
                            value: 'under_maintenance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e6349eee6e54c39bafe578d0147364e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'capacity'
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
                        id: '4fb45596fd3c422bb92969db2fbbd1b4'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'description'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: '5c7eb29dc1444f649b38101c1f304889'
                        key: {
                            sys_security_acl: '15bb90c96fb34defab836862b0b43826'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d4bf92d6b674cf1be8b730eef88b204'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'name'
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
                        table: 'sys_dictionary'
                        id: '5e0687ee03854377adb899d983d3b977'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'end'
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
                        table: 'sys_choice'
                        id: '608f1f267afd4111b8665fde101fd66e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '63fa00c29a684d5289078644adfaea52'
                        deleted: false
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
                        id: '6b4f1f281390406b8cdbfe3aa77ce833'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e2de5599810411c8a1bb726f6e0ca97'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e7e4682353c4ed289d00c3bec2a8832'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                            value: 'remote'
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
                        table: 'sys_documentation'
                        id: '774de5a5ea864c4aa6cd90081a202642'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'agenda'
                            language: 'en'
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
                        id: '8119f22e450246f780aeee7a2d177881'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'name'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '866e6d3852d74f83b45730e9f56459bb'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'availability_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '88070109ba394fbf83c54bb19944002f'
                        key: {
                            name: 'x_476470_eventhub_room'
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
                        table: 'sys_dictionary'
                        id: '91fc7fd724e04c1e9f763f921f53ed06'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'capacity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '920b274bc4e14b3d9cdda415f250d9fe'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'capacity'
                            language: 'en'
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
                        id: '9a5fcb8e3f5942b298b3dd5c4b0b4a91'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9bd9786af01c437ab71f80cd7da64ba9'
                        key: {
                            sys_security_acl: '441e6e8a6ae643b580e73232fc17f864'
                            sys_user_role: {
                                id: '3be2d75488c54fcfb4f8d78f55862d59'
                                key: {
                                    name: 'x_476470_eventhub.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d5c30b4f12146ffad47f22359f341ef'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'event_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f4144b3ed004f179ad7dd25e1e3c49e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'a31897b32ea54e89b68fb9573b590c0f'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'has_video_conference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a32cd2108bb34c188bb9ee82b60ef2d0'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'banner_image'
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
                        table: 'sys_documentation'
                        id: 'a600573e21ab4984a44d7573ddb80bbe'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'meeting_link'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'ab187b1a02bb426f8c3ea7730ad1fd14'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'banner_image'
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
                        table: 'sys_security_acl_role'
                        id: 'abdafec92adf490e922372a446d5b4e0'
                        key: {
                            sys_security_acl: 'e5b1cdc41aa74129a4f53b78ace8328f'
                            sys_user_role: {
                                id: 'f91dd930a2be455a9f93740fef42ef59'
                                key: {
                                    name: 'x_476470_eventhub.user'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'ad2165a7b67e43fabb45ace9c36e2fbb'
                        key: {
                            sys_security_acl: '85fdad4d1cc843aaabc2ef885d1d5d40'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: 'afa7ff95608341b6ada0a8cf0f4c0d09'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: 'b8b636daef3d4ca8abb11929e020b0ca'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'start'
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
                        table: 'sys_dictionary'
                        id: 'ba06b62f589f4b2d80a9d6afeb897abe'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'has_video_conference'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baff2c58958b434ba45c65dfa661164f'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bbdaa59a5e414438bc1a2f7598c2a0eb'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'capacity'
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
                        table: 'sys_db_object'
                        id: 'c6e9be6abf2345bd8df82c22eec3294c'
                        key: {
                            name: 'x_476470_eventhub_event'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c88e8d9f745147cfbb7f8d18faf7ebab'
                        deleted: false
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
                        table: 'sys_choice_set'
                        id: 'c8ade90e149a4a8ca9367ab226385326'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca6633ab84aa42799b14c226e37152b3'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbaf1f29f81d47f094520d13b515cf4b'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc4dfc7130e64ee1ac179f215429b8e6'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'availability_status'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: 'cf9efb98d50e4274b991d24b39b980f9'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            value: 'open_for_registration'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd096dbe5e7eb473182693db1f3cb38be'
                        key: {
                            sys_security_acl: 'd6bc190091fa48ad9de6ef3c5a4e7f9d'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd6887f4c2dc44524bac2f4bed20aa957'
                        key: {
                            name: 'x_476470_eventhub_event'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd73afe697bc5469db70be4fd158bce5e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'owner'
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
                        table: 'sys_security_acl_role'
                        id: 'dd20878b30b94fcca0ae725243490f1e'
                        key: {
                            sys_security_acl: '8c069e4a970645e48c6fe2b57a1fdac1'
                            sys_user_role: {
                                id: 'f91dd930a2be455a9f93740fef42ef59'
                                key: {
                                    name: 'x_476470_eventhub.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'de1fef0754dd4447a309e51f857ef93e'
                        key: {
                            sys_security_acl: '181aa64b8e164a83bf17a5580ce49142'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dfbab3c8170c4c20aad9d5b91ca563bc'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dfdbcddf1ee04a1bbe792107b2295905'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            value: 'planned'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e0d940661c55433d98b2d1f2fcd547ad'
                        deleted: true
                        key: {
                            sys_security_acl: '8d4511c31177468194d00581f0bcde41'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'e697695bbead4ce6982a0de195a69eb5'
                        key: {
                            sys_security_acl: '077a8dfd76da4942b47c0d95afa08edd'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'e6ea0eb68407417a88eb4c1b9c724c28'
                        key: {
                            sys_security_acl: 'a34bd481f8914677acf10c4910422f01'
                            sys_user_role: {
                                id: 'f91dd930a2be455a9f93740fef42ef59'
                                key: {
                                    name: 'x_476470_eventhub.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e71c090a17cf4dcfa7df7ba7cd43319e'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e75a32ea4fee40a38316538a50712b59'
                        key: {
                            name: 'x_476470_eventhub_room'
                            element: 'availability_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e90f8c6df923425d835a34a0e6dff2f2'
                        key: {
                            sys_security_acl: '2237bc732e94462c9ed6018dc65d5590'
                            sys_user_role: {
                                id: '373d1e63a9a042739252024a47405dd7'
                                key: {
                                    name: 'x_476470_eventhub.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e95d16de97e4466f93def821cb92c69f'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'owner'
                            language: 'en'
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
                        id: 'ee5df7631f794bf1a9ee373029502191'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'location_type'
                            value: 'hybrid'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efbf1e2a3c204a47b541e9e20c893b80'
                        key: {
                            name: 'x_476470_eventhub_event'
                            element: 'status'
                            value: 'completed'
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
                        deleted: false
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
