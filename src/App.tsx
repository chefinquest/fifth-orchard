import { useMemo, useState } from 'react'
import './App.css'

type Product = {
  id: number
  name: string
  category: 'Outerwear' | 'Knitwear' | 'Dresses' | 'Accessories'
  price: number
  note: string
  art: 'coat' | 'sweater' | 'dress' | 'bag' | 'trouser' | 'scarf'
}

const products: Product[] = [
  { id: 1, name: 'Column Coat No. 5', category: 'Outerwear', price: 188, note: 'Long chalk stripe coat with orchard-panel seams.', art: 'coat' },
  { id: 2, name: 'Graphite Rib Sweater', category: 'Knitwear', price: 96, note: 'Boxy rib knit drawn with bright contour stitching.', art: 'sweater' },
  { id: 3, name: 'Market Dress in Moonblue', category: 'Dresses', price: 142, note: 'Soft A-line dress with hand-marked pleats.', art: 'dress' },
  { id: 4, name: 'Drafting Satchel', category: 'Accessories', price: 74, note: 'Canvas sling bag with sketchbook pockets.', art: 'bag' },
  { id: 5, name: 'Arc Trouser', category: 'Outerwear', price: 118, note: 'Wide leg trouser with architectural knee lines.', art: 'trouser' },
  { id: 6, name: 'Fifth Row Scarf', category: 'Accessories', price: 58, note: 'Long scarf marked like a loose storefront drawing.', art: 'scarf' },
]

const categories = ['All', 'Outerwear', 'Knitwear', 'Dresses', 'Accessories'] as const

type CategoryFilter = (typeof categories)[number]

