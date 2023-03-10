
const DataCard = ({data}) => {
    return (
        <>
            <section className="main-card--cointainer" key={data.id}>
                {data.map((value) => {
                    const { id, image, name, category, price, description } = value
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag  subtle">ORDER NOW</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}
export default DataCard;