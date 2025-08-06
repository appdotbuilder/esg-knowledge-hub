import React from 'react';
import { Link, Head, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  FileText, 
  Globe, 
  TrendingUp, 
  ArrowRight, 
  Search,
  Calendar,
  Eye,
  Target,
  Shield,
  Zap
} from 'lucide-react';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  type: string;
  published_at: string;
  views_count: number;
  featured_image?: string;
  category: {
    name: string;
    color: string;
  };
  author: {
    name: string;
  };
}

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  type: string;
  status: string;
  featured_image?: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  articles_count: number;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar?: string;
}

interface Props {
  featuredArticles: Article[];
  featuredProjects: Project[];
  categories: Category[];
  leadership: TeamMember[];
  latestNews: Article[];
  regulatoryUpdates: Article[];
  [key: string]: unknown;
}

export default function Welcome({ 
  featuredArticles, 
  categories
}: Props) {
  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    router.post('/newsletter', {
      email: formData.get('email'),
    }, {
      preserveState: true,
      onSuccess: () => {
        (e.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <>
      <Head title="ESG Knowledge Hub - Professional ESG Solutions & Insights" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">ESG Knowledge Hub</span>
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link 
                  href="/knowledge-hub" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Knowledge Hub
                </Link>
                <Link 
                  href="/solution/greengovern-gpt" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  GreengovernGPT
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/projects" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🌱 Transform Your ESG Strategy
              <br />
              <span className="text-blue-600">with Expert Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access comprehensive ESG research, whitepapers, regulatory updates, and industry insights. 
              Navigate the complex world of Environmental, Social, and Governance with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link href="/knowledge-hub">
                <Button size="lg" className="text-lg px-8 py-3">
                  Explore Knowledge Hub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/solution/greengovern-gpt">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Try GreengovernGPT
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search research, whitepapers, and insights..." 
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Your Complete ESG Intelligence Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay ahead in the evolving ESG landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Research Library</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access thousands of industry-specific ESG research papers, case studies, and best practices 
                  from leading organizations and experts.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Regulatory Updates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay compliant with real-time regulatory changes, policy updates, and emerging 
                  compliance requirements across global markets.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Industry Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sector-specific analysis and benchmarking data to help you understand 
                  industry trends and competitive positioning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📚 Explore by Topic
            </h2>
            <p className="text-lg text-gray-600">
              Dive deep into specific ESG areas that matter to your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/knowledge-hub?category=${category.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4" 
                      style={{ borderLeftColor: category.color }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </CardTitle>
                      <Badge variant="secondary">
                        {category.articles_count} articles
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ⭐ Featured Content
              </h2>
              <p className="text-lg text-gray-600">
                Latest insights and research from our expert contributors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 6).map((article) => (
                <Link
                  key={article.id}
                  href={`/knowledge-hub/articles/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    {article.featured_image && (
                      <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                        <img 
                          src={article.featured_image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant="outline" 
                          style={{ borderColor: article.category.color, color: article.category.color }}
                        >
                          {article.category.name}
                        </Badge>
                        <Badge variant="secondary" className="capitalize">
                          {article.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.published_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views_count}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/knowledge-hub">
                <Button size="lg" variant="outline">
                  View All Content
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* GreengovernGPT Solution */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🤖 Introducing GreengovernGPT
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI-powered ESG intelligence assistant that provides instant insights, 
              compliance guidance, and strategic recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Analysis</h3>
                    <p className="text-gray-600">
                      Get real-time ESG risk assessments and compliance recommendations 
                      powered by advanced AI algorithms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Insights</h3>
                    <p className="text-gray-600">
                      Anticipate regulatory changes and market trends with our 
                      predictive analytics and scenario modeling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Reporting</h3>
                    <p className="text-gray-600">
                      Generate comprehensive ESG reports and disclosures with 
                      automated data collection and analysis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/solution/greengovern-gpt">
                  <Button size="lg" className="text-lg px-8 py-3">
                    Learn More About GreengovernGPT
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400">GreengovernGPT Terminal</span>
                </div>
                <div className="space-y-2">
                  <div>$ analyze-esg-risk --company="TechCorp" --sector="technology"</div>
                  <div className="text-blue-400">📊 Processing ESG data...</div>
                  <div className="text-yellow-400">⚡ Risk Score: 7.2/10 (Medium-High)</div>
                  <div className="text-green-400">✅ Compliance Status: 94% compliant</div>
                  <div className="text-white">📋 Recommendations generated</div>
                  <div className="animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            📧 Stay Ahead of ESG Trends
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly insights, regulatory updates, and exclusive research delivered to your inbox
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 py-3 text-lg"
              />
              <Button type="submit" variant="secondary" size="lg" className="px-8 py-3">
                Subscribe
              </Button>
            </div>
          </form>
          
          <p className="text-blue-100 text-sm mt-4">
            Join 50,000+ ESG professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">ESG Knowledge Hub</span>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Your trusted partner for comprehensive ESG intelligence, 
                research, and strategic guidance in the evolving sustainability landscape.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">YouTube</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
                <li><Link href="/knowledge-hub?type=whitepaper" className="hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="/knowledge-hub?type=research" className="hover:text-white transition-colors">Research</Link></li>
                <li><Link href="/knowledge-hub?type=regulatory" className="hover:text-white transition-colors">Regulatory Updates</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about/company" className="hover:text-white transition-colors">Our Company</Link></li>
                <li><Link href="/about/people" className="hover:text-white transition-colors">Our People</Link></li>
                <li><Link href="/about/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ESG Knowledge Hub. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}