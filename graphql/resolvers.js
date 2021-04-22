const people = [
    {
        id: '0',
        name: 'Nicolas',
        age: 18,
        gender: 'female'
    },
    {
        id: '1',        
        name: 'John',
        age: 19,
        gender: 'male'
    },
    {
        id: '2',        
        name: 'Joe',
        age: 19,
        gender: 'female'
    }
]


const getById = id => {
    const filterPeople = people.filter(person => person.id === String(id));
    return filterPeople[0];
}


const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;