'use client'
import ReactMarkdown from 'react-markdown'
export default function ItemCard({ item }: any) {
  return (
    <div className="border p-4 rounded-xl shadow-sm">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="font-bold mt-2">{item.title}</h2>
      {/* <p className="text-sm whitespace-pre-line">{item.description}</p> */}
      {/* <ReactMarkdown>{item.description}</ReactMarkdown> */}
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="whitespace-pre-line mb-2">{children}</p>
          ),
          li: ({ children }) => (
            <li className="whitespace-pre-line ml-4 list-disc">{children}</li>
          ),
        }}
      >
        {item.description}
      </ReactMarkdown>


      {item.price && <p className="mt-1 text-green-600 font-semibold">฿{item.price}</p>}

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          className="text-blue-600 underline block mt-2"
        >
          View Details
        </a>
      )}
    </div>
  );
}
