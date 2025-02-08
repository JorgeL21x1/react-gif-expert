export const GifItem = ({title,url,id}) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        {/* <p>{`${title}+By Raul`}</p> */}
        <p>{title} ByRaul Albañil</p>
    </div>
  )
}
