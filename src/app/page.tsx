"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// --- SVG Icons Components ---
const BurgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 4 5 4 9v1h16V9c0-4-4-7-8-7Z" />
    <path d="M4 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
    <path d="M4 16v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
  </svg>
);

const FriesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h16" />
    <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
    <path d="M8 10V4" />
    <path d="M12 10V2" />
    <path d="M16 10V4" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SkewerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <circle cx="12" cy="7" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="17" r="2" />
  </svg>
);

const CupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16l-3 16H7Z" />
    <path d="M9 4v16" />
    <path d="M15 4v16" />
    <path d="M14 2v2" />
    <path d="M10 2v2" />
  </svg>
);

const BeerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
    <path d="M9 12v6" />
    <path d="M13 12v6" />
    <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
    <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
  </svg>
);

const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

// --- Menu Data ---
const MENU_DATA = [
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    icon: <BurgerIcon />,
    items: [
      {
        id: "b1",
        name: "Doble Cheese Town",
        description: "Doble medallón de carne 120g, doble cheddar, lechuga capuchina, tomate, salsa secreta en pan brioche. Incluye papas sazonadas.",
        price: 8500,
        image: "/burger1.png"
      },
      {
        id: "b2",
        name: "Classic Town",
        description: "Medallón de carne 120g, queso cheddar, cebolla crispy, bacon ahumado y salsa barbacoa. Incluye papas sazonadas.",
        price: 7800,
        image: "/burger2.png"
      },
      {
        id: "b3",
        name: "Veggie Town",
        description: "Medallón plant-based, palta, espinaca, tomate asado y queso vegano en pan integral. Incluye papas sazonadas.",
        price: 8200,
        image: "/burger3.png"
      }
    ]
  },
  {
    id: "papas",
    title: "Papas Fritas",
    icon: <FriesIcon />,
    items: [
      {
        id: "s1",
        name: "Papas Town Clásicas",
        description: "Porción grande de papas fritas doradas y crujientes con sal marina.",
        price: 3500,
        image: "/fries1.png"
      }
    ]
  },
  {
    id: "especiales",
    title: "Especiales/Homenajes",
    icon: <StarIcon />,
    items: []
  },
  {
    id: "tapeo",
    title: "Tapeo",
    icon: <SkewerIcon />,
    items: []
  },
  {
    id: "bebidas_sin",
    title: "Bebidas sin alcohol",
    icon: <CupIcon />,
    items: []
  },
  {
    id: "bebidas_con",
    title: "Bebidas con alcohol",
    icon: <BeerIcon />,
    items: []
  }
];

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("hamburguesas");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Offset for mobile sticky sidebar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const addToCart = (e: React.MouseEvent, item: {id: string, name: string, price: number}) => {
    e.stopPropagation();
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id) {
        const newQ = i.quantity + delta;
        return newQ > 0 ? { ...i, quantity: newQ } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const cartTotalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const cartTotalPrice = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  return (
    <div className={styles.layout}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <Image src="/banner.png" alt="Banner background" fill className={styles.heroBackground} priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Image src="/logo.jpg" alt="Burger Town Logo" width={120} height={120} className={styles.heroLogo} />
          <h1 className={styles.heroTitle}>Burger Town</h1>
        </div>
      </header>

      <div className={styles.mainContainer}>
        {/* Sidebar */}
        <div className={styles.sidebarWrapper}>
          <nav className={styles.sidebar}>
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`${styles.sidebarItem} ${activeCategory === cat.id ? styles.active : ""}`}
              >
                <span className={styles.sidebarIcon}>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className={styles.content}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <div className={styles.searchInputWrapper}>
              <input type="text" placeholder="Buscar por productos" className={styles.searchInput} />
              <div className={styles.searchIcon}><SearchIcon /></div>
            </div>
            {/* Desktop Cart Button */}
            <button className={styles.cartButton} onClick={() => setIsCartOpen(true)}>
              <CartIcon />
              {cartTotalItems > 0 && <span className={styles.cartBadge}>{cartTotalItems}</span>}
            </button>
          </div>

          {/* Menu Sections */}
          {MENU_DATA.filter(cat => cat.items.length > 0).map((category) => (
            <section key={category.id} id={category.id} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>
                {category.icon} {category.title}
              </h2>
              <div className={styles.grid}>
                {category.items.map((item) => (
                  <article key={item.id} className={styles.card} onClick={(e) => addToCart(e, item)}>
                    <div className={styles.cardImageWrapper}>
                      <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.name}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                      <div className={styles.cardFooter}>
                        <span className={styles.cardPrice}>${item.price}</span>
                        <button className={styles.cardAddBtn}>
                          Agregar
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Mobile Floating Cart */}
      <button className={styles.mobileFloatingCart} onClick={() => setIsCartOpen(true)}>
        <CartIcon />
        {cartTotalItems > 0 && <span className={styles.cartBadge}>{cartTotalItems}</span>}
      </button>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className={styles.cartOverlay} onClick={(e) => {
          if (e.target === e.currentTarget) setIsCartOpen(false);
        }}>
          <div className={styles.cartModal}>
            <div className={styles.cartHeader}>
              <h2>Tu Pedido</h2>
              <button className={styles.closeCartBtn} onClick={() => setIsCartOpen(false)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            {/* Delivery Options Inside Cart */}
            <div className={styles.deliveryOptions}>
              <div 
                className={`${styles.deliveryOption} ${styles.active}`}
                style={{ flexDirection: 'row', justifyContent: 'center', gap: '12px' }}
              >
                <TruckIcon />
                <span style={{ fontSize: '1rem' }}>Envío a Domicilio</span>
              </div>
            </div>

            <div className={styles.cartItems}>
              {cartItems.length === 0 ? (
                <div className={styles.cartEmpty}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <p>Agrega productos a tu carrito para comenzar.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemInfo}>
                      <span className={styles.cartItemName}>{item.name}</span>
                      <span className={styles.cartItemPrice}>${item.price}</span>
                    </div>
                    <div className={styles.cartItemControls}>
                      <button className={styles.quantityBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className={styles.quantityBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className={styles.cartFooter}>
                <div className={styles.cartTotal}>
                  <span>Total a Pagar</span>
                  <span className={styles.cartTotalAmount}>${cartTotalPrice}</span>
                </div>
                <button className={styles.checkoutBtn}>
                  Continuar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
