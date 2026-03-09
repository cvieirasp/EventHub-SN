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
                        table: 'sys_user_role'
                        id: 'f91dd930a2be455a9f93740fef42ef59'
                        key: {
                            name: 'x_476470_eventhub.user'
                        }
                    },
                ]
            }
        }
    }
}
