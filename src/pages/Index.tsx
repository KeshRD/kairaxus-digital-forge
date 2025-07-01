
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Brain, Shield, Zap, Mail, MapPin, Phone, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xqabzvwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-sea-green-400 to-sea-green-600 bg-clip-text text-transparent">
              KAIRAXUS
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-sea-green-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-sea-green-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-sea-green-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-sea-green-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-sea-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#services" className="hover:text-sea-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#projects" className="hover:text-sea-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className="hover:text-sea-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Innovating the Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Building cutting-edge mobile applications and AI models that transform industries and enhance lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sea-green-600 hover:bg-sea-green-700 text-white">
                View Our Work
              </Button>
              <Button size="lg" variant="outline" className="border-sea-green-600 text-sea-green-600 hover:bg-sea-green-600 hover:text-white">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We specialize in creating innovative solutions that drive business growth and technological advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 hover:border-sea-green-600 transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-sea-green-400 mb-4" />
                <CardTitle className="text-white">Mobile App Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Native and cross-platform mobile applications with cutting-edge features and seamless user experiences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-sea-green-600 transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <Brain className="w-12 h-12 text-sea-green-400 mb-4" />
                <CardTitle className="text-white">AI Model Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Custom artificial intelligence solutions, machine learning models, and intelligent automation systems
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-sea-green-600 transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <Shield className="w-12 h-12 text-sea-green-400 mb-4" />
                <CardTitle className="text-white">IoT Solutions</CardTitle>
                <CardDescription className="text-gray-400">
                  Internet of Things applications for monitoring, automation, and smart system integration
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our latest innovations and successful implementations
            </p>
          </div>

          <div className="space-y-12">
            {/* Built Apps */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-sea-green-400">Built Applications</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-900 border-gray-700 hover:border-sea-green-600 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-white text-xl">Ceylon Riya</CardTitle>
                      <Badge className="bg-sea-green-600 text-white">Live</Badge>
                    </div>
                    <CardDescription className="text-gray-300 text-base">
                      A comprehensive vehicle health monitoring and safety application with automated fine management system. 
                      Features real-time diagnostics, safety alerts, and integrated penalty tracking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">IoT</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Mobile</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Safety</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Monitoring</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Current Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-sea-green-400">Currently Building</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-900 border-gray-700 hover:border-sea-green-600 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-white text-xl">Pregma AI</CardTitle>
                      <Badge className="bg-yellow-600 text-white">In Development</Badge>
                    </div>
                    <CardDescription className="text-gray-300 text-base">
                      Advanced AI-powered pregnancy monitoring and health management system with personalized recommendations 
                      and real-time health tracking capabilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">AI/ML</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Healthcare</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Mobile</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700 hover:border-sea-green-600 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-white text-xl">Sitha Nivana</CardTitle>
                      <Badge className="bg-yellow-600 text-white">In Development</Badge>
                    </div>
                    <CardDescription className="text-gray-300 text-base">
                      Innovative mindfulness and mental wellness application combining traditional meditation practices 
                      with modern AI-driven personalization and progress tracking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Wellness</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">AI</Badge>
                      <Badge variant="outline" className="border-sea-green-600 text-sea-green-400">Mobile</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-sea-green-600"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-sea-green-600"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-sea-green-600"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-sea-green-600 hover:bg-sea-green-700 text-white"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-sea-green-400" />
                    <span className="text-gray-300">alphadew321@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-sea-green-400" />
                    <span className="text-gray-300">+94 76 903 3466</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-sea-green-400" />
                    <span className="text-gray-300">Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-gray-700 hover:border-sea-green-600 hover:bg-sea-green-600"
                    onClick={() => window.open('https://github.com/KeshRD', '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-gray-700 hover:border-sea-green-600 hover:bg-sea-green-600"
                    onClick={() => window.open('https://www.linkedin.com/in/keshana-roshaka-dewranga-9440b4310', '_blank')}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700 hover:border-sea-green-600 hover:bg-sea-green-600">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-sea-green-400 to-sea-green-600 bg-clip-text text-transparent">
            KAIRAXUS
          </div>
          <p className="text-gray-400 mb-4">
            Innovating the future through intelligent technology solutions
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 KAIRAXUS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
