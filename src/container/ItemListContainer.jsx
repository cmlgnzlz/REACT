import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import { items as itemData } from "../data/items"

const ItemContainer = () => {

  const [items, setItem] = useState([])

  useEffect( ()=>{
    const getItems = new Promise( (resolve,reject) => {
      setTimeout(() => {
        resolve(itemData)
        reject('error')
      }, 2000)
    })
    
    getItems.then( data => {
        console.log(data)
        setItem(data)
      })
  }, [])

  return (
    <div class="flex flex-wrap items-stretch">
      { items.map( i => <ItemCard key={i.id} data={i}/>) }
    </div>
  )
}
export default ItemContainer