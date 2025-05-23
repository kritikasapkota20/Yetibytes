import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      category: 'Management',
      title: 'Bill Walsh leadership lessons',
      description: 'Learn the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty!',
      author: {
        name: 'Alex Winston',
        date: '14 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2023/08/07/14/52/sunflowers-8175248_1280.jpg',
    },
    {
      id: 2,
      category: 'Product',
      title: 'PM mental models',
      description: 'Mental models are simple constructs of complex processes or relationships.',
      author: {
        name: 'Dave Wilson',
        date: '16 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2025/05/04/17/47/dog-9578735_1280.jpg',
    },
    {
      id: 3,
      category: 'Design',
      title: 'What is Wireframing?',
      description: 'Introduction to wireframing and its importance. Learn from the best in the industry.',
      author: {
        name: 'Carlos Wu',
        date: '15 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2022/10/05/19/40/church-7501379_1280.jpg',
    },
    {
      id: 4,
      category: 'Design',
      title: 'UX review presentations',
      description: 'How to run smooth convincing presentations that wow your colleagues and impress your managers!',
      author: {
        name: 'Olivia Rhye',
        date: '20 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2025/05/04/17/47/dog-9578735_1280.jpg',
    },
    {
      id: 5,
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: {
        name: 'Phoenix Baker',
        date: '19 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2022/10/05/19/40/church-7501379_1280.jpg',
    },
    {
      id: 6,
      category: 'Software Engineering',
      title: 'Building your API Stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and exploring them.',
      author: {
        name: 'Lana Steiner',
        date: '18 Jan 2023',
        avatar: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      image: 'https://cdn.pixabay.com/photo/2023/08/07/14/52/sunflowers-8175248_1280.jpg',
    }
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full py-16 ">
      <div className="py-16 text-center">
        <div className="text-sm text-primary font-medium mb-4">Our blog</div>
        <div className="text-3xl md:text-4xl font-bold text-primary mb-4">Resources and insights</div>
        <div className="text-gray-500 max-w-2xl mx-auto px">
          The latest industry news, interviews, technologies, and resources.
        </div>
        <div className="mt-6 max-w-md mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" onClick={() => navigate("/blog/details")}>
                <img  src={post.image} alt={post.title} className="w-full h-72 object-cover px-4 py-4" />
                <div className="w-full px-4">
                  <div className="text-sm text-primary font-medium ">{post.category}</div>
                  <div className="flex items-center justify-between ">
                    <div className="text-lg font-semibold text-gray-900 py-2">{post.title}</div>
                    <span className="text-gray-700">🡥</span>
                  </div>
                  <div className="text-gray-500 text-sm mb-5">{post.description}</div>
                  <div className="flex items-center py-2 ">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                      <div className="text-xs text-gray-500">{post.author.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No results found for "{searchQuery}"</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogResources;
