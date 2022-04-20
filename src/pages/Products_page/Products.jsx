import { useState } from "react";
import style from './Products_page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Products = () => {
    const [prices, setPrice] = useState(['<$50','>$50 & <$100', '>&100'])
    const [categories, setCategories] = useState(['Running','Football', 'Basketball', 'Gym and Training', 'Yoga', 'Skateboarding', 'Tennis', 'Golf'])
    const [products, setProducts] = useState([
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
        {
            product_name: 'Product Name',
            product_price: 100,
            product_img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'
        },
    ])
    return (
        <div>
            <div className={style.products}>
                <div className={style.products__wrapper}>
                    <div className={style.products__left}>
                        <div className={style.products__price}>
                            <h3>Price</h3>
                            <ul className={style. products__price_list}>
                                {
                                    prices.map((price) => {
                                        return(
                                            <li className={style.products__price_item}>
                                                <input type="radio" name="selection__price" />
                                                    <label for="selection__price">{price}</label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={style.products__category}>
                            <h3>Category</h3>
                            <ul className={style.products__category_list}>
                                {
                                    categories.map((category) => {
                                        return(
                                            <li className={style.products__category_item}>
                                                <input type="radio" name="selection__category" />
                                                    <label for="selection__category">{category}</label>
                                            </li>
                                        )
                                    }) 
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={style.products__right}>
                        <div className={style.products__list}>
                            {
                                products.map((product) => {
                                    return(
                                        <div className={"products__item" + " " +style.products__item}>
                                            <div className="products__img">
                                                <img src={product.product_img} alt="" />
                                            </div>
                                            <h3>{product.product_name}</h3>
                                            <span>${product.product_price}</span>
                                            <div className={"btn"+ " " + style.btn__favorite}>BUY NOW</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;