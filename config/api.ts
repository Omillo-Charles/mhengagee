const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5500/api/v1";

type ApiErrorPayload = {
  error?: {
    message?: string;
    code?: string;
  };
};

export type AuthUser = {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
  authProvider: "LOCAL" | "GOOGLE";
  firstName: string | null;
  lastName: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  emailVerified: boolean;
};

type AuthResponse = {
  user: AuthUser;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string | null;
  author: string;
  readTime: string;
  coverImage: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  isFeatured: boolean;
  publishedAt: string | null;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
};

export type PortfolioItem = {
  id: string;
  image: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  isFeatured: boolean;
  publishedAt: string | null;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
};

type PortfolioListResponse = {
  data: PortfolioItem[];
  pagination: { page: number; limit: number; total: number; pages: number };
};

type NewsListResponse = {
  data: NewsArticle[];
  pagination: { page: number; limit: number; total: number; pages: number };
};

type NewsDetailResponse = {
  data: NewsArticle;
};

export type YoutubePodcast = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  publishedAt: string;
};

type YoutubePodcastResponse = {
  data: YoutubePodcast[];
  nextPageToken: string | null;
};

export class ApiError extends Error {
  code?: string;
  status: number;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const isFormData = options.body instanceof FormData;
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}) as ApiErrorPayload);
    throw new ApiError(
      payload.error?.message || "Something went wrong. Please try again.",
      response.status,
      payload.error?.code,
    );
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const authApi = {
  signIn: (email: string, password: string) =>
    request<AuthResponse>("/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  signUp: (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
  ) =>
    request<AuthResponse>("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, firstName, lastName }),
    }),
  currentUser: () => request<AuthResponse>("/auth/me"),
  refresh: () => request<AuthResponse>("/auth/refresh", { method: "POST" }),
  signOut: () => request<void>("/auth/signout", { method: "POST" }),
  deleteAccount: () => request<void>("/auth/account", { method: "DELETE" }),
  forgotPassword: (email: string) =>
    request<{ message: string }>("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),
  resetPassword: (token: string, password: string) =>
    request<{ message: string }>("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password }),
    }),
  verifyEmail: (otp: string) =>
    request<{ message: string }>("/auth/verify-email", {
      method: "POST",
      body: JSON.stringify({ otp }),
    }),
  resendVerification: () =>
    request<{ message: string }>("/auth/verify-email/resend", {
      method: "POST",
    }),
  googleUrl: `${API_URL}/auth/google`,
};

export const newsApi = {
  list: async (
    options: { page?: number; limit?: number; category?: string } = {},
  ) => {
    const params = new URLSearchParams({
      page: String(options.page || 1),
      limit: String(options.limit || 8),
    });
    if (options.category) params.set("category", options.category);
    const response = await request<NewsListResponse>(
      `/news?${params.toString()}`,
    );

    if (!response || !Array.isArray(response.data)) {
      throw new ApiError(
        "News feed is unavailable right now.",
        502,
        "INVALID_NEWS_RESPONSE",
      );
    }

    return response;
  },
  getBySlug: async (slug: string) => {
    const response = await request<NewsDetailResponse>(
      `/news/${encodeURIComponent(slug)}`,
    );
    if (!response || !response.data || !response.data.slug) {
      throw new ApiError("News article not found.", 404, "NEWS_NOT_FOUND");
    }
    return response;
  },
  trending: async (limit = 4) => {
    const response = await request<{ data: NewsArticle[] }>(
      `/news/trending?limit=${limit}`,
    );
    if (!response || !Array.isArray(response.data)) {
      throw new ApiError(
        "Trending news is unavailable right now.",
        502,
        "INVALID_TRENDING_RESPONSE",
      );
    }
    return response;
  },
};

export const podcastApi = {
  youtube: (options: { limit?: number; pageToken?: string } = {}) => {
    const params = new URLSearchParams({ limit: String(options.limit || 12) });
    if (options.pageToken) params.set("pageToken", options.pageToken);
    return request<YoutubePodcastResponse>(
      `/podcasts/youtube?${params.toString()}`,
    );
  },
  requestFeature: (payload: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) =>
    request<{ message: string; id: string }>("/podcast-feature-requests", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export const contactApi = {
  submit: (payload: {
    name: string;
    email: string;
    service: string;
    message: string;
  }) =>
    request<{ message: string; id: string }>("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export const quoteApi = {
  submit: (payload: {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    service: string;
    budget?: string;
    date?: string;
    location?: string;
    brief: string;
    referral?: string;
  }) =>
    request<{ message: string; id: string }>("/quote", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export { API_URL };

export const portfolioApi = {
  list: (
    options: { page?: number; limit?: number; featured?: boolean } = {},
  ) => {
    const params = new URLSearchParams({
      page: String(options.page || 1),
      limit: String(options.limit || 12),
    });
    if (options.featured !== undefined)
      params.set("featured", String(options.featured));
    return request<PortfolioListResponse>(`/portfolio?${params.toString()}`);
  },
  create: (formData: FormData) =>
    request<{ data: PortfolioItem }>("/portfolio", {
      method: "POST",
      body: formData,
    }),
  update: (id: string, formData: FormData) =>
    request<{ data: PortfolioItem }>(`/portfolio/${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: formData,
    }),
  remove: (id: string) =>
    request<void>(`/portfolio/${encodeURIComponent(id)}`, {
      method: "DELETE",
    }),
};
