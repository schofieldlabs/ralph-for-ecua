import { useState } from "react";
import { CheckCircle, Droplets, Recycle, Shield, MapPin, Share2, Facebook, Twitter, Linkedin, Copy, Mail, Phone, Youtube, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

export default function CampaignSite() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [msg, setMsg] = useState("");
  const [volunteerRoles, setVolunteerRoles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const handleRoleChange = (role) => {
  setVolunteerRoles((prev) =>
    prev.includes(role)
      ? prev.filter((r) => r !== role)
      : [...prev, role]
  );
};
  const [botField, setBotField] = useState("");
  const shareUrl = "https://vote4ralph.com/";
  const shareText =
    "Support Ralph Schofield for ECUA District 4 – Clean Water, Fair Rates, No Drama.";

  const priorities = [
    { name: "Clean Water", value: 95, fill: "#22c55e" },
    { name: "Fair Rates", value: 85, fill: "#60a5fa" },
    { name: "Reliability", value: 80, fill: "#f97316" },
    { name: "Service", value: 88, fill: "#a78bfa" },
  ];

  // Image paths — place these files in /public/images
  const photos = {
    headshot: "/images/DSC_0583.jpg",
    music: "/images/FB_IMG_1676255046058.jpg",
    group: "/images/20221103_191730.jpg",
    downtown: "/images/20210702_181054.jpg",
  };
  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();

    if (botField) {
      return; // likely a bot
    }

    await fetch("https://formspree.io/f/mvzwpoap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        zip,
        volunteerRoles: volunteerRoles.join(", "),
        message: msg,
      }),
    });
    setSubmitted(true);

    setName("");
    setEmail("");
    setZip("");
    setMsg("");
  };

  const handlePrintClick = () => {
    window.print();
  };

