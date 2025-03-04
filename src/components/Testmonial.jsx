export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold tracking-wide text-cyan-100 uppercase">
          What Our Clients Say
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <figure
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-white"
            >
              <blockquote className="text-sm sm:text-base">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="size-8 rounded-full border-2 border-white"
                />
                <div className="mt-2 text-xs sm:text-sm">
                  <span className="font-semibold">Judith Black</span>
                  <span className="block text-gray-400">CEO of Workcation</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
