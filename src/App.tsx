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
  { id: 1, name: 'Column Coat No. 5', category: 'Outerwear', price: 188, note: 'Long chalk-stripe coat built like a row of white storefront columns.', art: 'coat' },
  { id: 2, name: 'Graphite Rib Sweater', category: 'Knitwear', price: 96, note: 'Boxy rib knit with window-arch seams and hand-drawn contour rows.', art: 'sweater' },
  { id: 3, name: 'Market Dress in Moonblue', category: 'Dresses', price: 142, note: 'A-line market dress with awning pleats, sidewalk hems, and sketched panels.', art: 'dress' },
  { id: 4, name: 'Drafting Satchel', category: 'Accessories', price: 74, note: 'Canvas sling bag with facade pockets, pencil loops, and uneven chalk seams.', art: 'bag' },
  { id: 5, name: 'Arc Trouser', category: 'Outerwear', price: 118, note: 'Wide-leg trouser drawn as twin shopfront pilasters with curb-stone hems.', art: 'trouser' },
  { id: 6, name: 'Fifth Row Scarf', category: 'Accessories', price: 58, note: 'Long ribbon scarf marked like stacked lintels, alleys, and loose construction lines.', art: 'scarf' },
]

const categories = ['All', 'Outerwear', 'Knitwear', 'Dresses', 'Accessories'] as const
type CategoryFilter = (typeof categories)[number]

function HatchLines({ count = 18, x = 40, y = 60, width = 190, height = 150, slant = 16 }: { count?: number; x?: number; y?: number; width?: number; height?: number; slant?: number }) {
  return (
    <g className="micro-hatching">
      {Array.from({ length: count }).map((_, index) => {
        const yy = y + (height / Math.max(1, count - 1)) * index
        const wiggle = index % 2 === 0 ? 3 : -2
        return <path key={index} d={`M${x + wiggle} ${yy.toFixed(1)} C${x + width * .28} ${(yy - slant).toFixed(1)} ${x + width * .72} ${(yy + slant * .35).toFixed(1)} ${x + width} ${(yy - slant * .15).toFixed(1)}`} />
      })}
    </g>
  )
}

function ConstructionLines() {
  return (
    <g className="construction-lines">
      <path d="M14 232 L286 232" />
      <path d="M30 246 L270 246" />
      <path d="M58 258 L242 258" />
      <path d="M36 40 L8 20" />
      <path d="M264 42 L292 21" />
      <path d="M18 200 L-4 207" />
      <path d="M282 200 L304 207" />
    </g>
  )
}

