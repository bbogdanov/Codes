const arr = [1,2,5,6,1,10,5,6,7,9,12,30];

function Node(_data) {
    let data = _data;
    let nodeLeft;
    let nodeRight;

    return {
        data: data,
        nodeLeft: nodeLeft,
        nodeRight: nodeRight
    }
}


function createBT(items) {
    const tree = new Node(items[0]);

    items.forEach((item) => {
        insertNode(tree, new Node(item));
    })

    return tree;
}

function insertNode(node, newNode) {
    if (node.data === newNode.data) return;

    if (node.data > newNode.data) {
        if (node.nodeLeft) insertNode(node.nodeLeft, newNode);
        else node.nodeLeft = newNode;
    } else {
        if (node.nodeRight) insertNode(node.nodeRight, newNode);
        else node.nodeRight = newNode;
    }
}

console.log(JSON.stringify(createBT(arr)));