import { useState } from "react";
import { CheckCircle, Droplets, Recycle, Shield, MapPin, Printer, Share2, Mail, Phone, Youtube, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

export default function CampaignSite() {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [msg, setMsg] = useState("");

  const priorities = [
    { name: "Clean Water", value: 95, fill: "#22c55e" },
    { name: "Fix Flooding", value: 85, fill: "#60a5fa" },
    { name: "Fair Rates", value: 80, fill: "#f97316" },
    { name: "Reliable Pickup", value: 88, fill: "#a78bfa" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <Droplets className="h-6 w-6" /> Ralph for ECUA — D4 (NPA)
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#bio" className="hover:text-emerald-600">About</a>
            <a href="#plan" className="hover:text-emerald-600">Plan</a>
            <a href="#district" className="hover:text-emerald-600">District</a>
            <a href="#updates" className="hover:text-emerald-600">Updates</a>
            <a href="#volunteer" className="hover:text-emerald-600">Get Involved</a>
          </nav>
          <a href="#volunteer" className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-2xl px-4 py-2 shadow hover:bg-emerald-700">
            Donate <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Clean Water. Fair Rates. <span className="text-emerald-600">No Drama.</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600">
              I’m Ralph Schofield, a public-health counsel and mediator running for Emerald Coast Utilities Authority, District 4. 
              I’ll bring practical, nonpartisan problem‑solving to water, wastewater, and sanitation—so ECUA serves people, not politics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#plan" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800">Read the Plan</a>
              <a href="#volunteer" className="rounded-2xl bg-white border px-5 py-3 font-semibold hover:bg-slate-50">Volunteer / Yard Sign</a>
              <a href="https://escambiavotes.gov/precincts-and-districts" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700">
                Find Your Precinct <MapPin className="h-4 w-4"/>
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Political advertisement paid for and approved by Ralph Schofield, No Party Affiliation, candidate for ECUA District 4.</p>
          </div>
          <div className="relative">
            <img src="/images/DSC_0583.jpg" alt="Ralph Schofield headshot" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <Card className="md:col-span-2 shadow-lg rounded-2xl">
            <CardContent className="p-7">
              <h2 className="text-3xl font-bold">Meet Ralph</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Attorney, public health counsel, certified mediator & arbitrator, and community advocate. I’ve spent my career
                helping local health departments solve tricky problems by listening first, aligning stakeholders, and executing.
                ECUA needs steady leadership focused on service delivery—not headlines.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <img src="/images/FB_IMG_1676255046058.jpg" alt="Ralph playing guitar at church" className="rounded-xl shadow" />
                <img src="/images/20210702_181054.jpg" alt="Ralph and Jessica downtown" className="rounded-xl shadow" />
                <img src="/images/20221103_191730.jpg" alt="Ralph with friends" className="rounded-xl shadow" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-7">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/who-is-ecua/ecua-board" target="_blank" rel="noreferrer"><FileText className="h-4 w-4"/> What ECUA Does</a>
                <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/contact-ecua" target="_blank" rel="noreferrer"><Phone className="h-4 w-4"/> Report a Service Issue</a>
                <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://escambiavotes.gov/precincts-and-districts" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> Find Your Precinct</a>
                <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.maps.arcgis.com" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> ECUA District Map</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PLAN, DISTRICT, UPDATES, VOLUNTEER, FOOTER remain unchanged */}
    </div>
  );
}
