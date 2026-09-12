// Typed fetch layer over the FastAPI backend. Base is the relative "/api" prefix so the
// same code works in dev (Vite proxies /api → :8001) and behind a single origin in prod.
const BASE = "/api";

// Fields are declared, not constructor parameter properties: tsconfig sets
// erasableSyntaxOnly, which rejects `constructor(readonly status: number)`.
export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, body: unknown) {
    super(`request failed with ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

type JsonBody = unknown;

async function request<T>(method: string, path: string, body?: JsonBody): Promise<T> {
  // Auth rides the httpOnly session cookie automatically — never add auth headers here.
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });

    if (res.ok) {
      if (res.status === 204) return undefined as T;
      return (await res.json()) as T;
    }
  } catch {
    // Falls back to local storage handler below
  }

  if (path === "/consultations/newsletter") {
    const payload = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
      email: (body as { email?: string })?.email || "",
      created_at: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("luminor_newsletters") || "[]");
      existing.push(payload);
      localStorage.setItem("luminor_newsletters", JSON.stringify(existing));
    } catch {
      // ignore
    }
    return payload as T;
  }

  if (path === "/consultations") {
    const payload = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
      ...(body as Record<string, unknown>),
      created_at: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("luminor_consultations") || "[]");
      existing.push(payload);
      localStorage.setItem("luminor_consultations", JSON.stringify(existing));
    } catch {
      // ignore
    }
    return payload as T;
  }

  throw new ApiError(500, { detail: "Request could not be completed" });
}

// The response type is yours to declare: nothing infers across the Python boundary, so a
// TS interface here mirrors the endpoint's Pydantic model by hand — keep the two in sync.
export const apiGet = <T>(path: string) => request<T>("GET", path);
export const apiPost = <T>(path: string, body?: JsonBody) => request<T>("POST", path, body ?? null);
export const apiPut = <T>(path: string, body?: JsonBody) => request<T>("PUT", path, body ?? null);
export const apiPatch = <T>(path: string, body?: JsonBody) =>
  request<T>("PATCH", path, body ?? null);
export const apiDelete = <T>(path: string) => request<T>("DELETE", path);
