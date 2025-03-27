// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import Image from 'next/image'

// const TestimonialsBlockServer = ({ title, testimonials }) => {
//   return (
//     <section className="py-16 md:py-32">
//       <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
//         <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
//           <h2 className="text-4xl font-medium lg:text-5xl">{title}</h2>
//           <p>
//             Gemini is evolving to be more than just the models. It supports an entire to the APIs
//             and platforms helping developers and businesses innovate.
//           </p>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
//           {testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2"
//             >
//               <CardHeader>
//                 {testimonial.photo && (
//                   <Image
//                     src={testimonial.photo.url}
//                     alt={testimonial.author}
//                     width={40}
//                     height={40}
//                     className="rounded-full"
//                   />
//                 )}
//               </CardHeader>
//               <CardContent>
//                 <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                   <p className="text-xl font-medium">{testimonial.quote}</p>

//                   <div className="grid grid-cols-[auto_1fr] items-center gap-3">
//                     <p>aveter will be here</p>

//                     <div>
//                       <cite className="text-sm font-medium">{testimonial.author}</cite>
//                       <span className="text-muted-foreground block text-sm">Software Ingineer</span>
//                     </div>
//                   </div>
//                 </blockquote>
//               </CardContent>
//             </Card>
//           ))}
//           <Card className="md:col-span-2">
//             <CardContent className="h-full pt-6">
//               <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                 <p className="text-xl font-medium">
//                   Tailus is really extraordinary and very practical, no need to break your head. A
//                   real gold mine.
//                 </p>

//                 <div className="grid grid-cols-[auto_1fr] items-center gap-3">
//                   <p>Aveter will be here</p>
//                   <div>
//                     <cite className="text-sm font-medium">Jonathan Yombo</cite>
//                     <span className="text-muted-foreground block text-sm">Software Ingineer</span>
//                   </div>
//                 </div>
//               </blockquote>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="h-full pt-6">
//               <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                 <p>
//                   Great work on tailfolio template. This is one of the best personal website that I
//                   have seen so far!
//                 </p>

//                 <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
//                   <p>Aveter will be here</p>
//                   <div>
//                     <cite className="text-sm font-medium">Yucel Faruksahan</cite>
//                     <span className="text-muted-foreground block text-sm">Creator, Tailkits</span>
//                   </div>
//                 </div>
//               </blockquote>
//             </CardContent>
//           </Card>
//           <Card className="card variant-mixed">
//             <CardContent className="h-full pt-6">
//               <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                 <p>
//                   Great work on tailfolio template. This is one of the best personal website that I
//                   have seen so far!
//                 </p>

//                 <div className="grid grid-cols-[auto_1fr] gap-3">
//                   <p>Aveter will be here</p>
//                   <div>
//                     <p className="text-sm font-medium">Rodrigo Aguilar</p>
//                     <span className="text-muted-foreground block text-sm">
//                       Creator, TailwindAwesome
//                     </span>
//                   </div>
//                 </div>
//               </blockquote>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TestimonialsBlockServer

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

// Define the structure for a single testimonial
type Testimonial = {
  quote: string
  author: string
  photo?: { url: string } // Photo is optional
}

// Define the props for the testimonials block component
type TestimonialsBlockProps = {
  title: string
  testimonials: Testimonial[]
}

const TestimonialsBlockServer = ({ title, testimonials }: TestimonialsBlockProps) => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        {/* Section Title */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">{title}</h2>
          <p>
            Gemini is evolving to be more than just the models. It supports an entire API and
            platform ecosystem, helping developers and businesses innovate.
          </p>
        </div>

        {/* Grid layout for testimonials */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2"
            >
              <CardHeader>
                {/* Render the photo if it exists */}
                {testimonial.photo && (
                  <Image
                    src={testimonial.photo.url}
                    alt={testimonial.author} // Ensure accessibility
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  {/* Display the quote */}
                  <p className="text-xl font-medium">{testimonial.quote}</p>
                  {/* Display author details */}
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <p>Avatar will be here</p>
                    <div>
                      <cite className="text-sm font-medium">{testimonial.author}</cite>
                      <span className="text-muted-foreground block text-sm">Software Engineer</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsBlockServer
