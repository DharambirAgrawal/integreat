import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <h1 className="text-3xl font-bold text-blue-600">InteGreat</h1>
            <p className="text-xs">Workforce and IT Solutions</p>
            <div className="flex flex-col py-3 ">
              <span>9829368182</span>
              <span>608 Hutchinson Ln</span>
              <span>Lewisville, Dallas, TX 75067</span>
              <span>225-603-0576</span>
              <span>integreatusa@gmail.com</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900">
                {" "}
                Useful Links{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                {["Why Us", "Careers", "Data Privacy", "Blogs"].map(
                  (link, index) => (
                    <li key={index}>
                      <Link
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="#"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">
                {" "}
                Industries{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <h3 className="text-2xl font-bold text-blue-600">
                  Our india Office
                </h3>
                <p>Mission Compound</p>
                <p>Hathrol,Jaipur,Rajisthan 302001</p>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © InteGreat 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