function ClothingSketch({ type }: { type: Product['art'] }) {
  if (type === 'coat') {
    return (
      <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
        <path d="M92 55 C72 74 62 111 57 214 C86 227 194 227 224 214 C218 113 207 72 187 55" />
        <path d="M92 55 C113 69 166 70 187 55" />
        <path d="M116 65 C113 105 112 160 114 218" />
        <path d="M162 67 C167 118 169 176 166 219" />
        <path d="M101 79 C82 113 77 159 76 205" />
        <path d="M181 79 C202 112 207 159 205 205" />
        <path d="M132 71 C137 101 140 139 136 215" />
        <path d="M142 70 C148 110 151 153 150 217" />
        <path d="M66 220 C93 210 190 211 218 220" className="ghost-line" />
        <path d="M91 57 C106 49 173 48 188 57" className="fine-line" />
      </svg>
    )
  }
  if (type === 'sweater') {
    return (
      <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
        <path d="M86 76 C105 57 174 57 194 76 L230 118 L203 145 L190 119 L190 216 C157 229 118 228 86 216 L89 119 L75 145 L49 118 Z" />
        <path d="M113 67 C121 84 156 85 166 67" />
        <path d="M99 100 C130 108 159 107 183 100" />
        <path d="M107 119 C137 126 158 126 181 119" />
        <path d="M105 139 C136 146 159 145 181 139" />
        <path d="M103 160 C133 166 160 167 183 160" />
        <path d="M102 181 C136 188 158 187 183 181" />
        <path d="M90 214 C122 203 157 204 190 214" className="ghost-line" />
      </svg>
    )
  }
  if (type === 'dress') {
    return (
      <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
        <path d="M112 52 C123 64 159 64 170 52 C184 80 192 119 229 218 C185 233 96 232 52 218 C88 119 97 80 112 52 Z" />
        <path d="M119 61 C125 78 157 78 164 61" />
        <path d="M103 88 C126 98 158 97 180 88" />
        <path d="M111 93 C104 132 96 173 82 221" />
        <path d="M139 101 C137 142 137 181 135 225" />
        <path d="M168 93 C177 140 185 178 200 221" />
        <path d="M67 219 C103 209 185 209 216 219" className="ghost-line" />
      </svg>
    )
  }
  if (type === 'bag') {
    return (
      <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
        <path d="M72 101 C105 87 172 86 207 101 L221 211 C183 225 105 226 63 211 Z" />
        <path d="M104 101 C108 67 173 66 178 101" />
        <path d="M92 119 C123 129 164 129 194 119" />
        <path d="M83 143 C118 154 172 155 205 143" />
        <path d="M77 170 C116 181 176 181 211 170" />
        <path d="M101 207 C128 197 159 197 188 207" className="ghost-line" />
        <circle cx="98" cy="106" r="4" />
        <circle cx="181" cy="106" r="4" />
      </svg>
    )
  }
  if (type === 'trouser') {
    return (
      <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
        <path d="M90 54 C118 62 160 62 190 54 C199 100 206 158 222 219 C199 227 180 226 164 218 C157 169 150 122 142 82 C135 121 128 169 119 218 C101 226 82 227 59 219 C75 158 82 100 90 54 Z" />
        <path d="M94 72 C122 79 160 78 186 72" />
        <path d="M142 82 C141 132 140 179 139 223" />
        <path d="M102 91 C94 133 89 170 80 219" />
        <path d="M181 91 C188 135 195 177 203 220" />
        <path d="M69 219 C84 211 99 211 116 219" className="ghost-line" />
        <path d="M166 219 C183 211 201 211 216 219" className="ghost-line" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 280 260" aria-hidden="true" className="clothing-sketch">
      <path d="M71 73 C111 54 151 61 203 49 C213 65 214 89 201 105 C160 104 111 118 65 105 C56 94 57 81 71 73 Z" />
      <path d="M66 105 C104 132 166 115 207 120 C221 136 220 160 205 176 C160 166 108 186 65 167 C55 148 55 126 66 105 Z" />
      <path d="M70 168 C112 190 154 179 205 185 C212 203 206 218 190 225 C149 216 100 231 63 207 C55 191 57 177 70 168 Z" />
      <path d="M93 72 C96 88 99 98 106 111" />
      <path d="M171 53 C176 69 179 88 179 105" />
      <path d="M99 123 C101 141 104 157 111 174" />
      <path d="M174 122 C180 142 181 159 178 179" />
    </svg>
  )
}

function HandButton({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button className={`hand-button ${active ? 'active' : ''}`} onClick={onClick}>
      <svg viewBox="0 0 220 64" aria-hidden="true">
        <path d="M13 14 C52 8 164 10 204 15 C213 25 211 46 202 53 C153 59 64 57 17 51 C8 42 6 25 13 14 Z" />
        <path d="M16 17 C63 13 157 14 199 17" />
      </svg>
      <span>{children}</span>
    </button>
  )
}

function StorefrontSketch() {
  return (
    <svg className="storefront" viewBox="0 0 720 520" role="img" aria-label="Line drawing of the Fifth Orchard storefront">
      <path d="M78 396 L82 178 L192 107 L514 58 L584 123 L586 396 Z" />
      <path d="M192 107 L194 396" />
      <path d="M514 58 L514 394" />
      <path d="M82 178 L514 124 L586 123" />
      <path d="M113 390 C189 371 490 371 565 391" className="ghost-line" />
      <path d="M212 162 C231 145 264 146 283 162 L283 358 C262 369 234 369 212 358 Z" />
      <path d="M323 147 C344 129 379 130 399 147 L399 362 C376 372 344 371 323 361 Z" />
      <path d="M438 133 C459 112 496 114 518 132 L518 365 C491 375 462 374 439 364 Z" />
      <path d="M105 260 L178 249 L176 389 L105 391 Z" />
      <path d="M118 281 L163 276" />
      <path d="M121 311 L162 307" />
      <path d="M593 397 L670 418" />
      <path d="M53 399 L3 420" />
      <path d="M45 453 L679 453" />
      <path d="M238 392 C229 352 231 223 242 169" />
      <path d="M258 392 C249 352 250 221 263 166" />
      <path d="M347 392 C340 342 341 206 354 151" />
      <path d="M374 392 C366 342 369 204 382 151" />
      <path d="M466 392 C456 337 460 190 473 137" />
      <path d="M494 392 C486 331 491 187 504 135" />
      <path d="M155 217 L176 213 L177 236 L154 239 Z" />
      <text x="214" y="126">FIFTH</text>
      <text x="223" y="148">ORCHARD</text>
      <path d="M209 414 C228 399 261 400 280 414" />
      <path d="M335 414 C354 399 386 400 405 414" />
      <path d="M461 414 C481 399 514 400 534 414" />
      <path d="M200 433 L290 433" />
      <path d="M326 433 L414 433" />
      <path d="M452 433 L543 433" />
      <path d="M83 174 L16 224" className="dash" />
      <path d="M514 59 L661 43" className="dash" />
      <path d="M42 329 L3 338" className="dash" />
    </svg>
  )
}

function App() {
  const [filter, setFilter] = useState<CategoryFilter>('All')
  const [cart, setCart] = useState<Product[]>([])
  const [spotlight, setSpotlight] = useState(products[0])

  const filteredProducts = useMemo(() => {
    if (filter === 'All') return products
    return products.filter((product) => product.category === filter)
  }, [filter])

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="blueprint-page">
      <div className="paper-noise" />
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Fifth Orchard home">
          <span className="mark-box">V</span>
          <span>Fifth Orchard</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#shop">Shop</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#atelier">Atelier</a>
        </nav>
        <div className="cart-count" aria-label={`${cart.length} items in cart`}>{cart.length} in satchel</div>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">Mock collection / hand-drawn commerce study</p>
          <h1>Fifth Orchard</h1>
          <p className="hero-lede">
            A blue-screen boutique drawn in white pencil lines: architectural clothing,
            sketched storefronts, chalk-seam garments, and canvas-style buttons you can actually click.
          </p>
          <div className="button-row">
            <HandButton onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}>Shop new line</HandButton>
            <HandButton onClick={() => document.querySelector('#lookbook')?.scrollIntoView({ behavior: 'smooth' })}>Open lookbook</HandButton>
          </div>
          <div className="mini-ledger" aria-label="Brand details">
            <span>season: late harvest</span>
            <span>palette: computer blue + white graphite</span>
            <span>drop: 06 mocked pieces</span>
          </div>
        </div>
        <div className="hero-art sketch-panel">
          <StorefrontSketch />
        </div>
      </section>

      <section id="shop" className="shop-section">
        <div className="section-heading">
          <p className="eyebrow">Shop the mock rack</p>
          <h2>Garments as storefront drawings</h2>
          <p>All data is fictional; the browsing, filters, details, and cart interactions are real UI.</p>
        </div>

        <div className="category-strip" role="list" aria-label="Product filters">
          {categories.map((category) => (
            <HandButton key={category} active={filter === category} onClick={() => setFilter(category)}>{category}</HandButton>
          ))}
        </div>

        <div className="commerce-layout">
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card sketch-panel" key={product.id} onMouseEnter={() => setSpotlight(product)}>
                <div className="product-art"><ClothingSketch type={product.art} /></div>
                <div className="product-copy">
                  <p className="category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.note}</p>
                  <div className="product-actions">
                    <span className="price">${product.price}</span>
                    <HandButton onClick={() => setCart((items) => [...items, product])}>Add</HandButton>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-panel sketch-panel" aria-label="Cart panel">
            <p className="eyebrow">Satchel</p>
            <h2>{cart.length ? `${cart.length} item${cart.length === 1 ? '' : 's'}` : 'Empty for now'}</h2>
            <div className="cart-lines">
              {cart.length === 0 ? (
                <p>Tap an Add button and this rough-pencil receipt fills in.</p>
              ) : (
                cart.map((item, index) => (
                  <div className="cart-line" key={`${item.id}-${index}`}>
                    <span>{item.name}</span><strong>${item.price}</strong>
                  </div>
                ))
              )}
            </div>
            <div className="cart-total"><span>Subtotal</span><strong>${subtotal}</strong></div>
            <HandButton onClick={() => setCart([])}>Clear satchel</HandButton>
          </aside>
        </div>
      </section>

      <section id="lookbook" className="lookbook section-grid">
        <div className="sketch-panel spotlight-card">
          <div className="product-art large"><ClothingSketch type={spotlight.art} /></div>
          <div>
            <p className="eyebrow">Hovered spotlight</p>
            <h2>{spotlight.name}</h2>
            <p>{spotlight.note}</p>
          </div>
        </div>
        <div className="lookbook-copy">
          <p className="eyebrow">Lookbook notes</p>
          <h2>White-pencil silhouettes over computer blue.</h2>
          <p>
            The website treats every product card like a page from an architect's notebook: irregular borders,
            single white strokes, hand-rendered apparel SVGs, and buttons that look cut from the same canvas as the earlier pencil-button experiment.
          </p>
          <ul className="sketch-list">
            <li>Responsive storefront hero with dense perspective line art.</li>
            <li>Clickable product filters and add-to-cart mock checkout behavior.</li>
            <li>Blueprint texture, ruled grid, misregistered contour lines, and drawn labels.</li>
          </ul>
        </div>
      </section>

      <section id="atelier" className="atelier sketch-panel">
        <div>
          <p className="eyebrow">Atelier promise</p>
          <h2>Entirely fictional, fully browseable.</h2>
          <p>
            Fifth Orchard is a new mock clothing brand built only from local code and mock data. No stock photos, no remote assets, just React, CSS, and SVG line work.
          </p>
        </div>
        <div className="atelier-board" aria-hidden="true">
          <span>front elevation</span>
          <span>pleat markups</span>
          <span>receipt sketch</span>
          <span>white line / blue field</span>
        </div>
      </section>
    </main>
  )
}

export default App
