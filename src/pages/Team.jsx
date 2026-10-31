import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import SampleNotice from '../components/ui/SampleNotice';
import { WhatsAppButton } from '../components/ui/Buttons';
import TeamCard from '../components/cards/TeamCard';
import BookingCTA from '../components/sections/BookingCTA';
import { IMAGES } from '../config/images';
import { TEAM } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Team() {
  usePageMeta('Our Team', 'Meet the barbers, stylists, makeup artists and beauty therapists of OBARBA.');

  return (
    <>
      <PageHero
        kicker="Our Team"
        title={
          <>
            The Hands Behind <em>the Craft</em>
          </>
        }
        text="Barbers, stylists, makeup artists and beauty therapists who care about the details as much as you do."
        image={IMAGES.interiorStations}
        crumbs={[{ label: 'Our Team' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Meet the Team"
            title={
              <>
                Experts at <em>Your Service</em>
              </>
            }
            text="Every OBARBA professional shares the same approach: listen first, advise honestly and finish beautifully."
          />
          <SampleNotice className="sample-notice--center">
            Team profiles are placeholders — names, photos and bios will be added soon.
          </SampleNotice>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt section--compact">
        <div className="container join-band">
          <SectionHeading
            kicker="Careers"
            title={
              <>
                Join the <em>OBARBA</em> Team
              </>
            }
            text="Passionate about hair, grooming, beauty or makeup? We’d love to hear from you."
          />
          <WhatsAppButton variant="outline" message="Hello OBARBA, I’m interested in joining the team. Could you share details about current openings?">
            Careers Enquiry
          </WhatsAppButton>
        </div>
      </section>

      <BookingCTA image={IMAGES.interiorChair} />
    </>
  );
}
