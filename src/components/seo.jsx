import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Your Home Maintenance Expert`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="noindex, follow" />

      <meta
        name="description"
        content="We offers expert AC Technicians, handymen, electricians, plumbers, painters, carpenters, and appliance care for all your home maintenance and repair needs."
      />
      <meta
        name="keywords"
        content="home maintenance, repair services, handyman, electrician, plumber, painter, carpenter, AC technician, appliance repair, Step by Step Services, home improvement, house repairs, fix home, property maintenance, home renovation, home remodeling, home repair, residential repairs, household services, home care, professional repairs, home renovation experts, home upgrade, maintenance experts, local handyman, electrical services, plumbing services, carpentry services, HVAC services, appliance services, home appliance repair, home appliance maintenance, home appliance installation, home appliance experts, home appliance specialists, residential electrician, residential plumbing, residential painting, residential carpentry, home renovation contractor, home repair contractor, property repair, property improvement, property renovation, home repair specialists, home improvement professionals, local home repair, local home improvement, local property maintenance, local home services, home repair company, home maintenance company, repair technicians, home service experts, reliable home repair, reliable home maintenance, quality home repair, quality home maintenance, affordable home repair, affordable home maintenance, emergency home repair, emergency repair services, repair professionals, experienced repair technicians, licensed repair technicians, insured repair technicians, certified repair technicians, skilled repair technicians, residential repair experts, residential maintenance, residential renovation, residential upgrade, residential remodeling, residential improvement, residential handyman services, home fix, repair specialists, home service professionals, skilled tradesmen, home repair specialists, property care, home assistance, house fixing, household maintenance, household repair, homecare services, home assistance, property services, property assistance, home technicians, residential repair company, residential maintenance company, property repair services, property maintenance services, residential remodeling services, residential renovation services, property improvement services, home renovation services, home improvement services, home repair services"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
