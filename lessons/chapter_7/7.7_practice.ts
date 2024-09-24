
const data_77 = [
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 3, name: 'Надя'},
]

interface ID_77 {
    id: number
}

function sort_77<T extends ID_77>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc': 
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    })
}

