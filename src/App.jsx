import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MenHome from './pages/men/MenHome';
import MenServices from './pages/men/MenServices';
import MenGallery from './pages/men/MenGallery';
import WomenHome from './pages/women/WomenHome';
import WomenServices from './pages/women/WomenServices';
import WomenGallery from './pages/women/WomenGallery';
import MakeupArtist from './pages/MakeupArtist';
import BridalPartyMakeup from './pages/BridalPartyMakeup';
import About from './pages/About';
import Team from './pages/Team';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<MenHome />} />
          <Route path="men/services" element={<MenServices />} />
          <Route path="men/gallery" element={<MenGallery />} />
          <Route path="women" element={<WomenHome />} />
          <Route path="women/services" element={<WomenServices />} />
          <Route path="women/gallery" element={<WomenGallery />} />
          <Route path="makeup-artist" element={<MakeupArtist />} />
          <Route path="bridal-party-makeup" element={<BridalPartyMakeup />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

