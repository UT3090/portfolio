import { Splide, SplideSlide } from '@splidejs/react-splide';
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div id="About" className="mt-3">
        <h1>About Kurokawa, Who is</h1>
        <p>私は天才プログラマ、黒川唯人。<br /><br />ITのすべてを知り尽くした男。<br />私の辞書に不可能の二文字はない。</p>
        <Splide>
          <SplideSlide>
            <img src="image1.jpg" alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2"/>
          </SplideSlide>
        </Splide>
      </div>
    </Layout>
  );
};
