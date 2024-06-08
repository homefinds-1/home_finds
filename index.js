const product = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/81kBz2X3sbL._AC_SX679_.jpg',
        title: 'Vegetable Chopper',
        price: "16.99",
        link: 'https://www.amazon.com/Fullstar-Mini-Vegetable-Chopper-Container/dp/B0BHSXFTGH/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_2/139-7648777-0558157?pd_rd_w=VBytB&content-id=amzn1.sym.a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_p=a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_r=R51DDBFZZP6G30J2WVGP&pd_rd_wg=7PSNz&pd_rd_r=e2f9d29e-ed96-425b-9402-a32c337373f1&pd_rd_i=B0BHSXFTGH&th=1',
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/81WR5GYdJvL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg',
        title: 'kitchen cans organizer',
        price: "12.89",
        link: 'https://www.amazon.com/-/he/Utopia-%D7%90%D7%A8%D7%92%D7%95%D7%A0%D7%99%D7%AA-%D7%9C%D7%A4%D7%97%D7%99%D7%95%D7%AA-%D7%9C%D7%9E%D7%96%D7%95%D7%95%D7%94-%D7%97%D7%91%D7%99%D7%9C%D7%94/dp/B0BBR3D13T/ref=sr_1_47?_encoding=UTF8&content-id=amzn1.sym.208df7fb-e477-4a39-81d2-8483d5d2b687&dib=eyJ2IjoiMSJ9.ZtaMD0eV0HWCj59nG8jgvstTXwvwfCaQJ1N7rlx89Qaoc9rcD9StZesbHoJPpIRKrby7wA14hvzPg17dmRVfONsBGhfwHZePQN5oxY_DV6Nwjj50BVf5_CqQJWLwg0jQ-ZgnG8tHe24Jg3Us8mkkMu141QJs2SD1_TJiUPl6EgzniUEF7hxSU841ZyMgyC60Z-TIHN-1gKfKsQ9sO87oPk56Sv-EHXmfg6Cf2VDceFWJwH2hz1K12pmxegjXcB1xWFdurjY1Wo6P5Eht2RjVldHYFjvLMebmYdNW-z-6Dm0.9kzIeZ8c_cUeFfPBH7JehgmYLSPgRF5LA48Rt90onyY&dib_tag=se&keywords=home%2Band%2Bkitchen&pd_rd_r=e7f27ae0-50ec-4358-868e-322cac653a88&pd_rd_w=Fs8m1&pd_rd_wg=dxAKg&pf_rd_p=208df7fb-e477-4a39-81d2-8483d5d2b687&pf_rd_r=7H0PW33RZYBQV1NFQ3JB&qid=1712577970&sr=8-47&th=1',
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/61Mv4h1f4DL._AC_SX466_.jpg',
        title: 'iPhone charging station:3-in-1',
        price: "17.99",
        link: 'https://www.amazon.com/-/he/%D7%9E%D7%98%D7%A2%D7%9F-%D7%90%D7%9C%D7%97%D7%95%D7%98%D7%99-%D7%AA%D7%97%D7%A0%D7%AA-%D7%98%D7%A2%D7%99%D7%A0%D7%94-%D7%9C%D7%90%D7%99%D7%99%D7%A4%D7%95%D7%9F/dp/B0C2BMNHW2?ref_=Oct_d_orecs_d_16225009011_4&pd_rd_w=VfJSO&content-id=amzn1.sym.883ba8ec-a586-4ad0-b4cc-46903118bb20&pf_rd_p=883ba8ec-a586-4ad0-b4cc-46903118bb20&pf_rd_r=CHZSSZ5QB2RNVT5J3RQ7&pd_rd_wg=HQMnB&pd_rd_r=072dd76d-a6f4-4f0c-951a-41c2373c49c8&pd_rd_i=B0C2BMNHW2',
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/6195Ie-0H-L._AC_SX679_.jpg',
        title: 'Round stackable ice cube tray',
        price: "9.99",
        link: 'https://www.amazon.com/-/he/DclobTop-%D7%A7%D7%95%D7%91%D7%99%D7%95%D7%AA-%D7%A2%D7%92%D7%95%D7%9C-%D7%A0%D7%99%D7%AA%D7%9F-%D7%9C%D7%A2%D7%A8%D7%99%D7%9E%D7%94/dp/B0C3LPTR8R/ref=sr_1_7?_encoding=UTF8&content-id=amzn1.sym.68f2b66e-afdb-4a19-b88c-555da04d6dc2&crid=2LRTV3593NEHX&dib=eyJ2IjoiMSJ9.NCuOha7LXpmSICRGS3GiVctXPp5IpyYH1iPVLvbso_xdonls066YHgIdxqZRZUfQCDN5KbesHquN40fyTXwQAxRkOu9MBvN6U1JVhHYmGPg7GSCIELDJBClWVcfbCVvREuQoNbxyVgnUMFgzHmg7y2LM69Fg3UCs3rgWIPp76wl0KVy5dDbd15FfHf8NLH-Wr-AY26D6eNS_MFKQraxZ0wfRI6anrjJxJnK4fXDwhrEnE5lxoVKz9lCEPTe1iF35VrZgJLJi3GRVKe81CIRsQzThXBvpTTD1zil_un4Qq9Q.nbu--nQv4RhJA5UVGPbuKuH3Wre0lNVWQUd6fccxWf4&dib_tag=se&keywords=Kitchen&pd_rd_r=62a4e1ad-fa66-4c62-8b26-050c6659bd15&pd_rd_w=hXHdr&pd_rd_wg=ImNcr&pf_rd_p=68f2b66e-afdb-4a19-b88c-555da04d6dc2&pf_rd_r=1M7CB9XEETXJPEAV2WQZ&qid=1712578231&s=kitchen-intl-ship&sprefix=kitchen%2Ckitchen-intl-ship%2C202&sr=1-7&th=1',
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/81ZoY7YZnWL._AC_SX679_.jpg',
        title: ' Portable Dog Water Bottle',
        price: "19.99",
        link: 'https://www.amazon.com/%D7%91%D7%A7%D7%91%D7%95%D7%A7-%D7%9C%D7%9B%D7%9C%D7%91-MalsiPree-%D7%93%D7%9C%D7%99%D7%A4%D7%95%D7%AA-%D7%9C%D7%9B%D7%9C%D7%91%D7%99%D7%9D/dp/B07FRV9XSF/ref=sxin_15_pa_sp_search_thematic_sspa?_encoding=UTF8&content-id=amzn1.sym.4dc3d3f0-ccc1-4471-85ca-232a9eff77d1%3Aamzn1.sym.4dc3d3f0-ccc1-4471-85ca-232a9eff77d1&cv_ct_cx=pet%2Bsupplies&dib=eyJ2IjoiMSJ9.lBqpubMpGrIz27YPANLSXKs7kdaDr-ZOvN6Q3WTaJb-Rcs2DHfrIpCkbrou2DKTX.5UdokNw-qHlKUTC_FmpDT146gB6OQWVl6u4NykneAho&dib_tag=se&keywords=pet%2Bsupplies&pd_rd_i=B07FRV9XSF&pd_rd_r=c8e0b360-f0c1-4f5b-b39f-92bf14698c86&pd_rd_w=edOwP&pd_rd_wg=LkHmU&pf_rd_p=4dc3d3f0-ccc1-4471-85ca-232a9eff77d1&pf_rd_r=X3YP693P1AS044K1VFQ2&qid=1712580733&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA&sr=1-1-22b99f6c-9d79-4634-962b-718698cdc411-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&language=en_US&currency=USD',
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/71yWf1E5vzL._AC_SX679_.jpg',
        title: 'Portable Air Conditioner Fan',
        price: "69.99",
        link: 'https://www.amazon.com/dp/B0CTFBFMMC/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B0CTFBFMMC&pd_rd_w=IBzBr&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=1MKCRKP2M1PH4A1TRT29&pd_rd_wg=qIlNw&pd_rd_r=f6e11105-0102-49d7-b2f2-935f62244d62&s=appliances&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM',
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/613UvJryhvL._AC_SX466_.jpg',
        title: 'Instant Print Photos Camera',
        price: "39.99",
        link: 'https://www.amazon.com/Amzelas-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9E%D7%99%D7%99%D7%93%D7%99%D7%AA-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%95%D7%AA-%D7%9C%D7%A4%D7%A2%D7%95%D7%98%D7%95%D7%AA/dp/B0CDWSF7N2/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.-zZw0Bx9rFdNcCJRIlCaeY34ueLsBSkYTUE5aArgO1TwvT3pTQs9j2Ukd7uDr77kINY61_USzcyHuY0_RMjNS2fbd3sH3zeOyoCQTwG-uesKVBgJuL8rS0l5EA-VdNhWBF9tTLYFgV7iTWbwF10mVrWBeQmywi3VXDESOCUhlsH3IfFZFyOikj1nDzfhQ2O0yF-ulGLQ6QoVQed94Vksq6P5KDvFGroTSQWHFHS5h5-YZiUGobmzdLN5FYsjRtquG0DqRnsfLp3V9TksE709HnsuxcaE_loTRrlPamApXXk.7-JnOKTXOLFxiQ-uUvDWm24Ho-QPUWvDautJY8NR4Js&dib_tag=se&qid=1712581061&s=electronics&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1',
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/71FgKjBCrZL._AC_SX679_.jpg',
        title: 'Hot Pot Electric With Steamer',
        price: "29.99",
        link: 'https://www.amazon.com/Reemix-%D7%9E%D7%95%D7%A7%D7%A4%D7%A6%D7%AA-%D7%9C%D7%A1%D7%98%D7%99%D7%99%D7%A7-%D7%A9%D7%99%D7%91%D7%95%D7%9C%D7%AA-%D7%9E%D7%A2%D7%95%D7%A0%D7%95%D7%AA/dp/B0C7ZMXQD3/ref=sr_1_1_sspa?crid=2YJYUW00ZAG0E&dib=eyJ2IjoiMSJ9.jwaGuUiBMYAoKgmk60SbYgdVgBxTI-iXG_dDttPDMKNFLvEA7Gs6HCYapT3J1559Gakg3gMR1gU3uIqPEqCX1bRthPaNMGgsiP-tm473t8GM_ORtjcJc0X3oexwO764BUBRfMaATPSzIDDR7_0BabQjabojzt20vdDkjlBg8KBv-5JdFKCrxVgs9LaV_uNb4qqj4xRcndfRz7gf8YNB5KDMRW3zzToG1ks51ZE1c384.KXtC4ZddhTxcbo1F5I4QnQeawUMcYa3ng-z2nIoAjGE&dib_tag=se&keywords=electric%2Bpot&qid=1713179352&s=electronics&sprefix=electric%2Bpot%2Celectronics-intl-ship%2C246&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/71Tj9UyWMsL._AC_SX466_.jpg',
        title: 'Portable Wireless Printer',
        price: "169.99",
        link: 'https://www.amazon.com/%D7%90%D7%9C%D7%97%D7%95%D7%98%D7%99%D7%95%D7%AA-M08F-%D7%90%D7%9E%D7%A8%D7%99%D7%A7%D7%90%D7%99%D7%95%D7%AA-%D7%A7%D7%95%D7%9E%D7%A4%D7%A7%D7%98%D7%99%D7%AA-%D7%90%D7%A0%D7%93%D7%A8%D7%95%D7%90%D7%99%D7%93/dp/B0BZKG5WY3/ref=sr_1_1_sspa?crid=FH4TFEL75SMS&dib=eyJ2IjoiMSJ9.TNGnmWltwV7bVskEugxi-QXQbO9o7lP6vGiPHLlO680-kmED7BNsWr1PB_0VjDjKNrLp3JQgDm3vJl5qG-pYYGLYGY9S4soC5fKDK-gvMCf-BjE8bvlkksvJMZyDaHEeUIXpG5_mMxd3nTeeqSCs24ZNOsb7T-L1hcoIpQr8Y6ngD3ZcLXN8b04iELOczUtHrkrXMMMdOBPjhLuPFf8NaWZp2aZ0toWSO7cwsDL3TAY.UhskVDCPKHzoLmb2tILHiaC-F2fQJ_xBad4VYu068qQ&dib_tag=se&keywords=inkless%2Bprinter&qid=1713179433&sprefix=inkle%2Caps%2C187&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
    },
    {
        id: 9,
        image: 'https://m.media-amazon.com/images/I/61hWFtKi7WL._AC_SX679_.jpg',
        title: 'Garliczoom Garlic Chopper',
        price: "15.89",
        link: 'https://www.amazon.com/dp/B07DNPCZMZ/ref=cm_sw_r_as_gl_api_gl_i_46CT7VHCA5HMYG4FZDXA?linkCode=ml1&tag=justiceshepar-20',
    },
    {
        id: 10,
        image: 'https://m.media-amazon.com/images/I/81qsHC0TIXL._AC_SX679_.jpg',
        title: 'Portable Sports Bench',
        price: "112.99",
        link: 'https://www.amazon.com/gp/product/B075B283Z6?ie=UTF8&th=1&linkCode=sl1&tag=justiceshepar-20&linkId=7c53c5602a6012f4f8a048e23d9caf43&language=en_US&ref_=as_li_ss_tl&psc=1',
    },
    {
        id: 11,
        image: 'https://m.media-amazon.com/images/I/7115wiG6cUL._AC_SX679_.jpg',
        title: '6 PCS Reusable Water Balloons',
        price: "15.99",
        link: 'https://www.amazon.com/dp/B0B5QCG93T?linkCode=sl1&tag=justiceshepar-20&linkId=d0ccf5844867c83ae10e9729e68f2bdd&language=en_US&ref_=as_li_ss_tl&th=1',
    },
    {
        id: 12,
        image: 'https://m.media-amazon.com/images/I/61q+PRBtIZS._AC_SX679_.jpg',
        title: 'Anti pressure pillow',
        price: "45.88",
        link: 'https://www.amazon.com/dp/B083LSQ8N3?linkCode=ssc&tag=onamzjust0cd8-20&creativeASIN=B083LSQ8N3&asc_item-id=amzn1.ideas.KL4OZ9BFWATH&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
    },
    {
        id: 13,
        image: 'https://m.media-amazon.com/images/I/7169MKJFINL._AC_SX679_.jpg',
        title: 'Non-Slip Cup Holder',
        price: "18.95",
        link: 'https://www.amazon.com/dp/B005E0X23S/ref=cm_sw_r_as_gl_api_gl_i_YWMQY5QVB986BB2XKNBK?linkCode=ml2&tag=justiceshepar-20',
    },
    {
        id: 14,
        image: 'https://m.media-amazon.com/images/I/71vuRfJHVZL._AC_SX679_.jpg',
        title: 'ICEBREAKER POP DISPENSER',
        price: "29.99",
        link: 'https://www.amazon.com/gp/product/B089LDN7J2?ie=UTF8&th=1&linkCode=sl1&tag=justiceshepar-20&linkId=05e171d341a0ea95adcc56e3e6f9521e&language=en_US&ref_=as_li_ss_tl',
    },
    {
        id: 15,
        image: 'https://m.media-amazon.com/images/I/71XyaIjTCOL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Car LED Light Sign',
        price: "34.97",
        link: 'https://www.amazon.com/gp/product/B0BD8LCV9X?ie=UTF8&psc=1&linkCode=sl1&tag=justiceshepar-20&linkId=16b53e769cfc8b75b9ea5a7512c69933&language=en_US&ref_=as_li_ss_tl',
    },
    {
        id: 16,
        image: 'https://m.media-amazon.com/images/I/61lC8FGwk-L._AC_SX679_.jpg',
        title: 'Inflatable Travel Air Pillow',
        price: "20.95",
        link: 'https://www.amazon.com/dp/B07VHPFK5B?linkCode=ssc&tag=onamzjust0cd8-20&creativeASIN=B07VHPFK5B&asc_item-id=amzn1.ideas.21RWQOANTALWI&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
    },
    {
        id: 17,
        image: 'https://m.media-amazon.com/images/I/71TTLKcJ7FL._AC_SX679_.jpg',
        title: 'Wearable Blanket',
        price: "30.99",
        link: 'https://www.amazon.com/dp/B095WRRTWR?maas=maas_adg_69A498A978A65E8FD61FB4B39F89A11E_afap_abs&ref_=aa_maas&tag=maas&th=1',
    },
    {
        id: 18,
        image: 'https://i5.walmartimages.com/seo/Lifewit-Rice-Dispenser-Container-25-4-lbs-Airtight-Cereal-Storage-Containers-BPA-Free-Plastic_201fc799-fbe1-4d8a-860e-30a9d5cdf04a.72f0b931088adc2af99b659db370bd55.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'Rice Dispenser',
        price: "23.99",
        link: 'https://www.amazon.com/gp/product/B0BV5YQWHR?ie=UTF8&th=1&linkCode=sl1&tag=justiceshepar-20&linkId=bf727c72c2f7666ff20aacd124eb05ea&language=en_US&ref_=as_li_ss_tl',
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
 