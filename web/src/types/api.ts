export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  content: string;
  iconName: string;
  displayOrder: number;
}

export interface CaseStudyListItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  coverImageUrl: string;
  industry: string;
  publishedAt: string;
}

export interface CaseStudyDetail extends CaseStudyListItem {
  clientName: string;
  content: string;
}

export interface BlogCategory {
  id: number;
  slug: string;
  name: string;
}

export interface BlogPostListItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  authorName: string;
  categoryName: string;
  publishedAt: string;
}

export interface BlogPostDetail extends BlogPostListItem {
  content: string;
  metaTitle: string;
  metaDescription: string;
}

export interface JobOpeningListItem {
  id: number;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
}

export interface JobOpeningDetail extends JobOpeningListItem {
  description: string;
  requirements: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photoUrl: string;
  bio: string;
}

export interface CompanyStat {
  id: number;
  label: string;
  value: string;
}

export interface ContactSubmissionDto {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}
