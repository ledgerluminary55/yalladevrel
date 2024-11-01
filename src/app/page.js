import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Check, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeartLaptopIcon } from '@/components/HeartLaptopIcon';
import PayPalButton from '@/components/PayPalButton';

import { Lalezar, Montserrat } from 'next/font/google';

const lalezar = Lalezar({
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src="/images/logo.png"
                alt="Yalla, DevRel LLC Logo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-7xl">
                <span className={`${lalezar.className} font-bold`}>Impact</span>
              </h1>
              <p className={`${montserrat.className} text-5xl`}>you can measure</p>
            </div>
          </div>
          <Link href="#about">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white mt-4 md:mt-0"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section: DevRel Activities */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-w-3 aspect-h-2">
                <Image
                  src={`/images/header_${i}.jpg`}
                  alt={`DevRel Activity ${i}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Section: About Yalla, DevRel LLC */}
        <section id="about" className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">About Yalla, DevRel LLC</h2>
                <div className="mb-4">
                  <HeartLaptopIcon className="w-12 h-12" />
                </div>
                <p className="mb-4">
                  Yalla, DevRel LLC provides Developer Relations (DevRel) services for tech firms,
                  drawing on the extensive expertise of its principal consultant.
                </p>
                <p>
                  Ben Greenberg possesses extensive experience in the discipline of Developer
                  Relations. He has led teams, established programs, and delivered measurable impact
                  at leading organizations around the world.
                </p>
              </div>
              <div>
                <Image
                  src="/images/presenting.png"
                  alt="Developer Relations Conference"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Services */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8">What We Do</h2>
          <p className="text-xl mb-8">Drive measurable DevRel impact</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Developer Experience Audit',
              'Developer Outreach',
              'DevRel Team Mentorship',
              'Technical Documentation',
              'Developer Champion Programs',
              'Personalized Strategic Plans',
            ].map((service) => (
              <div
                key={service}
                className="border border-black p-4 rounded-lg flex items-center justify-between"
              >
                <span>{service}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
          <p className="text-right mt-4">... and more</p>
        </section>

        {/* Section: Clients */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Trusted by leading companies
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-flow-col auto-cols-max gap-8 items-center">
                {['Vonage', 'Parity', 'Orbit', 'Fuel', 'NewRelic', 'Couchbase'].map((client) => (
                  <div
                    key={client}
                    className="w-32 h-32 flex items-center justify-center bg-white p-4 rounded-lg shadow-md"
                  >
                    <Image
                      src={`/images/${client}_logo.png`}
                      alt={`${client} logo`}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Pricing Plans */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="space-y-6">
            <Card className="border-black flex flex-col lg:flex-row lg:items-center">
              <div className="flex-1 p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-3xl font-bold mr-2">DevRel Ongoing Support</h3>
                  <span className="bg-yellow-300 text-yellow-800 text-sm font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <p className="text-xl font-bold mb-4">$2,000 per month</p>
                <ul className="space-y-2">
                  {[
                    'Regular monthly strategy meetings and optimizations',
                    'Personalized recommendations based on your needs',
                    '5 hours per month of expert DevRel support',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <PayPalButton />
              </div>
            </Card>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  name: 'Developer Experience Assessment and Action Plan',
                  price: '$3,000',
                  features: [
                    'Friction Log Analysis',
                    'Documentation Review',
                    'Developer Tooling Recommendations',
                  ],
                  paymentLink: 'https://www.paypal.com/ncp/payment/YPZSGHFVF9L98',
                },
                {
                  name: 'Developer Marketing Assessment and Action Plan',
                  price: '$3,000',
                  features: [
                    'Market Trend Analysis',
                    'Content Strategy Development',
                    'Product Positioning Review',
                  ],
                  paymentLink: 'https://www.paypal.com/ncp/payment/F7HSM8ZX36QH2',
                },
                {
                  name: 'Developer Community Assessment and Action Plan',
                  price: '$3,000',
                  features: [
                    'Community Engagement Metrics Review',
                    'Community Health Check',
                    'Growth and Retention Strategies',
                  ],
                  paymentLink: 'https://www.paypal.com/ncp/payment/QC4527ASGNGWN',
                },
              ].map((plan) => (
                <Card key={plan.name} className="border-black flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-xl font-bold">
                      {plan.price} all-inclusive one-time cost
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={plan.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-black text-white hover:bg-gray-800">
                        Choose Plan
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Call to Action */}
        <section className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Book a Consultation</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to take your DevRel strategy to the next level?
              </p>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a free 30-minute consultation with our experts.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Link href="https://calendly.com/yalladevrel/30min">
                  <Button className="w-full bg-white text-black hover:bg-gray-200" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Yalla, DevRel LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
