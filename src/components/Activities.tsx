import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const initialActivities = [
  {
    id: "1",
    title: "Environmental Clean-up Drive",
    description: "Environmental Sanitation exercise and awareness in collaboration with Kwara Ministry of Environment and Youth Climate Movement. Held at Tanke, Ilorin, Kwara State.",
    date: "2026-04-25",
    image: "/images/First.jpg",
  },
  {
    id: "2",
    title: "Installation of Anaerobic Digester",
    description: "Upcoming: Installation of our advanced anaerobic digester.",
    date: "2026-05-15",
    image: "/images/bioplant.jpg",
  },
  {
    id: "3",
    title: "School Awareness Tour",
    description: "Upcoming: School Awareness Tour on environmental stewardship.",
    date: "2026-05-30",
    image: "/images/activity-3.png",
  },
  {
    id: "4",
    title: "Urban Tree Planting",
    description: "Upcoming: Urban Tree Planting for a greener community. Within Ilorin.",
    date: "2026-06-25",
    image: "/images/activity-4.png",
  }
];

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  date: z.string().min(1, "Date is required"),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export function Activities() {
  const [activities, setActivities] = useState(initialActivities);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      imageUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newActivity = {
      id: Date.now().toString(),
      title: values.title,
      description: values.description,
      date: values.date,
      // Fallback to a gallery image if none provided
      image: values.imageUrl || "/images/gallery-5.png",
    };
    
    setActivities([newActivity, ...activities]);
    setOpen(false);
    form.reset();
    
    toast({
      title: "Activity added successfully",
      description: "The new activity has been published to the board.",
    });
  }

  return (
    <section id="activities" className="py-24 bg-background" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Impact in Action</h2>
            <p className="text-3xl md:text-4xl font-bold text-foreground">
              Recent Projects & Activities
            </p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2" data-testid="btn-add-activity">
                <Plus size={16} /> Add Activity
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Activity</DialogTitle>
                <DialogDescription>
                  Publish a new project or event to the public activities board.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Lagos City Clean-up" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief description of the impact and outcome..." 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end pt-4">
                    <Button type="submit" data-testid="btn-submit-activity">Publish Activity</Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden group border-border/50 hover:border-primary/30 transition-colors bg-card">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                    <Calendar size={12} />
                    {format(new Date(activity.date), "MMM d, yyyy")}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-foreground line-clamp-1">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {activity.description}
                  </p>
                  <Button variant="link" className="px-0 h-auto text-primary hover:text-primary/80 font-semibold group-hover:underline">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
