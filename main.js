
function contacts(queries) {
    console.log(queries);
    // Write your code here
    const contactsMap = new Map();
    const results = [];

    for (const query of queries) {
        console.log(query);

        const [operation, name] = query;
        console.log(operation);
        console.log(name);

        if (operation === 'add') {
            // Add the contact to the map
            for (let i = 1; i <= name.length; i++) {
                const partialName = name.slice(0, i);
                contactsMap.set(partialName, (contactsMap.get(partialName) || 0) + 1);
            }

        } else if (operation === 'find') {
            // Find the count of contacts starting with the partial name
            results.push(contactsMap.get(name) || 0);
        }

    }

    return results;

}