const handleVideoClick = () => {
  const videoUrl = "https://youtu.be/Vf_K5Osp82g";
  window.open(videoUrl, "_blank", "noopener,noreferrer");
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
<a
  href="https://www.paypal.com/donate/?hosted_button_id=7PHTM58XHFZJL"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-2xl px-4 py-2 shadow hover:bg-emerald-700"
>
  Donate <ArrowRight className="h-4 w-4" />
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
            <p className="mt-3 text-sm md:text-base font-semibold text-slate-700">
              Ralph Schofield • Public Health Attorney • Certified Mediator • Pensacola Resident
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Certified in Public Health (CPH) • Florida Supreme Court Certified Circuit Court & Family Mediator
            </p>
            <p className="mt-4 text-lg md:text-xl text-slate-600">
              I’m Ralph Schofield, a public health attorney and mediator running for Emerald Coast Utilities Authority, District 4. 
              I’ll bring practical, nonpartisan problem‑solving to water, wastewater, and sanitation, so that ECUA safely and affordably serves the people.
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
                Attorney, public health professional, certified mediator, and community advocate. I’ve spent my career
                helping individuals, families, and local government solve tricky problems by listening first, aligning stakeholders, and executing.
                ECUA needs steady leadership focused on safe, affordable service delivery.
              </p>
              <ul className="mt-5 grid md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Chief Legal Counsel for Florida’s 7 westernmost county health departments</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Certified in Public Health (CPH); background in environmental health, toxicology, and risk assessment</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Florida Supreme Court Certified Family and Circuit Court Mediator; FINRA and Florida Supreme Court Qualified Arbitrator</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-600"/> Pensacola resident; focused on practical, local fixes</li>
              </ul>
              <div className="mt-7">
                <PhotoStrip photos={photos} />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <img src={photos.headshot} alt="Ralph Schofield headshot" className="w-full h-120 object-cover"/>
              <div className="p-7">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/who-is-ecua/ecua-board" target="_blank" rel="noreferrer"><FileText className="h-4 w-4"/> What ECUA Does</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.fl.gov/contact-ecua" target="_blank" rel="noreferrer"><Phone className="h-4 w-4"/> Report a Service Issue</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://escambiavotes.gov/precincts-and-districts" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> Find Your Precinct</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://ecua.maps.arcgis.com" target="_blank" rel="noreferrer"><MapPin className="h-4 w-4"/> ECUA District Map</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=26&c=escambia&ca=828&rellevel=4&committee=N" target="_blank" rel="noreferrer"><FileText className="h-4 w-4" />Official Candidate Profile</a>
                  <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="https://linkedin.com/in/ralphschofield" target="_blank" rel="noreferrer"><Share2 className="h-4 w-4" />Professional Background (LinkedIn)</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

            {/* PLAN / ISSUES */}
      <section id="plan" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">The Four-Point Plan</h2>
          <p className="mt-2 text-sm text-slate-600">
            Concrete, nonpartisan priorities for ECUA District 4.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-emerald-50 p-2">
                    <Droplets className="h-6 w-6 text-emerald-600" />
                  </span>
                  <h3 className="text-lg font-semibold">
                    Clean Water & Protected Aquifer
                  </h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>Accelerate wellhead protection and source-water testing.</li>
                  <li>Plain-language water quality reports, not just dense tables.</li>
                  <li>Plan and fund lead-service-line inventory and replacements.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-emerald-50 p-2">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </span>
                  <h3 className="text-lg font-semibold">
                    Protect Ratepayers & Be Honest About Costs
                  </h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>No surprise surcharges; simple, predictable rate path.</li>
                  <li>
                    Tie rate increases to named projects and measurable outcomes.
                  </li>
                  <li>Budget discipline: essentials before vanity spending.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-emerald-50 p-2">
                    <Recycle className="h-6 w-6 text-emerald-600" />
                  </span>
                  <h3 className="text-lg font-semibold">
                    Reliable Sanitation & Recycling
                  </h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>
                    Fix missed-pickup hotspots with route and data analysis, not blame.
                  </li>
                  <li>
                    Transparency on what’s actually getting recycled and where it goes.
                  </li>
                  <li>
                    Seasonal surge plan for beaches and high-traffic areas in peak
                    months.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-emerald-50 p-2">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </span>
                  <h3 className="text-lg font-semibold">
                    Customer Service that Works
                  </h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>
                    A “fix it in 48” standard for recurring problems where feasible.
                  </li>
                  <li>
                    Text/email alerts for outages, delays, and boil-water notices.
                  </li>
                  <li>
                    Quarterly town halls (in-person and online) to listen and report
                    back.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DISTRICT */}
      <section id="district" className="py-16 bg-emerald-50/60">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">District 4: From the Beach to the Bay</h2>
            <p className="mt-3 text-slate-600">
              ECUA District 4 includes Pensacola Beach and southeast Escambia
              mainland neighborhoods. Whether you live on the island or across the bay,
              ECUA touches daily life, from what comes out of your tap, to what happens when you
              flush, and whether your trash and recycling get picked up reliably.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href="https://escambiavotes.gov/precincts-and-districts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800"
              >
                <MapPin className="h-4 w-4" />
                Precinct Finder
              </a>
              <a
                href="https://ecua.fl.gov/map-gallery"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white border px-4 py-2 font-semibold hover:bg-slate-50"
              >
                <MapPin className="h-4 w-4" />
                ECUA Map Gallery
              </a>
            </div>
          </div>
          <Card className="shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-5 text-sm text-slate-600">
                <p className="font-semibold mb-2">
                  Why this race matters for District 4:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Protecting our bays and bayous from spills and overflows.</li>
                  <li>
                    Balancing tourism-driven demand with year-round neighborhood needs.
                  </li>
                  <li>
                    Ensuring fair rates and investments that actually match local
                    priorities.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  I&apos;m running to represent both island and mainland residents with
                  a calm, service-first approach.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UPDATES */}
      <section id="updates" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Updates</h2>
          <p className="mt-2 text-sm text-slate-600">
            Short, clear updates as the campaign progresses.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-sm h-full">
              <CardContent className="p-5 text-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  December 2025
                </p>
                <h3 className="mt-1 font-semibold">Why I’m Running</h3>
                <p className="mt-2 text-slate-600">
                  Service, not spectacle. I’m running to bring steady, nonpartisan
                  problem-solving to water, wastewater, and sanitation.
                </p>
                <a
  href="https://youtu.be/Vf_K5Osp82g"
  target="_blank"
  rel="noreferrer"
  className="block text-center text-emerald-600 font-medium"
>
  Watch the video →
