"use client";

import { useRouter } from "next/navigation";
import {
  css,
  PageUvod,
  PageONas,
  PageLide,
  PageCenik,
  PageGalerie,
  PageKontakt,
  routeMap,
  organizationSchema,
} from "../components/site";

export { css, PageONas, PageLide, PageCenik, PageGalerie, PageKontakt };

export default function HomePage() {
  const router = useRouter();

  const setPage = (id) => {
    router.push(routeMap[id] || "/");
  };

  return (
    <div>
      <style>{css}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="lk-main">
        <PageUvod setPage={setPage} />
      </main>
    </div>
  );
}
