'use client';
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/blog'; // Đảm bảo import đúng từ file chứa hàm getPosts

// Định nghĩa interface cho bài viết
interface Post {
  id: number; // Hoặc string, tùy thuộc vào kiểu dữ liệu của ID
  title: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Sử dụng kiểu Post[]
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Gọi hàm fetch dữ liệu bài viết
        setPosts(data); // Lưu dữ liệu vào state
      } catch (err) {
        setError('Không thể tải bài viết');
        console.error('Lỗi khi lấy bài viết:', err);
      }
    };

    fetchPosts(); // Gọi hàm khi component mount
  }, []);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Kiểm tra dữ liệu và hiển thị */}
      {Array.isArray(posts) && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/post/${post.id}`}>Đọc thêm</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Không có bài viết nào.</p>
      )}
    </div>
  );
};

export default Blog;