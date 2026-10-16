"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { content, type Locale } from "@/content/predio/site";
import { whatsappUrl } from "@/lib/predio/whatsapp";

const gallery = [
  ["/projeto-predio-01/images/empreendimento/mall-pav1.jpg", "Mall — pavimento 1"],
  ["/projeto-predio-01/images/empreendimento/rooftop-3.jpg", "Rooftop e áreas de convivência"],
  ["/projeto-predio-01/images/empreendimento/hall-elevadores.jpg", "Hall de elevadores"],
  ["/projeto-predio-01/images/empreendimento/mall-pav2.jpg", "Mall — pavimento 2"],
  ["/projeto-predio-01/images/empreendimento/portaria.jpg", "Portaria do edifício"],
  ["/projeto-predio-01/images/empreendimento/rooftop-5.jpg", "Vista do rooftop"],
] as const;

function WhatsAppLink({ href, children, className = "button button-primary" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={whatsappUrl(href)} target="_blank" rel="noreferrer"><span>{children}</span><ArrowUpRight size={18} aria-hidden="true" /></a>;
}

function SectionIntro({ kicker, title, dark = false }: { kicker: string; title: string; dark?: boolean }) {
  return <div className="section-intro"><p className="kicker">{kicker}</p><h2 className={dark ? "light" : ""}>{title}</h2></div>;
}

export default function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelected(null); setMenuOpen(false); }
      if (selected !== null && event.key === "ArrowRight") setSelected((selected + 1) % gallery.length);
      if (selected !== null && event.key === "ArrowLeft") setSelected((selected - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, locale]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!values.name || !values.company || !values.phone || !values.email) { setFormError(t.form.required); return; }
    setFormError("");
    window.open(whatsappUrl(t.form.message(values)), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="predio-page">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Pinciara Imóveis — início">
          <Image src="/projeto-predio-01/images/logo/pinciara-negative.png" alt="Pinciara Imóveis Exclusivos" width={240} height={174} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <Link className="language" href={t.languageHref} aria-label={`Mudar idioma para ${t.languageLabel}`}>{t.languageLabel}</Link>
          <WhatsAppLink href={t.messages.nav} className="button button-small"><MessageCircle size={16} />{t.navCta}</WhatsAppLink>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">
          {t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></a>)}
          <WhatsAppLink href={t.messages.nav}><MessageCircle size={18} />{t.navCta}</WhatsAppLink>
        </nav>}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-text">{t.hero.text}</p>
            <div className="hero-actions"><WhatsAppLink href={t.messages.hero}><MessageCircle size={18} />{t.hero.cta}</WhatsAppLink><p><MapPin size={17} />{t.address}<br /><span>{t.city}</span></p></div>
          </div>
          <div className="hero-media" aria-label="Fachada e rooftop do empreendimento">
            <Image className="hero-main" src="/projeto-predio-01/images/empreendimento/fachada-praca-2.jpg" alt="Fachada do edifício no Largo de São Francisco de Paula" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero-inset"><Image src="/projeto-predio-01/images/empreendimento/rooftop-1.jpg" alt="Rooftop do empreendimento" fill priority sizes="260px" /></div>
            <span className="image-caption">Largo de São Francisco de Paula, 34</span>
          </div>
          <a className="scroll-cue" href="#alinhamento"><ArrowDown size={17} />{t.hero.scroll}</a>
        </section>

        <section className="section split-section" id="alinhamento">
          <div><SectionIntro kicker={t.alignment.kicker} title={t.alignment.title} />{t.alignment.paragraphs.map(p => <p className="body-copy" key={p}>{p}</p>)}</div>
          <figure className="editorial-image tall"><Image src="/projeto-predio-01/images/empreendimento/fachada-jardim.jpg" alt="Fachada ajardinada do empreendimento" fill sizes="(max-width: 800px) 100vw, 45vw" /><figcaption>Um novo uso para um endereço histórico.</figcaption></figure>
        </section>

        <section className="section location" id="localizacao">
          <SectionIntro kicker={t.location.kicker} title={t.location.title} />
          <div className="location-grid"><div>{t.location.paragraphs.map(p => <p className="body-copy" key={p}>{p}</p>)}<address><MapPin /> <span>{t.address}<br />{t.city}</span></address></div><ol>{t.location.places.map((place, i) => <li key={place}><span>0{i + 1}</span>{place}</li>)}</ol></div>
        </section>

        <section className="section dark-section" id="projeto">
          <div className="project-head"><SectionIntro dark kicker={t.project.kicker} title={t.project.title} /><p className="body-copy light-muted">{t.project.text}</p></div>
          <ul className="highlights">{t.project.highlights.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
          <div className="gallery-heading"><h3>{t.project.galleryTitle}</h3><p>{t.project.galleryHint}</p></div>
          <div className="gallery">{gallery.map(([src, alt], i) => <button key={src} className={i === 0 || i === 5 ? "gallery-item gallery-wide" : "gallery-item"} onClick={() => setSelected(i)} aria-label={`${t.project.galleryHint}: ${alt}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 40vw" /><span>{String(i + 1).padStart(2, "0")}</span></button>)}</div>
        </section>

        <section className="section softlanding" id="softlanding">
          <div className="softlanding-copy"><SectionIntro kicker={t.softlanding.kicker} title={t.softlanding.title} /><p className="body-copy">{t.softlanding.text}</p><WhatsAppLink href={t.messages.softlanding}>{t.softlanding.cta}</WhatsAppLink></div>
          <ul className="capabilities">{t.softlanding.items.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><Check /></li>)}</ul>
        </section>

        <section className="impact section">
          <div className="impact-image"><Image src="/projeto-predio-01/images/empreendimento/fachada-praca-3.jpg" alt="Praça diante do empreendimento" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
          <div className="impact-copy"><SectionIntro kicker={t.impact.kicker} title={t.impact.title} /><p className="body-copy">{t.impact.text}</p><div className="impact-list">{t.impact.items.map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div></div>
        </section>

        <section className="partnership section">
          <p className="kicker">{t.partnership.kicker}</p><h2>{t.partnership.title}</h2><p>{t.partnership.text}</p><WhatsAppLink href={t.messages.partnership}>{t.partnership.cta}</WhatsAppLink>
        </section>

        <section className="pinciara section dark-section" id="pinciara">
          <div className="pinciara-mark"><Image src="/projeto-predio-01/images/logo/pinciara-negative.png" alt="Pinciara Imóveis Exclusivos" width={520} height={376} /></div>
          <div className="pinciara-copy"><SectionIntro dark kicker={t.pinciara.kicker} title={t.pinciara.title} /><p className="body-copy light-muted">{t.pinciara.text}</p><div className="broker"><div><span>Luiz Pinciara</span><small>{t.creci}</small></div><WhatsAppLink href={t.messages.pinciara}>{t.pinciara.cta}</WhatsAppLink></div></div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-copy"><p className="kicker">{t.form.kicker}</p><h2>{t.form.title}</h2><p>{t.form.text}</p><div className="contact-details"><a href={`tel:+55${t.phone.replace(/\D/g, "")}`}>{t.phone}</a><a href={`mailto:${t.email}`}>{t.email}</a></div></div>
          <form onSubmit={submit} noValidate>
            {Object.entries(t.form.fields).map(([name, label]) => <label key={name}><span>{label}</span><input name={name} type={name === "email" ? "email" : name === "phone" ? "tel" : "text"} pattern={name === "phone" ? "[0-9()+\\-\\s]{8,}" : undefined} required autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : "organization"} /></label>)}
            {formError && <p className="form-error" role="alert">{formError}</p>}
            <button className="button button-primary form-button" type="submit"><MessageCircle size={18} />{t.form.button}<ArrowUpRight size={18} /></button>
            <p className="privacy-note">{t.form.privacy}</p>
          </form>
        </section>
      </main>

      <footer><Image src="/projeto-predio-01/images/logo/pinciara-negative.png" alt="Pinciara Imóveis Exclusivos" width={220} height={159} /><p>{t.footer}</p><div><a href={`mailto:${t.email}`}>{t.email}</a><a href={`tel:+55${t.phone.replace(/\D/g, "")}`}>{t.phone}</a></div></footer>

      {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[selected][1]} onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Fechar imagem"><X /></button><button className="lightbox-prev" onClick={e => { e.stopPropagation(); setSelected((selected - 1 + gallery.length) % gallery.length); }} aria-label="Imagem anterior">←</button><div className="lightbox-image" onClick={e => e.stopPropagation()}><Image src={gallery[selected][0]} alt={gallery[selected][1]} fill sizes="90vw" /><p>{gallery[selected][1]}</p></div><button className="lightbox-next" onClick={e => { e.stopPropagation(); setSelected((selected + 1) % gallery.length); }} aria-label="Próxima imagem">→</button></div>}
    </div>
  );
}
