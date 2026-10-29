import TopBar from '../components/TopBar'
import HeroBenefits from '../components/HeroBenefits'
import { RollBtn } from '../components/ui'
import ProductTabs from '../components/ProductTabs'
import ProcesoSection from '../components/ProcesoSection'
import FAQAccordion from '../components/FAQAccordion'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useModal } from '../context/ModalContext'

function Hero() {
  const { openContactModal } = useModal()
  return (
    <section
      className="relative flex flex-col overflow-hidden h-[520px] md:h-[620px]"
      style={{
        paddingTop: 'var(--site-header-h, 0px)',
        background:
          'radial-gradient(circle at 72% 22%, rgba(255,255,255,0.4), transparent 42%), ' +
          'radial-gradient(circle at 12% 88%, rgba(236,72,153,0.55), transparent 45%), ' +
          'linear-gradient(140deg, #4C1D95 0%, #6D28D9 25%, #7C3AED 45%, #4F46E5 65%, #22D3EE 90%, #67E8F9 100%)',
      }}
    >
      <div className="relative z-20 flex-1 flex items-center justify-center text-center px-5 sm:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <h1
            className="font-medium text-white leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
          >
            Somos tu socio estratégico digital.
          </h1>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8 sm:mb-10">
            Tiendas online y landing pages para negocios en Perú.
            <br className="hidden sm:block" /> Entendemos tu negocio y construimos lo que necesita.
          </p>

          <div className="flex items-center justify-center">
            <RollBtn
              onClick={openContactModal}
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm pl-5 sm:pl-6 pr-2 py-2"
              arrowBg="bg-[#7C3AED]"
              arrowColor="text-white"
            >
              Escríbenos por WhatsApp
            </RollBtn>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-white/85">
            Landing desde S/800 · Tienda online desde S/2,600 · precios con IGV
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  const preview = projects.slice(0, 4)
  return (
    <section
      id="proyectos"
      className="pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-white border-t border-gray-100"
      style={{ scrollMarginTop: 'var(--site-header-h, 76px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-2 mb-10 sm:mb-14">
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)' }}
          >
            Últimos proyectos...
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12 ${
            preview.length === 1
              ? 'max-w-2xl mx-auto'
              : preview.length === 2
                ? 'sm:grid-cols-2 max-w-6xl mx-auto'
                : preview.length === 3
                  ? 'sm:grid-cols-2 lg:grid-cols-3'
                  : 'sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {preview.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TopBar />
      <HeroBenefits />
      <ProcesoSection />
      <ProjectsPreview />
      <TopBar messages={['30% de adelanto']} />
      <ProductTabs />
      <FAQAccordion />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}


