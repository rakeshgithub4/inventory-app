import React, { useState, memo } from 'react'
import { Modal, Input, Button } from 'antd'
import "./EditProduct.css"
const EditProduct = ({ show, setIsShowModal, product, setProductData }) => {
    console.log("HIIII")
    const [EditProduct, setEditProdcuct] = useState({
        category: product?.category,
        quantity: product?.quantity,
        value: product?.value,
        price: product?.price
    })

    const handleCancel = () => {
        setIsShowModal(false)
    }
    return (
        <>
            <Modal
                centered
                visible={show}
                footer={false}
                onCancel={handleCancel}
                className="editViewModal"
            >
                <div>
                <h1>Edit Product</h1>
                <p>{product?.name}</p>
                <div className="editdetails">
                    <div>
                        <label>Category</label>
                        <Input
                            value={EditProduct?.category}
                            type="text"
                            onChange={(e) => {
                                setEditProdcuct(data => {
                                    let obj = { ...data };
                                    obj.category = e.target.value;
                                    return obj
                                })
                            }}
                        />
                    </div>
                    <div> <label>price</label>
                        <Input
                            type="text"
                            value={EditProduct?.price}
                            onChange={(e) => {
                                setEditProdcuct(data => {
                                    let obj = { ...data };
                                    obj.price = e.target.value;
                                    return obj
                                })
                            }}
                        /></div>
                    <div>
                        <label>quantity</label>
                        <Input
                            value={EditProduct?.quantity}
                            type="number"
                            onChange={(e) => {
                                setEditProdcuct(data => {
                                    let obj = { ...data };
                                    obj.quantity = e.target.value;
                                    return obj
                                })
                            }}
                        />
                    </div>
                    <div> <label>value</label>
                        <Input
                            type="text"
                            value={EditProduct?.value}
                            onChange={(e) => {
                                setEditProdcuct(data => {
                                    let obj = { ...data };
                                    obj.value = e.target.value;
                                    return obj
                                })
                            }}
                        /></div>
                </div>
                <div className="saveDetails">
                    <Button onClick={() => setIsShowModal(false)}>Cancel</Button>
                    <Button onClick={() => {
                        setProductData(data => {
                            let arr = [...data];
                            arr.splice(product?.index, 1, EditProduct);
                            return arr;
                        })
                        setIsShowModal(false)
                    }}>Save</Button>
                </div>
                </div>
            </Modal>
        </>
    )
}

export default memo(EditProduct);