const PerformanceStat = () => {
  const performanceStats = [
    {
      title: "Years in the Industry",
      value: "10",
    },
    {
      title: "Employee Retention Rate",
      value: "98%",
    },
    {
      title: "Client Retention Rate",
      value: "97%",
    },
    {
      title: "Hours Support",
      value: "24",
    },
    {
      title: "Satisfaction rate",
      value: "98%",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Performance
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">Doing Above & Beyond</p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {performanceStats.map((stats, index) => (
              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                key={index}
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  {stats.title}
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {stats.value}
                </dd>
              </div>
            ))}

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStat;
