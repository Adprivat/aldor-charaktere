import HeroSection from './HeroSection';
import AppearanceSection from './AppearanceSection';
import EstateSection from './EstateSection';
import EstateRoomsSection from './EstateRoomsSection';
import WorkshopSection from './WorkshopSection';
import WealthSection from './WealthSection';
import RelationshipSection from './RelationshipSection';

export default function PageSections() {
  return (
    <>
      <HeroSection />
      <AppearanceSection />
      <WorkshopSection />
      <EstateSection />
      <EstateRoomsSection />
      <WealthSection />
      <RelationshipSection />
    </>
  );
}
