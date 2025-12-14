'use client'

import { useEffect, useState } from 'react'
import { fetchList } from '@/app/lib/fetcher'
import ItemCard from '@/components/ItemCard'
import { BaseItem } from '@/app/types'

export default function VolunteerPage() {
  const [items, setItems] = useState<BaseItem[]>([])
  const [userAge, setUserAge] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'newest' | 'name'>('newest')

  useEffect(() => {
    fetchList('volunteer')
      .then((d) => setItems(d))
      .catch(() => setItems([]))
  }, [])

  /* ---------------- filter ตามช่วงอายุ ---------------- */
  const filtered = items.filter((it) => {
    // ยังไม่กรอกอายุ → แสดงทั้งหมด
    if (userAge === null) return true

    // item ไม่มีช่วงอายุ → แสดง
    if (it.minAge == null && it.maxAge == null) return true

    const min = it.minAge ?? 0
    const max = it.maxAge ?? 200

    return userAge >= min && userAge <= max
  })

  /* ---------------- sort ---------------- */
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title)
    }
    return (
      new Date(b.createdAt || 0).getTime() -
      new Date(a.createdAt || 0).getTime()
    )
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mt-2">🌱 Volunteer & Workshop</h1>
      <p className="text-sm font-light text-gray-500 ml-2">
        - หากิจกรรมที่เหมาะกับช่วงอายุของคุณ สำหรับวัยหลังเกษียณ
      </p>

      {/* -------- Filter / Sort bar -------- */}
      <div className="flex flex-wrap items-end gap-4 mb-4 ml-2 mt-2">
        <div>
          <label className="block text-sm mb-1">อายุของคุณ</label>
          <input
            type="number"
            placeholder="เช่น 60"
            className="border p-2 rounded-lg w-28"
            onChange={(e) =>
              setUserAge(e.target.value === '' ? null : Number(e.target.value))
            }
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Sort</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border p-2 rounded-lg"
          >
            <option value="newest">Newest</option>
            <option value="name">Name (A → Z)</option>
          </select>
        </div>
      </div>

      {/* -------- List -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.length === 0 ? (
          <div className="text-gray-500 ml-2">
            ไม่มีกิจกรรมที่เหมาะกับช่วงอายุนี้
          </div>
        ) : (
          sorted.map((it) => (
            <ItemCard key={it._id || it.title} item={it} />
          ))
        )}
      </div>
    </div>
  )
}
