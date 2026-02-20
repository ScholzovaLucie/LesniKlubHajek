const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

export function assetPath(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedBasePath ? `${normalizedBasePath}${normalizedPath}` : normalizedPath;
}
