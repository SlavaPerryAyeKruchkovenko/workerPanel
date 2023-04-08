const mock = {
    getAllCheckpoints: () => {
        return [
            {
                id: 1,
                name: "1 КПП",
            },
            {
                id: 2,
                name: "2 КПП",
            },
            {
                id: 3,
                name: "3 КПП",
            },
            {
                id: 4,
                name: "4 КПП",
            },
            {
                id: 5,
                name: "5 КПП",
            }
        ]
    },
    getAllTrucks: () => {
        return [{
            id: 1,
            name: "0хам00/74",
            order: "5000000429570"
        },
            {
                id: 2,
                name: "0хам01/74",
                order: "5000000429571"
            },
            {
                id: 3,
                name: "0хам02/74",
                order: "5000000429572"
            },
            {
                id: 4,
                name: "0хам22/174",
                order: "5000000429582"
            }
        ]
    },
    getAllRequest: () => {
        return [{
            id: 1,
            name: "0хам00",
            products: [
                {
                    id: 1,
                    name: "Цинк",
                    weight: "8т"
                },
                {
                    id: 2,
                    name: "Не цинк",
                    weight: "8т"
                }
            ]
        },
            {
                id: 2,
                name: "0хам01",
                products: [
                    {
                        id: 1,
                        name: "Цинк",
                        weight: "12т"
                    },
                    {
                        id: 2,
                        name: "Не цинк",
                        weight: "22т"
                    }
                ]
            },
            {
                id: 3,
                name: "0хам02",
                products: [
                    {
                        id: 1,
                        name: "Цинк",
                        weight: "12т"
                    },
                    {
                        id: 2,
                        name: "Не цинк",
                        weight: "22т"
                    }
                ]
            },
            {
                id: 4,
                name: "0хам03",
                products: [
                    {
                        id: 1,
                        name: "Цинк",
                        weight: "12т"
                    },
                    {
                        id: 2,
                        name: "Не цинк",
                        weight: "22т"
                    }
                ]
            }
        ]
    }
}
export default mock;