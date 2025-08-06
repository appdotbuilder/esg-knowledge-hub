import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  Eye, 
  BookOpen,
  FileText,
  Newspaper,
  Scale
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

interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  articles_count: number;
}

interface PaginatedArticles {
  data: Article[];
  links: Array<{ url?: string; label: string; active: boolean }>;
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

interface Props {
  articles: PaginatedArticles;
  categories: Category[];
  industries: string[];
  filters: {
    type?: string;
    category?: string;
    industry?: string;
    search?: string;
  };
  [key: string]: unknown;
}

export default function KnowledgeHubIndex({ 
  articles, 
  categories, 
  industries, 
  filters 
}: Props) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchTerm = formData.get('search') as string;
    
    router.get('/knowledge-hub', { 
      ...filters, 
      search: searchTerm 
    }, {
      preserveState: true
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'research': return <BookOpen className="h-4 w-4" />;
      case 'whitepaper': return <FileText className="h-4 w-4" />;
      case 'news': return <Newspaper className="h-4 w-4" />;
      case 'regulatory': return <Scale className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'whitepaper': return 'bg-green-100 text-green-800 border-green-200';
      case 'news': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'regulatory': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      <Head title="ESG Knowledge Hub - Research, Insights & Analysis" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                📚 ESG Knowledge Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive library of ESG research, whitepapers, regulatory updates, 
                and industry insights from leading experts and organizations.
              </p>
            </div>
            
            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  name="search"
                  type="text" 
                  placeholder="Search articles, whitepapers, and research..." 
                  defaultValue={filters.search || ''}
                  className="pl-12 pr-4 py-3 text-lg"
                />
                <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </form>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 py-2">Filter by type:</span>
                {['research', 'whitepaper', 'news', 'regulatory'].map((type) => (
                  <Link
                    key={type}
                    href={`/knowledge-hub?type=${type}`}
                    className="group"
                  >
                    <Badge 
                      variant={filters.type === type ? "default" : "outline"}
                      className={`capitalize flex items-center space-x-1 ${
                        filters.type === type ? '' : 'hover:bg-gray-100'
                      }`}
                    >
                      {getTypeIcon(type)}
                      <span>{type}</span>
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/knowledge-hub?category=${category.slug}`}
                        className={`block p-3 rounded-lg border transition-colors ${
                          filters.category === category.slug 
                            ? 'bg-blue-50 border-blue-200' 
                            : 'hover:bg-gray-50'
                        }`}
                        style={{ 
                          borderLeftWidth: '4px', 
                          borderLeftColor: category.color 
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.articles_count}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
                
                {/* Industries */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industries</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry}
                        href={`/knowledge-hub?industry=${industry}`}
                        className={`block p-2 rounded transition-colors capitalize ${
                          filters.industry === industry 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {industry.replace('-', ' ')}
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Info */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {articles.data.length} of {articles.meta.total} articles
                </p>
                
                {/* Clear Filters */}
                {(filters.type || filters.category || filters.industry || filters.search) && (
                  <Link href="/knowledge-hub">
                    <Button variant="outline" size="sm">
                      Clear Filters
                    </Button>
                  </Link>
                )}
              </div>
              
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {articles.data.map((article) => (
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
                            style={{ 
                              borderColor: article.category.color, 
                              color: article.category.color 
                            }}
                          >
                            {article.category.name}
                          </Badge>
                          <Badge 
                            className={`capitalize flex items-center space-x-1 ${getTypeColor(article.type)}`}
                          >
                            {getTypeIcon(article.type)}
                            <span>{article.type}</span>
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
              
              {/* Pagination */}
              {articles.meta.last_page > 1 && (
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {articles.meta.current_page > 1 && (
                      <Link 
                        href={`/knowledge-hub?page=${articles.meta.current_page - 1}`}
                        data={{ ...filters }}
                      >
                        <Button variant="outline">Previous</Button>
                      </Link>
                    )}
                    
                    <span className="px-4 py-2 text-sm text-gray-600">
                      Page {articles.meta.current_page} of {articles.meta.last_page}
                    </span>
                    
                    {articles.meta.current_page < articles.meta.last_page && (
                      <Link 
                        href={`/knowledge-hub?page=${articles.meta.current_page + 1}`}
                        data={{ ...filters }}
                      >
                        <Button variant="outline">Next</Button>
                      </Link>
                    )}
                  </div>
                </div>
              )}
              
              {/* Empty State */}
              {articles.data.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or filters to find more content.
                  </p>
                  <Link href="/knowledge-hub">
                    <Button>Browse All Articles</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}