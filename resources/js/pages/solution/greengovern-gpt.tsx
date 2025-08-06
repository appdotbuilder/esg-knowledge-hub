import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Database,
  Clock,
  Target,
  Award
} from 'lucide-react';

export default function GreengovernGPT() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze vast amounts of ESG data to provide actionable insights.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: BarChart3,
      title: 'Real-time Reporting',
      description: 'Generate comprehensive ESG reports with up-to-date data and automated compliance checks.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Identify potential ESG risks before they impact your business with predictive analytics.',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Support for all major ESG frameworks including TCFD, SASB, GRI, and emerging regulations.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor ESG KPIs and track progress towards sustainability goals with interactive dashboards.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect with existing systems and data sources for comprehensive analysis.',
      color: 'bg-teal-50 border-teal-200'
    }
  ];

  const benefits = [
    'Reduce reporting time by up to 75%',
    'Improve data accuracy and consistency',
    'Stay ahead of regulatory changes',
    'Identify cost-saving opportunities',
    'Enhance stakeholder communication',
    'Benchmark against industry peers'
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Climate risk assessment, regulatory reporting, and portfolio analysis',
      metrics: '40% faster compliance reporting'
    },
    {
      title: 'Manufacturing',
      description: 'Supply chain monitoring, emissions tracking, and operational efficiency',
      metrics: '25% reduction in ESG risks'
    },
    {
      title: 'Technology',
      description: 'Data governance, energy management, and social impact measurement',
      metrics: '60% improvement in ESG scores'
    }
  ];

  return (
    <>
      <Head title="GreengovernGPT - AI-Powered ESG Intelligence Platform" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI-Powered ESG Intelligence
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                🤖 GreengovernGPT
                <br />
                <span className="text-green-200">The Future of ESG Management</span>
              </h1>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Transform your ESG strategy with our advanced AI platform. Get instant insights, 
                automate compliance, and stay ahead of regulatory changes with intelligent 
                recommendations powered by machine learning.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo Terminal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
          <Card className="shadow-2xl bg-gray-900 border-gray-700">
            <CardHeader className="bg-gray-800 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 font-mono text-sm">GreengovernGPT Terminal</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 font-mono text-sm bg-gray-900 text-green-400">
              <div className="space-y-3">
                <div>$ greengovern analyze --company="TechCorp Inc" --framework=tcfd</div>
                <div className="text-blue-400">🔍 Analyzing ESG data across 15 data sources...</div>
                <div className="text-yellow-400">📊 Processing 2.3M data points with AI models...</div>
                <div className="text-green-400">✅ Analysis complete! Generated 47 insights</div>
                <div className="text-white pl-4">
                  <div>📈 ESG Score: 8.2/10 (+0.7 from last quarter)</div>
                  <div>⚠️  Climate Risk: Medium-High (Sea level rise exposure)</div>
                  <div>✨ Recommendations: 12 actionable items identified</div>
                  <div>📋 Compliance: 94% TCFD compliant (6 gaps identified)</div>
                </div>
                <div className="text-blue-400">$ greengovern generate-report --format=interactive</div>
                <div className="text-green-400">📄 Interactive ESG report generated in 23 seconds</div>
                <div className="animate-pulse text-white">_</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Key Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Powerful Features for ESG Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your ESG strategy and stay ahead of the curve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`border-2 hover:shadow-lg transition-all ${feature.color}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <feature.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🚀 Transform Your ESG Operations
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join leading organizations that have revolutionized their ESG processes 
                  with GreengovernGPT's intelligent automation and insights.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" className="text-lg px-8 py-3">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold">Time Savings</h3>
                    </div>
                    <p className="text-gray-600 text-base">
                      Reduce manual reporting time from weeks to hours with automated 
                      data collection and AI-generated insights.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Target className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold">Accuracy Improvement</h3>
                    </div>
                    <p className="text-gray-600 text-base">
                      Eliminate human errors and ensure consistent, reliable ESG data 
                      across all reporting frameworks.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="h-6 w-6 text-purple-600" />
                      <h3 className="text-lg font-semibold">Compliance Confidence</h3>
                    </div>
                    <p className="text-gray-600 text-base">
                      Stay ahead of regulatory changes with real-time compliance 
                      monitoring and automated gap analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Industry Use Cases */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🏢 Trusted Across Industries
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how organizations in different sectors leverage GreengovernGPT 
                to achieve their ESG goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-4">
                      {useCase.description}
                    </CardDescription>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {useCase.metrics}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🌟 Ready to Experience the Future of ESG?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of organizations already using GreengovernGPT to transform 
              their ESG strategy. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start 30-Day Free Trial
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              No credit card required • Full access to all features • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}