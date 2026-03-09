import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowRight, 
  Search, 
  Settings, 
  CheckCircle, 
  Truck, 
  Package, 
  Wrench,
  Construction,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";
import forkliftImg from "@/assets/images/forklift.jpg";
import trailerImg from "@/assets/images/trailer.jpg";
import containerImg from "@/assets/images/container.jpg";
import constructionImg from "@/assets/images/construction.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="/fleetbridge-logo.png" alt="FleetBridge" className="h-12" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <a href="#how-it-works" className="hover:text-secondary transition-colors">How it Works</a>
            <a href="#categories" className="hover:text-secondary transition-colors">Categories</a>
            <a href="#featured" className="hover:text-secondary transition-colors">Featured Equipment</a>
            <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary/5">
              Log In
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              Post Equipment
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative relative h-[600px] flex items-center justify-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroBg})`,
            }}
          />
          <div className="absolute inset-0 z-10 bg-gray-900/70" /> {/* Dark overlay for readability */}
          
          <div className="container relative z-20 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              Industrial Equipment Exchange
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
              Connecting buyers and sellers of forklifts, trailers, and industrial equipment through a streamlined marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14">
                Browse Equipment
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-bold text-lg px-8 h-14 backdrop-blur-sm">
                Sell Equipment
              </Button>
            </div>
          </div>
        </section>

        {/* 2. HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How FleetBridge Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Our streamlined process makes buying and selling industrial equipment simple and secure.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0" />
              
              {[
                {
                  icon: <Settings className="w-8 h-8 text-primary" />,
                  title: "1. Submit or Request",
                  desc: "Submit your equipment for sale or tell us what machinery your business needs."
                },
                {
                  icon: <Search className="w-8 h-8 text-primary" />,
                  title: "2. We Match You",
                  desc: "FleetBridge leverages our network to connect verified buyers with active sellers."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary" />,
                  title: "3. Complete Transaction",
                  desc: "We coordinate inspection, logistics, and ensure a smooth transaction process."
                }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted border-4 border-white shadow-sm flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EQUIPMENT CATEGORIES */}
        <section id="categories" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Equipment Categories</h2>
                <p className="text-muted-foreground text-lg">Browse our most popular industrial machinery types.</p>
              </div>
              <Button variant="ghost" className="hidden sm:flex text-primary hover:text-primary hover:bg-primary/5">
                View All Categories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Forklifts", icon: <Truck className="w-10 h-10 mb-4 text-secondary" /> },
                { name: "Trailers", icon: <Truck className="w-10 h-10 mb-4 text-secondary" /> },
                { name: "Shipping Containers", icon: <Package className="w-10 h-10 mb-4 text-secondary" /> },
                { name: "Warehouse Equip.", icon: <Settings className="w-10 h-10 mb-4 text-secondary" /> },
                { name: "Construction", icon: <Construction className="w-10 h-10 mb-4 text-secondary" /> },
              ].map((cat, i) => (
                <Card key={i} className="hover:-translate-y-1 transition-transform cursor-pointer border-none shadow-sm hover:shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                    {cat.icon}
                    <h3 className="font-semibold text-foreground">{cat.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED EQUIPMENT */}
        <section id="featured" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Equipment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Recently listed, high-quality machinery available right now.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Toyota Electric Forklift", 
                  loc: "Frankfort, KY", 
                  price: "$3,950",
                  img: forkliftImg
                },
                { 
                  title: "48' Dry Van Trailer", 
                  loc: "Louisville, KY", 
                  price: "$6,500",
                  img: trailerImg
                },
                { 
                  title: "20' Shipping Container", 
                  loc: "Lexington, KY", 
                  price: "$2,200",
                  img: containerImg
                }
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-border shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded font-bold text-primary text-sm shadow-sm">
                      Verified
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.loc}</span>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FORMS SECTION (Sell / Request) */}
        <section className="py-24 bg-foreground text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* 5. SELL EQUIPMENT */}
              <div className="bg-gray-800 p-8 md:p-10 rounded-xl border border-gray-700">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Sell Your Equipment</h2>
                  <p className="text-gray-400">FleetBridge helps businesses move equipment faster by connecting them with active buyers.</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sell-name" className="text-gray-300">Name</Label>
                      <Input id="sell-name" className="bg-gray-900 border-gray-700 text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sell-phone" className="text-gray-300">Phone</Label>
                      <Input id="sell-phone" className="bg-gray-900 border-gray-700 text-white" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sell-email" className="text-gray-300">Email</Label>
                    <Input id="sell-email" type="email" className="bg-gray-900 border-gray-700 text-white" placeholder="john@example.com" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sell-type" className="text-gray-300">Equipment Type</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="forklift">Forklift</SelectItem>
                          <SelectItem value="trailer">Trailer</SelectItem>
                          <SelectItem value="container">Container</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sell-loc" className="text-gray-300">Location</Label>
                      <Input id="sell-loc" className="bg-gray-900 border-gray-700 text-white" placeholder="City, State" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sell-desc" className="text-gray-300">Description</Label>
                    <Textarea id="sell-desc" className="bg-gray-900 border-gray-700 text-white min-h-[100px]" placeholder="Briefly describe condition, year, make, etc." />
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg">
                    Submit Equipment
                  </Button>
                </form>
              </div>

              {/* 6. REQUEST EQUIPMENT */}
              <div className="bg-gray-800 p-8 md:p-10 rounded-xl border border-gray-700">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Looking for Equipment?</h2>
                  <p className="text-gray-400">Tell us what you need, and we'll source it from our extensive network of sellers.</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="req-name" className="text-gray-300">Name</Label>
                      <Input id="req-name" className="bg-gray-900 border-gray-700 text-white" placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="req-company" className="text-gray-300">Company</Label>
                      <Input id="req-company" className="bg-gray-900 border-gray-700 text-white" placeholder="Logistics Inc." />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="req-email" className="text-gray-300">Email</Label>
                    <Input id="req-email" type="email" className="bg-gray-900 border-gray-700 text-white" placeholder="jane@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="req-needed" className="text-gray-300">Equipment Needed</Label>
                    <Input id="req-needed" className="bg-gray-900 border-gray-700 text-white" placeholder="e.g. 5000lb Propane Forklift" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="req-budget" className="text-gray-300">Budget Range</Label>
                      <Input id="req-budget" className="bg-gray-900 border-gray-700 text-white" placeholder="$5k - $10k" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="req-loc" className="text-gray-300">Delivery Location</Label>
                      <Input id="req-loc" className="bg-gray-900 border-gray-700 text-white" placeholder="Zip Code or City" />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg mt-8">
                    Submit Request
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* 7. ABOUT & 8. CONTACT */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About FleetBridge</h2>
                <div className="w-20 h-1 bg-secondary mb-8"></div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  FleetBridge is an industrial equipment exchange platform that connects buyers and sellers of forklifts, trailers, and industrial machinery through a streamlined brokerage network.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We understand that moving heavy machinery can be complex. Our goal is to simplify the process, providing transparency, verified listings, and dedicated support from listing to delivery.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-muted-foreground">contact@fleetbridge.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-muted-foreground">1-800-FLEET-BR</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white" />
                  <Input type="email" placeholder="Email Address" className="bg-white" />
                  <Textarea placeholder="How can we help you?" className="bg-white min-h-[120px]" />
                  <Button className="bg-primary text-white w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 9. FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="mb-4">
                <img src="/fleetbridge-logo.png" alt="FleetBridge" className="h-10" />
              </div>
              <p className="max-w-md text-gray-400 mb-6">
                The premier industrial equipment exchange platform connecting verified buyers and sellers nationwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#featured" className="hover:text-white transition-colors">Browse Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Equipment</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} FleetBridge Equipment Exchange. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-white">in</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-white">fb</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-white">tw</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
