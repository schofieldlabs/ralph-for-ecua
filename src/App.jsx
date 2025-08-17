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

  // Image paths — place these files in /public/images
  const photos = {
    headshot: "/images/DSC_0583.jpg",
    music: "/images/FB_IMG_1676255046058.jpg",
    group: "/images/20221103_191730.jpg",
    downtown: "/images/20210702_181054.jpg",
  };

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
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-emerald-200 via-sky-200 to-amber-200 shadow-xl">
              <div className="rounded-2xl bg-white p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Metric icon={<Droplets className="h-5 w-5"/>} label="Clean-water first" value="PFAS, lead, & wells"/>
                  <Metric icon={<Recycle className="h-5 w-5"/>} label="Smarter recycling" value="Reliable pickup"/>
                  <Metric icon={<Shield className="h-5 w-5"/>} label="Protect ratepayers" value="No surprises"/>
                  <Metric icon={<CheckCircle className="h-5 w-5"/>} label="Execution" value="Fix it in 48"/>
                </div>
                <div className="mt-6 h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart innerRadius="20%" outerRadius="90%" data={priorities} startAngle={180} endAngle={0}>
                      <RadialBar minAngle={15} background clockWise dataKey="value" />
                      <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
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
              <ul className="mt-5 grid md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Chief Legal Counsel for Florida DOH’s 7 westernmost county health departments</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Certified in Public Health (CPH); background in toxicology & risk assessment</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Florida Supreme Court Certified Mediator; FINRA arbitrator</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Pensacola resident; focused on practical, local fixes</li>
              </ul>
              <div className="mt-7">
                <PhotoStrip photos={photos} />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <img src={photos.headshot} alt="Ralph Schofield headshot" className="w-full h-64 object-cover"/>
              <div className="p-7">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/who-is-ecua/ecua-board" target="_blank" rel="noreferrer"><FileText className="h-4 w-4"/> What ECUA Does</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/contact-ecua" target="_blank" rel="noreferrer"><Phone className="h-4 w-4"/> Report a Service Issue</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://escambiavotes.gov/precincts-and-districts" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> Find Your Precinct</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.maps.arcgis.com" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> ECUA District Map</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">The Four-Point Plan</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <PlanCard icon={<Droplets className="h-6 w-6"/>} title="Clean Water, Protected Aquifer" bullets={[
              "Accelerate wellhead protection & source-water testing",
              "Publish easy-to-read quarterly water quality dashboards",
              "Plan & fund lead-service-line inventory + replacements"
            ]} />
            <PlanCard icon={<Shield className="h-6 w-6"/>} title="Protect Ratepayers" bullets={[
              "No surprise surcharges; plain-language bills",
              "Competitive, ethical procurement with tough vendor KPIs",
              "Budget discipline: needs before wants"
            ]} />
            <PlanCard icon={<Recycle className="h-6 w-6"/>} title="Reliable Sanitation & Recycling" bullets={[
              "Fix missed-pickup hotspots with route analytics",
              "Keep glass & organics out of landfill where cost-effective",
              "Pensacola Beach seasonal surge plan to reduce overflows"
            ]} />
            <PlanCard icon={<CheckCircle className="h-6 w-6"/>} title="Customer Service that Works" bullets={[
              "\"Fix it in 48\" rapid-response for recurring problems",
              "Text alerts & outage maps residents actually use",
              "Quarterly townhalls (in person & online)"
            ]} />
          </div>
        </div>
      </section>

      {/* DISTRICT */}
      <section id="district" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">District 4: From the Beach to the Bay</h2>
            <p className="mt-3 text-slate-600">ECUA District 4 includes Pensacola Beach (Santa Rosa Island) and adjacent mainland neighborhoods. Use the tools below to confirm your precinct and services.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800" href="https://escambiavotes.gov/precincts-and-districts" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> Precinct Finder</a>
              <a className="inline-flex items-center gap-2 rounded-2xl bg-white border px-5 py-3 font-semibold hover:bg-slate-50" href="https://ecua.fl.gov/map-gallery" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> ECUA Map Gallery</a>
            </div>
          </div>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-0 overflow-hidden">
              <iframe title="District Map" src="https://maps.roktech.net/escambia_gomaps4/?mapName=General" className="w-full h-[360px] border-0"></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UPDATES */}
      <section id="updates" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Updates</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <UpdateCard title="Why I’m Running" date="Aug 2025" summary="Service, not spectacle. Focused on clean water, fair rates, and reliable service."/>
            <UpdateCard title="Beach Surge Plan" date="Sep 2025" summary="Tackling seasonal sanitation surges on Santa Rosa Island with smarter routing."/>
            <UpdateCard title="Open Data, Real Accountability" date="Oct 2025" summary="Quarterly dashboards so residents can see how ECUA is performing."/>
          </div>
        </div>
      </section>

      {/* VOLUNTEER / CONTACT */}
      <section id="volunteer" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Join the Team</h2>
            <p className="mt-3 text-slate-600">No big donors. No drama. A neighbor-powered campaign. Tell us how you’d like to help.</p>
            <form className="mt-6 grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We’ll be in touch soon."); setEmail(""); setZip(""); setMsg("");}}>
              <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <Input placeholder="ZIP" value={zip} onChange={(e)=>setZip(e.target.value)} required />
              <Textarea rows={4} placeholder="Tell us how you’d like to help (yard sign, host a house chat, text friends, etc.)" value={msg} onChange={(e)=>setMsg(e.target.value)} />
              <Button type="submit" className="rounded-2xl">Count me in</Button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We never sell your info. By submitting, you agree to receive occasional campaign updates. Opt out anytime.</p>
          </div>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-7">
              <h3 className="text-xl font-semibold">Spread the word</h3>
              <div className="mt-4 grid gap-3">
                <a className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-slate-50" href="#"><Share2 className="h-4 w-4"/> Share this site</a>
                <a className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-slate-50" href="#"><Printer className="h-4 w-4"/> Download one‑pager</a>
                <a className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-slate-50" href="#"><Youtube className="h-4 w-4"/> Watch 90‑second plan video</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PLAN, DISTRICT, UPDATES, VOLUNTEER, FOOTER remain unchanged */}
    </div>
  );
}
