import { Splide, SplideSlide } from '@splidejs/react-splide';
import Layout from "../components/Layout";
import Setting from '../setting';

import '@splidejs/splide/css';

export default function AboutPage() {
  return (
    <Layout>
      <div id="About" className="mt-3">
        <h1>About Kurokawa, Who is</h1>
        <p>私は天才プログラマ、黒川唯人。<br /><br />ITのすべてを知り尽くした男。<br />私の辞書に不可能の二文字はない。</p>
        <Splide
          aria-label="私のお気に入りの画像集"
          options={{
            autoplay: true,
            interval: 3000,
          }}
          className="mt-5"
        >
          {
            Setting.myPics.map((pic, index) => (
              <SplideSlide key={index}>
                <img src={pic} alt='My photos' />
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </Layout>
  );
};
