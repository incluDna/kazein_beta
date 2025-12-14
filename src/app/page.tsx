import Link from 'next/link'
import Image from 'next/image'


// export default function HomePage() {
// return (
// <div>
// <section className="mb-8">
// <h1 className="text-3xl font-bold mb-2">Welcome to MySite</h1>
// <p className="text-gray-600">A demo site with 6 pages. Use the nav above to explore.</p>
// </section>


// <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// <Card title="Volunteer & Workshop" href="/volunteer">Events and workshops you can join.</Card>
// <Card title="Travelling" href="/travelling">Recommended trips and packages.</Card>
// <Card title="Preventions" href="/preventions">Health and safety prevention content.</Card>
// <Card title="Brain Teaser Games" href="/games">Small puzzles and games.</Card>
// <Card title="Budget" href="/budget">Personal budgeting tools and guides.</Card>
// </section>
// </div>
// )
// }


// function Card({ title, href, children }: { title: string; href: string; children?: React.ReactNode }) {
// return (
// <div className="border rounded-lg bg-white p-6 shadow-sm">
// <h3 className="font-bold mb-2">{title}</h3>
// <p className="text-sm text-gray-600 mb-4">{children}</p>
// <Link href={href} className="text-blue-600 underline">Open</Link>
// </div>
// )
// }
{/* <span className="text-4xl font-light mt-2">-เกษียณ</span> */}
export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs border px-2 py-0.5 rounded">beta</span>
          <h1 className="text-5xl font-bold font-ramaraja mt-2">KAZEIN</h1>

          {/* <textarea
            placeholder="detail"
            className="w-full h-32 border mt-4 p-3"
          /> */}
          <p className="mt-2 text-md text-yellow-800 font-thin"> | All stages of เกษียณ </p>
          <p className="mt-1 text-black font-normal">Platform ที่จะพาคุณเตรียมพร้อมในการเกษียณ และ Stages ต่างๆ หลังเกษียณ ไม่ว่าจะเป็นกิจกรรมจิตอาสา/workshop, สถานที่ท่องเที่ยว, การดูแลรักษาสุขภาพ และเกมพัฒนาสมองอีกด้วย</p>

          <Link href="/budget">
          <button className="mt-4 bg-stone-500 text-white rounded-full px-6 py-2 hover:bg-yellow-400 hover:text-black">
            Start
          </button></Link>
        </div>

        {/* Placeholder image */}
        {/* <div className="flex justify-center"> */}
          {/* <div className="w-64 h-64 bg-gray-200 grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <div className="bg-gray-300 col-span-2 h-20" />
            <div className="bg-gray-300" />
            <div className="bg-gray-300" />
          </div> */}
          {/* <Image
            src="/preview.png"   // ← ชื่อไฟล์ใน public
            alt="Kazein logo"
            width={900}
            height={700}
          /> */}
        {/* </div> */}
        <div className="w-full max-w-5xl mx-auto">
          <Image
            src="/preview2.png"
            alt="Kazein logo"
            width={900}
            height={700}
            className="w-full h-auto"
          />
        </div>

      </section>

      {/* Concept */}
      <section className="text-center mt-4">
        <p className="text-xl">
          with the concept of <span className="text-orange-500 font-semibold text-2xl">“STAGES”</span>
        </p>
        <p className="text-sm text-gray-500">from Kazein alpha</p>

        <div className="mt-10 flex justify-center">
          <img
            src="/stages.png"
            alt="stages"
            className="max-w-md"
          />
        </div>
      </section>
    </div>
  )
}
