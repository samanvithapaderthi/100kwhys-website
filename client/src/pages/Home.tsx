/* Design direction: cover-inspired cinematic educational adventure poster. Keep copy clear for adults while preserving the saturated, playful discovery energy of the reference cover. */
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  FlaskConical,
  Menu,
  Rocket,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { toast } from "sonner";

const coverImage = "/assets/ebook-cover-page-clear.png";
const heroArtwork = "/assets/whys-hero-stars.png";
const volume2Cover = "/assets/ebook-cover-volume-2-clear.png";
const toddlersCover = "/assets/toddler-first-wonders-flat-cover.png";
const samplePages = [
  {
    src: "/assets/sample-pages-volume-2.png",
    alt: "Sample pages from Volume 2 with colorful visual answers",
  },
  {
    src: "/assets/sample-pages-first-wonders.png",
    alt: "Sample pages from First Wonders for little learners",
  },
];
const kidsArtwork = "/assets/learning-question-art.png";
const starbookMark = "/assets/whys-starbook-mark.png";

const faqs = [
  {
    question: "What age group are the books for?",
    answer:
      "The books are created for children and curious young readers. The exact recommended age range can be found on each individual book page.",
  },
  {
    question: "Does the book literally contain 100,000 questions?",
    answer:
      "100,000 Whys represents the idea of seemingly endless curiosity and the enormous number of questions children can ask about the world.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "The books explore science, nature, animals, space, the human body, technology, and everyday life.",
  },
  {
    question: "Are the books fully illustrated?",
    answer:
      "The series uses visual learning as an important part of how information is presented. See the individual book pages for more details about each volume.",
  },
  {
    question: "What is the Visual Whys Encyclopedia?",
    answer:
      "The Visual Whys Encyclopedia is the broader series behind the individual books. It brings together curiosity-driven questions, explanations, and visual learning across multiple volumes.",
  },
  {
    question: "How many books are in the series?",
    answer:
      "The Visual Whys Encyclopedia currently includes three books: Volume 1, Volume 2, and 100,000 Whys for Toddlers: First Wonders.",
  },
  {
    question: "What is Volume 3?",
    answer:
      "Volume 3 is 100,000 Whys for Toddlers: First Wonders, a bright first encyclopedia created for curious children ages 2–6.",
  },
  {
    question: "What ages are the three books for?",
    answer:
      "The original 100,000 Whys books are made for curious young readers, while 100,000 Whys for Toddlers: First Wonders is designed especially for ages 2–6.",
  },
  {
    question: "Are these books useful for homeschooling?",
    answer:
      "They can be used as an additional resource for curious learners, independent exploration, discussion, or supplemental learning.",
  },
  {
    question: "Are they suitable for reluctant readers?",
    answer:
      "The question-based and visual approach is designed to make information approachable and encourage children to explore topics at their own pace.",
  },
  {
    question: "How are the facts researched?",
    answer:
      "More information about the research and fact-checking process will be added to the individual book pages as it is verified.",
  },
  {
    question: "Who is Elliott Wonder?",
    answer:
      "Elliott Wonder is the author and brand behind the 100,000 Whys for Kids series, focused on making learning approachable, visual, and curiosity-driven.",
  },
  {
    question: "Where can I buy the books?",
    answer:
      "The current books are available through Amazon. Visit each book's page for the appropriate purchase link.",
  },
  {
    question: "Are more volumes planned?",
    answer:
      "The Visual Whys Encyclopedia is intended to grow beyond the current volumes, with more curiosity and discoveries planned for the future.",
  },
  {
    question: "How can I receive updates?",
    answer:
      "Join the Curious Kids Club to receive occasional updates, new book announcements, curiosity facts, and activities.",
  },
];

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-lockup ${footer ? "brand-lockup-footer" : ""}`}>
      <span className="brand-star" aria-hidden="true">
        <img src={starbookMark} alt="" />
      </span>
      <span className="brand-name">
        <span>100,000</span>
        <small>Whys for Kids</small>
      </span>
    </span>
  );
}

function RibbonLabel({ children }: { children: string }) {
  return (
    <span className="ribbon-label">
      <span>{children}</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [samplePage, setSamplePage] = useState(-1);

  const closeMenu = () => setMenuOpen(false);

  const turnPage = () => {
    setSamplePage((current) => (current + 1) % (samplePages.length + 1));
  };

  const turnPageBack = () => {
    setSamplePage((current) => Math.max(-1, current - 1));
  };

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    if (!email.trim() || !email.includes("@")) {
      event.preventDefault();
      toast.error("Please enter a valid adult email address.");
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      toast.success("You’re on the curiosity list.");
      setName("");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <div className="container nav-inner">
          <a
            className="brand-link"
            href="#top"
            aria-label="100,000 Whys for Kids home"
            onClick={closeMenu}
          >
            <BrandMark />
          </a>

          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#books" onClick={closeMenu}>Books</a>
            <a href="#encyclopedia" onClick={closeMenu}>Visual Whys</a>
            <a href="#elliott" onClick={closeMenu}>Elliott Wonder</a>
            <a href="#why" onClick={closeMenu}>Why 100,000?</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-club-link" href="#club" onClick={closeMenu}>
              Join the club <ArrowRight size={14} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section">
          <div
            className="hero-backdrop"
            aria-hidden="true"
            style={{ backgroundImage: `url(${heroArtwork})` }}
          />
          <div className="hero-stars" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <Sparkles size={16} /> 100,000 Whys for Kids
              </div>

              <h1>
                Big questions.<br />
                <span className="title-yellow">Simple answers.</span>
              </h1>

              <p className="hero-intro">
                Why is the sky blue? How do birds fly? What makes a volcano
                erupt? Children have questions about everything. 100,000 Whys
                for Kids follows that curiosity, turning big questions into fun
                discoveries with simple answers and captivating visuals.
              </p>

              <div className="hero-actions">
                <a className="button button-sun" href="#books">
                  Explore the Books <ArrowRight size={18} />
                </a>

                <a className="text-button" href="#encyclopedia">
                  <span className="play-dot">
                    <ArrowDown size={14} />
                  </span>
                  Discover the Encyclopedia
                </a>
              </div>

              <div className="hero-proof">
                <span>
                  <Star size={15} fill="currentColor" /> 100,000 ways to wonder
                </span>
                <span>
                  <Rocket size={15} /> For curious kids & grown-ups
                </span>
              </div>
            </div>

            <div className="hero-cover-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-badge">
                AGES<br /><strong>6–13</strong>
              </div>
              <div className="cover-shadow" />

              <div className={`hero-book-viewer ${samplePage >= 0 ? "is-open" : ""}`}>
                {samplePages.map((page, index) => (
                  <img
                    key={page.src}
                    className={`sample-page-image ${index < samplePage ? "is-flipped" : ""} ${index === samplePage ? "is-current" : ""}`}
                    src={page.src}
                    alt={page.alt}
                    aria-hidden={index !== samplePage}
                  />
                ))}
                <img
                  className="cover-image"
                  src={coverImage}
                  alt="100,000 Whys: A Full-Color Illustrated Encyclopedia book cover"
                />
              </div>

              <div className="floating-note note-top">
                <Star size={15} fill="currentColor" /> Learn something
                surprising.
              </div>

              <button
                className={`floating-note note-previous page-turn-button ${samplePage >= 0 ? "is-visible" : ""}`}
                type="button"
                onClick={turnPageBack}
                aria-label="Turn back to the previous page"
                tabIndex={samplePage >= 0 ? 0 : -1}
              >
                <ArrowRight className="arrow-back" size={14} /> Previous page
              </button>

              <button
                className="floating-note note-bottom page-turn-button"
                type="button"
                onClick={turnPage}
                aria-label={samplePage < 0 ? "Open a sample page" : "Turn to the next sample page"}
              >
                {samplePage < 0
                  ? "Turn the page"
                  : samplePage < samplePages.length - 1
                    ? "Next page"
                    : "Close the book"}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="hero-scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </div>
        </section>

        <section
          className="trust-strip"
          aria-label="Why families choose the series"
        >
          <div className="container trust-items">
            <span>
              <BookOpen size={18} /> Question-led learning
            </span>
            <span>
              <FlaskConical size={18} /> Science made visual
            </span>
            <span>
              <Compass size={18} /> A universe to explore
            </span>
          </div>
        </section>

        <section id="books" className="books-section section-pad">
          <div className="container">
            <div className="section-intro section-intro-split">
              <div>
                <RibbonLabel>Meet the books</RibbonLabel>
                <h2>
                  Three books.<br />
                  <span>Countless discoveries.</span>
                </h2>
              </div>

              <p>
                Every child starts with questions. This series encourages them
                to keep asking, keep wondering, and keep discovering because
                one question can lead to a hundred more.
              </p>
            </div>

            <div className="volume-grid">
              <article
                id="book-1"
                className="volume-card volume-card-featured"
              >
                <div className="volume-card-art">
                  <img src={coverImage} alt="Volume 1 cover of 100,000 Whys" />
                  <span className="volume-number">01</span>
                </div>

                <div className="volume-card-copy">
                  <span className="eyebrow">Volume 1</span>
                  <h3>100,000 Whys for Kids</h3>

                  <p>
                    A visual journey through questions about science and nature,
                    the human body, technology, animals, space, and everyday
                    life — designed to make learning feel less like studying
                    and more like discovering something new.
                  </p>

                  <div className="volume-links">
                    <a className="inline-link" href="#book-1">
                      Explore Volume 1 <ArrowRight size={16} />
                    </a>

                    <a
                      className="inline-link"
                      href="https://www.amazon.com/100-000-Whys-Kids-Encyclopedia/dp/B0H2B1DH6L/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy on Amazon <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>

              <article
                id="book-2"
                className="volume-card volume-card-next"
              >
                <div className="volume-card-art art-collage">
                  <img
                    src={volume2Cover}
                    alt="Volume 2 cover of 100,000 Whys for Kids"
                  />
                  <span className="volume-number">02</span>
                  <span className="coming-soon">
                    100 completely new WHY questions
                  </span>
                </div>

                <div className="volume-card-copy">
                  <span className="eyebrow">Volume 2</span>

                  <h3>
                    More questions.<br />
                    More discoveries.
                  </h3>

                  <p>
                    The curiosity doesn't stop with Volume 1. Volume 2
                    introduces a completely new collection of questions and
                    discoveries through simple explanations and visual
                    learning.
                  </p>

                  <div className="volume-links">
                    <a className="inline-link" href="#book-2">
                      Explore Volume 2 <ArrowRight size={16} />
                    </a>

                    <a
                      className="inline-link"
                      href="https://www.amazon.com/gp/product/B0HC7ZKVSB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy on Amazon <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>

              <article
                id="book-3"
                className="volume-card volume-card-toddler"
              >
                <div className="volume-card-art">
                  <img
                    src={toddlersCover}
                    alt="100,000 Whys for Toddlers: First Wonders book cover"
                  />
                  <span className="volume-number">03</span>
                  <span className="coming-soon">For ages 2–6</span>
                </div>

                <div className="volume-card-copy">
                  <span className="eyebrow">Volume 3 · First Wonders</span>
                  <h3>100,000 Whys for Toddlers</h3>

                  <p>
                    A bright first encyclopedia for ages 2–6, with simple
                    questions about animals, space, weather, the body, and the
                    everyday things that go.
                  </p>

                  <div className="volume-links">
                    <a className="inline-link" href="#book-3">
                      Explore Volume 3 <ArrowRight size={16} />
                    </a>

                    <a
                      className="inline-link"
                      href="https://www.amazon.com/100000-Whys-Toddlers-Encyclopedia/dp/B0HG4BLDTH"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy on Amazon <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="encyclopedia"
          className="encyclopedia-section section-pad"
        >
          <div className="container encyclopedia-grid">
            <div className="encyclopedia-art-wrap">
              <div
                className="star-burst burst-one"
                aria-hidden="true"
              >
                <Star size={30} fill="currentColor" />
              </div>

              <div
                className="star-burst burst-two"
                aria-hidden="true"
              >
                <Sparkles size={27} />
              </div>

              <img
                className="encyclopedia-art"
                src={kidsArtwork}
                alt="Children exploring a glowing open encyclopedia in a garden observatory"
              />

              <div className="question-sticker">
                <span>WHY</span>
                <strong>?</strong>
              </div>
            </div>

            <div className="encyclopedia-copy">
              <RibbonLabel>Visual Whys Encyclopedia</RibbonLabel>

              <h2>
                Learning starts with a <span>question.</span>
              </h2>

              <p className="large-copy">
                The Visual Whys Encyclopedia is a growing collection built
                around one of the most powerful words in a child's vocabulary:{" "}
                <strong>WHY?</strong>
              </p>

              <div className="feature-list">
                <div>
                  <span className="feature-icon">
                    <Search size={19} />
                  </span>
                  <span>
                    <strong>See it. Ask it. Understand it.</strong> Questions,
                    explanations, and visuals make complicated ideas easier to
                    explore and remember.
                  </span>
                </div>

                <div>
                  <span className="feature-icon">
                    <Sparkles size={19} />
                  </span>
                  <span>
                    <strong>Built for curious minds.</strong> Whether a child
                    loves science, animals, space, history, technology, or
                    asking about everything, curiosity has somewhere to go.
                  </span>
                </div>

                <div>
                  <span className="feature-icon">
                    <BookOpen size={19} />
                  </span>
                  <span>
                    <strong>The collection keeps growing.</strong> Volume 1 →
                    Volume 2 → More curiosity coming.
                  </span>
                </div>
              </div>

              <a className="button button-ink" href="#elliott">
                Explore the Series <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="elliott" className="elliott-section section-pad">
          <div className="container elliott-grid">
            <div className="elliott-copy">
              <div className="eyebrow eyebrow-light">
                <Sparkles size={14} /> Elliott Wonder
              </div>

              <h2>
                Meet<br />
                <span>Elliott Wonder.</span>
              </h2>

              <p>
                Behind 100,000 Whys for Kids is Elliott Wonder who believes the
                best learning starts with a question.
              </p>

              <p>
                Elliott Wonder creates books for curious young readers who want
                to know how, why, and what if. Each book takes the questions
                children naturally ask and turns them into opportunities to
                explore, discover, and see the world in a new way.
              </p>

              <p>
                Because learning doesn’t have to end with an answer. Sometimes,
                the best answer is another question.
              </p>

              <a
                className="text-button text-button-light"
                href="#book-1"
              >
                Explore the Books <ArrowRight size={17} />
              </a>
            </div>

            <div className="elliott-portrait-wrap">
              <div className="portrait-halo" />

              <div className="portrait-card">
                <div
                  className="portrait-scene portrait-scene-photo"
                  aria-label="Portrait of Elliott Wonder"
                >
                  <img
                    src="/assets/elliott-wonder-portrait-transparent.png"
                    alt="Elliott Wonder"
                  />

                  <div className="portrait-photo-badge">
                    <Sparkles size={14} /> Ask why
                  </div>
                </div>

                <div className="portrait-caption">
                  <span>ELLIOTT WONDER</span>
                  <small>Curiosity is the co-author.</small>
                </div>
              </div>

              <div className="portrait-star portrait-star-one">
                <Star size={29} fill="currentColor" />
              </div>

              <div className="portrait-star portrait-star-two">
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="why-section section-pad">
          <div className="container why-inner">
            <div className="why-heading">
              <RibbonLabel>The idea behind the books</RibbonLabel>
              <h2>
                Why <span>100,000 Whys?</span>
              </h2>
            </div>

            <div className="why-content">
              <p className="why-lead">
                There’s something special about asking “why.”
              </p>

              <p>
                “100,000” isn’t meant to count or contain curiosity. It
                represents the endless possibilities that begin with a single
                question.
              </p>

              <p>
                One “why?” can lead to another, then another, opening the door
                to new ideas, new discoveries, and new ways of seeing the
                world.
              </p>

              <p className="why-slogan">
                <span>Keep asking.</span>{" "}
                <span>Keep exploring.</span>{" "}
                <span>Keep wondering.</span>
              </p>

              <a className="button button-sun" href="#books">
                Explore the Books <ArrowRight size={18} />
              </a>
            </div>

            <div className="why-image-wrap">
              <img
                src="/assets/why-100000-cover-style-art.jpg"
                alt="Curious child exploring the night sky with a telescope, surrounded by planets, a rocket, and nature"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-pad">
          <div className="container faq-grid">
            <div className="faq-intro">
              <RibbonLabel>Frequently Asked Questions</RibbonLabel>

              <h2>
                Questions<br />
                <span>worth asking.</span>
              </h2>

              <p>
                Find answers about the books, the Visual Whys Encyclopedia,
                Elliott Wonder, and the Curious Kids Club.
              </p>

              <a className="inline-link" href="#club">
                Join the Curious Kids Club <ArrowRight size={16} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} />
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="club" className="club-section section-pad">
          <div className="container club-card">
            <div className="club-stars" aria-hidden="true">
              <Star size={23} fill="currentColor" />
              <Sparkles size={24} />
              <Star size={14} fill="currentColor" />
            </div>

            <div className="club-copy">
              <RibbonLabel>Curious Kids Club</RibbonLabel>

              <h2>
                Join the Curious<br />
                <span>Kids Club.</span>
              </h2>

              <p>
                Curiosity doesn't have to end when the book closes. Sign up for
                occasional updates for parents, guardians, educators, and other
                adult readers who want to keep curiosity going.
              </p>
            </div>

            {submitted ? (
              <div className="success-panel">
                <span className="success-icon">
                  <Check size={23} />
                </span>

                <div>
                  <strong>You're in the Curious Kids Club.</strong>
                  <p>
                    Keep wondering. We'll send occasional questions, facts, and
                    updates.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  name="google-form-target"
                  style={{ display: "none" }}
                  title="Google Form submission"
                />

                <form
                  className="club-form"
                  action="https://docs.google.com/forms/d/e/1FAIpQLScuttWS6J9HqT1JWPfEsh_4jtRU5YpJiW-En4ej9EGnRVmm4Q/formResponse"
                  method="POST"
                  target="google-form-target"
                  onSubmit={handleSignup}
                >
                  <label htmlFor="first-name">
                    First name <span>(optional)</span>
                  </label>

                  <input
                    id="first-name"
                    name="entry.69055609"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Alex"
                  />

                  <label htmlFor="email">Your email address</label>

                  <input
                    id="email"
                    name="entry.295615469"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                  />

                  <button
                    className="button button-sun"
                    type="submit"
                  >
                    Join the Club <ArrowRight size={18} />
                  </button>

                  <small>
                    No need to provide information belonging to children. This
                    newsletter is intended for parents, guardians, educators,
                    and adult readers.
                  </small>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a
            className="brand-link"
            href="#top"
            aria-label="Back to top"
          >
            <BrandMark footer />
          </a>

          <p>Big questions. Simple answers. A world of curiosity.</p>

          <div className="footer-links">
            <a href="#books">Books</a>
            <a href="#encyclopedia">Visual Whys</a>
            <a href="#elliott">Elliott Wonder</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 100,000 Whys for Kids</span>
        </div>
      </footer>
    </div>
  );
}
