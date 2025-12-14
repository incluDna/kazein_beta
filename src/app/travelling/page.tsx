'use client'

import { useEffect, useMemo, useState } from 'react'
import { fetchList } from '@/app/lib/fetcher'
import ItemCard from '@/components/ItemCard'
import { BaseItem } from '@/app/types'

export default function TravellingPage() {
  const [items, setItems] = useState<BaseItem[]>([])
  const [query, setQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState<number | ''>('')
  const [sortBy, setSortBy] = useState<'price' | 'name'>('price')

  useEffect(() => {
    fetchList('travelling')
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  const visibleItems = useMemo(() => {
    return items
      //search by title
      .filter(i =>
        i.title.toLowerCase().includes(query.toLowerCase())
      )
      // filter by max price
      .filter(i =>
        maxPrice === '' || (i.price ?? 0) <= maxPrice
      )
      // sort
      .slice()
      .sort((a, b) =>
        sortBy === 'price'
          ? (a.price ?? 0) - (b.price ?? 0)
          : a.title.localeCompare(b.title)
      )
  }, [items, query, maxPrice, sortBy])

  return (
    <div>
      <h1 className="text-3xl font-bold mt-2">📍Travelling </h1>
    <p className="text-sm font-light text-gray-500 ml-2">- นี่แหละ Highlight ชีวิตหลังเกษียณ ทำงานอย่างเหน็ดเหนื่อยมายาวนาน ถึงเวลาเที่ยวแล้ว!
มาดูสถานที่แนะนำที่อยู่ในงบของคุณกัน</p>

      {/* Filters */}
      <div className="mb-6 flex gap-3 max-w-md ml-2 mt-2">
        <input
          className="border p-2 rounded-lg flex-1"
          placeholder="Search by title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 rounded-lg w-32"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : '')
          }
        />

        {/* <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select> */}
      </div>

      {/* Cards */}
      {visibleItems.length === 0 ? (
        <p className="text-gray-500">No results found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map(it => (
            <ItemCard key={it._id || it.title} item={it} />
          ))}
        </div>
      )}
    </div>
  )
}
