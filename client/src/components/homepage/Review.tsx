import React from "react";

const Review = () => {
  const clientReviews = [
    {
      name: "L. Evans",
      post: "CPA firm owner",
      description:
        "Team morale and client delivery has experienced a significant boost after we onboarded professionals provided by InteGreat. We were amazed by the quality of professionals given the low labor cost. Highly recommend for medium and small CPA firms.",
      stars: 4,
    },
    {
      name: "Susan J. Tonniges",
      post: "CPA firm owner",
      description:
        "InteGreat filled our tax preparer need. A team of two work with us who have a great attitude and are good at what they do!",
      stars: 3,
    },
    {
      name: "Pete DeCapite",
      post: "CPA firm owner",
      description:
        "I was looking for experienced tax professionals and chose InteGreat. We have multiple individuals from InteGreat who are integrated with our onshore team in the US. The whole team is really happy with the services.",
      stars: 3,
    },
    {
      name: "Ryan Moore",
      post: "MSSP firm manager, Maryland",
      description:
        "Our remote IT analysts supplied by InteGreat are very knowledable and support the cybersecurity services provided to several clients of ours. We have been able to reduce costs and improve our firm margins while boosting client satisfaction.",
      stars: 4,
    },
    {
      name: "Jordan Kevin",
      post: "MSSP firm manager, Tuscan, Arizona",
      description:
        "We are very pleased with InteGreat. They were professional from the get go of getting us who we needed and integrating them with our team.",
      stars: 5,
    },
    {
      name: "Griggs Bennett",
      post: "CPA firm owner",
      description:
        "InteGreat's supplied tax professionals prepare taxes for my clients and also perform bookkeeping jobs during non-peak seasons. They are an integral part of my team now!",
      stars: 3,
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          See what our clients have to say about us!
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {clientReviews.map((review, index) => (
            <blockquote
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              key={index}
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {Array.from({ length: review.stars }, (_, index) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.name}
                    </p>
                    <span className="text-xs">{review.post}</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{review.description}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
