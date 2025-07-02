'use client'

import Image from 'next/image';

const Template = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* First Div: Centered on Desktop, Sticky on Mobile */}
      <div className="w-full max-w-4xl mx-auto mb-8 lg:sticky lg:top-0 lg:text-center lg:mb-0">
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold">Centered Element (Sticky on Mobile)</h2>
          <p className="mt-4 text-gray-600">
            This div is centered on desktop but becomes sticky on mobile screens. It will stick to the top of the screen while you scroll down.
          </p>
        </div>
      </div>

      {/* Second Div: Box on Left and Image on Right (Desktop), Under Text (Mobile) */}
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center mb-8">
        {/* Box */}
        <div className="bg-blue-500 w-full lg:w-1/3 p-6 text-white rounded-md mb-4 lg:mb-0">
          <h3 className="text-xl font-semibold">Left Box (Desktop) / Under Text (Mobile)</h3>
          <p className="mt-4">
            On desktop, this box will appear on the left of the text and image. On mobile, it will be placed under the text.
          </p>
        </div>

        {/* Image Box: Leaning to the Right on Desktop */}
        <div className="box-border m-0 min-w-0 max-w-full h-auto">
            <Image
              src="/meteor.png" // Change this path to an actual image
              alt="TBD Image"
              width={800}
              height={500}
              layout="responsive"
              className="rounded-md"
            />
        </div>
      </div>
    </div>
  );
};

export default Template;




{/*
export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <h1>Elements testing page for Catalyst.</h1>
            </section>
        </main>
    )
}

*/
}

