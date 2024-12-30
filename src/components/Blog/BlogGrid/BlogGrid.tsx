'use client'
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../services/blog'; // Giả sử bạn đã tạo hàm getPosts để fetch dữ liệu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogGrid = () => {
  const [posts, setPosts] = useState<any[]>([]);  // State lưu danh sách bài viết
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();  // Lấy dữ liệu từ API
        setPosts(data);  // Lưu vào state
      } catch (err) {
        setError('Không thể tải bài viết');
        console.error('Lỗi khi lấy bài viết:', err);
      }
    };

    fetchPosts();  // Gọi hàm khi component mount
  }, []);

  return (
    <>
      <div id="content" className="site-content">
        <div className="page-header flex items-center justify-center py-8 bg-gray-100">
          <div className="container mx-auto px-2">
            <div className="inner flex items-center justify-between">
              <h1 className="page-title text-5xl font-bold">Blog Grid</h1>
              <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                <li><a href="index.html" className="text-blue-500 hover:underline">Home</a></li>
                <li className="text-gray-500">Blog Grid</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="entry-content">
          <div className="container mx-auto px-4">
            <div className="blog-grid pgrid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Render danh sách bài viết */}
                {posts.length > 0 ? (
                  posts.slice(0,6).map((post: any) => (
                    <div key={post.id}>
                      <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                        <div className="post-inner">
                          <div className="entry-media">
                            <div className="post-cat">
                              <span className="posted-in">
                                <a href="#" rel="category tag">{post.author}</a>
                              </span>
                            </div>
                            <a href={`/post/${post.id}`}>
                              <img
                                src={`https://via.placeholder.com/601x520.png?text=${post.title || post.thumbnail}`}
                                alt={post.title}
                                className="w-full h-auto"
                              />

                            </a>
                          </div>
                          <div className="inner-post p-4">
                            <div className="entry-header">
                              <div className="entry-meta text-gray-500">
                                <span className="posted-on">_ <a href="#">{new Date(post.createdAt).toLocaleDateString()}</a></span>
                                <span className="byline">_ <a className="url fn n" href="#">{post.author}</a></span>
                                <span className="comment-num">_ <a href="#">{post.commentsCount} Comments</a></span>
                              </div>
                              <h3 className="entry-title text-lg font-semibold mt-2">
                                <a href={`/post/${post.id}`}>{post.title}</a>
                              </h3>
                            </div>
                            <div className="btn-readmore mt-4">
                              <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">
                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))
                ) : (
                  <p>Không có bài viết nào.</p>
                )}
              </div>
            </div>
            <div className="ot-button text-center mt-6">
              <a href="#" className="octf-btn octf-btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Load More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
