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
                    <a href="${link}"><h2>$ ${price}</h2></a>
                    
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
 