function ClothingSketch({ type }: { type: Product['art'] }) {
  if (type === 'coat') {
    return (
      <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
        <ConstructionLines />
        <path className="facade-frame" d="M42 37 L258 37 L266 232 L34 232 Z" />
        <path d="M76 58 C59 83 51 125 45 220 C82 237 217 237 255 220 C249 124 240 83 223 58" />
        <path d="M77 58 C103 76 194 76 223 58" />
        <path d="M102 71 C99 106 97 170 101 226" />
        <path d="M197 71 C203 123 205 179 200 227" />
        <path d="M125 73 C126 114 126 171 123 227" />
        <path d="M151 74 C153 123 152 177 149 228" />
        <path d="M176 73 C179 122 181 179 176 228" />
        <path d="M66 102 C84 91 97 84 110 74" className="fine-line" />
        <path d="M234 102 C215 90 202 83 190 74" className="fine-line" />
        <path d="M86 96 C75 135 72 176 73 214" />
        <path d="M214 96 C225 135 229 177 227 214" />
        <path d="M88 58 L88 220" className="ghost-line" />
        <path d="M212 58 L212 220" className="ghost-line" />
        <HatchLines count={26} x={108} y={92} width={34} height={122} slant={7} />
        <HatchLines count={26} x={158} y={92} width={34} height={122} slant={7} />
        <path d="M55 226 C96 210 202 210 246 226" className="ghost-line" />
        <path d="M74 242 L226 242" />
        <path d="M94 252 L204 252" className="fine-line" />
      </svg>
    )
  }

  if (type === 'sweater') {
    return (
      <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
        <ConstructionLines />
        <path className="facade-frame" d="M35 48 L246 48 L270 229 L52 229 Z" />
        <path d="M78 78 C104 51 196 51 222 78 L270 125 L236 157 L218 126 L219 222 C178 239 122 239 80 222 L82 126 L63 157 L30 125 Z" />
        <path d="M112 65 C123 87 178 88 190 65" />
        <path d="M84 104 C121 116 184 116 216 104" />
        <path d="M91 126 C127 137 183 138 211 126" />
        <path d="M92 149 C131 160 181 160 211 149" />
        <path d="M90 172 C129 184 184 184 213 172" />
        <path d="M88 196 C130 208 184 209 216 196" />
        <path d="M80 221 C123 206 180 208 220 221" className="ghost-line" />
        <path d="M105 94 L105 218" className="fine-line" />
        <path d="M195 94 L195 218" className="fine-line" />
        <HatchLines count={22} x={111} y={100} width={78} height={108} slant={5} />
        <path d="M43 123 L15 113" className="dash" />
        <path d="M257 123 L287 113" className="dash" />
      </svg>
    )
  }

  if (type === 'dress') {
    return (
      <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
        <ConstructionLines />
        <path className="facade-frame" d="M45 43 L247 43 L276 231 L24 231 Z" />
        <path d="M112 47 C124 63 176 63 188 47 C202 83 214 123 270 224 C224 245 76 245 30 224 C86 123 98 83 112 47 Z" />
        <path d="M122 61 C131 82 169 82 178 61" />
        <path d="M99 92 C128 106 174 106 202 92" />
        <path d="M103 98 C91 136 77 180 58 229" />
        <path d="M131 103 C121 148 112 190 98 236" />
        <path d="M151 107 C149 151 149 192 150 237" />
        <path d="M170 103 C181 149 190 191 202 236" />
        <path d="M197 98 C211 138 224 181 242 229" />
        <HatchLines count={25} x={87} y={113} width={126} height={94} slant={9} />
        <path d="M44 224 C92 207 207 207 257 224" className="ghost-line" />
        <path d="M70 239 L232 239" />
      </svg>
    )
  }

  if (type === 'bag') {
    return (
      <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
        <ConstructionLines />
        <path className="facade-frame" d="M46 63 L252 63 L266 229 L33 229 Z" />
        <path d="M63 105 C101 88 199 88 237 105 L252 221 C205 241 95 241 48 221 Z" />
        <path d="M100 105 C105 56 195 55 201 105" />
        <path d="M116 105 C120 72 180 71 184 105" className="fine-line" />
        <path d="M80 126 C119 140 181 140 221 126" />
        <path d="M69 153 C113 168 189 168 232 153" />
        <path d="M61 183 C111 197 191 197 239 183" />
        <path d="M91 216 C127 204 174 204 210 216" className="ghost-line" />
        <path d="M96 137 L96 215" className="fine-line" />
        <path d="M204 137 L204 215" className="fine-line" />
        <HatchLines count={18} x={105} y={134} width={89} height={66} slant={5} />
        <circle cx="91" cy="111" r="4" />
        <circle cx="210" cy="111" r="4" />
        <path d="M39 102 L9 87" className="dash" />
        <path d="M260 102 L291 87" className="dash" />
      </svg>
    )
  }

  if (type === 'trouser') {
    return (
      <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
        <ConstructionLines />
        <path className="facade-frame" d="M48 39 L251 39 L266 233 L34 233 Z" />
        <path d="M87 51 C121 60 181 60 213 51 C223 103 232 163 253 226 C225 239 193 239 171 225 C162 173 154 121 148 78 C140 122 132 174 121 225 C98 239 67 239 39 226 C62 163 76 103 87 51 Z" />
        <path d="M91 72 C126 82 176 82 209 72" />
        <path d="M148 78 C148 132 148 180 148 232" />
        <path d="M104 91 C94 138 84 181 71 227" />
        <path d="M194 91 C205 140 215 182 224 228" />
        <path d="M118 85 C116 129 111 174 106 226" className="fine-line" />
        <path d="M180 85 C184 130 190 176 194 226" className="fine-line" />
        <HatchLines count={23} x={73} y={104} width={45} height={96} slant={4} />
        <HatchLines count={23} x={182} y={104} width={45} height={96} slant={4} />
        <path d="M52 226 C73 214 99 214 121 226" className="ghost-line" />
        <path d="M172 226 C197 214 224 214 246 226" className="ghost-line" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 300 280" aria-hidden="true" className="clothing-sketch dense">
      <ConstructionLines />
      <path className="facade-frame" d="M36 50 L260 50 L274 229 L27 229 Z" />
      <path d="M62 70 C107 46 166 58 233 43 C246 63 247 92 229 111 C179 110 115 127 56 111 C43 95 44 78 62 70 Z" />
      <path d="M55 111 C104 144 177 121 235 128 C253 146 250 178 229 192 C177 178 110 202 55 178 C40 156 40 132 55 111 Z" />
      <path d="M58 179 C109 207 168 193 229 201 C240 222 231 238 210 246 C158 235 99 250 51 222 C39 203 42 187 58 179 Z" />
      <path d="M91 70 C95 87 99 100 108 115" />
      <path d="M196 47 C204 68 206 91 204 111" />
      <path d="M101 130 C104 150 110 168 119 184" />
      <path d="M202 130 C211 151 211 172 205 194" />
      <HatchLines count={15} x={74} y={82} width={128} height={23} slant={4} />
      <HatchLines count={16} x={76} y={137} width={135} height={35} slant={4} />
      <HatchLines count={12} x={77} y={199} width={125} height={23} slant={4} />
    </svg>
  )
}

function HandButton({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button className={`hand-button ${active ? 'active' : ''}`} onClick={onClick}>
      <svg viewBox="0 0 240 70" aria-hidden="true">
        <path d="M12 16 C50 8 183 10 222 15 C235 25 234 49 222 58 C169 66 64 63 18 56 C6 44 5 27 12 16 Z" />
        <path d="M18 20 C66 14 170 16 218 20" />
        <path d="M19 52 C74 58 166 58 220 52" />
      </svg>
      <span>{children}</span>
    </button>
  )
}

function HeroStorefrontSketch() {
  return (
    <svg className="storefront dense-storefront" viewBox="0 0 820 620" role="img" aria-label="Detailed white pencil line drawing of the Fifth Orchard storefront">
      <g className="survey-lines">
        <path d="M35 455 L765 455" />
        <path d="M85 498 L710 498" />
        <path d="M132 535 L654 535" />
        <path d="M13 410 L119 379" />
        <path d="M703 382 L806 414" />
        <path d="M41 192 L173 112" className="dash" />
        <path d="M610 48 L780 28" className="dash" />
        <path d="M77 346 L9 358" className="dash" />
      </g>
      <path d="M98 431 L105 170 L231 88 L611 38 L695 116 L698 431 Z" />
      <path d="M231 88 L232 431" />
      <path d="M611 38 L612 430" />
      <path d="M105 170 L611 111 L695 116" />
      <path d="M231 88 L611 38 L695 116" />
      <path d="M124 183 L213 128 L214 424 L119 425 Z" className="fine-line" />
      <path d="M248 120 L588 75 L588 423 L248 424 Z" className="fine-line" />
      <path d="M118 257 L198 247 L196 426 L118 428 Z" />
      <path d="M135 282 L181 276" />
      <path d="M136 317 L180 312" />
      <path d="M139 352 L176 349" className="fine-line" />
      <path d="M158 219 L198 214 L199 239 L157 244 Z" />
      <text x="265" y="110">FIFTH</text>
      <text x="270" y="136">ORCHARD</text>
      <path d="M260 151 C286 129 332 130 356 151 L355 392 C330 407 286 408 260 393 Z" />
      <path d="M387 135 C414 109 467 112 491 135 L491 398 C463 412 415 411 387 397 Z" />
      <path d="M525 119 C553 88 608 91 637 119 L638 401 C607 417 555 416 526 400 Z" />
      {Array.from({ length: 21 }).map((_, index) => <path key={`left-hatch-${index}`} className="micro-hatching" d={`M282 ${166 + index * 10} C300 ${161 + index * 10} 322 ${160 + index * 10} 344 ${164 + index * 10}`} />)}
      {Array.from({ length: 23 }).map((_, index) => <path key={`mid-hatch-${index}`} className="micro-hatching" d={`M410 ${151 + index * 10} C430 ${145 + index * 10} 456 ${146 + index * 10} 480 ${151 + index * 10}`} />)}
      {Array.from({ length: 24 }).map((_, index) => <path key={`right-hatch-${index}`} className="micro-hatching" d={`M550 ${135 + index * 10} C572 ${128 + index * 10} 602 ${130 + index * 10} 626 ${136 + index * 10}`} />)}
      <path d="M292 151 C281 211 280 323 293 394" className="fine-line" />
      <path d="M327 151 C317 211 318 322 329 394" className="fine-line" />
      <path d="M423 136 C411 202 412 333 426 399" className="fine-line" />
      <path d="M461 136 C450 204 451 333 464 399" className="fine-line" />
      <path d="M564 120 C549 193 552 334 566 402" className="fine-line" />
      <path d="M608 120 C595 193 597 334 611 402" className="fine-line" />
      <path d="M94 431 C175 405 608 405 704 431" className="ghost-line" />
      <path d="M252 454 C281 434 332 435 361 454" />
      <path d="M389 454 C421 434 472 435 502 454" />
      <path d="M526 454 C560 433 610 434 645 454" />
      <path d="M244 477 L371 477" />
      <path d="M382 477 L510 477" />
      <path d="M518 477 L654 477" />
      <g className="cafe-lines">
        <path d="M208 456 L194 511" /><path d="M227 456 L240 511" /><path d="M185 482 L251 482" />
        <path d="M170 514 L264 514" /><path d="M188 514 L178 564" /><path d="M246 514 L260 564" />
        <path d="M92 470 C117 459 151 460 174 471" /><path d="M112 472 L101 544" /><path d="M153 472 L165 544" /><path d="M92 543 L174 543" />
        <path d="M660 468 C684 458 718 459 740 469" /><path d="M675 470 L665 540" /><path d="M723 470 L735 540" /><path d="M656 540 L744 540" />
        <path d="M586 502 L635 502" /><path d="M594 502 L582 558" /><path d="M625 502 L641 558" /><path d="M576 558 L649 558" />
      </g>
      <g className="curb-stones">
        {Array.from({ length: 13 }).map((_, i) => <path key={i} d={`M${430 + i * 21} 508 L${443 + i * 20} 532`} />)}
        <path d="M426 508 L704 508 L670 548 L395 548 Z" />
      </g>
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
            A blue-screen boutique redrawn as a dense white-pencil architectural plate: facade ribs,
            sidewalk chairs, construction marks, chalk-seam garments, and canvas-style controls.
          </p>
          <div className="button-row">
            <HandButton onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}>Shop new line</HandButton>
            <HandButton onClick={() => document.querySelector('#lookbook')?.scrollIntoView({ behavior: 'smooth' })}>Open lookbook</HandButton>
          </div>
          <div className="mini-ledger" aria-label="Brand details">
            <span>season: late harvest</span>
            <span>palette: computer blue + white graphite</span>
            <span>drop: 06 mocked pieces</span>
            <span>line density: facade study / storefront plate</span>
          </div>
        </div>
        <div className="hero-art sketch-panel architectural-plate">
          <HeroStorefrontSketch />
        </div>
      </section>

      <section id="shop" className="shop-section">
        <div className="section-heading">
          <p className="eyebrow">Shop the mock rack</p>
          <h2>Garments as storefront drawings</h2>
          <p>Each card is a miniature elevation: ruled frames, curb lines, ghost construction marks, hatching, and wearable facade forms.</p>
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

          <aside className="cart-panel sketch-panel receipt-plate" aria-label="Cart panel">
            <p className="eyebrow">Satchel</p>
            <h2>{cart.length ? `${cart.length} item${cart.length === 1 ? '' : 's'}` : 'Empty for now'}</h2>
            <div className="cart-lines">
              {cart.length === 0 ? (
                <p>Tap Add and this chalk receipt fills in like a storefront order slip.</p>
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
        <div className="sketch-panel spotlight-card architectural-plate">
          <div className="product-art large"><ClothingSketch type={spotlight.art} /></div>
          <div>
            <p className="eyebrow">Hovered spotlight</p>
            <h2>{spotlight.name}</h2>
            <p>{spotlight.note}</p>
          </div>
        </div>
        <div className="lookbook-copy">
          <p className="eyebrow">Lookbook notes</p>
          <h2>White pencil, no empty surfaces.</h2>
          <p>
            This pass pushes the site closer to the reference: stacked perspective lines, uneven facade geometry,
            repeated vertical ribs, dense interior hatching, patio furniture, curbs, sidewalks, and imperfect hand strokes.
          </p>
          <ul className="sketch-list">
            <li>Hero storefront now has architectural depth, street furniture, curb stones, and construction marks.</li>
            <li>Product art now uses dense hatching, frames, sidewalk baselines, and garment-as-building silhouettes.</li>
            <li>Real filters and cart behavior remain semantic clickable UI, not static illustration.</li>
          </ul>
        </div>
      </section>

      <section id="atelier" className="atelier sketch-panel architectural-plate">
        <div>
          <p className="eyebrow">Atelier promise</p>
          <h2>Fictional store. Fully browseable sketch.</h2>
          <p>
            Fifth Orchard is still local code and mock data only, but the visual system now behaves like a detailed facade drawing translated into a clothing shop.
          </p>
        </div>
        <div className="atelier-board" aria-hidden="true">
          <span>front elevation</span>
          <span>pleat markups</span>
          <span>receipt sketch</span>
          <span>curb / stool / panel detail</span>
        </div>
      </section>
    </main>
  )
}

export default App
