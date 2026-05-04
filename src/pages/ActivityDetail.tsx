import { useEffect, useMemo, type ReactNode } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { activitiesData, formatActivityDate } from "@/lib/activities";
import { cn } from "@/lib/utils";

type TimelineStep = {
  time: string;
  title: string;
  description: string;
};

type Metric = {
  label: string;
  value: string;
  description: string;
};

type DetailCopy = {
  location: string;
  shortLabel: string;
  intro: string[];
  objectives: string[];
  timeline: TimelineStep[];
  metrics: Metric[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  lessons: string[];
  captions: string[];
};

const activityDetailCopy: Record<string, DetailCopy> = {
  "1": {
    location: "Tanke, Ilorin, Kwara State",
    shortLabel: "Community sanitation and awareness",
    intro: [
      "The Environmental Clean-up Drive brought together community volunteers, environmental officers, and local partners for a visible, practical cleanup across one of Ilorin's busiest corridors.",
      "Beyond the physical sanitation exercise, the day was designed to reset habits, deepen awareness, and show that cleaner public spaces are possible when residents, government, and mission-driven organizations work together.",
    ],
    objectives: [
      "Remove waste and restore public spaces to a cleaner, safer condition.",
      "Educate residents on sorting, disposal, and everyday waste prevention habits.",
      "Build momentum for ongoing community-led environmental stewardship.",
    ],
    timeline: [
      { time: "07:00 AM", title: "Team briefing", description: "Volunteers, facilitators, and partners reviewed the route, safety protocol, and cleanup priorities." },
      { time: "08:00 AM", title: "Sanitation rollout", description: "Waste collection began across designated streets, drains, and public edges with coordinated collection teams." },
      { time: "9:00 AM", title: "Awareness engagement", description: "The team spoke with residents and traders on proper disposal, recycling, and the public-health impact of litter." },
      { time: "10:00 PM", title: "Wrap-up and reporting", description: "Collected waste was aggregated, impact figures were captured, photographs were taken, and next-step community commitments were shared." },
    ],
    metrics: [
      { label: "Waste collected", value: "800kg+", description: "Mixed waste removed from streets and drains." },
      { label: "Volunteers engaged", value: "15+", description: "Residents and youth participants on the ground." },
      { label: "Community Individuals Engaged", value: "10+", description: "Community awareness and sensitization of proper waste management." },
    ],
    quote: {
      text: "The day showed that sanitation is not only about cleaning a street; it is about building a shared standard for the community we want.",
      author: "Environmental partner",
      role: "Kwara State collaboration",
    },
    lessons: [
      "Community participation increases the speed and quality of sanitation outcomes.",
      "Visible data helps turn one-time action into a repeatable environmental habit.",
      "Awareness works best when it happens alongside practical field work.",
    ],
    captions: [
      "Volunteer briefing before deployment",
      "Street-level cleanup in progress",
      "Waste collection and segregation",
      "Partner coordination on site",
      "Community engagement and awareness",
      "Team photo after the cleanup",
      "Environmental messaging materials",
      "Post-cleanup reporting session",
      "Greener public space restored",
    ],
  },
  "2": {
    location: "Waste processing site, Ilorin, Kwara State",
    shortLabel: "Clean energy infrastructure installation",
    intro: [
      "The anaerobic digester installation is a strategic step toward converting organic waste into useful energy and fertilizer, while reducing the environmental burden of unmanaged waste.",
      "This project combines engineering, waste diversion, and circular-economy thinking to create a practical asset for households, partners, and the wider community.",
    ],
    objectives: [
      "Expand local waste-to-value infrastructure for organic waste streams.",
      "Generate biogas and fertilizer from materials that would otherwise be discarded.",
      "Create a scalable model for sustainable waste management in the region.",
    ],
    timeline: [
      { time: "Morning", title: "Site preparation", description: "The installation zone was inspected, cleaned, and prepared for equipment handling and assembly." },
      { time: "Midday", title: "Equipment placement", description: "Primary digester components were positioned and aligned to support safe, reliable operation." },
      { time: "Afternoon", title: "System integration", description: "Connection points, flow paths, and operational checks were reviewed with the technical team." },
      { time: "Launch readiness", title: "Commissioning plan", description: "Testing, documentation, and stakeholder updates were scheduled for the next operational phase." },
    ],
    metrics: [
      { label: "Processing capacity", value: "10 tons/day", description: "Designed organic waste throughput once fully operational." },
      { label: "Expected gas output", value: "500m³/day", description: "Projected renewable biogas generation from feedstock." },
      { label: "Households served", value: "2,000", description: "Energy access potential across local communities." },
      { label: "Waste diverted", value: "High impact", description: "Organic waste redirected from open dumping and decay." },
    ],
    quote: {
      text: "This installation turns a waste problem into a resource stream that can support energy access and local resilience.",
      author: "Project stakeholder",
      role: "Technical partner",
    },
    lessons: [
      "Infrastructure projects need both technical precision and stakeholder trust.",
      "Organic waste offers strong potential for energy recovery when collection is organized.",
      "Circular systems become more powerful when the outputs have a clear local use case.",
    ],
    captions: [
      "Digester site before installation",
      "Primary components on site",
      "Technical alignment and setup",
      "System floor and structural preparation",
      "Partner discussion around commissioning",
      "Equipment handling and safety checks",
      "Waste-to-energy facility overview",
      "Installation progress milestone",
      "Infrastructure ready for commissioning",
    ],
  },
  "3": {
    location: "Schools across Ilorin, Kwara State",
    shortLabel: "Environmental education tour",
    intro: [
      "The School Awareness Tour is built around one idea: environmental habits are easiest to change early, when young people can connect learning to daily life.",
      "Through interactive sessions, demonstrations, and student engagement activities, the program turns waste management into a practical civic lesson with long-term impact.",
    ],
    objectives: [
      "Introduce students to waste sorting, recycling, and responsible disposal.",
      "Inspire schools to model cleaner campuses and community responsibility.",
      "Create young environmental ambassadors who can influence behavior at home.",
    ],
    timeline: [
      { time: "Arrival", title: "School welcome", description: "Faculty, students, and facilitators gathered for introductions and program orientation." },
      { time: "Session 1", title: "Environmental talk", description: "The team explained waste sorting, pollution prevention, and how clean habits protect health." },
      { time: "Session 2", title: "Interactive activity", description: "Students participated in Q&A, demonstrations, and practical sorting exercises." },
      { time: "Close-out", title: "Take-home pledge", description: "Learners received key messages and agreed on small actions they can start immediately." },
    ],
    metrics: [
      { label: "Schools targeted", value: "10", description: "Planned coverage across Ilorin schools." },
      { label: "Student reach", value: "Hundreds", description: "Youth audience engaged through direct learning." },
      { label: "Workshops", value: "Interactive", description: "Hands-on sessions designed for retention." },
      { label: "Takeaways", value: "Actionable", description: "Simple habits students can repeat at home and school." },
    ],
    quote: {
      text: "When children understand why the environment matters, they begin to carry that message into their homes and neighborhoods.",
      author: "School partner",
      role: "Education collaborator",
    },
    lessons: [
      "Simple demonstrations make environmental concepts easy to remember.",
      "Students respond strongly to practical examples and visible local relevance.",
      "School programs create a multiplier effect beyond the classroom.",
    ],
    captions: [
      "School arrival and setup",
      "Student engagement session",
      "Environmental education briefing",
      "Interactive awareness discussion",
      "Group learning and participation",
      "Team photo with school hosts",
      "Hands-on waste sorting demo",
      "Student questions and answers",
      "Closing pledge with participants",
    ],
  },
  "4": {
    location: "Ilorin urban corridor, Kwara State",
    shortLabel: "Urban greening initiative",
    intro: [
      "Urban Tree Planting is a visible, long-term investment in cleaner air, cooler streets, and more resilient neighborhoods.",
      "The activity combines community participation and environmental restoration to create spaces that feel healthier and more hopeful for residents.",
    ],
    objectives: [
      "Increase tree cover in key urban areas across Ilorin.",
      "Support shade, biodiversity, and climate resilience in public spaces.",
      "Mobilize residents around stewardship of newly planted trees.",
    ],
    timeline: [
      { time: "Planning", title: "Tree placement review", description: "The team identified planting sites with the best mix of visibility, care potential, and climate benefit." },
      { time: "Deployment", title: "Community planting", description: "Volunteers and partners worked together to place and protect saplings." },
      { time: "Care plan", title: "Aftercare guidance", description: "Watering, monitoring, and maintenance responsibilities were discussed with local stakeholders." },
      { time: "Follow-up", title: "Growth tracking", description: "The team prepared a simple structure to monitor survival rates and future expansion." },
    ],
    metrics: [
      { label: "Trees targeted", value: "200", description: "Planned urban tree planting target for the initiative." },
      { label: "Micro-climate benefit", value: "Long term", description: "Improved shade and local cooling over time." },
      { label: "Community reach", value: "Broad", description: "Residents and passersby benefit from greener streets." },
      { label: "Stewardship", value: "Shared", description: "Aftercare relies on local ownership and care." },
    ],
    quote: {
      text: "Planting trees is one of the simplest ways to build a city that feels more livable over time.",
      author: "Community lead",
      role: "Urban greening partner",
    },
    lessons: [
      "Urban greening succeeds when planting is matched with care and monitoring.",
      "A tree planting effort becomes more durable when the neighborhood feels ownership.",
      "Green infrastructure delivers both environmental and emotional value to communities.",
    ],
    captions: [
      "Site review for planting",
      "Team preparing saplings",
      "Community tree planting moment",
      "Protecting new growth",
      "Volunteer support on site",
      "Greener streets ahead",
      "Saplings and care materials",
      "Environmental stewardship message",
      "Project close-out and appreciation",
    ],
  },
};

function setPageMeta(title: string, description: string, imageUrl: string) {
  document.title = title;

  const metaTags = [
    { selector: 'meta[name="description"]', attributes: { name: "description", content: description } },
    { selector: 'meta[property="og:title"]', attributes: { property: "og:title", content: title } },
    { selector: 'meta[property="og:description"]', attributes: { property: "og:description", content: description } },
    { selector: 'meta[property="og:type"]', attributes: { property: "og:type", content: "article" } },
    { selector: 'meta[property="og:image"]', attributes: { property: "og:image", content: imageUrl } },
    { selector: 'meta[name="twitter:card"]', attributes: { name: "twitter:card", content: "summary_large_image" } },
    { selector: 'meta[name="twitter:title"]', attributes: { name: "twitter:title", content: title } },
    { selector: 'meta[name="twitter:description"]', attributes: { name: "twitter:description", content: description } },
    { selector: 'meta[name="twitter:image"]', attributes: { name: "twitter:image", content: imageUrl } },
  ];

  metaTags.forEach(({ selector, attributes }) => {
    const metaElement = document.querySelector(selector) as HTMLMetaElement | null;

    if (metaElement) {
      Object.entries(attributes).forEach(([key, value]) => metaElement.setAttribute(key, value));
      return;
    }

    const createdMetaElement = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => createdMetaElement.setAttribute(key, value));
    document.head.appendChild(createdMetaElement);
  });
}

function RevealSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function ActivityDetail() {
  const [match, params] = useRoute("/activities/:id");

  const activity = useMemo(() => {
    if (!match || !params?.id) {
      return undefined;
    }

    return activitiesData.find((item) => item.id === params.id);
  }, [match, params?.id]);

  const detailCopy = activity ? activityDetailCopy[activity.id] : undefined;

  const galleryImages = useMemo(() => {
    if (!activity) {
      return [];
    }

    const activityImages = [
      activity.image,
      ...activity.gallery,
    ];

    return Array.from(new Set(activityImages));
  }, [activity]);

  useEffect(() => {
    if (!activity || !detailCopy) {
      setPageMeta("Wasture Solutions | Activity", "Explore Wasture Solutions activity highlights, community impact, and sustainability projects.", `${window.location.origin}/images/wasture-logo.png`);
      return;
    }

    const description = `${activity.title} | ${detailCopy.shortLabel} in ${detailCopy.location}. Read the objectives, results, gallery, and community impact from Wasture Solutions.`;
    const absoluteImageUrl = new URL(activity.image, window.location.origin).toString();

    setPageMeta(`${activity.title} | Wasture Solutions`, description, absoluteImageUrl);
  }, [activity, detailCopy]);

  if (!match || !activity || !detailCopy) {
    return (
      <div className="min-h-screen bg-[#F8F7F2] text-foreground flex items-center justify-center px-4">
        <Card className="w-full max-w-lg border-border/60 shadow-sm">
          <CardContent className="p-8 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Activity not found</p>
            <h1 className="text-3xl font-bold text-foreground">This activity page does not exist yet.</h1>
            <p className="text-muted-foreground leading-relaxed">
              The requested activity could not be matched to a published item.
            </p>
            <Button asChild className="mt-2">
              <Link href="/">Return home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f1f7e8_0%,#f8f7f2_17%,#f8f7f2_100%)] text-foreground">
      <div className="sticky top-0 z-50 border-b border-white/50 bg-[#f8f7f2]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="group h-11 gap-2 rounded-full border border-primary/15 bg-white/80 px-4 text-primary shadow-sm hover:border-primary/30 hover:text-primary">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to Activities
            </Link>
          </Button>
        </div>
      </div>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img src={activity.image} alt={activity.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,18,0.18)_0%,rgba(8,34,18,0.48)_55%,rgba(8,34,18,0.72)_100%)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto flex min-h-[74vh] max-w-7xl items-end px-4 py-16 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl pb-4 text-white">
              <div className="mb-6 flex flex-wrap gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md ring-1 ring-white/20">
                  <CalendarDays className="h-4 w-4" />
                  {formatActivityDate(activity.date)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md ring-1 ring-white/20">
                  <MapPin className="h-4 w-4" />
                  {detailCopy.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md ring-1 ring-white/20">
                  <Sparkles className="h-4 w-4" />
                  {detailCopy.shortLabel}
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {activity.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {activity.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-white/12 px-4 py-3 text-left backdrop-blur-md ring-1 ring-white/15">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Primary focus</p>
                  <p className="mt-1 font-semibold">Community sustainability</p>
                </div>
                <div className="rounded-2xl bg-white/12 px-4 py-3 text-left backdrop-blur-md ring-1 ring-white/15">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Format</p>
                  <p className="mt-1 font-semibold">Field activity and storytelling</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <RevealSection className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
            <article className="rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="prose prose-green max-w-none prose-headings:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-p:leading-8 prose-p:text-muted-foreground">
                <h2>Introduction</h2>
                {detailCopy.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h2>What We Set Out To Do</h2>
                <ul className="space-y-3 pl-5">
                  {detailCopy.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <Card className="overflow-hidden border-border/60 bg-[linear-gradient(180deg,#ffffff_0%,#f3faea_100%)] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Target className="h-5 w-5" />
                    <h2 className="text-xl font-semibold text-foreground">Objectives at a glance</h2>
                  </div>
                  <div className="mt-5 space-y-4">
                    {detailCopy.objectives.map((objective) => (
                      <div key={objective} className="flex gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm leading-6 text-muted-foreground">{objective}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Leaf className="h-5 w-5" />
                    <h2 className="text-xl font-semibold text-foreground">Key outcome</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Each activity is designed to move beyond awareness into measurable environmental and community impact.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </RevealSection>

          <RevealSection className="mt-8 rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 text-primary">
              <Clock3 className="h-5 w-5" />
              <h2 className="text-2xl font-semibold text-foreground">What We Did</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {detailCopy.timeline.map((step, index) => (
                <div key={step.title} className="group rounded-3xl border border-primary/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf0_100%)] p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{step.time}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-primary">
                  <Leaf className="h-5 w-5" />
                  <h2 className="text-2xl font-semibold text-foreground">Impact & Results</h2>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  The results below capture the visible scale of the work and the community response that made it possible.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {detailCopy.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-primary/10 bg-[linear-gradient(180deg,#f8fcf2_0%,#ffffff_100%)] p-5">
                      <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-primary">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-[linear-gradient(180deg,#f6fbef_0%,#ffffff_100%)] shadow-sm">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-primary">
                  <Users className="h-5 w-5" />
                  <h2 className="text-2xl font-semibold text-foreground">Community / Partner Quote</h2>
                </div>
                <div className="mt-6 rounded-3xl border border-primary/10 bg-white p-6">
                  <Quote className="h-8 w-8 text-primary/40" />
                  <p className="mt-4 text-lg leading-8 text-foreground">{detailCopy.quote.text}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{detailCopy.quote.author}</p>
                    <p className="text-sm text-muted-foreground">{detailCopy.quote.role}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-primary/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Lessons learned</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    {detailCopy.lessons.map((lesson) => (
                      <li key={lesson} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection className="mt-8 rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 text-primary">
                  <Camera className="h-5 w-5" />
                  <h2 className="text-2xl font-semibold text-foreground">Gallery</h2>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                  A visual recap of the activity, the people who made it possible, and the atmosphere on the ground.
                </p>
              </div>
              <p className="text-sm font-medium text-primary">{galleryImages.length} images</p>
            </div>

            <div className="mt-8 columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
              {galleryImages.map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="group relative overflow-hidden break-inside-avoid rounded-3xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={`${activity.title} gallery ${index + 1}`}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {detailCopy.captions[index] ?? "Activity moment"}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-border/60 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbef_100%)] shadow-sm">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {activity.fullContent?.split("\n\n")[0] ?? "This initiative reflects Wasture Solutions' commitment to practical sustainability, stronger communities, and measurable environmental progress."}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {detailCopy.lessons[0]} The broader goal is to create a repeatable model that combines service delivery, education, and stewardship.
                </p>
              </CardContent>
            </Card>

            <div className={cn("grid gap-4 sm:grid-cols-2")}>
              <div className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Date</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{formatActivityDate(activity.date)}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">Published as part of the Wasture Solutions activity archive.</p>
              </div>
              <div className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Location</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{detailCopy.location}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">A community-focused project grounded in local impact.</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </main>
    </div>
  );
}