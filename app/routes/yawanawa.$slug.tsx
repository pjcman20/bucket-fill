import {Link, useParams, type MetaFunction} from '@remix-run/react';
import {primaryNav, yawanawaBySlug} from '~/lib/yawanawaContent';

export const meta: MetaFunction<typeof loader> = ({params}) => {
  const page = params.slug ? yawanawaBySlug.get(params.slug) : null;
  return [
    {title: page?.seoTitle ?? 'Yawanawá Page'},
    {
      name: 'description',
      content: page?.metaDescription ?? 'Yawanawá tribe-led page',
    },
  ];
};

export function loader() {
  return null;
}

export default function YawanawaSlugPage() {
  const {slug} = useParams();
  const page = slug ? yawanawaBySlug.get(slug) : null;

  if (!page) {
    return (
      <main className="yawa-page">
        <h1>Page not found</h1>
        <Link to="/yawanawa">Back to Yawanawá Home</Link>
      </main>
    );
  }

  return (
    <main className="yawa-page">
      <nav className="yawa-nav">
        <Link to="/yawanawa">Yawanawá Home</Link>
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
        <h2>Positioning</h2>
        <p>{page.positioning}</p>
      </section>

      <section>
        <h2>Long-form Narrative</h2>
        {page.narrative.map((section) => (
          <article key={section.title} className="yawa-card">
            <h3>{section.title}</h3>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="yawa-card">
        <h2>Infographic: {page.infographic.title}</h2>
        <p>
          <strong>Visualizes:</strong> {page.infographic.visualization}
        </p>
        <p>
          <strong>Visual style:</strong> {page.infographic.style}
        </p>
        <p>
          <strong>Conversion value:</strong> {page.infographic.conversionValue}
        </p>
      </section>

      <section>
        <h2>Icon-led Features</h2>
        <div className="yawa-grid">
          {page.iconFeatures.map((feature) => (
            <article key={feature.title} className="yawa-card">
              <h3>
                {feature.icon} {feature.title}
              </h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="yawa-card">
        <h2>Dynamic / Interactive Element</h2>
        <p>
          <strong>{page.dynamicModule.name}:</strong>{' '}
          {page.dynamicModule.purpose}
        </p>
        <ul>
          {page.dynamicModule.interactions.map((interaction) => (
            <li key={interaction}>{interaction}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Trust & Proof</h2>
        <ul>
          {page.trustBlock.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="yawa-card">
        <h2>{page.midCta.title}</h2>
        <p>{page.midCta.text}</p>
        <Link className="button" to={page.midCta.action.to}>
          {page.midCta.action.label}
        </Link>
      </section>

      <section>
        <h2>Tailored FAQ</h2>
        <div className="yawa-faq">
          {page.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2>Internal Links</h2>
        <ul>
          {page.internalLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Image Prompts + Alt Text</h2>
        <h3>Prompts</h3>
        <ul>
          {page.imagePrompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
        <h3>Alt text suggestions</h3>
        <ul>
          {page.altText.map((alt) => (
            <li key={alt}>{alt}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Responsive Notes</h2>
        <ul>
          {page.responsiveNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <h2>Performance Notes</h2>
        <ul>
          {page.performanceNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="yawa-card">
        <h2>{page.bottomCta.title}</h2>
        <p>{page.bottomCta.text}</p>
        <Link className="button" to={page.bottomCta.action.to}>
          {page.bottomCta.action.label}
        </Link>
      </section>
    </main>
  );
}
