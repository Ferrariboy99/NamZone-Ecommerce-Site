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

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory)
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
  }, [selectedCategory, sort])

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
          >
            ▦ Grid
          </button>
          <button
            type="button"
            className={view === 'list' ? 'active' : undefined}
            onClick={() => setView('list')}
          >
            ☰ List
          </button>
        </div>
      </header>

      <div className="products-page__filters glass-card">
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
        <div className="products-page__filter-group">
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

      <div className={`products-page__grid products-page__grid--${view}`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} layout={view} />
        ))}
      </div>
    </div>
  )
}
