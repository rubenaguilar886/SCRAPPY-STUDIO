import { useSearchParams } from 'react-router-dom'
import PageShell, { PageHeader } from '../components/PageShell'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { categories } from '../data/categories'
import { getProjectsByCategory } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Proyectos() {
  usePageTitle('Proyectos')
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categoria')
  const visibleProjects = getProjectsByCategory(activeCategory)

  const setCategory = (slug: string | null) => {
    if (slug) setSearchParams({ categoria: slug })
    else setSearchParams({})
  }

  return (
    <PageShell>
      <PageHeader
        title="Casos reales, no mockups"
        subtitle="Cada demo de acá abajo es un sitio completo, hecho para un negocio real. Haz clic para verlo funcionando."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setCategory(null)}
            className={`text-xs sm:text-sm font-medium rounded-full px-3.5 py-1.5 transition-colors ${
              !activeCategory ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-900'
            }`}
          >
            Todos
          </button>
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={`text-xs sm:text-sm font-medium rounded-full px-3.5 py-1.5 transition-colors ${
                activeCategory === c.slug ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-900'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <p className="text-sm text-gray-500">Todavía no hay proyectos en esta categoría.</p>
        ) : (
          <div
            className={`grid grid-cols-1 gap-5 sm:gap-6 ${
              visibleProjects.length === 1
                ? 'max-w-2xl mx-auto'
                : visibleProjects.length === 2
                  ? 'sm:grid-cols-2 max-w-4xl mx-auto'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {visibleProjects.map(p => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>

      <CTASection />
    </PageShell>
  )
}
