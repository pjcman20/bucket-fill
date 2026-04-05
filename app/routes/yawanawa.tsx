import {Link, type MetaFunction} from '@remix-run/react';
import {
  kpiArchitecture,
  primaryNav,
  yawanawaBySlug,
  infographicLibrary,
} from '~/lib/yawanawaContent';

export const meta: MetaFunction = () => [
  {title: 'Yawanawá Tribe-Led Marketplace | Official Digital Home'},
];

export default function YawanawaHomeRoute() {
  const page = yawanawaBySlug.get('home');
  if (!page) return null;

  return (
    <main className="yawa-page">
      <nav className="yawa-nav">
        {primaryNav.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>

      <header className="yawa-hero">
        <p>{page.heroKicker}</p>
        <h1>{page.h1}</h1>
        <p>{page.heroSummary}</p>
        <div className="yawa-cta-row">
          {page.ctas.map((cta) => (
            <Link key={cta.label} to={cta.to} className="button">
              {cta.label}
            </Link>
          ))}
        </div>
      </header>

      <section>
        <h2>Super Navigation</h2>
        <div className="yawa-grid">
          {Array.from(yawanawaBySlug.values())
            .filter((p) => p.slug !== 'home')
            .map((p) => (
              <article key={p.slug} className="yawa-card">
                <h3>{p.navLabel}</h3>
                <p>{p.metaDescription}</p>
                <Link to={`/yawanawa/${p.slug}`}>Open full landing page</Link>
              </article>
            ))}
        </div>
      </section>

      <section>
        <h2>KPI + Revenue Engineering</h2>
        <ul>
          {kpiArchitecture.map((kpi) => (
            <li key={kpi}>{kpi}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Infographics Library (16)</h2>
        <ol>
          {infographicLibrary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
