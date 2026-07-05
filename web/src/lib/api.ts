const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export const apiClient = {
  services: {
    getAll: () => fetchAPI('/services'),
    getBySlug: (slug: string) => fetchAPI(`/services/${slug}`),
  },
  blog: {
    getPosts: (page: number = 1, pageSize: number = 10, category?: string) =>
      fetchAPI(`/blog/posts?page=${page}&pageSize=${pageSize}${category ? `&category=${category}` : ''}`),
    getPostBySlug: (slug: string) => fetchAPI(`/blog/posts/${slug}`),
    getCategories: () => fetchAPI('/blog/categories'),
  },
  caseStudies: {
    getAll: (page: number = 1, pageSize: number = 10) =>
      fetchAPI(`/case-studies?page=${page}&pageSize=${pageSize}`),
    getBySlug: (slug: string) => fetchAPI(`/case-studies/${slug}`),
  },
  careers: {
    getAll: () => fetchAPI('/careers'),
    getBySlug: (slug: string) => fetchAPI(`/careers/${slug}`),
  },
  company: {
    getTeam: () => fetchAPI('/company/team'),
    getStats: () => fetchAPI('/company/stats'),
  },
  contact: {
    submit: (data: any) => fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },
};
