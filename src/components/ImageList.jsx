export const ImageList = ({ images }) => {
    const imgs = images.map(({ description, id, urls }) => {
        return <img  alt={description} key={id} src={urls.regular}/>
    })

    return <div>{ imgs }</div>
}

