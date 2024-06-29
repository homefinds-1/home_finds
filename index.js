const product = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/91Jn5TsGqUL._AC_SX679_.jpg',
        title: 'Human Dog Bed',
        price: "129.99",
        link: 'https://amzn.to/3VESe0n',
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/61FNxqcVbsL.jpg',
        title: 'Trolley Dolly',
        price: "107.99",
        link: 'https://amzn.to/3VxZefi',
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/51C9GPk0i+L._SX522_.jpg',
        title: 'Automatic Trash Can',
        price: "139.99",
        link: 'https://amzn.to/4cCLBTi',
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/61kprIYrdEL.jpg',
        title: 'Latte Pen',
        price: "9.99",
        link: 'https://amzn.to/3zjkle6',
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/71giOH40A6L._AC_SX466_.jpg',
        title: 'Car Led Sign',
        price: "29.99",
        link: 'https://amzn.to/4cyHJ5y',
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/91XyM4d4hyL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Fake Rock',
        price: "7.99",
        link: 'https://amzn.to/3RIYVxs',
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/81eTCrx7oXL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Air Fryer Cover Plates',
        price: "39.99",
        link: 'https://www.amazon.com/Amzelas-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9E%D7%99%D7%99%D7%93%D7%99%D7%AA-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%95%D7%AA-%D7%9C%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/dp/B0CDWSF7N2/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.-zZw0Bx9rFdNcCJRIlCaeY34ueLsBSkYTUE5aArgO1TwvT3pTQs9j2Ukd7uDr77kINY61_USzcyHuY0_RMjNS2fbd3sH3zeOyoCQTwG-uesKVBgJuL8rS0l5EA-VdNhWBF9tTLYFgV7iTWbwF10mVrWBeQmywi3VXDESOCUhlsH3IfFZFyOikj1nDzfhQ2O0yF-ulGLQ6QoVQed94Vksq6P5KDvFGroTSQWHFHS5h5-YZiUGobmzdLN5FYsjRtquG0DqRnsfLp3V9TksE709HnsuxcaE_loTRrlPamApXXk.7-JnOKTXOLFxiQ-uUvDWm24Ho-QPUWvDautJY8NR4Js&dib_tag=se&qid=1712581061&s=electronics&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1',
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/51ez2dmKlFL.jpg',
        title: 'Electric Hot Pot',
        price: "19.99",
        link: 'https://amzn.to/3XEqmMD',
    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/61SjD4dWkWL._AC_SX679_.jpg',
        title: 'Mess Free Nail Clippers',
        price: "9.99",
        link: 'https://amzn.to/3RLks8r',
    },
    {
        id: 9,
        image: 'https://m.media-amazon.com/images/I/51nVfuC2WVL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Tik Tok Scroeller',
        price: "19.99",
        link: 'https://amzn.to/3zuVKTq',
    },
    {
        id: 10,
        image: 'https://m.media-amazon.com/images/I/71MDgPCH+6L.jpg',
        title: 'Reusable Straws',
        price: "8.99",
        link: 'https://amzn.to/3xAot8Y',
    },
    {
        id: 11,
        image: 'https://m.media-amazon.com/images/I/71T2TGj4XUL._AC_SX466_.jpg',
        title: 'Rear View Mirror',
        price: "9.99",
        link: 'https://amzn.to/45JtF6X',
    },
    {
        id: 12,
        image: 'https://www.boroughkitchen.com/cdn/shop/products/dreamfarm-supoon-spoon-red-borough-kitchen_2048x2048.jpg?v=1601149027',
        title: 'Supoon',
        price: "9.99",
        link: 'https://amzn.to/4cF2CfE',
    },
    {
        id: 13,
        image: 'https://m.media-amazon.com/images/I/41RQbzcOwuL._SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Sink Cover',
        price: "19.99",
        link: 'https://amzn.to/3XEtkjY',
    },
    {
        id: 14,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VmvYidqM30Dr8gRy_Aiq7xb4tmyMs0EwXQ&s',
        title: 'Suction Phone case',
        price: "12.99",
        link: 'https://amzn.to/3VHMjrx',
    },
    {
        id: 15,
        image: 'https://www.ezvalo.com/cdn/shop/files/EzTask_Beam_Pro.jpg?v=1695262293&width=512',
        title: 'Smart Desk Lamp',
        price: "68.99",
        link: 'https://amzn.to/3Vzr1MA',
    },
    {
        id: 16,
        image: 'https://m.media-amazon.com/images/I/51YODa9MscL._SX679_.jpg',
        title: 'Sunscreen Applicator',
        price: "13.99",
        link: 'https://amzn.to/3W0dUpe',
    },
    {
        id: 17,
        image: 'https://img.kwcdn.com/product/1eed510230/119616bc-c881-445a-a11e-e9e1a28d2aa1_800x800.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
        title: 'Back Stretcher',
        price: "16.99",
        link: 'https://amzn.to/4cBesHs',
    },
    {
        id: 18,
        image: 'https://m.media-amazon.com/images/I/819lnG03xQL._AC_SX679_.jpg',
        title: 'Laundry Turtle',
        price: "29.99",
        link: 'https://amzn.to/3VZ4FW1',
    },
    {
        id: 19,
        image: 'https://m.media-amazon.com/images/I/71kEMBI05hL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Inkles Printer',
        price: "159.99",
        link: 'https://amzn.to/4ckBu5A',
    },
    {
        id: 20,
        image: 'https://shopinnoviahome.com/cdn/shop/products/Innovia_AmazonStore_TT_Black-05_PDPimages_1500x1500_v100.jpg?v=1678201025&width=1445',
        title: 'Automatic Dispenser',
        price: "19.99",
        link: 'https://amzn.to/3LmvDRH',
    },
    {
        id: 21,
        image: 'https://m.media-amazon.com/images/I/71U2R-2V+bL._SX522_.jpg',
        title: 'Mop Slippers',
        price: "9.99",
        link: 'https://amzn.to/45Z3vO1',
    },
    {
        id: 22,
        image: 'https://m.media-amazon.com/images/I/31kvX73tNHL._QL92_SH45_SS200_.jpg',
        title: 'Portable Washing Machine',
        price: "19.99",
        link: 'https://amzn.to/4cuuWkG',
    },
    {
        id: 23,
        image: 'https://m.media-amazon.com/images/I/81GFFLiZOCL._AC_SX679_.jpg',
        title: 'Banana Filler',
        price: "8.99",
        link: 'https://amzn.to/3zmVyWA',
    },
    {
        id: 24,
        image: 'https://m.media-amazon.com/images/I/61t-bMNX3SL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Spinning Whisk',
        price: "9.99",
        link: 'https://amzn.to/3RJhtxr',
    },
    {
        id: 25,
        image: 'https://m.media-amazon.com/images/I/61CU9E0IcRL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Folding Board',
        price: "9.99",
        link: 'https://amzn.to/45KUMPm',
    },
    {
        id: 26,
        image: 'https://m.media-amazon.com/images/I/711g1hCyNsL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        title: 'Beverage Barricade',
        price: "19.99",
        link: 'https://amzn.to/3XEsyna',
    },
    {
        id: 27,
        image: 'https://m.media-amazon.com/images/I/61B8V9TNljL._AC_SX679_.jpg',
        title: 'Egg Cracker',
        price: "12.99",
        link: 'https://amzn.to/4cFqFe6',
    },
    {
        id: 28,
        image: 'https://m.media-amazon.com/images/I/51M5kH29axL._AC_SX679_.jpg',
        title: 'Reusable Lint Roller',
        price: "68.99",
        link: 'https://amzn.to/3KZFjRR',
    },
    {
        id: 29,
        image: 'https://m.media-amazon.com/images/I/615mURYLr-L._AC_SX679_.jpg',
        title: 'Lazy Susan',
        price: "129.99",
        link: 'https://amzn.to/4eFDw1V',
    },
    {
        id: 30,
        image: 'https://m.media-amazon.com/images/I/71dX8-uor+L.jpg',
        title: 'Bed Tent',
        price: "119.99",
        link: 'https://amzn.to/3VIaiGP',
    },
    {
        id: 31,
        image: 'https://m.media-amazon.com/images/I/51HhyUqXImL.jpg',
        title: 'Airfly Connector',
        price: "68.99",
        link: 'https://amzn.to/3XJTVMG',
    },
    {
        id: 32,
        image: 'https://m.media-amazon.com/images/I/71Ye2gk9OvL._AC_SL1500_.jpg',
        title: 'Lemon Juicer',
        price: "13.99",
        link: 'https://amzn.to/3W0dUpe',
    },
    {
        id: 33,
        image: 'https://m.media-amazon.com/images/I/814Ynz7T1iL._AC_SX466_.jpg',
        title: 'Car Cup Coaster',
        price: "16.99",
        link: 'https://amzn.to/3zjK0Dn',
    },
    {
        id: 34,
        image: 'https://m.media-amazon.com/images/I/71vVi2RqOmL.jpg',
        title: 'Brightest Flashlight',
        price: "29.99",
        link: 'https://amzn.to/4eLcF4k',
    },
    {
        id: 35,
        image: 'https://m.media-amazon.com/images/I/61jMiEKD17L.jpg',
        title: 'Trash Can Compactor',
        price: "159.99",
        link: 'https://amzn.to/4clOWX5',
    },
    {
        id: 36,
        image: 'https://m.media-amazon.com/images/I/61uGYCbhI7L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Car Touch Screen',
        price: "19.99",
        link: 'https://amzn.to/4cIkVk6',
    },
    {
        id: 37,
        image: 'https://m.media-amazon.com/images/I/51FtwpwuHIL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Bottle Cleaner',
        price: "9.99",
        link: 'https://amzn.to/4ci1T40',
    },
    {
        id: 38,
        image: 'https://m.media-amazon.com/images/I/61nIFbEZoQL._AC_SX679_.jpg',
        title: 'Toilet Seat Cover',
        price: "19.99",
        link: 'https://amzn.to/3VIT1NR',
    },
    {
        id: 39,
        image: 'https://m.media-amazon.com/images/I/61vXodCTViL.jpg',
        title: 'Phone Timer Lock',
        price: "8.99",
        link: 'https://amzn.to/45MDYHA',
    },
    {
        id: 40,
        image: 'https://m.media-amazon.com/images/I/81ZF53Jo07L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Candle by the Hour',
        price: "9.99",
        link: 'https://amzn.to/4bnd1eL',
    },
    {
        id: 41,
        image: 'https://www.bewild.com/cdn/shop/products/barbasol-diversion-can-safe-1.jpg?v=1506417650',
        title: 'Secret Can Safe',
        price: "9.99",
        link: 'https://amzn.to/4eGh1tE',
    },
    {
        id: 42,
        image: 'https://m.media-amazon.com/images/I/610mB1+-hiL._AC_SY300_SX300_.jpg',
        title: 'Foldable Drink Carrier',
        price: "19.99",
        link: 'https://amzn.to/4cGP1V6',
    },
    {
        id: 42,
        image: 'https://m.media-amazon.com/images/I/71TjPJujdxL._AC_SX679_.jpg',
        title: 'Egg Dispenser',
        price: "12.99",
        link: 'https://amzn.to/4eKe8YY',
    },
    {
        id: 43,
        image: 'https://m.media-amazon.com/images/I/71OJwLN437L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Spoon Rest/Holder',
        price: "68.99",
        link: 'https://amzn.to/4bnJTE4',
    },
    {
        id: 44,
        image: 'https://m.media-amazon.com/images/I/61w8yIZmkqL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Splatypus Jar Spatula',
        price: "68.99",
        link: 'https://amzn.to/45IvbGs',
    },
    {
        id: 45,
        image: 'https://1sale-production-media.s3.us-east-1.amazonaws.com/wp-content/uploads/2023/10/IMG_1696259536-679x390.png',
        title: 'Label Maker',
        price: "19.99",
        link: 'https://amzn.to/3XKYHcF',
    },
    {
        id: 46,
        image: 'https://m.media-amazon.com/images/I/81hCO+G+MrL._AC_SX679_.jpg',
        title: 'LOL Roller Stamp',
        price: "8.99",
        link: 'https://amzn.to/3xDC0N0',
    },
    {
        id: 47,
        image: 'https://m.media-amazon.com/images/I/61pja0HoDEL._AC_SX679_.jpg',
        title: 'Wall Protectors',
        price: "9.99",
        link: 'https://amzn.to/4eHrGEp',
    },
    {
        id: 48,
        image: 'https://m.media-amazon.com/images/I/61LbmE7x5aL._AC_SX679_.jpg',
        title: 'Shoe Space Saver',
        price: "9.99",
        link: 'https://amzn.to/3VNzCvn',
    },
    {
        id: 49,
        image: 'https://i5.walmartimages.com/asr/96003a2d-faf0-4446-81ee-a94c763f13d5.ef3a67766b24835acaa61e8633ada576.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'Fingerbot',
        price: "19.99",
        link: 'https://amzn.to/4cjE3F9',
    },
    {
        id: 50,
        image: 'https://m.media-amazon.com/images/I/71TjPJujdxL._AC_SX679_.jpg',
        title: 'Egg Dispenser',
        price: "12.99",
        link: 'https://amzn.to/4eKe8YY',
    },
    {
        id: 51,
        image: 'https://i.pinimg.com/736x/4c/ad/63/4cad63117db32a556f1bbee08d5cd2bd.jpg',
        title: 'Drink Organizer',
        price: "68.99",
        link: 'https://amzn.to/3RPEBdw',
    },
    {
        id: 52,
        image: 'https://m.media-amazon.com/images/I/61CcH0YROmL.jpg',
        title: 'Click & Carry',
        price: "68.99",
        link: 'https://amzn.to/3RQyCFr',
    },
    {
        id: 53,
        image: 'https://m.media-amazon.com/images/I/71Mz2zkXcbL._AC_SX466_.jpg',
        title: 'CouchConsole Tray',
        price: "12.99",
        link: 'https://amzn.to/45T6Gqf',
    },
    {
        id: 54,
        image: 'https://m.media-amazon.com/images/I/61aEbYbzMNL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Nuts Dispenser',
        price: "68.99",
        link: 'https://amzn.to/3W1Fr9H',
    },
    {
        id: 55,
        image: 'https://m.media-amazon.com/images/I/51OmU8TSAwL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Bread Bag Clips',
        price: "68.99",
        link: 'https://amzn.to/3VNr3QY',
    },
]

const categories = [...new Set(product.map((item) => { return item }))]
document.getElementById('enterP').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price, link } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                <a href="${link}"><img class='images' src=${image}></img></a>
                </div> 
                <div class='bottom'>
                    <a href="${link}"><p>${title}</p></a>
                    
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
 