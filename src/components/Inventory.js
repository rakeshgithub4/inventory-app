import React, { useState, useEffect } from 'react'
import { Switch } from 'antd'
import EditProduct from './EditProduct'
import "./Inventory.css"
import { EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons'

const Inventory = () => {

    const [productData, setProductData] = useState([
        { "name": "Bluetooth", "category": "Electronic", "value": "$150", "quantity": 5, "price": "$30" },
        { "name": "Edifier M43560", "category": "Electronic", "value": "0", "quantity": 0, "price": "$0" },
        { "name": "Sony 4k ultra 55 inch TV", "category": "Electronic", "value": "$1190", "quantity": 17, "price": "$70" },
        { "name": "Samsumg 55 inch TV", "category": "Electronic", "value": "$600", "quantity": 50, "price": "$12" },
        { "name": "samsumg S34 Ultra", "category": "phone", "value": "$0", "quantity": 0, "price": "$0" }]
    )
    const [isAdmin, setIsAdmin] = useState(true);
    const [product, setProduct] = useState({})
    const [isShowModal,setIsShowModal] = useState(false)

    useEffect(() => {
        getProductdata()
    }, [])

    const getProductdata = async () => {
        // let response = await fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
        // let data = await response.json();
        // setProductData(data);
    }

    const handleDeletedProduct = (index) => {
        setProductData(data => {
            let arr = [...data];
            arr.splice(index, 1);
            return arr;
        })
    }

    const handleEditProduct = (item,index) => {
        let obj = {...item};
        obj.index = index;
        setProduct(obj)
        setIsShowModal(true)
    }

    const getStoreValue = () => {
        let storeValue = 0;
        productData?.forEach(item => {
            storeValue += item?.value?.includes("$") ? +item?.value?.split("$")[1] : +item?.value
        })
        return storeValue
    }

    const getCategory = () => {
        let category = 0;
        category = [...new Set(productData?.map(item => item?.category))]
        return category.length
    }

    const getOutOfStock = () => {
        let outOfStock = 0;
        outOfStock = productData?.filter(item => item?.quantity == 0)
        return outOfStock.length
    }

    return (
        <>
            <div className="Inventory">
                <div className="adminUsertoggle">
                    <lable>Admin</lable>
                    <Switch
                        checked={isAdmin}
                        onChange={() => setIsAdmin(isAdmin => !isAdmin)}
                        defaultChecked
                    />
                    <lable>user</lable>
                </div>
                <div className="Inventoryhead">Inventory Stats</div>
                <div className="InventoryStats">
                    <div className="child"><p>Total Products</p><h1>{productData?.length}</h1></div>
                    <div className="child"><p>Total store value</p><h1>{getStoreValue()}</h1></div>
                    <div className="child"><p>Out of stocks</p><h1>{getOutOfStock()}</h1></div>
                    <div className="child"><p>No of Category</p><h1>{getCategory()}</h1></div>
                </div>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>value</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData?.map((item, index) =>
                                <tr key={index}>
                                    <td>{item?.name}</td>
                                    <td>{item?.category}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.value}</td>
                                    <td>
                                        <button className={`edit btnchild`}  disabled={!isAdmin} onClick={() => handleEditProduct(item,index)}><EditFilled /></button>
                                        <button className="view btnchild" disabled={!isAdmin}><EyeFilled /></button>
                                        <button className="delete btnchild" disabled={!isAdmin} onClick={() => handleDeletedProduct(index)}><DeleteFilled /></button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
                {product && isShowModal ? 
                <EditProduct
                    product={product}
                    setProductData={setProductData}
                    show={isShowModal}
                    setIsShowModal={setIsShowModal}
                /> : ""}
            </div>
        </>
    )
}

export default Inventory