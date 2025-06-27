import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Shield, 
  Lock, 
  Zap, 
  Link as LinkIcon, 
  BarChart, 
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  // SEO-optimized blog posts
  const blogPosts = [
    {
      id: 1,
      title: "What is a URL Shortener and How Does It Work?",
      date: "June 15, 2025",
      excerpt: "Discover the technology behind URL shortening and how services like OneTimeURL transform long links into manageable URLs.",
      content: `
        <p>URL shorteners are tools that convert long, complex web addresses into shorter, more manageable links. They work by creating a unique identifier that redirects users to the original URL when clicked.</p>
        
        <h3>How the Process Works:</h3>
        <ol>
          <li>You submit your long URL to the shortening service</li>
          <li>The service generates a unique key (e.g., abc123)</li>
          <li>This key is stored in a database with your original URL</li>
          <li>When someone visits the shortened link, the service looks up the original URL</li>
          <li>The user is instantly redirected to the destination</li>
        </ol>
        
        <p>Services like OneTimeURL add additional features like expiration dates, click limits, and security measures to enhance the basic functionality.</p>
        
        <h3>Benefits of URL Shortening:</h3>
        <ul>
          <li><strong>Space-saving:</strong> Essential for platforms with character limits like Twitter</li>
          <li><strong>Memorability:</strong> Easier to remember and share</li>
          <li><strong>Aesthetics:</strong> Cleaner appearance in communications</li>
          <li><strong>Tracking:</strong> Analytics on click-through rates</li>
          <li><strong>Security:</strong> Protection against link manipulation</li>
        </ul>
      `,
      tags: ["url-shortening", "technology", "how-it-works"],
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Top 5 Security Benefits of Using One-Time URLs",
      date: "May 28, 2025",
      excerpt: "Learn how expiring links can protect your sensitive information and prevent unauthorized access to your content.",
      content: `
        <p>One-time URLs provide enhanced security for sharing sensitive information. Here are the top security benefits:</p>
        
        <h3>1. Prevention of Unauthorized Access</h3>
        <p>By setting links to expire after a single use, you ensure that only the intended recipient can access the content. This is particularly valuable for sharing confidential documents, financial information, or personal data.</p>
        
        <h3>2. Protection Against Link Sharing</h3>
        <p>When you share a sensitive document, you don't want it being forwarded to unauthorized parties. One-time URLs prevent this by becoming inactive after the first access.</p>
        
        <h3>3. Mitigation of Phishing Attacks</h3>
        <p>Cybercriminals often use link manipulation in phishing schemes. With one-time URLs, even if a malicious actor obtains the link, it becomes useless after the first access.</p>
        
        <h3>4. Time-Based Security</h3>
        <p>Combine one-time access with expiration dates for double protection. Links can be set to expire after a certain time period, even if they haven't been accessed.</p>
        
        <h3>5. No Permanent Digital Footprint</h3>
        <p>Unlike permanent links that remain accessible indefinitely, one-time URLs disappear after use, leaving no lasting digital footprint that could be exploited.</p>
        
        <p>Implementing one-time URLs in your security strategy adds an essential layer of protection for your digital communications.</p>
      `,
      tags: ["security", "privacy", "data-protection"],
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "How to Choose the Perfect Expiration Time for Your Links",
      date: "May 10, 2025",
      excerpt: "A guide to selecting the ideal expiration settings for different use cases and content types.",
      content: `
        <p>Setting the right expiration time for your links is crucial for both security and user experience. Here's how to choose the perfect timeframe:</p>
        
        <h3>Factors to Consider:</h3>
        <ul>
          <li><strong>Sensitivity of content:</strong> More sensitive = shorter expiration</li>
          <li><strong>Purpose of the link:</strong> Temporary promotions vs. permanent resources</li>
          <li><strong>Audience:</strong> Internal team vs. public access</li>
          <li><strong>Compliance requirements:</strong> Industry-specific regulations</li>
        </ul>
        
        <h3>Common Use Cases and Recommended Durations:</h3>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Financial Documents</h4>
          <p><strong>Recommended:</strong> 24 hours or after first access</p>
          <p>Bank statements, tax documents, and other sensitive financial information should have minimal exposure time.</p>
        </div>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Marketing Campaigns</h4>
          <p><strong>Recommended:</strong> Match campaign duration</p>
          <p>Set expiration to coincide with the end of your promotion or event.</p>
        </div>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Internal Company Resources</h4>
          <p><strong>Recommended:</strong> 30-90 days</p>
          <p>Long enough for employees to access, but not permanent to prevent outdated information circulation.</p>
        </div>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Event Registrations</h4>
          <p><strong>Recommended:</strong> Until event date + 1 week</p>
          <p>Allows late registrations but prevents access after the event is irrelevant.</p>
        </div>
        
        <p>Remember that OneTimeURL allows you to customize expiration settings to the minute, giving you precise control over your links' lifespan.</p>
      `,
      tags: ["link-management", "best-practices", "security"],
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "URL Shortening vs. Traditional Links: Which is Better for SEO?",
      date: "April 22, 2025",
      excerpt: "Explore the impact of shortened URLs on search engine optimization and website ranking.",
      content: `
        <p>There's an ongoing debate about whether shortened URLs affect SEO. Let's examine the facts:</p>
        
        <h3>The SEO Impact of Shortened URLs</h3>
        <p>Contrary to popular belief, using reputable URL shortening services like OneTimeURL does not negatively impact your SEO when implemented correctly.</p>
        
        <h3>Benefits for SEO:</h3>
        <ul>
          <li><strong>Improved click-through rates:</strong> Short, clean URLs are more appealing in search results</li>
          <li><strong>Enhanced social sharing:</strong> More shares = more backlinks = better SEO</li>
          <li><strong>Tracking capabilities:</strong> Understand which content performs best</li>
          <li><strong>Reduced broken links:</strong> Update destination without changing the short URL</li>
        </ul>
        
        <h3>Potential Concerns and Solutions:</h3>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Link Juice Preservation</h4>
          <p><strong>Concern:</strong> Shortened URLs might not pass link equity</p>
          <p><strong>Solution:</strong> Use 301 redirects which pass 90-99% of link equity</p>
        </div>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Duplicate Content</h4>
          <p><strong>Concern:</strong> Multiple shortened URLs pointing to same content</p>
          <p><strong>Solution:</strong> Use canonical tags and consistent linking</p>
        </div>
        
        <div class="bg-white/5 rounded-xl p-4 my-4">
          <h4 class="text-orange-400 font-bold">Spam Signals</h4>
          <p><strong>Concern:</strong> Some spam sites use URL shorteners</p>
          <p><strong>Solution:</strong> Use reputable services with clean domain history</p>
        </div>
        
        <h3>Best Practices for SEO-Friendly Short Links:</h3>
        <ol>
          <li>Choose a shortening service with a trusted domain</li>
          <li>Use custom slugs when possible (e.g., onetimeurl.com/your-keyword)</li>
          <li>Implement proper redirects (301 for permanent, 302 for temporary)</li>
          <li>Monitor your link performance through analytics</li>
          <li>Combine with descriptive anchor text</li>
        </ol>
        
        <p>When used strategically, shortened URLs can complement your SEO efforts rather than hinder them.</p>
      `,
      tags: ["seo", "digital-marketing", "analytics"],
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "10 Creative Ways Businesses Use URL Shorteners",
      date: "April 5, 2025",
      excerpt: "Innovative applications of link shortening that go beyond just making URLs smaller.",
      content: `
        <p>URL shorteners have evolved beyond simple link compression. Here are 10 creative ways businesses are leveraging this technology:</p>
        
        <h3>1. Interactive Business Cards</h3>
        <p>Create short links that lead to digital business cards with contact information, portfolio samples, and calendar scheduling.</p>
        
        <h3>2. Dynamic Product Launches</h3>
        <p>Use the same short URL throughout a campaign that redirects to the most relevant content based on timing (pre-launch, launch day, post-launch).</p>
        
        <h3>3. Employee Onboarding</h3>
        <p>Provide new hires with a master link that expires after 30 days, containing all necessary resources, forms, and training materials.</p>
        
        <h3>4. Limited-Time Offers</h3>
        <p>Create urgency with links that expire after a set time, encouraging immediate action on promotions.</p>
        
        <h3>5. Secure Document Sharing</h3>
        <p>Replace email attachments with secure links to cloud storage, especially for sensitive documents.</p>
        
        <h3>6. Conference Materials</h3>
        <p>Distribute session-specific resources with links that expire at the end of each conference day.</p>
        
        <h3>7. Customer Feedback Loops</h3>
        <p>Send personalized feedback requests with unique short URLs that tie responses to specific customers.</p>
        
        <h3>8. Printed Marketing Materials</h3>
        <p>Use memorable short URLs on physical products and packaging that can be updated as campaigns change.</p>
        
        <h3>9. Multi-Channel Tracking</h3>
        <p>Create unique short URLs for different marketing channels to track effectiveness without complex UTM parameters.</p>
        
        <h3>10. API-Driven Automation</h3>
        <p>Integrate URL shortening into business workflows for automatic resource distribution with expiration rules.</p>
        
        <div class="bg-orange-900/20 border border-orange-800/50 rounded-xl p-4 my-6">
          <p class="flex items-start gap-2">
            <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong className="text-orange-400">Pro Tip:</strong> Combine multiple strategies - create a short URL for a customer survey that expires after 100 responses or 7 days, whichever comes first.
            </span>
          </p>
        </div>
        
        <p>The flexibility of modern URL shorteners like OneTimeURL enables businesses to solve unique challenges in innovative ways.</p>
      `,
      tags: ["business", "innovation", "use-cases"],
      readTime: "8 min read"
    }
  ];

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-900 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 shadow-lg shadow-orange-600/30">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-orange-600">OneTimeURL Blog</h1>
          <p className="text-gray-400 text-md max-w-2xl mx-auto">
            Expert insights on URL shortening, security, and digital best practices
          </p>
        </header>

        {/* Search and Categories */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-colors">
              All Topics
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              Security
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              SEO
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              Tutorials
            </button>
          </div>
        </div> */}

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-800/50 rounded-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-orange-600 text-xs font-semibold rounded-full">
                  Featured
                </div>
                <div className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>June 24, 2025</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">
                The Future of Secure Link Sharing: Trends to Watch
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg">
                As cyber threats evolve, so do the technologies protecting our digital communications. 
                Discover how advanced URL shortening is becoming a critical security layer for businesses and individuals.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">security</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">technology</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs">future-trends</span>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-colors"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {currentPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-semibold rounded-full">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`#post-${post.id}`} 
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Continue reading
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-600' : 'text-white hover:bg-white/10'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === index + 1 
                  ? 'bg-orange-600 text-white' 
                  : 'text-gray-400 hover:bg-white/10'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-600' : 'text-white hover:bg-white/10'}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* SEO Content Section */}
        <section className="mb-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Explore Our Latest Insights
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep dives into URL security, digital marketing, and technology trends
            </p>
          </div>
          
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                id={`post-${post.id}`}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{post.title}</h3>
                    <div className="flex items-center gap-4 text-gray-500 mt-1">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-orange-900/30 rounded-xl text-sm text-orange-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe CTA */}
        <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-800/50 rounded-2xl p-8 text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Never Miss an Update
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter for the latest insights on URL security and digital trends
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 font-bold text-white rounded-xl transition-all">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;