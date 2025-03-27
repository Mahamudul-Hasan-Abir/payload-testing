import Image from 'next/image'

const Testimonials = ({ title, testimonials }) => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-4 flex items-center">
              {testimonial.photo && (
                <Image
                  src={testimonial.photo.url}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="ml-3 font-semibold">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials






