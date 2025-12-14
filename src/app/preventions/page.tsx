'use client'
import { useEffect, useState } from 'react'
import { fetchList } from '@/app/lib/fetcher'
import ItemCard from '@/components/ItemCard'
import { BaseItem } from '@/app/types'


export default function PreventionsPage() {
const [items, setItems] = useState<BaseItem[]>([])


useEffect(() => {
fetchList('preventions').then(setItems).catch(()=>setItems([]))
}, [])


return (
<div>
<h1 className="text-3xl font-bold mt-2"> 💪🏻 Preventions</h1>
<p className="text-sm font-light text-gray-500 ml-2">- หลังจากพักผ่อนอย่างเต็มที่ เรามาดูแลสุขภาพ ด้วยการเรียนรู้การป้องกัน/รับมือกับโรคต่าง ๆ กัน</p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
{items.map(it => <ItemCard key={it._id || it.title} item={it} />)}
</div>
</div>
)
}