'use client'
import { useEffect, useState } from 'react'
import { fetchList } from '@/app/lib/fetcher'
import ItemCard from '@/components/ItemCard'
import { BaseItem } from '@/app/types'


export default function GamesPage() {
const [items, setItems] = useState<BaseItem[]>([])
const [level, setLevel] = useState('')


// useEffect(() => {
// fetchList('games').then(setItems).catch(()=>setItems([]))
// }, [])

useEffect(() => {
  fetchList('games').then(data => {
    console.log("GAMES DATA =", data)
    setItems(data)
  }).catch(() => setItems([]))
}, [])


const filtered = level ? items.filter(i => (i.level||'').toLowerCase()===level.toLowerCase()) : items


return (
<div>
<h1 className="text-3xl font-bold mt-2"> 🧠 Brain Teaser Games</h1>
<p className="text-sm font-light text-gray-500 ml-2">-  หลังจากเห็นโรคต่าง ๆ อาจจะน่ากลัว แต่มีวิธีป้องกันอยู่นะ รวมถึงโรค"อัลไซเมอร์" ก็ป้องกันได้ โดยการเล่นเกมพัฒนาสมอง งั้นเรามาเล่นเกมกันเถอะ</p>
<div className="mb-4 flex gap-3 items-center ml-2">
<label className="text-sm">Filter level:</label>
<select value={level} onChange={(e)=>setLevel(e.target.value)} className="border p-2 rounded-lg">
<option value="">All</option>
<option value="easy">Easy</option>
<option value="medium">Medium</option>
<option value="hard">Hard</option>
</select>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map(it => <ItemCard key={it._id || it.title} item={it} />)}
</div>
</div>
)
}