</a>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm h-full">
              <CardContent className="p-5 text-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Coming Soon
                </p>
                <h3 className="mt-1 font-semibold">Listening Sessions</h3>
                <p className="mt-2 text-slate-600">
                  Small group conversations with District 4 residents about spills,
                  rates, recycling, and everyday service issues.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm h-full">
              <CardContent className="p-5 text-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Coming Soon
                </p>
                <h3 className="mt-1 font-semibold">Open Data, Real Accountability</h3>
                <p className="mt-2 text-slate-600">
                  A vision for public dashboards on spills, missed pickups, and progress
                  on major projects, so residents can see how ECUA is performing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VOLUNTEER / CONTACT */}
      <section id="volunteer" className="py-16 bg-emerald-50/70">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Join the Team</h2>
            <p className="mt-2 text-sm text-slate-600">
              No big donors. No drama. A neighbor-powered campaign.
            </p>
            <p className="mt-3 text-slate-600 text-sm">
              If you’d like to help—by hosting a small group conversation, displaying a
              yard sign, or simply sharing information—please let me know how to reach
              you.
            </p>
            <form className="mt-6 grid gap-3 text-sm" onSubmit={handleVolunteerSubmit}>
              <Input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="text"
                name="postal-code"
                autoComplete="postal-code"
                placeholder="ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
              <div className="space-y-2 text-sm">
                <p className="font-medium text-slate-700">How would you like to help?</p>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={volunteerRoles.includes("yard-sign")}
                  onChange={() => handleRoleChange("yard-sign")}
                />
                Display a yard sign
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={volunteerRoles.includes("house-meeting")}
                  onChange={() => handleRoleChange("house-meeting")}
                />
                Host a small neighborhood conversation
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={volunteerRoles.includes("door-knocking")}
                  onChange={() => handleRoleChange("door-knocking")}
                />
                Knock on doors or talk with neighbors
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={volunteerRoles.includes("social-media")}
                  onChange={() => handleRoleChange("social-media")}
                />
                Share campaign updates on social media
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={volunteerRoles.includes("other")}
                  onChange={() => handleRoleChange("other")}
                />
                  Other
                </label>
              </div>
              <Textarea
                rows={3}
                placeholder="Anything else you'd like us to know?"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <input
                type="text"
                name="_gotcha"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 rounded-2xl"
              >
                Count me in
              </Button>
              {submitted && (
                <p className="text-emerald-700 text-sm font-medium mt-2">
                  ✓ Thanks for volunteering! We'll be in touch soon.
                </p>
              )}
            </form>
            <p className="mt-3 text-xs text-slate-500">
              We never sell your information. By submitting, you agree to receive
              occasional campaign updates. You can opt out at any time.
            </p>
          </div>

          <Card className="rounded-2xl shadow-lg bg-white/80">
            <CardContent className="p-6 space-y-4 text-sm">
              <h3 className="text-lg font-semibold">Spread the Word</h3>
              <p className="text-slate-600">
                One of the most helpful things you can do is make sure your friends and
                neighbors know this race exists and what’s at stake.
              </p>
              <div className="grid gap-3">
<div className="grid gap-3">

<Button
  variant="outline"
  className="justify-start rounded-2xl"
  onClick={() =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      "_blank"
    )
  }
>
  <Facebook className="h-4 w-4 mr-2" />
  Share on Facebook
</Button>

<Button
  variant="outline"
  className="justify-start rounded-2xl"
  onClick={() =>
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(shareText)}`,
      "_blank"
    )
  }
>
  <Twitter className="h-4 w-4 mr-2" />
  Share on X / Twitter
</Button>

<Button
  variant="outline"
  className="justify-start rounded-2xl"
  onClick={() =>
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      "_blank"
    )
  }
>
  <Linkedin className="h-4 w-4 mr-2" />
  Share on LinkedIn
</Button>

<Button
  variant="outline"
  className="justify-start rounded-2xl"
  onClick={() => navigator.clipboard.writeText(shareUrl)}
>
  <Copy className="h-4 w-4 mr-2" />
  Copy Link
</Button>

</div>
<Button
  variant="outline"
  className="justify-start rounded-2xl"
  type="button"
  onClick={handleVideoClick}
>
  <Youtube className="h-4 w-4 mr-2" />
  Watch an introductory video on Ralph and the ECUA Board
</Button>
              </div>
              <div className="pt-4 border-t mt-2 space-y-1">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@vote4ralph.com</span>
                </p>
                <p className="flex items-center gap-2 text-xs text-slate-500">
                  <Phone className="h-4 w-4" />
                  <span>Campaign phone to be announced.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* ... rest of site unchanged ... */}
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center gap-2 text-slate-700 font-medium">{icon}{label}</div>
      <div className="mt-1 text-xs text-slate-500">{value}</div>
    </div>
  );
}

function PhotoStrip({ photos }) {
  return (
    <div className="space-y-3">
      <figure className="rounded-xl overflow-hidden border bg-white">
        <img src={photos.music} alt="Sharing music at a local church service" className="w-full h-72 object-cover" />
        <figcaption className="p-2 text-xs text-slate-600">Sharing music at a local church service</figcaption>
      </figure>
      <div className="grid grid-cols-2 gap-3">
        <figure className="rounded-xl overflow-hidden border bg-white">
          <img src={photos.group} alt="A Florida family" className="w-full h-90 object-cover" />
          <figcaption className="p-2 text-xs text-slate-600">A Florida family</figcaption>
        </figure>
        <figure className="rounded-xl overflow-hidden border bg-white">
          <img src={photos.downtown} alt="With Jessica in downtown Pensacola" className="w-full h-90 object-cover" />
          <figcaption className="p-2 text-xs text-slate-600">With Jessica in downtown Pensacola</figcaption>
        </figure>
      </div>
    </div>
  );
}
