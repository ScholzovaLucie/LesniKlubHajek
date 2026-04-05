import {
  css,
  PageUvod,
  organizationSchema,
} from "../components/site";

export default function HomePage() {
  return (
    <div>
      <style>{css}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="lk-main">
        <PageUvod />
      </main>
    </div>
  );
}
