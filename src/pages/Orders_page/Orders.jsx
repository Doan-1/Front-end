import { useState } from "react";
import style from './Orders_page.module.css'

const Orders = () => {
    return (
        <div className={style.order}>
            <div className={style.order__wrapper}>
                <h2>My orders</h2>
                <div className={style.order__info}>
                    <div className={style.order__search}>
                        <input type="text" placeholder="Search for order code" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={style.order__table}>
                        <table>
                            <tr>
                                <th>Code</th>
                                <th>Name of product</th>
                                <th>Price</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>K33MLI3N</td>
                                <td>Air Jordan 1 Mid SE</td>
                                <td>$130</td>
                                <td>District 9, HCM City</td>
                            </tr>
                            <tr>
                                <td>K33MLI3N</td>
                                <td>Air Jordan 1 Mid SE</td>
                                <td>$130</td>
                                <td>District 9, HCM City</td>
                            </tr>
                            <tr>
                                <td>K33MLI3N</td>
                                <td>Air Jordan 1 Mid SE</td>
                                <td>$130</td>
                                <td>District 9, HCM City</td>
                            </tr>
                            <tr>
                                <td>K33MLI3N</td>
                                <td>Air Jordan 1 Mid SE</td>
                                <td>$130</td>
                                <td>District 9, HCM City</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;