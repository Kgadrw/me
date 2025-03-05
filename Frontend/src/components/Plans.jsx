import { useState, useEffect } from "react";
import client from "../sanityClient";
import { Check } from "lucide-react";

export default function Plan() {
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "pricingPlan"]').then(setTiers);
  }, []);

  return (
    <div className="relative px-6 py-24 text-white bg-gray-950 sm:py-32 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-5xl font-extrabold uppercase text-cyan-100">
          Choose the right plan for you
        </p>
      </div>

      <div className="grid max-w-lg mx-auto mt-16 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier._id}
            className={`rounded-3xl p-8 ring-1 sm:p-10 transition-transform duration-300 ease-in-out ${
              tier.featured
                ? "relative bg-gray-900 border border-green-600 shadow-2xl transform scale-105 z-10"
                : "bg-gray-950 border border-gray-900 sm:mx-8 lg:mx-0"
            }`}
          >
            <h3 className="text-base font-semibold text-indigo-300">
              {tier.name}
            </h3>
            <p className="flex items-baseline mt-4 gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                {tier.priceMonthly}
              </span>
            </p>
            <p className="mt-6 text-base text-gray-300">{tier.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <Check
                    aria-hidden="true"
                    className="w-5 h-6 text-indigo-400"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 ${
                tier.featured
                  ? "bg-indigo-500 text-white shadow-md hover:bg-indigo-400"
                  : "text-indigo-300 ring-1 ring-indigo-400 ring-inset hover:ring-indigo-500"
              }`}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
