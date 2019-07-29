const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const documents = {};
let bulkResponse = [];
let dd;

generateLocalBulkData()
io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    }

    socket.on('getBulkData', () => {
        // console.log('Table data started');
        socket.emit('bulk', bulkResponse);
        // console.log('Table data ended');
    });

    socket.on('sendPageReq', (data) => {
        const startIndex = data.pageSize * (data.page - 1);
        const endIndex = data.pageSize * data.page;
        const pagedData = bulkResponse.slice(startIndex, endIndex);
        const responseData = {
            page_data: pagedData,
            page: data.page,
            result_count: bulkResponse.length
        }
        if (dd) {
            clearInterval(dd);
        }
        socket.emit('getPageData', responseData);

        dd = setInterval(() => {
            for (let i of [0, 5, 7, 3, 6, 9]) {
                responseData.page_data[i].price = Math.random() * (2000 - 200) + 200
            }
            socket.emit('getPageData', responseData);
        }, 5000);
    });

    socket.on('getDoc', docId => {
        safeJoin(docId);
        socket.emit('document', documents[docId]);
    });

    socket.on('addDoc', product => {
        products.push(product);
        io.emit('documents', products);
        socket.emit('document', product);
    });

    socket.on('editDoc', product => {
        const data = products.filter(item => item.productCode !== product.productCode);
        products = [];
        products.push(...data, product);
        io.emit('documents', products);
        socket.emit('document', product);
    });

    socket.on('deleteDoc', product => {
        products = products.filter(item => item.productCode !== product.productCode);
        io.emit('documents', products);
        socket.emit('delItem', product);
    });

    socket.on('products', () => {
        setInterval(() => {
            if (products.length) {
                products[0].date = new Date();
            }
            socket.emit('documents', products);
        }, 1000);
    });

    io.emit('documents', products);

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});

function generateLocalBulkData() {
    let temp = [];
    temp = generateObj(temp);
    bulkResponse = temp;
    // console.log('data length: ', this.bulkResponse.length);
    return this.bulkResponse;
}

function generateObj(temp) {
    for (let i = 0; i <= 999999; i++) {
        const obj = {
            id: 'Product_id-' + (i + 1),
            name: 'Product-' + (i + 1),
            type: (i % 3) === 0 ? 'Electronic' : 'Home-appliances',
            price: Math.random() * (2000 - 200) + 200,
            is_available: (i % 2) === 0 ? true : false
        };
        temp.push(obj);
    }
    return temp;
}

let products = [
    {
        id: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        description: 'Leaf rake with 48-inch wooden handle',
        starRating: 3.2,
        date: new Date('2010-01-25'),
        value: 203.08
    },
    {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        description: '15 gallon capacity rolling garden cart',
        starRating: 4.2,
        date: new Date('2011-11-23'),
        value: 140.30
    },
    {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        description: 'Curved claw steel hammer',
        starRating: 4.8,
        date: new Date('2010-04-15'),
        value: 1280.73
    },
    {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        description: '15-inch steel blade hand saw',
        starRating: 3.7,
        date: new Date('2010-03-18'),
        value: 210.73
    },
    {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        description: 'Standard two-button video game controller',
        starRating: 4.6,
        date: new Date('2010-07-21'),
        value: 610.73
    }
];