import { useMemo, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { categories, products } from '../data/products'
import './ProductsPage.css'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating', value: 'rating' },
]

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sort, setSort] = useState<string>('featured')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory)
    }

    const normalizedQuery = search.trim().toLowerCase()

    if (normalizedQuery) {
      result = result.filter((product) => {
        const haystack = `${product.name} ${product.description} ${product.brand}`.toLowerCase()
        return haystack.includes(normalizedQuery)
      })
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        result = result
    }

    return result
  }, [search, selectedCategory, sort])

  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSort('featured')
    setSearch('')
  }

  const resultCount = filteredProducts.length
  const resultLabel = resultCount === 1 ? 'product' : 'products'
  const hasActiveFilters =
    selectedCategory !== 'All' || sort !== 'featured' || search.trim().length > 0

  return (
    <div className="products-page">
      <header className="products-page__header">
        <div>
          <p className="tag">Curated marketplace</p>
          <h1>Elevated essentials for every moment</h1>
          <p>
            Browse a dynamic assortment of premium goods across categories. Filter by what matters
            most and find your next favorite piece.
          </p>
        </div>
        <div className="products-page__view">
          <button
            type="button"
            className={view === 'grid' ? 'active' : undefined}
            onClick={() => setView('grid')}
            aria-pressed={view === 'grid'}
          >
            ▦ Grid
          </button>
          <button
            type="button"
            className={view === 'list' ? 'active' : undefined}
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
          >
            ☰ List
          </button>
        </div>
      </header>

      <div className="products-page__filters glass-card">
        <div className="products-page__filter-row">
          <div className="products-page__filter-group">
            <span>Category</span>
            <div className="products-page__chips">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === selectedCategory ? 'active' : undefined}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="products-page__filter-group products-page__filter-group--select">
            <label htmlFor="sort">Sort by</label>
            <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="products-page__search-group">
          <label htmlFor="product-search">Search inventory</label>
          <div className="products-page__search-control">
            <span aria-hidden="true">🔍</span>
            <input
              id="product-search"
              type="search"
              placeholder="Try “modular sofa” or “wireless charger”"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <button
                type="button"
                className="products-page__clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="products-page__results">
        <span className="tag">
          {selectedCategory === 'All' ? 'All collections' : selectedCategory} · {resultCount} {resultLabel}
        </span>
        {hasActiveFilters && (
          <button type="button" className="products-page__reset" onClick={handleResetFilters}>
            Reset filters
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className={`products-page__grid products-page__grid--${view}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout={view} />
          ))}
        </div>
      ) : (
        <div className="products-page__empty glass-card">
          <h2>No products found</h2>
          <p>Try adjusting your search or explore a different category to discover fresh arrivals.</p>
          <button type="button" className="btn btn--ghost" onClick={handleResetFilters}>
            Reset search
          </button>
        </div>
      )}
    </div>
  )
}
