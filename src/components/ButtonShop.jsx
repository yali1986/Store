export default function ButtonShop({title, onClick}) {
  return (
    <button className="bg-red-200 rounded-xl w-34 m-auto h-8" onClick={onClick}>{title}</button>
  )
}