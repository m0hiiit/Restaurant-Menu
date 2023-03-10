import { useState } from "react";
import DataApi from "./DataApi";
import DataCard from "./DataCard";

const navItems = [...new Set(DataApi.map((cate) => {
    return cate.category
}))];
const Card = () => {
    const [newData, setNewData] = useState(navItems)
    const [data, setData] = useState(DataApi)
    const itemSort = (val) => {
        const set = DataApi.filter((allVal) => {
            return allVal.category === val
        })
        setData(set)
    }
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        newData.map((newValue, id) => {
                            return (
                                <button
                                    className="btn-group__item" onClick={() => { itemSort(newValue) }} key={id} >
                                    {newValue}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
            <DataCard data={data} />
        </>
    );
};

export default Card;