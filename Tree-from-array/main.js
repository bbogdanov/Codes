let arr = [
    2,
    3,
    5,
    6,
    7,
    7,
    7,
    7,
];

function createBST(keys) {
    const tree = {
    };

    for(const key in keys) {
        var number = keys[key];

        if (tree.hasOwnProperty(number) && Array.isArray(tree[number])) {
            tree[number].push(number);
        } else  {
            if(!Array.isArray(tree[number])) {
                tree[number] = [];
                tree[number].push(number);
            }
        }
    }

    for(key in tree) {
        console.log(key);
    }
}

createBST(arr);