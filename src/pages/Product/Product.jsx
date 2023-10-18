import React from 'react'
import Header from '../../components/Header'
import { FiSearch } from "react-icons/fi"

const Product = () => {

    const data = [
        {
            "thumb": "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg",
            "name": "Abstract 3D",
            "descr": "some description about 3D",
            "stock": 30,
            "price": "$45.99",
            "sales": 20
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
            "name": "Sarphens Illustration",
            "descr": "some description about Sarphens Illustration",
            "stock": 39,
            "price": "$87.99",
            "sales": 32
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/07/30/21/51/eye-2555760_640.jpg",
            "name": "Digital Artwork",
            "descr": "some description about digital artwork",
            "stock": 25,
            "price": "$59.99",
            "sales": 15
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2019/04/26/17/47/color-4158152_1280.jpg",
            "name": "Abstract Painting",
            "descr": "some description about abstract painting",
            "stock": 15,
            "price": "$79.99",
            "sales": 10
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/06/18/16/28/bicycle-2416321_640.jpg",
            "name": "Photography Print",
            "descr": "some description about photography print",
            "stock": 20,
            "price": "$29.99",
            "sales": 18
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2018/09/14/11/57/lion-3676984_640.jpg",
            "name": "Watercolor Landscape",
            "descr": "some description about watercolor landscape",
            "stock": 18,
            "price": "$69.99",
            "sales": 14
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2018/11/28/21/14/sculpture-3844575_640.jpg",
            "name": "Modern Sculpture",
            "descr": "some description about modern sculpture",
            "stock": 10,
            "price": "$99.99",
            "sales": 35
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2013/02/17/13/15/c-m-coolidge-82531_640.jpg",
            "name": "Oil Canvas Art",
            "descr": "some description about oil canvas art",
            "stock": 22,
            "price": "$99.99",
            "sales": 18
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_640.jpg",
            "name": "Graffiti Street Art",
            "descr": "some description about graffiti street art",
            "stock": 12,
            "price": "$49.99",
            "sales": 27
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2018/03/12/09/47/fantasy-3219199_640.jpg",
            "name": "Abstract Sculpture",
            "descr": "some description about abstract sculpture",
            "stock": 7,
            "price": "$49.99",
            "sales": 34
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2020/08/24/16/57/silhouette-5514490_640.jpg",
            "name": "Digital Illustration",
            "descr": "some description about digital illustration",
            "stock": 28,
            "price": "$69.99",
            "sales": 22
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2016/12/28/17/00/painting-1936483_640.jpg",
            "name": "Oil Portrait Painting",
            "descr": "some description about oil portrait painting",
            "stock": 11,
            "price": "$29.99",
            "sales": 26
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/03/10/23/49/woman-2134033_640.jpg",
            "name": "Abstract Collage",
            "descr": "some description about abstract collage",
            "stock": 19,
            "price": "$55.99",
            "sales": 13
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2012/03/01/01/46/painting-20401_640.jpg",
            "name": "Acrylic Landscape",
            "descr": "some description about acrylic landscape",
            "stock": 16,
            "price": "$89.99",
            "sales": 12
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_640.jpg",
            "name": "Street Photography",
            "descr": "some description about street photography",
            "stock": 23,
            "price": "$39.99",
            "sales": 17
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/11/28/04/57/pattern-2982849_640.jpg",
            "name": "Abstract Glass Art",
            "descr": "some description about abstract glass art",
            "stock": 14,
            "price": "$19.99",
            "sales": 19
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2018/03/12/09/47/fantasy-3219199_640.jpg",
            "name": "Sculpture Installation",
            "descr": "some description about sculpture installation",
            "stock": 8,
            "price": "$79.99",
            "sales": 23
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2016/12/28/17/00/painting-1936483_640.jpg",
            "name": "Digital Abstract",
            "descr": "some description about digital abstract",
            "stock": 30,
            "price": "$49.99",
            "sales": 25
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_640.jpg",
            "name": "Oil Canvas Landscape",
            "descr": "some description about oil canvas landscape",
            "stock": 17,
            "price": "$99.99",
            "sales": 11
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/03/08/20/12/tree-2127699_640.jpg",
            "name": "Surreal Artwork",
            "descr": "some description about surreal artwork",
            "stock": 9,
            "price": "$69.99",
            "sales": 27
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2015/08/15/03/53/leaf-889200_640.jpg",
            "name": "Watercolor Still Life",
            "descr": "some description about watercolor still life",
            "stock": 13,
            "price": "$59.99",
            "sales": 10
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2012/02/29/12/20/fractal-19017_640.jpg",
            "name": "Graffiti Mural",
            "descr": "some description about graffiti mural",
            "stock": 20,
            "price": "$29.99",
            "sales": 16
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2012/02/29/12/20/fractal-19017_640.jpg",
            "name": "Abstract Metal Sculpture",
            "descr": "some description about abstract metal sculpture",
            "stock": 6,
            "price": "$49.99",
            "sales": 15
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2021/08/22/02/40/portal-6563988_640.jpg",
            "name": "Digital Pop Art",
            "descr": "some description about digital pop art",
            "stock": 26,
            "price": "$49.99",
            "sales": 21
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2021/02/17/17/17/alice-6024906_640.jpg",
            "name": "Oil Portrait Illustration",
            "descr": "some description about oil portrait illustration",
            "stock": 10,
            "price": "$19.99",
            "sales": 18
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/07/26/19/07/water-glass-2542790_640.jpg",
            "name": "Abstract Collage Art",
            "descr": "some description about abstract collage art",
            "stock": 21,
            "price": "$69.99",
            "sales": 15
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2019/02/12/12/15/still-life-3992032_640.jpg",
            "name": "Acrylic Landscape Painting",
            "descr": "some description about acrylic landscape painting",
            "stock": 12,
            "price": "$79.99",
            "sales": 19
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2019/05/04/15/38/art-4178330_640.jpg",
            "name": "Street Photography Print",
            "descr": "some description about street photography print",
            "stock": 15,
            "price": "$39.99",
            "sales": 11
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2017/03/10/23/49/woman-2134033_640.jpg",
            "name": "Abstract Glass Sculpture",
            "descr": "some description about abstract glass sculpture",
            "stock": 7,
            "price": "$29.99",
            "sales": 15
        },
        {
            "thumb": "https://cdn.pixabay.com/photo/2015/08/15/03/53/leaf-889200_640.jpg",
            "name": "Sculpture Installation Art",
            "descr": "some description about sculpture installation art",
            "stock": 11,
            "price": "$79.99",
            "sales": 16
        }
    ]

    return (
        <div className='w-full px-8 py-3 '>
            <Header />
            <div className='w-full bg-white px-2 py-3 rounded-lg mt-4 shadow_x'>
                <p className='font-semibold text-lg text-blue-900'>Top Products</p>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 min-[350px]:grid-cols-2 min-[280px]:grid-cols-1'>
                <div className='cols-span-1 p-4 flex gap-5 shadow_x rounded-xl bg-white'>
                    <img src="https://cdn.pixabay.com/photo/2017/07/30/21/51/eye-2555760_640.jpg" alt="haah" className='h-[5rem] w-[5rem] border object-cover object-center rounded-md' />
                    <div>
                        <p className='font-semibold leading-5 h-11 '>Digital Art Paintings</p>
                        <p className='font-semibold mt-2'><span className='font-semibold text-slate-600'>Sales: </span>$43.44</p>
                    </div>
                </div>
                <div className='cols-span-1 p-4 flex gap-5 shadow_x  rounded-xl bg-white'>
                    <img src="https://cdn.pixabay.com/photo/2013/02/17/13/15/c-m-coolidge-82531_640.jpg" alt="haah" className='h-[5rem] w-[5rem]  object-cover object-center rounded-md' />
                    <div>
                        <p className='font-semibold leading-5 h-11 '>College Art Designs</p>
                        <p className='font-semibold mt-2'><span className='font-semibold text-slate-600'>Sales: </span>$88.34</p>
                    </div>
                </div>
                <div className='cols-span-1 p-4 flex gap-5 shadow_x  rounded-xl bg-white'>
                    <img src="https://cdn.pixabay.com/photo/2018/11/28/21/14/sculpture-3844575_640.jpg" alt="haah" className='h-[5rem] w-[5rem]  object-cover object-center rounded-md' />
                    <div>
                        <p className='font-semibold leading-5 h-11 '>Oil Portrait paintings</p>
                        <p className='font-semibold mt-2'><span className='font-semibold text-slate-600'>Sales: </span>$23.89</p>
                    </div>
                </div>
                <div className='cols-span-1 p-4 flex gap-5 shadow_x  rounded-xl bg-white'>
                    <img src="https://cdn.pixabay.com/photo/2018/09/14/11/57/lion-3676984_640.jpg" alt="haah" className='h-[5rem] w-[5rem] border object-cover object-center rounded-md' />
                    <div>
                        <p className='font-semibold leading-5 h-11 '>Abstract Art Designs</p>
                        <p className='font-semibold mt-2'><span className='font-semibold text-slate-600'>Sales: </span>$35.99</p>
                    </div>
                </div>
            </div>
            <div className='h-[20rem] w-full border mt-6 bg-white rounded-xl px-5 py-4 max-[450px]:h-[44rem] max-[630px]:h-[35rem] '>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>Product Sell</p>
                    <div className='flex gap-5'>
                        <div className='bg-gray-100 px-2 py-1 ms-2'>
                            <FiSearch className='inline align-middle ' />
                            <input type="text" className='align-middle bg-gray-100 outline-none ps-1 max-[480px]:hidden' />
                        </div>
                        <select name="term" id="term" className='border border-gray-400 py-1 text-sm outline-none px-1'>
                            <option value="Quarterly">Last 30 Days</option>
                            <option value="Half-yearly">Last 15 Days</option>
                            <option value="Yearly">Last 10 Days </option>
                        </select>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between border-b border-gray-300 pb-2'>
                        <p className='text-gray-500'>Product Name</p>
                        <div>
                            <span className='mx-8 text-gray-500 max-[480px]:mx-2'>Stock</span>
                            <span className='mx-8 text-gray-500 max-[480px]:mx-3'>Price</span>
                            <span className='mx-8 text-gray-500 max-[480px]:mx-2'>Total Sales</span>
                        </div>
                    </div>
                    <div className='h-[13rem] overflow-auto max-[365px]:h-[35rem] '>
                        {
                            data.map((i, index) => {
                                return <div key={index} className='flex justify-between items-center mt-2 pb-2 '>
                                    <div className='flex items-center gap-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:w-[11rem]'>
                                        <img src={i.thumb} alt='aha' className='h-[3rem] w-[4rem] rounded-lg max-[480px]:hidden' />
                                        <div >
                                            <p className='font-bold'>{i.name}</p>
                                            <p className='text-gray-400'>{i.descr}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='mx-1 text-black max-[480px]:mx-2'>{i.stock}<span className='max-[480px]:hidden'> in stock</span> </span>
                                        <span className='mx-11  font-bold text-black max-[480px]:mx-2'>{i.price}</span>
                                        <span className='mx-9 text-black max-[480px]:mx-2'>{i.sales}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product