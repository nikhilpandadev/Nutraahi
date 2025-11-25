import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES } from '../constants';
import { CategoryItem } from '../types';
import { X } from 'lucide-react';

const Categories: React.FC = () => {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]?.id || '');
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Focus trap & ESC handling for modal
  useEffect(() => {
    if (!selectedItem) return;

    const prevActive = document.activeElement as HTMLElement | null;

    const modalNode = modalRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const focusable = modalNode ? (Array.from(modalNode.querySelectorAll(focusableSelector)) as HTMLElement[]) : ([] as HTMLElement[]);

    // Focus close button first
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        e.stopPropagation();
        return;
      }

      if (e.key === 'Tab') {
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      // restore focus
      try { prevActive?.focus(); } catch (e) {}
    };
  }, [selectedItem]);

  return (
    <section id="categories" className="py-16 bg-nutra-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-nutra-green">What we offer</h2>
          <p className="mt-3 text-gray-600">Tap a category to view items. Click an item for full details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tabs column (vertical on md+, horizontal scroll on mobile) */}
          <div className="col-span-1">
            <div
              className="hidden md:block sticky top-28"
              role="tablist"
              aria-orientation="vertical"
              onKeyDown={(e) => {
                const idx = CATEGORIES.findIndex((c) => c.id === activeCat);
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  const next = (idx + 1) % CATEGORIES.length;
                  setActiveCat(CATEGORIES[next].id);
                  tabRefs.current[next]?.focus();
                  e.preventDefault();
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                  const prev = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
                  setActiveCat(CATEGORIES[prev].id);
                  tabRefs.current[prev]?.focus();
                  e.preventDefault();
                } else if (e.key === 'Home') {
                  setActiveCat(CATEGORIES[0].id);
                  tabRefs.current[0]?.focus();
                  e.preventDefault();
                } else if (e.key === 'End') {
                  const last = CATEGORIES.length - 1;
                  setActiveCat(CATEGORIES[last].id);
                  tabRefs.current[last]?.focus();
                  e.preventDefault();
                }
              }}
            >
              <ul className="space-y-3">
                {CATEGORIES.map((cat, index) => (
                  <li key={cat.id}>
                    <button
                      ref={(el) => (tabRefs.current[index] = el)}
                      role="tab"
                      aria-selected={activeCat === cat.id}
                      aria-controls={`panel-${cat.id}`}
                      id={`tab-${cat.id}`}
                      onClick={() => setActiveCat(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-150 border ${
                        activeCat === cat.id ? 'bg-nutra-green text-white border-nutra-green' : 'bg-white text-gray-800 border-gray-100'
                      }`}
                    >
                      <span className="font-semibold block">{cat.title}</span>
                      <span className="text-xs text-gray-500">{cat.items.length} items</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile horizontal tabs */}
            <div className="md:hidden overflow-x-auto py-2">
              <div className="flex gap-3 px-1" role="tablist" aria-orientation="horizontal">
                {CATEGORIES.map((cat, index) => (
                  <button
                    key={cat.id}
                    ref={(el) => (tabRefs.current[index] = el)}
                    role="tab"
                    aria-selected={activeCat === cat.id}
                    aria-controls={`panel-${cat.id}`}
                    id={`tab-${cat.id}`}
                    onClick={() => setActiveCat(cat.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveCat(cat.id);
                        e.preventDefault();
                      }
                    }}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border ${
                      activeCat === cat.id ? 'bg-nutra-green text-white border-nutra-green' : 'bg-white text-gray-800 border-gray-200'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Items grid */}
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id={`panel-${activeCat}`} role="tabpanel" aria-labelledby={`tab-${activeCat}`}>
              {CATEGORIES.find((c) => c.id === activeCat)?.items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedItem(item)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedItem(item);
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="h-40 bg-gray-100 overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    {item.description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>}

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-700">{item.ingredients.slice(0, 3).join(', ')}{item.ingredients.length > 3 ? '…' : ''}</span>
                      <span className="text-sm text-gray-500">{item.calories} kcal</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <div className="absolute inset-0 bg-black opacity-40" onClick={() => setSelectedItem(null)} />

            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-auto max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`dialog-title-${selectedItem.id}`}
              ref={modalRef}
            >
              <div className="flex justify-end p-3">
                <button
                  ref={closeButtonRef}
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 pb-8">
                <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
                  <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
                </div>

                <h3 id={`dialog-title-${selectedItem.id}`} className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                {selectedItem.description && <p className="text-gray-600 mt-2">{selectedItem.description}</p>}

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Ingredients</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                      {selectedItem.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Nutrition</h4>
                    <div className="mt-2 text-sm text-gray-700">
                      <p><strong>Calories:</strong> {selectedItem.calories} kcal</p>
                      <p><strong>Protein:</strong> {selectedItem.nutrition.protein} g</p>
                      <p><strong>Carbs:</strong> {selectedItem.nutrition.carbs} g</p>
                      <p><strong>Fat:</strong> {selectedItem.nutrition.fat} g</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button onClick={() => setSelectedItem(null)} className="px-5 py-2 bg-nutra-green text-white rounded-lg">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
