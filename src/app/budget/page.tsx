// 'use client'
// import { useState } from 'react'


// export default function BudgetPage() {
// const [income, setIncome] = useState(30000)
// const [expense, setExpense] = useState(15000)


// const saving = income - expense


// return (
// <div>
// <h1 className="text-2xl font-bold mb-4">Budget</h1>
// <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// <div className="border bg-white p-4 rounded">
// <label className="block text-sm">Income</label>
// <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="mt-2 w-full border p-2 rounded" />
// </div>
// <div className="border bg-white p-4 rounded">
// <label className="block text-sm">Expense</label>
// <input type="number" value={expense} onChange={(e) => setExpense(Number(e.target.value))} className="mt-2 w-full border p-2 rounded" />
// </div>
// </div>


// <div className="mt-6 border bg-white p-4 rounded">
// <h2 className="font-semibold">Result</h2>
// <p className="mt-2">Saving: <span className="font-bold">฿ {saving}</span></p>
// </div>
// </div>
// )
// }
'use client'

import { useState } from 'react'

export default function BudgetPage() {
  const [monthlyExpense, setMonthlyExpense] = useState<number | ''>('')
  const [monthlyIncome, setMonthlyIncome] = useState<number | ''>('')
  const [currentAge, setCurrentAge] = useState<number | ''>('')
  const [retirementAge, setRetirementAge] = useState<number | ''>('')
  const [lifespan, setLifespan] = useState<number | ''>('')

  const [result, setResult] = useState<{
    netRefund: number
    isEnough: boolean
    additionalSavings?: number
    extraYears?: number
  } | null>(null)

  const handleCalculate = () => {
    if (
      monthlyExpense === '' ||
      monthlyIncome === '' ||
      currentAge === '' ||
      retirementAge === '' ||
      lifespan === ''
    ) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      return
    }

    const yearsUntilRetirement = retirementAge - currentAge
    const yearsAfterRetirement = lifespan - retirementAge
    const investmentReturn = 0.03

    const annualExpense = monthlyExpense * 12

    // Net Refund
    const netRefund =
      annualExpense *
      ((1 - Math.pow(1 + investmentReturn, -yearsAfterRetirement)) /
        investmentReturn)

    const savingsPerMonth = monthlyIncome - monthlyExpense
    const totalSavings =
      savingsPerMonth *
      12 *
      yearsUntilRetirement *
      Math.pow(1 + investmentReturn, yearsUntilRetirement)

    const isEnough = totalSavings >= netRefund

    if (!isEnough) {
      const additionalSavings =
        (netRefund - totalSavings) / (yearsUntilRetirement * 12)
      const extraYears = Math.ceil(
        (netRefund - totalSavings) / (savingsPerMonth * 12)
      )

      setResult({
        netRefund,
        isEnough,
        additionalSavings,
        extraYears,
      })
    } else {
      setResult({
        netRefund,
        isEnough,
      })
    }
  }

  return (
    <main className="">
      <h1 className="text-3xl font-bold mt-2"> 🪣 Budget </h1>
        <p className="text-sm font-light text-gray-500 ml-2">- Budget ที่คุณมี พอจะเกษียณมั้ย? เรามาใช้หลัก Net Refund กับ 3 Buckets กัน</p>
        <div className="ml-2 mt-4 flex gap-4">
        <button className="bg-lime-600 text-white rounded-full px-6 py-2">
          Net Fund method
        </button>

        {/* Tooltip Button */}
        <div className="relative group">
          <button className="bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-stone-400">
            3 Buckets method
          </button>

          <div
            className="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              opacity-0 group-hover:opacity-100
              transition
              bg-gray-800 text-white text-xs
              px-4 py-2 rounded-lg shadow
              whitespace-nowrap
              pointer-events-none
            "
          >
            coming soon
          </div>
        </div>
      </div>
    <div className="max-w-5xl ml-2 mt-4 flex flex-col md:flex-row gap-8">
        <div className="md:w-3/5">
        <p className="text-sm text-lime-800">เป็นการคำนวณแบบรวมผลตอบแทนการลงทุน ใช้หลักผลตอบแทนสุทธิ 3%
ที่มาจากอัตราผลตอบแทนเฉลี่ยระหว่างเกษียณ โดยคำนึงถึงอัตราเงินเฟ้อด้วย</p>
      <div className="bg-gray-50 p-6 rounded-xl shadow mt-4 ml-2">
        <label className="block mb-2 font-semibold">
          1. ค่าใช้จ่ายต่อเดือน (บาท)
        </label>
        <input
          type="number"
          value={monthlyExpense}
          onChange={(e) => setMonthlyExpense(+e.target.value)}
          className="input"
        />

        <label className="block mb-2 font-semibold">
          2. เงินเดือนที่ได้ (บาท)
        </label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(+e.target.value)}
          className="input"
        />

        <label className="block mb-2 font-semibold">
          3. อายุ (ปี)
        </label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(+e.target.value)}
          className="input"
        />

        <label className="block mb-2 font-semibold">
          4. จะเกษียณตอนอายุ (ปี)
        </label>
        <input
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(+e.target.value)}
          className="input"
        />

        <label className="block mb-2 font-semibold">
          5. คาดว่าจะมีชีวิตถึงอายุ (ปี)
        </label>
        <input
          type="number"
          value={lifespan}
          onChange={(e) => setLifespan(+e.target.value)}
          className="input"
        />

        <button
          onClick={handleCalculate}
          className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          คำนวณ
        </button>

        {result && (
          <div
            className={`mt-6 p-4 rounded ${
              result.isEnough
                ? 'bg-green-100 border border-green-600'
                : 'bg-red-100 border border-red-600'
            }`}
          >
            <p>
              เงินที่ต้องมีแบบ Net Refund:{' '}
              <b>{result.netRefund.toFixed(2)}</b> บาท
            </p>

            <p className="mt-2">
              {result.isEnough
                ? 'เงินเก็บพอสำหรับเกษียณ ✅'
                : 'เงินเก็บไม่พอสำหรับเกษียณ ❌'}
            </p>

            {!result.isEnough && (
              <p className="mt-2">
                ต้องเก็บเพิ่มเดือนละ{' '}
                <b>{result.additionalSavings?.toFixed(2)}</b> บาท
                หรือทำงานเพิ่มอีก{' '}
                <b>{result.extraYears}</b> ปี
              </p>
            )}
          </div>
        )}
      </div>
      </div>
      <div className="md:w-2/5">
        <div className="text-center border border-gray-300 rounded-lg mt-4 ml-2 text-gray-400">-- 3 buckets -- <p className="text-gray-400">แบ่งเงินเป็น 3 กอง: ระยะสั้น / กลาง / ยาว</p><p className="text-gray-400">coming soon</p></div>
    </div>
    </div>
    </main>
  )
}
