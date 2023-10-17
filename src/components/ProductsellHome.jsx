import React from 'react'
import { FiSearch } from "react-icons/fi"

const ProductsellHome = () => {

    const data = [
        {
            "thumb": "img1.jpg",
            "name": "Abstract 3D",
            "descr": "some description about 3D",
            "stock": 30,
            "price": "$45.99",
            "sales": 20
        },
        {
            "thumb": "img2.jpg",
            "name": "Sarphens Illustration",
            "descr": "some description about Sarphens Illustration",
            "stock": 39,
            "price": "$87.99",
            "sales": 32
        },
        {
            "thumb": "img3.jpg",
            "name": "Digital Artwork",
            "descr": "some description about digital artwork",
            "stock": 25,
            "price": "$59.99",
            "sales": 15
        },
        {
            "thumb": "img4.jpg",
            "name": "Abstract Painting",
            "descr": "some description about abstract painting",
            "stock": 15,
            "price": "$79.99",
            "sales": 10
        },
        {
            "thumb": "img5.jpg",
            "name": "Photography Print",
            "descr": "some description about photography print",
            "stock": 20,
            "price": "$29.99",
            "sales": 18
        },
        {
            "thumb": "img6.jpg",
            "name": "Watercolor Landscape",
            "descr": "some description about watercolor landscape",
            "stock": 18,
            "price": "$69.99",
            "sales": 14
        },
        {
            "thumb": "img7.jpg",
            "name": "Modern Sculpture",
            "descr": "some description about modern sculpture",
            "stock": 10,
            "price": "$99.99",
            "sales": 35
        },
        {
            "thumb": "img8.jpg",
            "name": "Oil Canvas Art",
            "descr": "some description about oil canvas art",
            "stock": 22,
            "price": "$99.99",
            "sales": 18
        },
        {
            "thumb": "img9.jpg",
            "name": "Graffiti Street Art",
            "descr": "some description about graffiti street art",
            "stock": 12,
            "price": "$49.99",
            "sales": 27
        },
        {
            "thumb": "img10.jpg",
            "name": "Abstract Sculpture",
            "descr": "some description about abstract sculpture",
            "stock": 7,
            "price": "$49.99",
            "sales": 34
        },
        {
            "thumb": "img11.jpg",
            "name": "Digital Illustration",
            "descr": "some description about digital illustration",
            "stock": 28,
            "price": "$69.99",
            "sales": 22
        },
        {
            "thumb": "img12.jpg",
            "name": "Oil Portrait Painting",
            "descr": "some description about oil portrait painting",
            "stock": 11,
            "price": "$29.99",
            "sales": 26
        },
        {
            "thumb": "img13.jpg",
            "name": "Abstract Collage",
            "descr": "some description about abstract collage",
            "stock": 19,
            "price": "$55.99",
            "sales": 13
        },
        {
            "thumb": "img14.jpg",
            "name": "Acrylic Landscape",
            "descr": "some description about acrylic landscape",
            "stock": 16,
            "price": "$89.99",
            "sales": 12
        },
        {
            "thumb": "img15.jpg",
            "name": "Street Photography",
            "descr": "some description about street photography",
            "stock": 23,
            "price": "$39.99",
            "sales": 17
        },
        {
            "thumb": "img16.jpg",
            "name": "Abstract Glass Art",
            "descr": "some description about abstract glass art",
            "stock": 14,
            "price": "$19.99",
            "sales": 19
        },
        {
            "thumb": "img17.jpg",
            "name": "Sculpture Installation",
            "descr": "some description about sculpture installation",
            "stock": 8,
            "price": "$79.99",
            "sales": 23
        },
        {
            "thumb": "img18.jpg",
            "name": "Digital Abstract",
            "descr": "some description about digital abstract",
            "stock": 30,
            "price": "$49.99",
            "sales": 25
        },
        {
            "thumb": "img19.jpg",
            "name": "Oil Canvas Landscape",
            "descr": "some description about oil canvas landscape",
            "stock": 17,
            "price": "$99.99",
            "sales": 11
        },
        {
            "thumb": "img20.jpg",
            "name": "Surreal Artwork",
            "descr": "some description about surreal artwork",
            "stock": 9,
            "price": "$69.99",
            "sales": 27
        },
        {
            "thumb": "img21.jpg",
            "name": "Watercolor Still Life",
            "descr": "some description about watercolor still life",
            "stock": 13,
            "price": "$59.99",
            "sales": 10
        },
        {
            "thumb": "img22.jpg",
            "name": "Graffiti Mural",
            "descr": "some description about graffiti mural",
            "stock": 20,
            "price": "$29.99",
            "sales": 16
        },
        {
            "thumb": "img23.jpg",
            "name": "Abstract Metal Sculpture",
            "descr": "some description about abstract metal sculpture",
            "stock": 6,
            "price": "$49.99",
            "sales": 15
        },
        {
            "thumb": "img24.jpg",
            "name": "Digital Pop Art",
            "descr": "some description about digital pop art",
            "stock": 26,
            "price": "$49.99",
            "sales": 21
        },
        {
            "thumb": "img25.jpg",
            "name": "Oil Portrait Illustration",
            "descr": "some description about oil portrait illustration",
            "stock": 10,
            "price": "$19.99",
            "sales": 18
        },
        {
            "thumb": "img26.jpg",
            "name": "Abstract Collage Art",
            "descr": "some description about abstract collage art",
            "stock": 21,
            "price": "$69.99",
            "sales": 15
        },
        {
            "thumb": "img27.jpg",
            "name": "Acrylic Landscape Painting",
            "descr": "some description about acrylic landscape painting",
            "stock": 12,
            "price": "$79.99",
            "sales": 19
        },
        {
            "thumb": "img28.jpg",
            "name": "Street Photography Print",
            "descr": "some description about street photography print",
            "stock": 15,
            "price": "$39.99",
            "sales": 11
        },
        {
            "thumb": "img29.jpg",
            "name": "Abstract Glass Sculpture",
            "descr": "some description about abstract glass sculpture",
            "stock": 7,
            "price": "$29.99",
            "sales": 15
        },
        {
            "thumb": "img30.jpg",
            "name": "Sculpture Installation Art",
            "descr": "some description about sculpture installation art",
            "stock": 11,
            "price": "$79.99",
            "sales": 16
        }
    ]

    return (
        <div className='mt-5 rounded-lg px-5 py-4 bg-white'>
            <div className='flex items-center justify-between'>
                <p className='font-bold'>Product Sell</p>
                <div className='flex gap-5'>
                    <div className='bg-gray-100 px-2 py-1 ms-2'>
                        <FiSearch className='inline align-middle ' />
                        <input type="text" className='align-middle bg-gray-100 outline-none ps-1' />
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
                        <span className='mx-8 text-gray-500'>Stock</span>
                        <span className='mx-8 text-gray-500'>Price</span>
                        <span className='mx-8 text-gray-500'>Total Sales</span>
                    </div>
                </div>
                <div className='h-[24rem] overflow-auto'>
                    {
                        data.map((i, index) => {
                            return <div key={index} className='flex justify-between items-center mt-2 pb-2 '>
                                <div className='flex items-center gap-4'>
                                    <img src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg" alt='aha' className='h-[3rem] w-[4rem] rounded-lg' />
                                    <div >
                                        <p className='font-bold'>{i.name}</p>
                                        <p className='text-gray-400'>{i.descr}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='mx-1 text-black'>{i.stock} in stock</span>
                                    <span className='mx-11  font-bold text-black'>{i.price}</span>
                                    <span className='mx-9 text-black'>{i.sales}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsellHome